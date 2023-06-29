import iconReact from "../../public/img/react.svg";
import iconTailwind from "../../public/img/tailwind.svg";

function Footer() {
  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row justify-center items-center my-10">
        <p className="me-5 text-2xl uppercase font-black text-gray-600 text-center">
          Hecho por Dwight con
        </p>
        <div className="flex">
          <img className="me-5" src={`${iconReact}`} alt="icono de react js" />
          <img src={`${iconTailwind}`} alt="icono de react js" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
