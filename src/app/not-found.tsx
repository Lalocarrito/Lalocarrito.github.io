import Spline from "@/components/safe-spline";
import type { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "404 - Página no encontrada",
  description: "La página que buscas no existe o ha sido movida.",
};

const NotFoundPage = () => {
  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <Spline
          scene="/assets/404.spline"
          style={{ height: "100vh" }}
          fallback={
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
              <Link href="/" className="underline">Volver al inicio</Link>
            </div>
          }
        />
      </Suspense>
    </>
  );
};

export default NotFoundPage;
