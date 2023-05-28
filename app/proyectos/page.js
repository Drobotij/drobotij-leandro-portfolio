import React from "react";
import sac_ from "../../public/sacFutbol_logo.svg";
import laFirma_ from "../../public/lafirma_logo.svg";
import pasteleriaNatalie_ from "../../public/pasteleriaNatalie_logo.svg";
import bolsaTrabajo_ from "../../public/bolsaTrabajo_logo.svg";
import Image from "next/image";

const Proyectos = () => {
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-5">
      <a
        href="https://sac-futbol.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex lg:opacity-60 hover:opacity-100 transition-all justify-center items-center w-full h-60 lg:h-full shadow-lg border border-spacing-1 border-gray-200 rounded-3xl p-3"
      >
        <Image src={sac_} alt="Sac Fútbol" />
      </a>
      <a
        href="https://lafirmaconsultores.com.ar/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full lg:opacity-60 hover:opacity-100 transition-all flex justify-center items-center h-60 lg:h-full shadow-lg border border-spacing-1 border-gray-200 rounded-3xl p-3"
      >
        <Image src={laFirma_} alt="La Firma Asociados" />
      </a>
      <a
        href="https://pastelerianatalie.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-60 lg:h-full lg:opacity-60 hover:opacity-100 transition-all flex justify-center items-center shadow-lg border border-spacing-1 border-gray-200 rounded-3xl p-3"
      >
        <Image src={pasteleriaNatalie_} alt="Pasteleria Natalie" />
      </a>

      <div className="flex opacity-60  justify-center items-center w-full h-60 lg:h-full proximamente shadow-lg border border-spacing-1 border-gray-200 rounded-3xl p-3">
        <Image src={bolsaTrabajo_} alt="Bolsa de trabajo" />
      </div>
    </div>
  );
};

export default Proyectos;
