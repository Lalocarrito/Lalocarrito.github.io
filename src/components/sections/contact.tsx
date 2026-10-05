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

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] mx-4">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Contact</CardTitle>
            <CardDescription>
              Escríbeme directamente a{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-gray-200 cursor-can-hover rounded-lg"
              >
                {config.email.replace(/@/g, "(at)")}
              </a>{" "}
              o envíame un correo con el botón de abajo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <a
              href={`mailto:${config.email}`}
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-black to-neutral-600 px-6 py-3 text-white font-medium w-full"
            >
              Enviar correo
            </a>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
