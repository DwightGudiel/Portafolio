import nosotros from "../../public/img/nosotros.jpg";


export function meta() {
  return [
    { title: "Portafolio - Acerca de Mi"},
  ];
}

function About() {
  return (
    <div className="container mx-auto mt-10 p-5">
      <h1 className="text-center text-5xl mb-5 md:my-16 font-bold text-blue-800">Acerca de Mí</h1>

      <div className="md:grid md:grid-cols-10 md:place-items-center md:gap-10">
        <div className="md:col-span-4">
          <img
            className="min-w-full rounded-full border-4 border-blue-300 p-2"
            src={`${nosotros}`}
            loading="lazy"
            decoding="async"
            alt="Imagen de Dwight Gudiel"
          />
        </div>
        <div className="text-2xl md:col-span-6 text-gray-800">
          <p className=" leading-10 mt-10 md:mt-0">
            ¡Hola! Permíteme contarte un poco sobre mí. Tengo 23 años y soy
            originario de Petén, Guatemala. Me apasiona el desarrollo web y,
            actualmente, mi enfoque principal es convertirme en un desarrollador
            frontend. No obstante, mi objetivo final es llegar a ser un
            desarrollador full-stack.
          </p>
          <p className=" leading-10 mt-5">
            Estoy emocionado por el futuro del desarrollo web y busco proyectos
            desafiantes en los que pueda aplicar mi creatividad y habilidades.
            Si tienes alguna pregunta o te gustaría colaborar en un proyecto, no
            dudes en contactarme. Agradezco tu interés y espero tener la
            oportunidad de mostrar mi pasión por el desarrollo web.
          </p>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 text-2xl md:gap-10 mt-20 text-gray-800">
        <div>
          <h3 className="font-bold text-3xl text-center  text-blue-500">Educación</h3>
          <ul className="ml-6 list-none">
            <li className="my-5">
              <p className="font-bold">Carrera:</p>
              <p className="ml-6">Ingeniería en Sistemas de la Información</p>
            </li>
            <li className="my-5">
              <p className="font-bold">Nivel de estudios:</p>
              <p className="ml-6">Estudiante de Quinto Año</p>
            </li>
            <li className="my-5">
              <p className="font-bold">Universidad:</p>
              <p className="ml-6">Mariano Gálvez de Guatemala</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-3xl text-center mt-20 md:mt-0 text-blue-500">Idiomas</h3>
            <p className="my-10 text-center">Español Nativo</p>
            <p className="text-center">Inglés A2</p>
        </div>
      </div>
    </div>
  );
}

export default About;
