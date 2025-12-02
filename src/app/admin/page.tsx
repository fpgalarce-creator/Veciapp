"use client";

import { useMemo, useState } from "react";
import { ArrowRight, BadgeCheck, BarChart3, CheckCircle2, Clock3, ShieldCheck, Users2, X } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { useAppContext } from "@/context/AppContext";
import { pymes } from "@/data/pymes";
import { professionals } from "@/data/professionals";

export default function AdminPage() {
  const { tasks, applications, updateApplicationStatus } = useAppContext();
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const stats = useMemo(() => {
    const tasksWithApplications = tasks.map((task) => ({
      task,
      applications: applications.filter((app) => app.taskId === task.id),
    }));

    const totalApplications = applications.length;
    const pending = applications.filter((app) => app.status === "pending").length;
    const accepted = applications.filter((app) => app.status === "accepted").length;

    return {
      tasksWithApplications,
      totalTasks: tasks.length,
      totalApplications,
      pending,
      accepted,
      activePymes: pymes.length,
      professionals: professionals.length,
    };
  }, [applications, tasks]);

  const selectedTask = stats.tasksWithApplications.find((item) => item.task.id === selectedTaskId);

  const handleDecision = (applicationId: string, status: "accepted" | "rejected") => {
    updateApplicationStatus(applicationId, status);
  };

  return (
    <div className="space-y-8">
      <SectionTitle
        title="Panel admin (demo)"
        subtitle="Estructura lista para conectar con backend y operar en modo premium galaxia"
      />

      <div className="relative overflow-hidden rounded-[28px] bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-emerald-400/15" aria-hidden />
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-highlight">Panel de administración</p>
            <h2 className="text-2xl font-bold text-white">Visión ejecutiva</h2>
            <p className="text-white/75">Indicadores listos para enchufar a APIs reales.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/20">
            <ShieldCheck className="h-4 w-4 text-emerald-300" /> Demo segura
          </span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <div className="card-premium flex flex-col gap-2">
          <p className="text-xs uppercase tracking-wide text-white/70">Usuarios</p>
          <p className="text-3xl font-bold text-white">2.1K</p>
          <p className="text-sm text-white/70">Cuentas verificadas</p>
          <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/20">
            <Users2 className="h-4 w-4 text-highlight" /> Ver usuarios
          </button>
        </div>
        <div className="card-premium flex flex-col gap-2">
          <p className="text-xs uppercase tracking-wide text-white/70">Servicios</p>
          <p className="text-3xl font-bold text-white">{stats.totalTasks}</p>
          <p className="text-sm text-white/70">{stats.pending} pendientes</p>
          <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/20">
            <ArrowRight className="h-4 w-4 text-highlight" /> Ver servicios
          </button>
        </div>
        <div className="card-premium flex flex-col gap-2">
          <p className="text-xs uppercase tracking-wide text-white/70">Profesionales</p>
          <p className="text-3xl font-bold text-white">{stats.professionals}</p>
          <p className="text-sm text-white/70">Con badges y reseñas</p>
          <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/20">
            <ArrowRight className="h-4 w-4 text-highlight" /> Ver profesionales
          </button>
        </div>
        <div className="card-premium flex flex-col gap-2">
          <p className="text-xs uppercase tracking-wide text-white/70">PYMEs</p>
          <p className="text-3xl font-bold text-white">{stats.activePymes}</p>
          <p className="text-sm text-white/70">Con vitrina vecinal</p>
          <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/20">
            <ArrowRight className="h-4 w-4 text-highlight" /> Ver PYMEs
          </button>
        </div>
        <div className="card-premium flex flex-col gap-2">
          <p className="text-xs uppercase tracking-wide text-white/70">Publicidad / destacados</p>
          <p className="text-3xl font-bold text-white">12</p>
          <p className="text-sm text-white/70">Banners listos para rotar</p>
          <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/20">
            <ArrowRight className="h-4 w-4 text-highlight" /> Gestionar
          </button>
        </div>
        <div className="card-premium flex flex-col gap-3">
          <p className="text-xs uppercase tracking-wide text-white/70">Estadísticas</p>
          <div className="space-y-2">
            {[60, 42, 78, 54].map((value, index) => (
              <div key={index} className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-highlight via-primary to-emerald-400" style={{ width: `${value}%` }} />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-white/70">
            <BarChart3 className="h-4 w-4 text-highlight" /> Embudo de conversión demo
          </div>
        </div>
      </div>

      <div className="section-card space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-2xl font-semibold text-white">Tareas con postulaciones</h2>
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/10">
            {stats.pending} pendientes
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {stats.tasksWithApplications.map(({ task, applications: taskApps }) => {
            const accepted = taskApps.find((app) => app.status === "accepted");

            return (
              <article
                key={task.id}
                className="card-premium flex flex-col gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/70">{task.category}</p>
                    <h3 className="text-lg font-semibold text-white">{task.title}</h3>
                    <p className="text-sm text-white/70">{task.sector}</p>
                    {accepted ? (
                      <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-50 ring-1 ring-emerald-400/30">
                        <CheckCircle2 className="h-4 w-4" /> Veci seleccionado: {accepted.applicantName}
                      </span>
                    ) : null}
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
                    {taskApps.length} postulaciones
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-white/70">
                  <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">{task.status}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">{task.datetime}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">{task.priceRange}</span>
                </div>
                <button
                  onClick={() => setSelectedTaskId(task.id)}
                  className="inline-flex items-center gap-2 rounded-full bg-highlight px-4 py-2 text-sm font-semibold text-brand-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-highlight/90"
                >
                  Ver postulaciones
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {selectedTask ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/70 p-4 pt-10 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900/95 p-6 shadow-2xl ring-1 ring-white/10">
            <button
              onClick={() => setSelectedTaskId(null)}
              className="absolute right-3 top-3 rounded-full bg-white/5 p-2 text-white/70 ring-1 ring-white/10 transition hover:bg-white/10"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/70">{selectedTask.task.category}</p>
                <h3 className="text-xl font-semibold text-white">{selectedTask.task.title}</h3>
                <p className="text-sm text-white/70">{selectedTask.task.sector}</p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white ring-1 ring-white/10">
                <BadgeCheck className="h-4 w-4 text-primary" /> {selectedTask.task.status}
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {selectedTask.applications.length === 0 ? (
                <p className="text-sm text-white/70">Aún no hay postulaciones para esta tarea.</p>
              ) : (
                selectedTask.applications.map((application) => (
                  <div
                    key={application.id}
                    className="flex flex-col gap-2 rounded-2xl bg-white/5 p-3 text-sm text-white/80 ring-1 ring-white/10 md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <p className="text-base font-semibold text-white">{application.applicantName}</p>
                      <p className="text-white/70">{application.applicantNote}</p>
                      <p className="text-[11px] text-white/60">{new Date(application.createdAt).toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                          application.status === "pending"
                            ? "bg-amber-400/10 text-amber-100 ring-amber-300/40"
                            : application.status === "accepted"
                              ? "bg-emerald-400/15 text-emerald-100 ring-emerald-300/40"
                              : "bg-red-400/10 text-red-100 ring-red-300/40"
                        }`}
                      >
                        {application.status === "pending"
                          ? "Pendiente"
                          : application.status === "accepted"
                            ? "Aceptado"
                            : "Rechazado"}
                      </span>
                      <button
                        onClick={() => handleDecision(application.id, "accepted")}
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-400/80 px-3 py-2 text-xs font-semibold text-brand-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-emerald-300"
                      >
                        <ShieldCheck className="h-4 w-4" /> Aceptar
                      </button>
                      <button
                        onClick={() => handleDecision(application.id, "rejected")}
                        className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-2 text-xs font-semibold text-red-50 ring-1 ring-red-400/40 transition hover:-translate-y-0.5 hover:bg-red-500/30"
                      >
                        <Clock3 className="h-4 w-4" /> Rechazar
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
