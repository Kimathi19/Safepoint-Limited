import React from 'react'


export default function Navbar() {
  return (
    <div className="nav-wrapper border w-screen ">
      <div className="nav flex gap-10 container mx-auto px-6 h-14 items-center relative">
        <div className="nav-logo">
          <a href="#" className="font-semibold text-[#6eb43f] capitalize tracking-wide ">
            Safepoint Limited
          </a>
        </div>

        <div className="nav-links text-[#00303c] hidden lg:flex ">
          <ul className="flex gap-12 ml-32 h-full items-center">
            <li className="home h-14 flex items-center hover:text-[#6eb43f] font-medium tracking-wide text-sm">
              <a href="#">Home</a>
            </li>

            <li className="home h-14 flex items-center hover:text-[#6eb43f] font-medium tracking-wide text-sm">
              <a href="#">About Us</a>
            </li>

            <li className=" services relative h-14 flex items-center ">
              <a className=" flex items-center gap-2 font-semibold text-sm tracking-wide" href="#">
                Our Services
                <i className="fa-solid fa-chevron-down"></i>
              </a>

              <div className="submenu absolute top-[100%] w-[500px] -left-56 border p-3 hidden animate__animated animate__fadeIn bg-white">
                <ul className="grid grid-cols-2 gap-4 ">
                  <li className="sub-item">
                    <a href="#" className="sub-link">
                      <i className="fa-solid fa-person"></i> Body Protection
                    </a>
                  </li>

                  <li className="sub-item">
                    <a href="#" className="sub-link">
                      <i className="fa-solid fa-mask-face"></i> Chemical
                      Protection
                    </a>
                  </li>

                  <li className="sub-item">
                    <a href="#" className="sub-link">
                      <i className="fa-solid fa-eye"></i> Eye Protection
                    </a>
                  </li>

                  <li className="sub-item">
                    <a href="#" className="sub-link">
                      <i className="fa-solid fa-shoe-prints"></i> Foot
                      Protection
                    </a>
                  </li>

                  <li className="sub-item">
                    <a href="#" className="sub-link">
                      <i className="fa-solid fa-hands"></i> Hand Protection
                    </a>
                  </li>

                  <li className="sub-item">
                    <a href="#" className="sub-link">
                      <i className="fa-solid fa-helmet-safety"></i> Head
                      Protection
                    </a>
                  </li>

                  <li className="sub-item">
                    <a href="#" className="sub-link">
                      <i className="fa-solid fa-vest"></i> Work Apparel
                    </a>
                  </li>

                  <li className="sub-item">
                    <a href="#" className="sub-link">
                      <i className="fa-solid fa-person-digging"></i>Construction
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="nav-buttons ml-auto hidden md:flex gap-5 ">
          <button className="contact border py-1.5 px-4 rounded-md text-white bg-[#6eb43f] hover:bg-[#00303c]  hover:text-white">
            Contact
          </button>
          <button className="order border py-1.5 px-4  bg-[#00303c] text-white rounded-md hover:bg-[#6eb43f]">
            Make Your Order
          </button>
        </div>

        {/* Mobile navigation */}
        <div className="hamburger ml-auto md:ml-0 lg:hidden ">
          <button
            type="button"
            className="hamburger-button border py-1 px-3 rounded-md"
            popovertarget="mypopover"
          >
            <i className="fa-solid fa-bars text-lg"></i>
          </button>

          <div
            className="mobile-submenu absolute top-[113px] w-screen h-screen left-0 border p-6 animate__animated animate__fadeIn bg-white"
            id="mypopover"
            popover="auto"
          >
            <ul className="grid md:grid-cols-2 gap-4 ">
              <li className=" sub-item h-14 flex items-center hover:text-[#6eb43f] ">
                <a href="#" className='sub-link'>
                  <i className=" fa-solid fa-house"></i>
                  Home
                </a>
              </li>
              <li className="sub-item ">
                <a href="#"className='sub-link'>
                  <i className=" fa-solid fa-users"></i>
                  About Us
                </a>
              </li>
              <li className="sub-item">
                <a href="#" className="sub-link">
                  <i className="fa-solid fa-person"></i> Body Protection
                </a>
              </li>

              <li className="sub-item">
                <a href="#" className="sub-link">
                  <i className="fa-solid fa-mask-face"></i> Chemical Protection
                </a>
              </li>

              <li className="sub-item">
                <a href="#" className="sub-link">
                  <i className="fa-solid fa-eye"></i> Eye Protection
                </a>
              </li>

              <li className="sub-item">
                <a href="#" className="sub-link">
                  <i className="fa-solid fa-shoe-prints"></i> Foot Protection
                </a>
              </li>

              <li className="sub-item">
                <a href="#" className="sub-link">
                  <i className="fa-solid fa-hands"></i> Hand Protection
                </a>
              </li>

              <li className="sub-item">
                <a href="#" className="sub-link">
                  <i className="fa-solid fa-helmet-safety"></i> Head Protection
                </a>
              </li>

              <li className="sub-item">
                <a href="#" className="sub-link">
                  <i className="fa-solid fa-vest"></i> Work Apparel
                </a>
              </li>

              <li className="sub-item">
                <a href="#" className="sub-link">
                  <i className="fa-solid fa-person-digging"></i>Construction
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
