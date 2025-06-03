import React from "react";
import Motorbikecoverall from "./Assets/Motorbike Polycotton Coverall(Blue).png";
import PolycottonCoverall from "./Assets/PolyCotton Coverall (Red).png";
import WorkwearCoverall from "./Assets/Workwear coveralls.png";
import { Link } from "react-router-dom";


//  body protection products
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
      <h3 className="text-[#3f95ae] text-sm tracking-wide font-semibold mb-2">
        Shop with us
      </h3>
      <h1 className="text-2xl font-bold underline underline-offset-4 mb-12">
        Body Protection Products
      </h1>
      <div className="body-protection-wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center mx-auto ">
        {bodyProtectionProducts.map((product) => (
          <div
            key={product.id}
            className="card w-full rounded-lg shadow-md h-full flex flex-col justify-between gap-2 pb-4 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain"
            />

            <div className="caption p-4">
              <h1 className="name font-bold text-lg">{product.name}</h1>
              <p className="description text-gray-600 text-sm">
                {product.description}
              </p>
            </div>

            <Link to="/Popover" className="view-button px-4 py-2 mx-4 bg-[#3f95ae] rounded-md shadow hover:bg-[#33334e] text-white active:translate-y-[2px] transition-colors font-semibold tracking-wide">
              Make Order <span>➔</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyProtection;
