function Tecnologia({ tecnologia }) {
  const { nombre, path } = tecnologia;

  return (
    <div className="shadow-xl p-2 md:p-5 rounded-2xl">
      <img
        className="w-12 md:w-auto mx-auto transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        src={`${path}`}
        loading="lazy"
        decoding="async"
        alt={`icono de ${nombre}`}
      />
      <p className="text-gray-700 text-center transition duration-300 ease-in-out hover:text-blue-700 pt-5 font-bold">
        {nombre}
      </p>
    </div>
  );
}

export default Tecnologia;
