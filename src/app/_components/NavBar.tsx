import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="font-semibold text-secondary-blue my-5">
      <div className="mx-auto px-18">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <Image
                src="/logo.png"
                alt="Logo"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="transition duration-200 ease-in-out hover:text-black">
              INICIO
            </a>
            <a href="#servicios" className="transition duration-200 ease-in-out hover:text-black">
              SERVICIOS Y TARIFAS
            </a>
            <a
              href="#presupuesto"
              className="transition duration-200 ease-in-out hover:text-black"
            >
              PRESUPUESTO
            </a>
            <a href="#contacto" className="transition duration-200 ease-in-out hover:text-black">
              CONTACTO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
