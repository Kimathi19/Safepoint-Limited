import onefilter from "./Assets/One filter mask.png";
import twofilter from "./Assets/Two filter mask.png";

const chemicalProtectionProducts = [
  {
    id: 1,
    image: onefilter,
    name: "One filter Chemical Mask",
    description:
      "Designed specifically to fit the face with comfort in mind and extremely lightweight. Easy maintenance & cleaning without tools. Body made of soft, TPE material which is gentle on the skin.",
  },
  {
    id: 2,
    image: twofilter,
    name: "Two filter Chemical Mask",
    description:
      "Designed specifically to fit the face with comfort in mind and extremely lightweight. Easy maintenance & cleaning without tools. Body made of soft, TPE material which is gentle on the skin.",
  },
];

const ChemicalProtection = () => {
  return (
    <div className="body-protection-products container mx-auto px-6 py-4">
      <h3 className="text-teal-500 text-xs tracking wider font-bold mb-4">
        Shop With Us
      </h3>
      <h1 className="text-2xl font-bold underline underline-offset-4 mb-12">
        Chemical Protection Products
      </h1>
      <div className="body-protection-wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center mx-auto p-4">
        {chemicalProtectionProducts.map((product) => (
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

export default ChemicalProtection;