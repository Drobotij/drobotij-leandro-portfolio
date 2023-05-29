"use client";

import "./globals.css";
import Sidemenu from "./Sidemenu";
import hamburger_ from "../public/hamburger_logo.svg";
import Image from "next/image";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Drobotij Leandro Nahuel</title>
        <meta
          name="description"
          content="Soy un desarrollador y diseñador web frontend con conocimientos de
          backend en búsqueda de nuevos retos y oportunidades de crecimiento.
          Actualmente trabajo por mi cuenta (freelance) y estudio la carrera de
          Licenciatura en Sistemas en la Universidad Nacional General Sarmiento.
          Tengo más de un año trabajando en proyectos profesionales para
          pequeños emprendimientos y asociaciones."
        />
      </head>
      <body className="h-screen flex justify-between items-center gap-5 p-5">
        <button
          onClick={() =>
            document.querySelector(".sidemenu").classList.toggle("active")
          }
          className="fixed lg:hidden top-5 right-5 z-10 bg-white p-2 rounded-full shadow-xl"
        >
          <Image src={hamburger_} alt="ver menu" width={20} />
        </button>
        <Sidemenu />
        <main className="w-full lg:w-9/12 bg-white rounded-3xl overflow-y-auto h-full overflow-x-hidden shadow-xl p-5">
          {children}
        </main>
      </body>
    </html>
  );
}
