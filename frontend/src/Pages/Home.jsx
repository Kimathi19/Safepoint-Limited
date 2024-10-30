import React from 'react'
import Navbar from '../Components/Navbar'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
    
  return (
    <div className="hero container mx-auto px-6 py-6 border border-[#00303c] min-h-[500px] flex items-center ">
      <div className="left w-[40%] border py-9 my-auto border-[#00303c] ">
        <h1 className="text-4xl font-bold tracking-wide">
          Your Partner in Construction Safety Solutions
        </h1>
        <p className="text-md mt-6 mb-6">
          At Safe Point, we are dedicated to providing top-notch safety gear and
          work apparel tailored for the construction industry. Our mission is to
          ensure that every worker is equipped with the best protection and
          comfort on the job.
        </p>
        <div className="buttons flex gap-5">
          <button className="border py-2 px-4 bg-[#6eb43f] text-white active:translate-y-1 hover:bg-[#6eb43f]/90">
            Learn More
          </button>
          <button className="border-2 py-2 px-4 border-[#00303c] active:translate-y-1  text-black">
            Make Order
          </button>
        </div>
      </div>
    </div>
  );
}
