import Safetyspectacles from "./Assets/Safety spectacles.png";
import { Link } from "react-router-dom";

const eyeProtectionProducts = [
  {
    id: 1,
    image: Safetyspectacles,
    name: "Safety Spectacles",
    description:
      "Highly resistant to chemicals. Non stick properties for an easier clean. Antistatic. Adjustable arms for universal fit. Soft components for sensitive parts of the face (ears, forehead, nose).",
  },
];

const EyeProtection = () => {
  return (
    <div className="body-protection-products container mx-auto px-6 py-4">
      <h3 className="text-[#3f95ae] text-sm tracking-wide font-semibold mb-2">
        Shop With Us
      </h3>
      <h1 className="text-2xl font-bold underline underline-offset-4 mb-12">
        Body Protection Products
      </h1>
      <div className="body-protection-wrapper grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mx-auto ">
        {eyeProtectionProducts.map((product) => (
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

            <Link to="/Popover"  className="view-button px-4 py-2 mx-4 bg-[#3f95ae] rounded-md shadow hover:bg-[#33334e] text-white active:translate-y-[2px] transition-colors font-semibold tracking-wide">
              Make Order <span>➔</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EyeProtection;
