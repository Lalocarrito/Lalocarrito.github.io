"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { config } from "@/data/config";

export default function ResumeView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 font-sans">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al portafolio
      </Link>
      <h1 className="mb-4 text-4xl font-bold">Currículum</h1>
      <p className="max-w-md text-center text-muted-foreground">
        Mi currículum estará disponible pronto. Mientras tanto, puedes
        escribirme directamente.
      </p>
      <a
        href={`mailto:${config.email}`}
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-black to-neutral-600 px-6 py-3 font-medium text-white"
      >
        <Mail className="h-4 w-4" />
        {config.email}
      </a>
    </div>
  );
}
