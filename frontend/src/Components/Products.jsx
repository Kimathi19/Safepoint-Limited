import eye from "../Pages/Assets/eye-protection.png";
import body from "../Pages/Assets/body-protection.png";
import chemical from "../Pages/Assets/chemical-protection.png";
import foot from "../Pages/Assets/foot-protection.png";
import hand from "../Pages/Assets/hand-protection.png";
import head from "../Pages/Assets/head-protection.png";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    src: eye,
    title: "Eye Protection",
    description: "Get the best eye protection gear in the market.",
    destination: "/EyeProtection",
  },
  {
    id: 2,
    src: body,
    title: "Body Protection",
    description: "High-quality body protection for safety at work.",
    destination: "/BodyProtection",
  },
  {
    id: 3,
    src: chemical,
    title: "Chemical Protection",
    description: "Protect yourself from hazardous chemicals.",
    destination: "/ChemicalProtection",
  },
  {
    id: 4,
    src: foot,
    title: "Foot Protection",
    description: "Durable and comfortable foot protection.",
    destination: "/FootProtection",
    
  },
  {
    id: 5,
    src: hand,
    title: "Hand Protection",
    description: "Reliable hand protection for any environment.",
    destination: "/HandProtection",
  },
  {
    id: 6,
    src: head,
    title: "Head Protection",
    description: "Secure head protection for maximum safety.",
    destination: "/HeadProtection",
  },
];

const Products = () => {
  return (
    <div className="products-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto py-6 ">
      {products.map((product) => (
        <div
          key={product.id}
          className="card flex items-center p-4 w-full max-w-[550px] mx-auto rounded-lg shadow-md bg-neutral-100 gap-1 transition-all"
        >
          <div className="photo overflow-hidden">
            <img
              src={product.src}
              alt={`${product.title}`}
              className="w-[100px] h-[100px] object-cover rounded-md mr-4 hover:scale-110"
            />
          </div>
          <div className="content flex flex-col justify-center ">
            <h2 className="title font-bold text-xl text-gray-800">
              {product.title}
            </h2>
            <p className="description text-gray-600 text-sm mt-1">
              {product.description}
            </p>

            <Link
              to={product.destination}
              className="view-button mt-2 px-4 py-2 bg-neutral-300 text-gray-800 rounded-md shadow hover:bg-[#33334e] hover:text-white active:translate-y-[2px] transition-colors "
            >
              View Items <span>➔</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
