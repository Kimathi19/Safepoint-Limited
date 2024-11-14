import React, { useState , useEffect} from "react";
// import Navbar from "../Components/Navbar";
import image1 from "./Assets/0132_637341440984124282.png";
import image2 from "./Assets/construction-safety-observation.png";
import image3 from "./Assets/image1-9.png";
import image4 from "./Assets/side-view-employee-with-safety-e.png";
import image5 from "./Assets/What-Every-Stakeholders-Can-Do-t.png";
import image6 from "./Assets/1708175015686-removebg-preview.png";
import safety from "./Assets/worker-health-safety-illustratio-removebg-preview.png";
import tailoring from "./Assets/rb_8636.png";
import projects from "./Assets/builders-on-the-construction-sit-removebg-preview.png";
import Products from "../Components/Products";
import Team from "../Components/Team";
import Accordion from "../Components/Accordion";

export default function Home() {

    const images = [image1, image2,image3,image4,image5];
    const time = 3000;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
      }, time);

      return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length, time]);

    

  return (
    <>
      <div className="hero relative container mx-auto px-6 h-[700px] min-h-[700px] flex items-center mt-4">
        <div className="left absolute w-[50%] py-9 my-auto text-white z-10 px-8 ">
          <h1 className="text-5xl font-bold tracking-wide">
            Your Partner in Construction Safety Solutions
          </h1>
          <p className="text-lg my-8">
            At Safe Point, we are dedicated to providing top-notch safety gear
            and work apparel tailored for the construction industry. Our mission
            is to ensure that every worker is equipped with the best protection
            and comfort on the job.
          </p>
          <div className="buttons flex gap-4">
            <button className="border border-[#6eb43f] py-2 px-4 bg-[#6eb43f] text-white active:translate-y-1 hover:bg-[#6eb43f]/90">
              Learn More
            </button>
            <button className="border-2 py-2 px-4 border-[#6eb43f] active:translate-y-1  ">
              Make Order
            </button>
          </div>
        </div>
        <div className="swiper w-full h-full">
          <div className="absolute inset-6 inset-y-0 bg-black opacity-50 rounded-lg"></div>
          <img
            className="swiper-image w-full h-full object-cover rounded-lg"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
          />
        </div>
      </div>

      <div className="welcome grid grid-cols-2 gap-6 container mx-auto px-6 mt-10 mb-10  min-h-[500px]">
        <div className="partner py-36">
          <div className="words">
            <h1 className="text-3xl font-bold tracking-wide">
              Welcome to Safe Point: Your Partner in Construction Safety and
              Apparel Solutions
            </h1>
            <p className="text-lg my-8">
              At Safe Point, we specialize in providing top-quality safety gear
              and work apparel tailored for the construction industry. Our
              commitment to safety and quality ensures that your team is
              well-equipped for any job.
            </p>
          </div>
          <div className="checkers">
            <ul className="space-y-2">
              <li className="text-[[#00303c]">
                <i className="fa-solid fa-check mr-4 text-[#6eb43f] "></i>
                High-quality safety gear for construction professionals
              </li>
              <li>
                <i className="fa-solid fa-check  mr-4 text-[#6eb43f]  "></i>
                Custom tailored work apparel for every job
              </li>
              <li>
                <i className="fa-solid fa-check  mr-4 text-[#6eb43f]  "></i>
                Dedicated to enhancing workplace safety and comfort
              </li>
            </ul>
          </div>
        </div>
        <div className="vector ">
          <img
            className="h-full w-full object-fill"
            src={image6}
            alt="Personal protective equipment PPE"
          />
        </div>
      </div>
      <div className="discover container mx-auto px-6 mb-10 min-h-[400px]  ">
        <div className="comprehensive flex justify-evenly ">
          <h3 className="text-2xl font-bold text-center">
            Discover Our Comprehensive Construction Services Tailored for Your
            Needs
          </h3>
        </div>
        <div className="cards grid grid-cols-3 gap-6">
          <div className="safety flex flex-col ">
            <img
              className="size-60 object-fill rounded-lg items-center  "
              src={safety}
              alt=""
            />
            <h5 className="my-3 text-lg font-bold text-[#3f95ae]">
              High-Quality Safety Gear for a Secure Work Environment
            </h5>
            <p className="text-[#33334e]">
              We provide top-notch safety gear designed to protect workers
              on-site.
            </p>
          </div>
          <div className="tailoring">
            <img
              className="w-60 h-60 object-fill rounded-lg"
              src={tailoring}
              alt=""
            />
            <h5 className="my-3 text-lg font-bold text-[#3f95ae]">
              Custom Work Apparel Tailored for Comfort and Durability
            </h5>
            <p>
              Our tailored work apparel ensures your team looks professional and
              feels comfortable.
            </p>
          </div>
          <div className="projects">
            <img
              className="w-60 h-60 object-fill rounded-lg"
              src={projects}
              alt=""
            />
            <h5 className="my-3 text-lg font-bold text-[#3f95ae]">
              Expert Contracting Services for Your Construction Projects
            </h5>
            <p>
              Our experienced team is ready to handle your contracting needs
              efficiently.
            </p>
          </div>
        </div>
      </div>
      <div className="products px-8 mt-24">
        <h3 className="text-teal-500 text-xs tracking wider font-bold">
          Shop With Us
        </h3>
        <h1 className="text-2xl font-bold underline underline-offset-4">
          Featured Products
        </h1>
        <Products />
      </div>
      <div className="team mt-24 px-8">
        <h3 className="text-xs text-teal-500 tracking-wider font-bold">
          Our Team
        </h3>
        <h1 className="text-2xl font-bold underline underline-offset-4">
          Meet the Professionals behind SafePoint
        </h1>
        <Team />
        <div className="open flex flex-col items-center justify-center text-center space-y-2">
          <h1 className="text-sm text-black tracking-wider font-bold">
            Open Positions
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <button className="border border-[#33334e] py-2 px-4 bg-[#33334e] text-white active:translate-y-1 hover:bg-[#33334e]/90 ">
            Open Positions
          </button>
        </div>
      </div>
      <div className="accordion">
        <Accordion />
        <div className="open flex flex-col items-center justify-center text-center space-y-2">
          <h1 className="text-2xl font-semibold mt-8 text-black tracking-wider">
            Still Have Questions?
          </h1>
          <button className="border border-[#33334e] py-2 px-4 bg-[#33334e] text-white active:translate-y-1 hover:bg-[#33334e]/90 ">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
