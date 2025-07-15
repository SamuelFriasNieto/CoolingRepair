import { Button } from "@/components/ui/button";
import { BsCheck2 } from "react-icons/bs";
import React from "react";
import Image from "next/image";

const ComfortSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          <div className="">
            <h2 className="text-3xl font-bold text-on-secondary-container mb-6">
              Cuidamos tu <span className="italic">confort</span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                En Cooling-repair S.L. llevamos más de 25 años dedicados a la
                reparación de sistemas de climatización y calefacción, tanto
                para hogares como para empresas.
              </p>
              <p>
                Nuestro equipo está formado por técnicos especializados,
                comprometidos con ofrecer un servicio rápido, seguro y con
                garantía en toda Valencia y alrededores. Nos diferenciamos por
                la atención cercana, la eficacia en cada intervención y la
                confianza que generamos en nuestros clientes.
              </p>
              <p>
                Trabajamos cada día en Valencia para que no tengas que
                preocuparte por averías: tú solo dinos qué ocurre, nosotros lo
                reparamos.
              </p>
            </div>
            <div className="my-8 grid grid-cols-2 gap-4 text-text-color">
              <p className="text-lg font-semibold  "><BsCheck2 className="inline text-secondary-blue" strokeWidth={0.5} size={30}/> Rápido</p>
              <p className="text-lg font-semibold "><BsCheck2 className="inline text-secondary-blue" strokeWidth={0.5} size={30}/> Eficacia</p>
              <p className="text-lg font-semibold "><BsCheck2 className="inline text-secondary-blue" strokeWidth={0.5} size={30}/> Garantía</p>
              <p className="text-lg font-semibold "><BsCheck2 className="inline text-secondary-blue" strokeWidth={0.5} size={30}/> Garantía</p>
            </div>
            <Button variant={'primary'} className=" px-8 py-3 rounded-full">
              SOLICITAR PRESUPUESTO
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/hero-image2.png"
              alt="Equipo de trabajo"
              width={800}
              height={800}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComfortSection;
