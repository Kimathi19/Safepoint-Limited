import Safetyboot from "./Assets/Safety Jogger Non-metal Safety Boot.png";
import Breathableboots from "./Assets/Breathable Workman Boots.png";
import Groundworker from "./Assets/Groundworker Black Boots.png";

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
      <h3 className="text-teal-500 text-xs tracking wider font-bold mb-4">
        Shop With Us
      </h3>
      <h1 className="text-2xl font-bold underline underline-offset-4 mb-12">
        Foot Protection Products
      </h1>
      <div className="body-protection-wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center mx-auto p-4">
        {footProtectionProducts.map((product) => (
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

export default FootProtection;