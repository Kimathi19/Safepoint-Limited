import React, { useState , useEffect} from "react";
import Navbar from "../Components/Navbar";
import image1 from "./Assets/0132_637341440984124282.png";
import image2 from "./Assets/construction-safety-observation.png";
import image3 from "./Assets/image1-9.png";
import image4 from "./Assets/side-view-employee-with-safety-e.png";
import image5 from "./Assets/What-Every-Stakeholders-Can-Do-t.png";

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
    <div className="hero relative container mx-auto px-6 h-[700px] min-h-[700px] flex items-center mt-4">
      <div className="left absolute w-[50%] py-9 my-auto text-white z-10 px-8 ">
        <h1 className="text-5xl font-bold tracking-wide">
          Your Partner in Construction Safety Solutions
        </h1>
        <p className="text-lg my-8">
          At Safe Point, we are dedicated to providing top-notch safety gear and
          work apparel tailored for the construction industry. Our mission is to
          ensure that every worker is equipped with the best protection and
          comfort on the job.
        </p>
        <div className="buttons flex gap-4">
          <button className="border border-[#6eb43f] py-2 px-4 bg-[#6eb43f] text-white active:translate-y-1 hover:bg-[#6eb43f]/90">
            Learn More
          </button>
          <button className="border-2 py-2 px-4 border-[#00303c] active:translate-y-1  ">
            Make Order
          </button>
        </div>
      </div>
      <div className="swiper w-full h-full">
        <div className="absolute inset-6 inset-y-0 bg-black opacity-40 rounded-lg"></div>
        <img
          className="swiper-image w-full h-full object-cover rounded-lg"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
        />
        {/* <img className="swiper " src={image2} alt="" /> */}
      </div>
    </div>
  );
}
