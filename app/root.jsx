import {
  Meta,
  Links,
  Outlet,
  LiveReload,
  Scripts,
  Link,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import Navegacion from "./components/navegacion";
import Footer from "./components/footer";

import tailwind from "./styles/tailwind.css";
import styles from "./styles/index.css";

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "Portafolio - Inicio" },
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
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// Manejo de errores en remix
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <p className="text-center font-bold text-4xl mt-16">
              {error.status} {error.statusText}
            </p>

            <Link
              className="mt-10 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              to="/"
            >
              Regresar a la página de inicio
            </Link>
          </div>
        </div>
      </Document>
    );
  }
}
