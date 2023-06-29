import Card from "../components/card";
import style from "react-swipeable-list/dist/styles.css";
import { proyectos } from "../db/db";


export function meta() {
  return [
    { title: "Portafolio - Proyectos"},
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
    </div>
  );
}

export default Portafolio;
