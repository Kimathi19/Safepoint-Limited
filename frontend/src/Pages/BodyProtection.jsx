import React from "react";
import Motorbikecoverall from "./Assets/Motorbike Polycotton Coverall(Blue).png";
import PolycottonCoverall from "./Assets/PolyCotton Coverall (Red).png";
import WorkwearCoverall from "./Assets/Workwear coveralls.png";

// Sample body protection products
const bodyProtectionProducts = [
  {
    id: 1,
    image: Motorbikecoverall,
    name: "Motorbike Polycotton Coverall (Blue)",
    description:
      "Flame resistant material, comes with a fitted jacket and pants. It has padding, providing the insulation against shock or fall-induced trauma.",
  },
  {
    id: 2,
    image: PolycottonCoverall,
    name: "Polycotton Coverall (Red)",
    description:
      "Reflective tape full configuration. Elasticated waist zip, front-fastening pockets.",
  },
  {
    id: 3,
    image: WorkwearCoverall,
    name: "Workwear Coveralls",
    description:
      "Designed for general engineering, warehouse and automotive use this stud front boiler suit provides protection from oils, greases and solvents.",
  },
];

const BodyProtection = () => {
  return (
    <div className="body-protection-products container mx-auto px-6 py-4">
      <h3 className="text-teal-500 text-xs tracking wider font-bold mb-4">
        Shop With Us
      </h3>
      <h1 className="text-2xl font-bold underline underline-offset-4 mb-12">
        Body Protection Products
      </h1>
      <div className="body-protection-wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center mx-auto p-4">
        {bodyProtectionProducts.map((product) => (
          <div
            key={product.id}
            className="card p-4 w-full space-y-2 rounded-lg shadow-md text-center "
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain rounded-md mx-auto"
            />
            <h1 className="name font-bold text-lg">{product.name}</h1>
            <p className="description text-gray-600 text-sm">
              {product.description}
            </p>
            <button className="view-button mt-2 px-4 py-2 bg-neutral-300 text-gray-800 rounded-md shadow hover:bg-[#33334e] hover:text-white active:translate-y-[2px] transition-colors ">
              Make Order <span>➔</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyProtection;
