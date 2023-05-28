import Image from "next/image";
import foto_ from "../public/foto_cv.png";
import linkedin_ from "../public/linkedin_logo.svg";
import github_ from "../public/github_logo.svg";
import location_ from "../public/location_logo.svg";
import email_ from "../public/email_logo.svg";
import Link from "next/link";
import cerrar_ from '../public/close_menu.svg';

const Sidemenu = () => {
  return (
    <div className="w-3/12 shadow-xl sidemenu h-full overflow-y-auto lg:rounded-2xl bg-white">
      <div className="bg-primary relative h-36 flex lg:rounded-t-2xl">
      <button
        onClick={() =>
          document.querySelector(".sidemenu").classList.toggle("active")
        }
        className="absolute lg:hidden top-5 right-5 z-10 bg-white p-2 rounded-full shadow-xl"
      >
        <Image src={cerrar_} alt="Cerrar menu" width={20} />
      </button>
        <div className="absolute top-10 left-0 right-0 mx-auto flex justify-center">
          <Image
            src={foto_}
            width={180}
            height={180}
            className="rounded-full"
            alt="Drobotij Leandro Nahuel"
          />
        </div>
      </div>
      <div className="flex pt-20 gap-20 justify-center items-center">
        <a
          href="https://www.linkedin.com/in/leandro-drobotij-095b31167/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={linkedin_}
            width={28}
            alt="Visitar a drobotij leandro nahuel en linkedin"
          />
        </a>
        <a
          href="http://https://github.com/Drobotij"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={github_}
            width={28}
            alt="Visitar a drobotij leandro nahuel en github"
          />
        </a>
      </div>
      <div className="text-primary px-3 py-5">
        <h1 className="text-center font-bold text-xl">
          Drobotij Leandro Nahuel
        </h1>
        <p className="text-center text-grisesito">Desarrollador web</p>
        <p className="text-grisesito text-sm mt-5 pb-1">Contacto</p>
        <div className="flex items-center gap-2">
          <Image src={location_} width={17} alt="Mi ubicacíon" />
          <p>Manuel Alberti, Pilar, Buenos aires</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={email_} width={17} alt="Mi email" />
          <p>drobotij.leandro.n@gmail.com</p>
        </div>
        <p className="text-grisesito text-sm mt-5 pb-1">Navegar</p>
        <nav>
          <li>
            <Link className="text-primary px-2 py-1 font-bold hover:bg-secondary transition-all  w-full block" href={{ pathname: "/" }}>Inicio</Link>
          </li>

          <li>
            <Link className="text-primary px-2 py-1 font-bold hover:bg-secondary transition-all  w-full block" href={{ pathname: "/about" }}>Quien soy</Link>
          </li>
          <li>
            <Link className="text-primary px-2 py-1 font-bold hover:bg-secondary transition-all w-full block" href={{ pathname: "/proyectos" }}>Proyectos</Link>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Sidemenu;
