"use client";

import { FC, useMemo, useState } from "react";
import { Service, ServiceStatus } from "@/data/services";
import { useAppContext } from "@/context/AppContext";
import { CheckCircle2, ImageIcon, ImageOff, Send, User, X } from "lucide-react";

const statusStyles: Record<ServiceStatus, string> = {
  Pendiente: "bg-amber-500/15 text-amber-100 ring-1 ring-amber-400/30",
  "En curso": "bg-sky-500/15 text-sky-100 ring-1 ring-sky-400/30",
  Completado: "bg-emerald-500/15 text-emerald-100 ring-1 ring-emerald-400/30",
};

const ServiceCard: FC<{ service: Service }> = ({ service }) => {
  const { session, applications, applyToTask } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [applicantNote, setApplicantNote] = useState("");
  const [justApplied, setJustApplied] = useState(false);

  const taskApplications = useMemo(
    () => applications.filter((app) => app.taskId === service.id),
    [applications, service.id],
  );

  const acceptedApplication = taskApplications.find((app) => app.status === "accepted");

  const handleApply = () => {
    applyToTask(service.id, session?.name ?? "Veci demo", applicantNote);
    setApplicantNote("");
    setShowModal(false);
    setJustApplied(true);
    setTimeout(() => setJustApplied(false), 3200);
  };

  return (
    <article className="card-premium flex h-full min-h-[340px] flex-col gap-4 overflow-hidden">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-white/70">{service.category}</p>
          <h3 className="max-w-[680px] text-2xl font-semibold leading-tight text-white">{service.title}</h3>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15">
            <User className="h-4 w-4" /> 📍 Publicado por {service.postedBy}
          </div>
          {acceptedApplication ? (
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-50 ring-1 ring-emerald-400/30">
              <CheckCircle2 className="h-4 w-4" /> Veci seleccionado: {acceptedApplication.applicantName}
            </div>
          ) : null}
          {justApplied && (
            <div className="inline-flex items-center gap-2 rounded-full bg-highlight/20 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
              <Send className="h-4 w-4" /> Postulación enviada
            </div>
          )}
        </div>
        <span className={`badge ${statusStyles[service.status]} text-xs`}>{service.status}</span>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="grid gap-3 md:grid-cols-[1.05fr_0.95fr]">
          <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
            <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
              <p className="font-semibold text-white">Sector</p>
              <p>{service.sector}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
              <p className="font-semibold text-white">Fecha / hora</p>
              <p>{service.datetime}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
              <p className="font-semibold text-white">Rango</p>
              <p>{service.priceRange}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
              <p className="font-semibold text-white">Estado</p>
              <p className="text-sm">{service.status}</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 via-white/0 to-white/5 ring-1 ring-white/10">
            {service.image ? (
              <div
                className="h-full min-h-[180px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
                role="img"
                aria-label={service.title}
              />
            ) : (
              <div className="flex h-full min-h-[180px] flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 text-white/70">
                <ImageOff className="h-10 w-10" />
                <p className="text-sm">Espacio reservado para fotos de la tarea</p>
              </div>
            )}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), transparent 60%)" }}
              aria-hidden
            />
          </div>
        </div>
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-1">
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-brand-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-emerald-300"
        >
          <Send className="h-4 w-4" /> Postular ahora
        </button>
        {session?.role === "admin" && (
          <div className="flex gap-2 text-xs font-semibold text-white">
            <button
              onClick={() => console.log("Editar servicio", service.id)}
              className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Editar
            </button>
            <button
              onClick={() => console.log("Eliminar servicio", service.id)}
              className="rounded-full bg-red-500/15 px-3 py-2 text-red-100 ring-1 ring-red-400/30 transition hover:-translate-y-0.5 hover:bg-red-500/25"
            >
              Eliminar
            </button>
          </div>
        )}
      </div>

      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl bg-slate-900/95 p-6 shadow-2xl ring-1 ring-white/10">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-3 top-3 rounded-full bg-white/5 p-2 text-white/70 ring-1 ring-white/10 transition hover:bg-white/10"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-highlight ring-1 ring-white/10">
                <ImageIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60">Postular a</p>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-white" htmlFor={`note-${service.id}`}>
                ¿Por qué eres buen veci para esta tarea?
              </label>
              <textarea
                id={`note-${service.id}`}
                value={applicantNote}
                onChange={(e) => setApplicantNote(e.target.value)}
                className="w-full min-h-[120px] rounded-2xl bg-white/5 px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/50 focus:outline-none"
                placeholder="Cuenta tu experiencia, disponibilidad y cómo coordinar"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-white/70">Tu mensaje queda visible para quien publicó la tarea.</div>
              <button
                onClick={handleApply}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-brand-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                <Send className="h-4 w-4" /> Enviar postulación
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
};

export default ServiceCard;
