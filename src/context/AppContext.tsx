"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { services, type Service } from "@/data/services";

export type ApplicationStatus = "pending" | "accepted" | "rejected";

export type Application = {
  id: string;
  taskId: Service["id"];
  applicantName: string;
  applicantNote?: string;
  status: ApplicationStatus;
  createdAt: string;
};

export type ThemeOption = "light" | "dark" | "galaxy";

export type Location = {
  city: string;
  villa: string;
};

type SessionData = {
  name?: string;
  email?: string;
  role?: "user" | "admin";
};

type AppContextValue = {
  theme: ThemeOption;
  setTheme: (theme: ThemeOption) => void;
  location: Location;
  setLocation: (location: Location) => void;
  session: SessionData | null;
  login: (session: SessionData) => void;
  logout: () => void;
  tasks: Service[];
  applications: Application[];
  applyToTask: (taskId: Service["id"], applicantName: string, applicantNote?: string) => Application;
  updateApplicationStatus: (applicationId: string, status: ApplicationStatus) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

const defaultLocation: Location = {
  city: "Rancagua",
  villa: "Villa Triana",
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeOption>(() => {
    if (typeof window === "undefined") return "galaxy";
    return (localStorage.getItem("veciapp-theme") as ThemeOption | null) ?? "galaxy";
  });
  const [location, setLocationState] = useState<Location>(() => {
    if (typeof window === "undefined") return defaultLocation;
    const storedLocation = localStorage.getItem("veciapp-location");
    if (storedLocation) {
      try {
        return JSON.parse(storedLocation) as Location;
      } catch (error) {
        console.error("Error parsing location", error);
      }
    }
    return defaultLocation;
  });
  const [session, setSession] = useState<SessionData | null>(() => {
    if (typeof window === "undefined") return null;
    const storedSession = localStorage.getItem("veciapp-session");
    if (storedSession) {
      try {
        return JSON.parse(storedSession) as SessionData;
      } catch (error) {
        console.error("Error parsing session", error);
      }
    }
    return null;
  });
  const [tasks] = useState<Service[]>(services);
  const [applications, setApplications] = useState<Application[]>(() => [
    {
      id: "app-1",
      taskId: services[0].id,
      applicantName: "Valentina R.",
      applicantNote: "Vivo a 4 cuadras y tengo experiencia en este tipo de tareas.",
      status: "pending",
      createdAt: new Date().toISOString(),
    },
    {
      id: "app-2",
      taskId: services[2].id,
      applicantName: "Luis S.",
      applicantNote: "Técnico certificado, puedo pasar mañana en la tarde.",
      status: "accepted",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    },
    {
      id: "app-3",
      taskId: services[4].id,
      applicantName: "Natalia P.",
      applicantNote: "Tengo herramientas propias y referencias.",
      status: "rejected",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    },
  ]);

  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark", "theme-galaxy");
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem("veciapp-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("veciapp-location", JSON.stringify(location));
  }, [location]);

  const setTheme = (value: ThemeOption) => setThemeState(value);
  const setLocation = (value: Location) => setLocationState(value);

  const login = (data: SessionData) => {
    const sessionData = { role: "user" as const, ...data };
    setSession(sessionData);
    localStorage.setItem("veciapp-session", JSON.stringify(sessionData));
  };

  const logout = () => {
    setSession(null);
    localStorage.removeItem("veciapp-session");
  };

  const applyToTask = useCallback(
    (taskId: Service["id"], applicantName: string, applicantNote?: string) => {
      const newApplication: Application = {
        id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `app-${Date.now()}`,
        taskId,
        applicantName,
        applicantNote,
        status: "pending",
        createdAt: new Date().toISOString(),
      };

      setApplications((prev) => [newApplication, ...prev]);
      return newApplication;
    },
    [],
  );

  const updateApplicationStatus = useCallback((applicationId: string, status: ApplicationStatus) => {
    setApplications((prev) => prev.map((app) => (app.id === applicationId ? { ...app, status } : app)));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      location,
      setLocation,
      session,
      login,
      logout,
      tasks,
      applications,
      applyToTask,
      updateApplicationStatus,
    }),
    [theme, location, session, tasks, applications, applyToTask, updateApplicationStatus],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return ctx;
};
