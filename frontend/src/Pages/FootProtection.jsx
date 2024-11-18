import Safetyboot from "./Assets/Safety Jogger Non-metal Safety Boot.png";
import Breathableboots from "./Assets/Breathable Workman Boots.png";
import Groundworker from "./Assets/Groundworker Black Boots.png";
import { Link } from "react-router-dom";

const footProtectionProducts = [
  {
    id: 1,
    image: Safetyboot,
    name: "Safety Jogger Non-metal Safety Boot",
    description:
      "Full grain leather uppers. Dual density TPU/PU sole. Polycarbonate protective toe cap, lightweight and metal free. Meets safety standard.",
  },
  {
    id: 2,
    image: Breathableboots,
    name: "Breathable Workman Boots(Black)",
    description:
      "Made from waterproof/ breathable membrane. Lightweight dual density PU/Rubber, antistatic, oil and acid resistant.",
  },
  {
    id: 3,
    image: Groundworker,
    name: "Groundworker Black Boots",
    description:
      "Reinforced toe and shin. Moulded heel stabiliser and internal trouser grips",
  },
];

const FootProtection = () => {
  return (
    <div className="body-protection-products container mx-auto px-6 py-4">
      <h3 className="text-[#3f95ae] text-sm tracking-wide font-semibold mb-2">
        Shop With Us
      </h3>
      <h1 className="text-2xl font-bold underline underline-offset-4 mb-12">
        Foot Protection Products
      </h1>
      <div className="body-protection-wrapper grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center mx-auto ">
        {footProtectionProducts.map((product) => (
          <div
            key={product.id}
            className="card w-full rounded-lg shadow-md h-full flex flex-col justify-between gap-2 pb-4 overflow-hidden "
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain "
            />
            <div className="caption p-4">
              <h1 className="name font-bold text-lg">{product.name}</h1>
              <p className="description text-gray-600 text-sm">
                {product.description}
              </p>
            </div>

            <Link to="/Popover"  className="view-button px-4 py-2 mx-4 bg-[#3f95ae] rounded-md shadow hover:bg-[#33334e] text-white active:translate-y-[2px] transition-colors font-semibold tracking-wide">
              Make Order <span>➔</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootProtection;