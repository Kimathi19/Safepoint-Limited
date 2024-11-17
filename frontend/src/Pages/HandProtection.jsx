import Safetygloves from "./Assets/SafetyWare Grip gloves.png";
import Gripgloves from "./Assets/Grip Gloves(orange).png";
import Rubbergloves from "./Assets/Rubber gloves.png";
import Tuffsafe from "./Assets/TuffSafe Yellow.png";

const handProtectionProducts = [
  {
    id: 1,
    image: Safetygloves,
    name: "SafetyWare Grip gloves",
    description:
      "Seamless nylon liner with polyurethane coated palm Ideal for precision tasks requiring dexterity and flexibility Abrasion and tear resistant, with a secure grip Ideal for detailed assembly, light fabrication and small parts handling",
  },
  {
    id: 2,
    image: Gripgloves,
    name: "Grip Gloves(orange)",
    description:
      "Comfortable glove with excellent dexterity Flexible PU Coating Snug fit seamless liner",
  },
  {
    id: 3,
    image: Rubbergloves,
    name: "Rubber gloves",
    description:
      "Protects from a wide range of chemicals, absorbs perspiration Impermeable for working in damp or greasy environments Cuff prevents dirt from entering the glove Surface provides good grip and wet substances can be repelled",
  },
  {
    id: 4,
    image: Tuffsafe,
    name: "TuffSafe Yellow and Blue Fabric Gloves",
    description:
      "Natural split leather rigger glove with drill back and rubberised cuff.",
  },
];

const HandProtection = () => {
  return (
    <div className="body-protection-products container mx-auto px-6 py-4">
      <h3 className="text-[#3f95ae] text-sm tracking-wide font-semibold mb-2">
        Shop With Us
      </h3>
      <h1 className="text-2xl font-bold underline underline-offset-4 mb-12">
        Hand Protection Products
      </h1>
      <div className="body-protection-wrapper grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mx-auto ">
        {handProtectionProducts.map((product) => (
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

export default HandProtection;