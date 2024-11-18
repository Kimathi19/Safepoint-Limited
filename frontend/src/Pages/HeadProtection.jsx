import Berret from "./Assets/Berret.png";
import StandardHelmet from "./Assets/Standard Safety Helmet.png";
import StrappedHelmet from "./Assets/Strapped Safety Helmet.png";
import { Link } from "react-router-dom";

const headProtectionProducts = [
  {
    id: 1,
    image: Berret,
    name: "Security guard Berret",
    description:
      "The berret is woolen with a tight headband and a soft full flat top. It has immaculate finishes giving that professional look to your security personnel.",
  },
  {
    id: 2,
    image: StandardHelmet,
    name: "Standard Safety Helmet",
    description:
      "Robust and well rounded solution for head protection. Economically viable safety helmet. Comfortable fit over prolonged periods of use.",
  },
  {
    id: 3,
    image: StrappedHelmet,
    name: "Strapped Safety Helmet",
    description:
      "Robust and well rounded solution for head protection. Economically viable safety helmet. Comfortable fit over prolonged periods of use. Comes complete with sweatband.",
  },
];

const HeadProtection = () => {
  return (
    <div className="body-protection-products container mx-auto px-6 py-4">
      <h3 className="text-[#3f95ae] text-sm tracking-wide font-semibold mb-2">
        Shop With Us
      </h3>
      <h1 className="text-2xl font-bold underline underline-offset-4 mb-12">
        Head Protection Products
      </h1>
      <div className="body-protection-wrapper grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center mx-auto ">
        {headProtectionProducts.map((product) => (
          <div
            key={product.id}
            className="card w-full rounded-lg shadow-md h-full flex flex-col justify-between gap-2 pb-4 overflow-hidden "
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

            <Link to="/Popover"  className="view-button px-4 py-2 mx-4 bg-[#3f95ae] rounded-md shadow hover:bg-[#33334e] text-white active:translate-y-[2px] transition-colors font-semibold tracking-wide ">
              Make Order <span>➔</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadProtection;