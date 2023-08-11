import { Link } from "@remix-run/react";
import Card from "../components/card";
import style from "../styles/swipeableList.css";
import iconGithub from "../../public/img/github.svg";

import { proyectos } from "../db/db";

export function meta() {
  return [
    { title: "Portafolio - Proyectos" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: "Portafolio Web" },
    { name: "keywords", content: "Portafolio, Dwight, Fronted" },
    { name: "author", content: "Dwight Gudiel" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
}

function Portafolio() {
  return (
    <div className="container mx-auto mt-16 p-3">
      <h1 className="text-center text-4xl font-bold text-blue-800">
        Proyectos Personales
      </h1>
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 mt-20">
        {proyectos.map((proyecto) => (
          <Card key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to={"https://github.com/DwightGudiel"}
          className="bg-black p-2 text-white flex gap-2 items-center rounded-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Repositorios de Github
          <img className="h-10 w-10" src={iconGithub} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Portafolio;
