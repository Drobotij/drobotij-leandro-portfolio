"use client";
import Lottie from "lottie-react";
import animacion_perfil_1 from "../public/animacion_perfil_1.json";
import animacion_perfil_2 from "../public/animacion_perfil_2.json";
import animacion_perfil_3 from "../public/animacion_perfil_3.json";

export default function Home() {
  const style = {
    height: 150,
  };

  return (
    <div className="flex flex-col gap-10 min-h-full">
      
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="lg:w-1/2 shadow-lg border border-spacing-1 border-gray-200 rounded-3xl p-3">
          <h2 className="text-center font-bold text-2xl">¡Soy Leandro!</h2>
          <p className="text-grisesito text-center mt-5">
            Un desarrollador y diseñador web frontend con conocimientos de
            backend
          </p>
          <Lottie
            style={style}
            animationData={animacion_perfil_1}
            loop={true}
          />
        </div>
        <div className="lg:w-1/2 shadow-lg border border-spacing-1 border-gray-200 rounded-3xl p-3">
          <h2 className="text-center font-bold text-2xl">
            Actualmente freelance
          </h2>
          <p className="text-grisesito text-center mt-5">
            Tengo más de un año trabajando en proyectos profesionales para
            pequeños emprendimientos y asociaciones
          </p>
          <Lottie
            style={style}
            animationData={animacion_perfil_2}
            loop={true}
            alt="Animación"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 items-center shadow-lg border border-spacing-1 border-gray-200  rounded-3xl p-5">
        <div>
          <h2 className="text-center lg:text-left font-bold text-2xl">
            Estudiando una licenciatura
          </h2>
          <p className="text-grisesito mt-5 text-center lg:text-left ">
            Actualmente estoy estudiando la carrera de{" "}
            <span className="text-primary font-bold">
              Licenciatura en Sistemas
            </span>{" "}
            en la Universidad Nacional General Sarmiento.
          </p>
          <p className="text-grisesito text-center lg:text-left ">
            También, obtuve el título de{" "}
            <span className="text-primary font-bold">
              Técnico en Informática Profesional y Personal{" "}
            </span>{" "}
            en la E.E.S.T.N°3 “Roberto Arlt”.
          </p>
        </div>
        <div>
          <Lottie
            animationData={animacion_perfil_3}
            loop={true}
            style={{ height: 190 }}
          />
        </div>
      </div>
    </div>
  );
}
