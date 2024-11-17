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
      <h3 className="text-[#3f95ae] text-sm tracking-wide font-semibold mb-2">
        Shop With Us
      </h3>
      <h1 className="text-2xl font-bold underline underline-offset-4 mb-12">
        Chemical Protection Products
      </h1>
      <div className="body-protection-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mx-auto ">
        {chemicalProtectionProducts.map((product) => (
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

            <button className="view-button px-4 py-2 mx-4 bg-[#3f95ae] rounded-md shadow hover:bg-[#33334e] text-white active:translate-y-[2px] transition-colors font-semibold tracking-wide">
              Make Order <span>➔</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChemicalProtection;