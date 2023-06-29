import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "@remix-run/react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Acerca de Mí", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Portafolio", href: "/portafolio" },
];

function Navegacion() {
  const location = useLocation();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex flex-1 items-center justify-between text-gray-600">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    className="font-extrabold text-4xl hover:text-blue-600"
                    to={"/"}
                  >
                    Dwight.
                  </Link>
                </div>

                <div className="hidden lg:ml-6 lg:block text-gray-600">
                  <div className="flex space-x-4 text-2xl ">
                    {/* enlaces dekstop */}
                    {navigation.map((item) => ( 
                      <Link
                        className={
                          location.pathname === item.href
                            ? "text-blue-600 px-3 pt-2 font-bold border-b-4  border-blue-700"
                            : "px-3 pt-2  font-bold  hover:text-blue-600"
                        }
                        key={item.name}
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Navegacion en mobil */}
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 text-2xl text-gray-600">
              {navigation.map((item) => (
                <Link
                  className={
                    location.pathname === item.href
                      ? "flex flex-col text-center py-3 text-blue-300 font-bold"
                      : "flex flex-col text-center py-3 hover:text-blue-300 font-bold "
                  }
                  key={item.name}
                  to={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navegacion;
