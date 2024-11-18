import React, { useState , useEffect} from "react";
import {
  expert,
  icon,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  tailor,
  KDF,
  KFS,
  redcross,
  NYS,
  wellsfargo,
} from "./Assets/images";
// import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Team from "../Components/Team";
import Accordion from "../Components/Accordion";
import { Link } from "react-router-dom";

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
      <div className="hero relative container mx-auto h-[90vh] min-h-[90vh] lg:px-6 lg:h-[700px] lg:min-h-[700px] flex items-center lg:mt-4">
        <div className="left absolute lg:w-[50%] my-auto text-white z-10 mx-8 left-0 md:left-4 lg:left-8 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-pretty">
            Your <span className="underline text-[#6eb43f]">Partner</span> in
            Construction &nbsp;
            <span className="underline text-[#6eb43f]">Safety</span> Solutions
          </h1>
          <p className="md:text-lg my-8">
            At Safe Point, we are dedicated to providing top - notch safety gear
            and work apparel tailored for the construction industry. Our mission
            is to ensure that every worker is equipped with the best protection
            and comfort on the job.
          </p>
          <div className="buttons flex flex-col sm:flex-row gap-4">
            <button className="border border-[#6eb43f] py-2 px-4 bg-[#6eb43f] text-white active:translate-y-1 hover:bg-[#6eb43f]/90">
              Learn More
            </button>
            <button className="border-2 py-2 px-4 border-[#6eb43f] active:translate-y-1  ">
              Make Order
            </button>
          </div>
        </div>
        <div className="swiper w-full h-full">
          <div className="absolute inset-0 lg:inset-6 lg:inset-y-0 bg-black opacity-50 lg:rounded-lg"></div>
          <img
            className="swiper-image w-full h-full object-cover lg:rounded-lg"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
          />
        </div>
      </div>

      {/* 2nd div */}
      <div className="welcome grid lg:grid-cols-2 gap-6 container mx-auto px-6 my-24  min-h-[500px]">
        <div className="partner flex flex-col justify-center">
          <div className="words">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
              Welcome to Safe Point: Your Partner in Construction Safety and
              Apparel Solutions
            </h1>
            <p className="md:text-lg my-8">
              At Safe Point, we specialize in providing top-quality safety gear
              and work apparel tailored for the construction industry. Our
              commitment to safety and quality ensures that your team is
              well-equipped for any job.
            </p>
          </div>
          <div className="checkers">
            <ul className="space-y-2">
              <li className="text-[[#00303c] flex md:items-center  ">
                <i className="fa-solid fa-check mr-4 text-[#6eb43f]  h-full  "></i>
                <span>
                  High-quality safety gear for construction professionals
                </span>
              </li>
              <li className="flex md:items-center ">
                <i className="fa-solid fa-check  mr-4 text-[#6eb43f]  "></i>
                <span>Custom tailored work apparel for every job</span>
              </li>
              <li className="flex md:items-center ">
                <i className="fa-solid fa-check  mr-4 text-[#6eb43f]  "></i>
                <span>Dedicated to enhancing workplace safety and comfort</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="vector items-center flex justify-center">
          <img
            className=" object-contain  "
            src={image6}
            alt="Personal protective equipment PPE"
          />
        </div>
      </div>

      {/* 3rd div */}
      <div className="discover container mx-auto px-6 mb-10 min-h-[400px] flex flex-col justify-between bg-[#33334e] text-neutral-100 tracking-wide py-16 text-pretty lg:rounded-lg">
        <div className="comprehensive flex justify-evenly mb-16">
          <h3 className="text-2xl font-bold md:text-center">
            Discover Our Comprehensive Construction Services Tailored for Your
            Needs
          </h3>
        </div>
        <div className="cards grid md:grid-cols-3  justify-between gap-16">
          <div className="safety flex flex-col ">
            <img
              className="size-16 border  bg-neutral-100 p-2 object-fill rounded-lg items-center  "
              src={icon}
              alt=""
            />
            <h5 className="mt-4 mb-2 text-lg font-semibold text-[#3f95ae]">
              High-Quality Safety Gear for a Secure Work Environment
            </h5>
            <p className="">
              We provide top-notch safety gear designed to protect workers
              on-site.
            </p>
          </div>
          <div className="tailoring">
            <img
              className="size-16 bg-neutral-100 p-2 object-cover rounded-lg items-center"
              src={tailor}
              alt=""
            />
            <h5 className="mt-4 mb-2 text-lg font-semibold text-[#3f95ae]">
              Custom Work Apparel Tailored for Comfort and Durability
            </h5>
            <p className="">
              Our tailored work apparel ensures your team looks professional and
              feels comfortable.
            </p>
          </div>
          <div className="projects">
            <img
              className="size-16 bg-neutral-100 p-2 object-fill rounded-lg items-center"
              src={expert}
              alt=""
            />
            <h5 className="mt-4 mb-2 text-lg font-semibold text-[#3f95ae]">
              Expert Contracting Services for Your Construction Projects
            </h5>
            <p className="">
              Our experienced team is ready to handle your contracting needs
              efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="products container mx-auto px-6 mt-24">
        <h3 className="text-teal-500 text-sm tracking-wide font-bold">
          Shop with us
        </h3>
        <h1 className="text-2xl font-bold underline underline-offset-4">
          Featured Products
        </h1>
        <Products />
      </div>
      {/* Team */}
      <div className="team container mx-auto mt-24 px-6">
        <h3 className="text-xs text-teal-500 tracking-wider font-bold">
          Our Team
        </h3>
        <h1 className="text-2xl font-bold underline underline-offset-4 mb-4">
          Meet the Professionals behind SafePoint
        </h1>
        <Team />
        <div className="open flex flex-col items-center justify-center text-center space-y-2 mt-8">
          <h1 className="text-sm text-black tracking-wider font-bold">
            Open Positions
          </h1>
          <p className="text-gray-600">
            Explore exciting career opportunities with Safepoint - Apply now!
          </p>
          <Link to="/Career" className="border border-[#33334e] py-2 px-4 bg-[#33334e] text-white active:translate-y-1 hover:bg-[#33334e]/90 rounded-md">
            Open Positions
          </Link>
        </div>
      </div>
      {/* Accordion */}
      <div className="accordion container mx-auto">
        <Accordion />
        <div className="open flex flex-col items-center justify-center text-center space-y-2">
          <h1 className="text-2xl font-semibold mt-8 text-black tracking-wider">
            Still Have Questions?
          </h1>
          <Link to="/Contact" className="border border-[#33334e] py-2 px-4 bg-[#33334e] text-white active:translate-y-1 hover:bg-[#33334e]/90 ">
            Contact Us
          </Link>
        </div>
      </div>
      {/* Our partners */}
      <div className="partners container mx-auto">
        <p className="text-xs text-teal-500 tracking-wider font-bold  text-center mt-24">
          OUR PARTNERS
        </p>
        <h3 className="text-2xl font-bold text-center underline underline-offset-8">
          Only Recognized By the Best
        </h3>
        <div className="partners-wrapper my-4 mt-8">
          <div className="scroll-content flex items-center w-full justify-evenly  flex-wrap">
            <img
              src={KDF}
              alt="Kenya-defence-forces-safepoint"
              className="size-36 object-cover "
            />
            <img
              src={NYS}
              alt="NYS-safepoint"
              className="size-36 object-cover "
            />
            <img
              src={redcross}
              alt="redcross-safepoint-partner"
              className="size-36 object-cover "
            />
            <img
              src={KFS}
              alt="Kenya-forest-service-safepoint-partner"
              className="size-36 object-fill "
            />
            <img
              src={wellsfargo}
              alt="wellsfargo-safepoint-partner"
              className="size-36 object-fill "
            />
          </div>
        </div>
      </div>
    </>
  );
}
