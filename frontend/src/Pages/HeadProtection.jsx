import Berret from "./Assets/Berret.png";
import StandardHelmet from "./Assets/Standard Safety Helmet.png";
import StrappedHelmet from "./Assets/Strapped Safety Helmet.png";

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
      <h3 className="text-teal-500 text-xs tracking wider font-bold mb-4">
        Shop With Us
      </h3>
      <h1 className="text-2xl font-bold underline underline-offset-4 mb-12">
        Head Protection Products
      </h1>
      <div className="body-protection-wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center mx-auto p-4">
        {headProtectionProducts.map((product) => (
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

export default HeadProtection;