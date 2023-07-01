import Tecnologia from "../components/tecnologia";
import { skillFronted, skillDB, skillVersiones, skillBackend } from "../db/db";


export function meta() {
  return [
    { title: "Portafolio - Skills"},
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: "Habilidades" },
    { name: "keywords", content: "Skills, Dwight, Fronted" },
    { name: "author", content: "Dwight Gudiel" },
  ];
}

function Skills() {
  return (
    <div className="container mx-auto mt-16 text-xl">
      <h1 className="text-4xl font-bold my-20 text-center text-blue-700">
        Tecnologías
      </h1>

      <div className="my-20">
        <h2 className="font-bold text-4xl my-10 text-center text-blue-500">
          Fronted
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5">
          {skillFronted.map((tecnologia) => (
            <Tecnologia key={tecnologia.nombre} tecnologia={tecnologia} />
          ))}
        </div>
      </div>

      <div className="my-20 ">
        <h2 className="font-bold text-4xl my-10 text-center text-blue-500">
          Base de Datos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-5">
          {skillDB.map((tecnologia) => (
            <Tecnologia key={tecnologia.nombre} tecnologia={tecnologia} />
          ))}
        </div>
      </div>

      <div className="my-20">
        <h2 className="font-bold text-4xl my-10 text-center text-blue-500">
          Manejo de Versiones
        </h2>
        <div className="flex justify-center gap-10">
          {skillVersiones.map((tecnologia) => (
            <Tecnologia key={tecnologia.nombre} tecnologia={tecnologia} />
          ))}
        </div>
      </div>

      <div className="my-20">
        <h2 className="text-3xl font-bold my-20 text-center text-gray-600">
          Aprendiendo Backend.............
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-5">
          {skillBackend.map((tecnologia) => (
            <Tecnologia key={tecnologia.nombre} tecnologia={tecnologia} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
