"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const WHATSAPP = "https://wa.me/526624151127";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          TRABAJEMOS <br />
          JUNTOS
        </>} />
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] mx-4">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Contacto</CardTitle>
            <CardDescription>
              Escríbeme a{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-gray-200 cursor-can-hover rounded-lg"
              >
                {config.email}
              </a>{" "}
              o por WhatsApp al{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={WHATSAPP}
                className="text-gray-200 cursor-can-hover rounded-lg"
              >
                662 415 1127
              </a>
              .
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <a
              href={`mailto:${config.email}`}
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-black to-neutral-600 px-6 py-3 text-white font-medium w-full"
            >
              Enviar correo
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background/50 px-6 py-3 font-medium w-full hover:bg-secondary/40 transition-colors"
            >
              WhatsApp: 662 415 1127
            </a>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
