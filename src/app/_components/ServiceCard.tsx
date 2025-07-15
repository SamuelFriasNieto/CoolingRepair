import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  text: string;
  img: string;
}

const ServiceCard = ({text, img}: ServiceCardProps) => {
  return (
    <Card className="py-0 rounded-3xl hover:scale-105 transition duration-300 ease-in-out">
      <CardContent className="p-0 h-full relative">
        <Image
          src={img}
          alt={text}
          width={200}
          height={100}
          className="w-full object-cover"
        />
        <div className="py-3 px-6 flex items-center bg-secondary-blue rounded-b-3xl absolute bottom-0 left-0 right-0">
          <h3 className="text-on-secondary-blue text-lg ">{text}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
