"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

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

  const value = useMemo(
    () => ({ theme, setTheme, location, setLocation, session, login, logout }),
    [theme, location, session],
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
