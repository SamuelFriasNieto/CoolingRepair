import React from "react";
import Image from "next/image";

const BrandsSection = () => {

  const brands = [
    { src: "/mitsubishi.png", alt: "Mitsubishi Electric" },
    { src: "/haier.png", alt: "Haier" },
    { src: "/panasonic.png", alt: "Panasonic" },
    { src: "/fujitsu.png", alt: "Fujitsu" },
    { src: "/daikin.png", alt: "Daikin" },
    { src: "/lg.png", alt: "LG" },
  ];

  return (
    <section className="py-8 bg-on-secondary-blue">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center">
          {brands.map((brand) => (
            <Image
              key={brand.alt}
              src={brand.src}
              alt={brand.alt}
              width={250}
              height={230}
              className="grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
