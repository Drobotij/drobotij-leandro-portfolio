"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animacion_hablidades from "../../public/animacion_habilidades.json";
import html_ from "../../public/html_logo.svg";
import javascript_ from "../../public/javascript_logo.svg";
import css_ from "../../public/css_logo.svg";
import next_ from "../../public/next_logo.svg";
import mysql_ from "../../public/mysql_logo.svg";
import react_ from "../../public/react_logo.svg";
import node_ from "../../public/node_logo.svg";
import typescript_ from "../../public/typescript_logo.svg";
import tailwindcss_ from "../../public/tailwindcss_logo.svg";
import Image from "next/image";
import Link from "next/link";

const Habilidades = () => {
  const [widthLogos, setWidthLogos] = useState(40);
  useEffect(() => {
    const circles = document.querySelectorAll(".element");

    const n = 9; // numero de elementos
    const r = window.innerWidth > 1024 ? 200 : 100; // radio

    if (window.innerWidth > 1024) {
      setWidthLogos(80);
    }

    let angulo = 0;
    let originX = circles[0].offsetLeft;
    let originY = circles[0].offsetTop;

    setInterval(() => {
      angulo += 0.01;
      circles.forEach((element, i) => {
        element.style.left = `${
          originX + r * Math.cos(angulo + ((5 * Math.PI) / n) * (i + 100))
        }px`;
        element.style.top = `${
          originY + r * Math.sin(angulo + ((3 * Math.PI) / n) * (i + 100))
        }px`;
      });
    }, 20);
  }, []);

  return (
    <div className="h-full relative flex flex-col lg:flex-row items-center justify-between lg:w-11/12 mx-auto">
      <div className="lg:absolute top-1 left-0  right-0 m-auto ">
        <h2 className="hidden lg:block text-center font-bold text-4xl text-primary">
          Tecnologías que trabajo
        </h2>
      </div>
      <div className="lg:w-1/2">
        <p className="font-bold text-3xl text-center lg:text-left text-primary pb-5">¿Quién soy?</p>
        <p className="text-grisesito text-center lg:text-start">
          {" "}
          Soy Leandro Drobotij, un desarrollador y diseñador web frontend con
          conocimientos de backend, nacido en Buenos Aires, Argentina.
        </p>
        <p className="text-grisesito text-center lg:text-start">
          Me enfoco en crear productos web sólidos, escalables, con excelentes
          experiencias de usuario y diseños modernos y funcionales, trabajando
          con tecnologías estables como Nextjs, MySQL, Javascript, Figma, entre
          otras.
        </p>
        <Link
          className="bg-secondary mb-32 lg:mb-0 transition-all opacity-90 hover:opacity-100 font-bold uppercase py-2 px-5 rounded-2xl mt-5 block text-center lg:w-fit"
          href={{ pathname: "/proyectos" }}
        >
          Quiero pruebas
        </Link>
      </div>
      <div className="flex justify-center lg:w-5/12 items-center">
        <div className="absolute pb-10">
          <Lottie
            animationData={animacion_hablidades}
            loop={true}
            style={{ height: 250 }}
          />
        </div>
        <div id="circle">
          <div className="element">
            <Image src={react_} alt="ReactJs" width={widthLogos} />
          </div>
          <div className="element">
            <Image src={tailwindcss_} alt="TailwindCSS" width={widthLogos} />
          </div>
          <div className="element">
            <Image src={javascript_} alt="ReactJs" width={widthLogos} />
          </div>
          <div className="element">
            <Image src={html_} alt="ReactJs" width={widthLogos} />
          </div>
          <div className="element">
            <Image src={node_} alt="ReactJs" width={widthLogos} />
          </div>
          <div className="element">
            <Image src={mysql_} alt="ReactJs" width={widthLogos} />
          </div>
          <div className="element">
            <Image src={css_} alt="ReactJs" width={widthLogos} />
          </div>
          <div className="element">
            <Image src={next_} alt="ReactJs" width={widthLogos} />
          </div>
          <div
            className="element"
            onClick={() => document.querySelector("#typescript").focus()}
          >
            <Image src={typescript_} alt="ReactJs" width={widthLogos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
