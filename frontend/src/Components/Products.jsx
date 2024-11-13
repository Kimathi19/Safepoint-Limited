import eye from "../Pages/Assets/eye-protection.png";
import body from "../Pages/Assets/body-protection.png";
import chemical from "../Pages/Assets/chemical-protection.png";
import foot from "../Pages/Assets/foot-protection.png";
import hand from "../Pages/Assets/hand-protection.png";
import head from "../Pages/Assets/head-protection.png";

const products = [
  {
    id: 1,
    src: eye,
    title: "Eye Protection",
    description: "Get the best eye protection gear in the market.",
  },
  {
    id: 2,
    src: body,
    title: "Body Protection",
    description: "High-quality body protection for safety at work.",
  },
  {
    id: 3,
    src: chemical,
    title: "Chemical Protection",
    description: "Protect yourself from hazardous chemicals.",
  },
  {
    id: 4,
    src: foot,
    title: "Foot Protection",
    description: "Durable and comfortable foot protection.",
  },
  {
    id: 5,
    src: hand,
    title: "Hand Protection",
    description: "Reliable hand protection for any environment.",
  },
  {
    id: 6,
    src: head,
    title: "Head Protection",
    description: "Secure head protection for maximum safety.",
  },
];

const Products = () => {
  return (
    <div className="products-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="card flex items-center p-4 w-full max-w-[550px] mx-auto rounded-lg shadow-md "
        >
          <img
            src={product.src}
            alt={`${product.title}`}
            className="w-[100px] h-[100px] object-cover rounded-md mr-4"
          />
          <div className="content flex flex-col justify-center ">
            <h2 className="title font-bold text-xl text-gray-800">
              {product.title}
            </h2>
            <p className="description text-gray-600 text-sm mt-1">
              {product.description}
            </p>
            <button className="view-button mt-2 px-4 py-2 bg-white text-gray-800 rounded-md shadow hover:bg-[#33334e] hover:text-white">
              View Items <span>➔</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
