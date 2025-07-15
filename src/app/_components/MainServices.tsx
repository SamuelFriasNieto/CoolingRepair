import { Button } from "@/components/ui/button";
import React from "react";
import ServiceCard from "./ServiceCard";

const MainServices = () => {
  const serviceCards = [
    {
      text: "Servicio Técnico",
      img: "/card-image1.png",
    },
    {
      text: "Revisión y reparación",
      img: "/card-image1.png",
    },
    {
      text: "Mantenimiento preventivo",
      img: "/card-image1.png",
    },
  ];

  return (
    <div className="py-16 bg-[url('/motivo.png')]  bg-cover bg-on-secondary-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-start text-gray-800 mb-12">
          Reparamos lo que otros no pueden
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {serviceCards.map((card, index) => (
            <ServiceCard key={index} text={card.text} img={card.img} />
          ))}
        </div>
        <div className="text-center">
          <Button className="mt-8 bg-on-secondary-container text-surface px-6 py-2 hover:bg-transparent hover:text-on-secondary-container border border-on-secondary-container cursor-pointer rounded-full">
            Ver más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
