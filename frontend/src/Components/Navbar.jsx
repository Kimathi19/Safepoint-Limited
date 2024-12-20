import React, { useState } from 'react'
import logo from "../Pages/Assets/Safepoint logo.png"
import { Link, Outlet } from 'react-router-dom';



export default function Navbar() {
  const [IsOpen, setIsOpen] = useState(false);

  function toggleMenu(){
    setIsOpen(!IsOpen);
  }

  function hideMenu(){
    setIsOpen(false);
  }

  return (
    <div className="nav-wrapper w-full sticky top-0 z-50 bg-[aliceblue]/90 backdrop-blur-lg border-b border-neutral-200 ">
      <div className="nav flex gap-10 container mx-auto px-6 h-16 items-center relative">
        <div className="nav-logo">
          <Link
            to="/"
            className="font-bold gap-2 flex items-center   text-[#3f95ae] capitalize tracking-wide "
            onClick={hideMenu}
          >
            <img className="w-8 md:w-10 " src={logo} alt="" />
            Safepoint Limited
          </Link>
        </div>

        <div className="nav-links text-[#00303c] hidden lg:flex ">
          <ul className="flex ml-32 h-full items-center">
            <li className="home h-16 flex items-center hover:text-[#6eb43f] font-medium tracking-wide text-sm">
              <Link to="/" className='h-full flex items-center px-4'>Home</Link>
            </li>

            <li className="home h-16 flex items-center hover:text-[#6eb43f] font-medium tracking-wide text-sm">
              <Link to="/About" className='h-full flex items-center px-4'>About Us</Link>
            </li>

            <li className=" services relative h-16 flex items-center px-4">
              <a className=" flex items-center gap-2 font-semibold text-sm tracking-wide cursor-pointer">
                Our Services
                <i className="fa-solid fa-chevron-down"></i>
              </a>

              <div className="submenu absolute top-[100%] w-[500px] -left-56 border p-3 hidden animate__animated animate__fadeIn bg-[aliceblue] z-50 shadow-lg rounded-b">
                <ul className="grid grid-cols-2 gap-4 ">
                  <li className="sub-item">
                    <Link to="/BodyProtection" className="sub-link">
                      <i className="fa-solid fa-person"></i> Body Protection
                    </Link>
                  </li>

                  <li className="sub-item">
                    <Link to="/ChemicalProtection" className="sub-link">
                      <i className="fa-solid fa-mask-face"></i> Chemical
                      Protection
                    </Link>
                  </li>

                  <li className="sub-item">
                    <Link to="/EyeProtection" className="sub-link">
                      <i className="fa-solid fa-eye"></i> Eye Protection
                    </Link>
                  </li>

                  <li className="sub-item">
                    <Link to="/FootProtection" className="sub-link">
                      <i className="fa-solid fa-shoe-prints"></i> Foot
                      Protection
                    </Link>
                  </li>

                  <li className="sub-item">
                    <Link to="/HandProtection" className="sub-link">
                      <i className="fa-solid fa-hands"></i> Hand Protection
                    </Link>
                  </li>

                  <li className="sub-item">
                    <Link to="/HeadProtection" className="sub-link">
                      <i className="fa-solid fa-helmet-safety"></i> Head
                      Protection
                    </Link>
                  </li>

                  <li className="sub-item">
                    <Link to="/WorkApparel" className="sub-link">
                      <i className="fa-solid fa-vest"></i> Work Apparel
                    </Link>
                  </li>

                  <li className="sub-item">
                    <Link to="/ConstructionServices" className="sub-link">
                      <i className="fa-solid fa-person-digging"></i>Construction
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="nav-buttons ml-auto hidden lg:flex gap-5 ">
          <Link
            to="/Contact"
            className="contact border-2 py-2 px-4 rounded-md border-[#6eb43f] hover:bg-[#6eb43f] hover:text-white"
          >
            Contact
          </Link>
          <Link
            to="/Popover"
            className="order border py-2 px-4  bg-[#33334e] text-white rounded-md hover:bg-[#33334e]/90 transition-colors"
          >
            Make Your Order
          </Link>
        </div>

        {/* Mobile navigation */}
        <div className="hamburger ml-auto lg:hidden ">
          <button
            type="button"
            className="hamburger-button border py-1 px-3 rounded hover:bg-neutral-100 hover:border-neutral-200"
            onClick={toggleMenu}
          >
            {IsOpen ? (
              <i className="fa-solid fa-xmark text-[21px] py-1"></i>
            ) : (
              <i className="fa-solid fa-bars text-lg"></i>
            )}
          </button>

          {IsOpen && (
            <div className="mobile-submenu absolute top-[100%] w-screen h-screen overflow-auto left-0 p-6 animate__animated animate__fadeIn bg-[aliceblue]">
              <ul className="grid md:grid-cols-2 gap-4 ">
                <button className=" sub-item h-14 flex items-center hover:text-[#6eb43f] ">
                  <Link to="/" className="sub-link" onClick={hideMenu}>
                    <i className=" fa-solid fa-house"></i>
                    Home
                  </Link>
                </button>
                <li className="sub-item ">
                  <Link to="/About" className="sub-link" onClick={hideMenu}>
                    <i className=" fa-solid fa-users"></i>
                    About Us
                  </Link>
                </li>
                <li className="sub-item">
                  <Link
                    to="/BodyProtection"
                    className="sub-link"
                    onClick={hideMenu}
                  >
                    <i className="fa-solid fa-person"></i> Body Protection
                  </Link>
                </li>

                <li className="sub-item">
                  <Link
                    to="/ChemicalProtection"
                    className="sub-link"
                    onClick={hideMenu}
                  >
                    <i className="fa-solid fa-mask-face"></i> Chemical
                    Protection
                  </Link>
                </li>

                <li className="sub-item">
                  <Link
                    to="/EyeProtection"
                    className="sub-link"
                    onClick={hideMenu}
                  >
                    <i className="fa-solid fa-eye"></i> Eye Protection
                  </Link>
                </li>

                <li className="sub-item">
                  <Link
                    to="/FootProtection"
                    className="sub-link"
                    onClick={hideMenu}
                  >
                    <i className="fa-solid fa-shoe-prints"></i> Foot Protection
                  </Link>
                </li>

                <li className="sub-item">
                  <Link
                    to="/HandProtection"
                    className="sub-link"
                    onClick={hideMenu}
                  >
                    <i className="fa-solid fa-hands"></i> Hand Protection
                  </Link>
                </li>

                <li className="sub-item">
                  <Link
                    to="/HeadProtection"
                    className="sub-link"
                    onClick={hideMenu}
                  >
                    <i className="fa-solid fa-helmet-safety"></i> Head
                    Protection
                  </Link>
                </li>

                <li className="sub-item">
                  <Link
                    to="/WorkApparel"
                    className="sub-link"
                    onClick={hideMenu}
                  >
                    <i className="fa-solid fa-vest"></i> Work Apparel
                  </Link>
                </li>

                <li className="sub-item">
                  <Link
                    to="/ConstructionServices"
                    className="sub-link"
                    onClick={hideMenu}
                  >
                    <i className="fa-solid fa-person-digging"></i>Construction
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
