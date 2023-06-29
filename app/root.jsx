import { Meta, Links, Outlet, LiveReload, Scripts } from "@remix-run/react";

import Navegacion from "./components/navegacion";
import Footer from "./components/footer";

import tailwind from "./styles/tailwind.css";
import styles from "./styles/index.css";

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "Portafolio"},
    { viewport: "width=device-width, initial-scale=1" },
    { name: "description", content: "Portafolio Web" },
    { name: "keywords", content: "Portafolio, Dwight, Fronted" },
    { name: "author", content: "Dwight Gudiel" },


  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: tailwind,
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap",
    },
  ];
}

// Es el componente principal que se renderiza en la página
export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <Navegacion />
        </header>
        {children}
        <Footer />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
