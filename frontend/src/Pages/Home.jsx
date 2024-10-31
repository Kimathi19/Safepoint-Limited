import React, { useState , useEffect} from "react";
import Navbar from "../Components/Navbar";
import image1 from "./Assets/0132_637341440984124282.png";
import image2 from "./Assets/construction-safety-observation.png";
import image3 from "./Assets/image1-9.png";
import image4 from "./Assets/side-view-employee-with-safety-e.png";
import image5 from "./Assets/What-Every-Stakeholders-Can-Do-t.png";
import image6 from "./Assets/1708175015686-removebg-preview.png";

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
          <img className="h-full w-full object-fill" src={image6} alt="Personal protective equipment PPE" />
        </div>
      </div>
    </>
  );
}
