import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";

function Card({ proyecto }) {
  const {
    titulo,
    imgUrl,
    descripcion,
    projectUrl,
    tecnologiasUsadas,
    demoUrl,
  } = proyecto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() => window.open(demoUrl, "_blank", "noopener noreferrer")}
      >
        Demo
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => window.open(projectUrl, "_blank", "noopener noreferrer")}
      >
        Repositorio
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList className="shadow rounded-3xl shadow-gray-300 mb-20 md:mb-0">
      <SwipeableListItem
        // Editar
        leadingActions={leadingActions()}
        // Eliminar
        trailingActions={trailingActions()}
      >
        <div className="md:mt-0 text-gray-700">
          <img
            className="w-full border-b-2 rounded-3xl"
            src={`${imgUrl}`}
            loading="lazy"
            // decoding="async"
            alt="imagen"
          />
          <div className="p-10">
            <h3 className="font-bold capitalize mb-10 text-3xl">{titulo}</h3>
            <p className="leading-7 text-xl">{descripcion}</p>

            <h4 className="text-2xl font-bold my-5">Tecnologias Usadas:</h4>
            <div className="flex-auto lg:flex lg:flex-wrap  gap-5 ">
              {tecnologiasUsadas.map((tecnologia) => (
                <p
                  key={tecnologia.id}
                  className=" font-bold text-sm md:text-lg border-4 border-blue-300 rounded-2xl p-3 text-center mb-5 lg:mb-0"
                >
                  {tecnologia.nombre}
                </p>
              ))}
            </div>
            <span className="mt-5 text-gray-500 text-sm block font-bold text-center">
              --- Arrastra el card a la derecha o izquierda con click izquierdo
              para ver más opciones ---
            </span>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}
export default Card;
