import { Link } from "@remix-run/react";
import imagen from "../../public/img/disenoweb.svg";
import linkedin from "../../public/img/linkedin.svg";
import github from "../../public/img/githubicon.svg";
import whatsapp from "../../public/img/whatsapp.svg";

export function meta() {
  return [
    { title: "Portafolio - Inicio"},
  ];
}


function Index() {
  return (
    <div className="container mx-auto p-3">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 mt-20 text-gray-600">
        <div>
          <h1 className="text-6xl py-5 font-bold">Hola, Soy Dwight Gudiel</h1>
          <h2 className="text-4xl text-blue-400 py-5 font-bold">
            Fronted Developer
          </h2>
          <p className="py-5 leading-9 text-xl">
            Desarrollador Frontend apasionado por el desarrollo web y la
            creación de experiencias de usuario atractivas y funcionales.
            Siempre en busca de nuevas formas de optimizar el rendimiento en
            proyectos futuros. Mantengo mis habilidades y conocimientos
            actualizados, explorando constantemente las últimas tendencias y
            tecnologías en el desarrollo web.
          </p>

          <div className="mt-5">
            <Link
              className="rounded-lg py-3 px-5 transition duration-300 ease-in-out font-bold bg-blue-500 text-white hover:bg-blue-600 text-lg"
              to="https://drive.google.com/file/d/1TsbbO0FfxKxfpah7d4sZiOrBtuNzo77M/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Curriculum Vitae
            </Link>
          </div>
        </div>
        <div>
          <img
            className="mt-10 md:mt-0 w-full"
            src={`${imagen}`}
            alt="Imagen sobre desarrolo web"
            // loading="lazy"
            // decoding="async"
          />
        </div>
      </div>
 
      <div className="flex justify-center lg:justify-start mt-12 gap-10">
        <Link
          className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          to="https://www.linkedin.com/in/dwightgudiel/"
        >
          <img
            className="w-12 "
            src={`${linkedin}`}
            alt="icono de linkedin"
            loading="lazy"
            // decoding="async"
          />
        </Link>
        <Link
          className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          to="https://github.com/DwightGudiel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-12"
            src={`${github}`}
            alt="icono de github"
            loading="lazy"
            // decoding="async"
          />
        </Link>
        <Link
          className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          to="https://api.whatsapp.com/send?phone=50244767967"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-12"
            src={`${whatsapp}`}
            alt="icono de whatsapp"
            loading="lazy"
            // decoding="async"
          />
        </Link>
      </div>
    </div>
  );
}

export default Index;
