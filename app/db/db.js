// iconos para las Skills
import iconHtml from "../../public/img/html.svg";
import iconCss from "../../public/img/css.svg";
import iconJS from "../../public/img/javascript.svg";
import iconReact from "../../public/img/reactLarge.svg";
import iconTailwind from "../../public/img/tailwindLarge.svg";
import iconBootstrap from "../../public/img/boostrap.svg";
import iconAngular from "../../public/img/angular.svg";
import iconMysql from "../../public/img/mysql.svg";
import iconPostgresql from "../../public/img/postgresql.svg";
import iconSqlserver from "../../public/img/SQLServer.svg";
import iconGit from "../../public/img/git.svg";
import iconGithub from "../../public/img/github.svg";
import iconNode from "../../public/img/node.svg";
import iconExpress from "../../public/img/express.svg";
import iconSequelize from "../../public/img/sequelize.png";

// Imagenes para el Portafolio
import controlCitas from "../../public/img/citasSalonApp.png";
import controlPresupuesto from "../../public/img/controlPresupuesto.png";
import appCrypto from "../../public/img/appCripto.png"

// Ruta Skills
export const skillFronted = [
  { nombre: "HTML5", path: `${iconHtml}` },
  { nombre: "CSS3", path: `${iconCss}` },
  { nombre: "JavaScript", path: `${iconJS}` },
  { nombre: "React JS", path: `${iconReact}` },
  { nombre: "Angular JS", path: `${iconAngular}` },
  { nombre: "Tailwind", path: `${iconTailwind}` },
  { nombre: "Bootstrap 5", path: `${iconBootstrap}` },
];

export const skillDB = [
  { nombre: "MySQL", path: `${iconMysql}` },
  { nombre: "PostgreSQL", path: `${iconPostgresql}` },
  { nombre: "SQL Server", path: `${iconSqlserver}` },
];

export const skillVersiones = [
  { nombre: "Git", path: `${iconGit}` },
  { nombre: "Github", path: `${iconGithub}` },
];

export const skillBackend = [
  { nombre: "Node JS", path: `${iconNode}` },
  { nombre: "Express JS", path: `${iconExpress}` },
  { nombre: "Sequelize", path: `${iconSequelize}` },
];

// Ruta Portafolio
export const proyectos = [
  {
    id: 1,
    titulo: "App web para el control de citas en un salón de belleza",
    imgUrl: `${controlCitas}`,
    descripcion:
      "La aplicación web permite a los usuarios guardar y administrar los datos de las citas de sus clientes de manera efectiva y conveniente. Con esta herramienta, se puede editar y eliminar fácilmente las citas programadas, asegurando una gestión fluida y organizada del salón de belleza.",
    projectUrl: "https://github.com/DwightGudiel/appointment_control",
    demoUrl: "https://dappointmets-control.netlify.app/",
    tecnologiasUsadas: [
      { id: 1, nombre: "React JS" },
      { id: 2, nombre: "Tailwind" },
      { id: 3, nombre: "Local Storage" },
    ],
  },
  {
    id: 2,
    titulo: "Aplicación web de gestión de presupuesto",
    imgUrl: `${controlPresupuesto}`,
    descripcion:
      "La aplicación web ofrece a los usuarios la capacidad de tener un control total sobre su presupuesto. Con esta herramienta, se pueden gestionar los gastos de manera sencilla, permitiendo editar y eliminar cada uno de ellos de forma fácil y rápida. ",
    projectUrl: "https://github.com/DwightGudiel/budget-project",
    demoUrl: "https://dbudget-project.netlify.app",
    tecnologiasUsadas: [
      { id: 1, nombre: "React JS" },
      { id: 2, nombre: "Bootstrap 5" },
      { id: 3, nombre: "Local Storage" },
    ],
  },
  {
    id: 3,
    titulo: "Aplicación web para consultar los precios de las criptomonedas",
    imgUrl: `${appCrypto}`,
    descripcion:
      "Mantente actualizado al instante con los precios en tiempo real de las criptomonedas con nuestra intuitiva aplicación web de consulta de precios de criptomonedas. ",
    projectUrl: "https://github.com/DwightGudiel/consult-cryptocurrencies",
    demoUrl: "https://dapp-cryptocurrencies.netlify.app",
    tecnologiasUsadas: [
      { id: 1, nombre: "React JS" },
      { id: 2, nombre: "Styled Components" },
      { id: 4, nombre: "Hooks" },
      { id: 3, nombre: "API de Criptomonedas" },
    ],
  },
];
