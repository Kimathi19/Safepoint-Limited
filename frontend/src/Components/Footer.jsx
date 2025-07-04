import logo from "../Pages/Assets/Safepoint logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer w-full container mx-auto text-sm pt-8 px-6 mt-20 ">
      <div className="newsletter flex flex-col items-center justify-center px-4">
        <h3 className="font-bold text-center">
          Subscribe for the latest products and offers
        </h3>
        <span className="flex items-center gap-1 mt-2 flex-wrap gap-y-2">
          <fieldset className="flex items-center border gap-3 pl-2 w-[auto] flex-wrap bg-white text-black">
            <i className="fa-solid fa-user text-sm"></i>
            <input
              type="mail"
              placeholder="Enter Email Address"
              className="h-10 outline-0"
            />
          </fieldset>
          <button
            type="submit"
            className="py-2 px-6 bg-[#33334e] text-white font-semibold text-sm h-10"
          >
            Subscribe
          </button>
        </span>
      </div>
      <hr className="my-4 px-4 lg:px-4 border-neutral-300" />

      <div className="quicklinks flex flex-wrap lg:flex-nowrap justify-between gap-8">
        <div className="socials">
          <div className="limited font-bold gap-2 flex items-center mb-2 text-[#3f95ae] capitalize tracking-wide">
            <img className="w-8 md:w-10 " src={logo} alt="" />
            <h3>Safepoint Limited</h3>
          </div>

          <p className=" mb-4 max-w-[48ch]">
            Safepoint Limited manufactures a wide variety of protective wear for
            farm, industry and service center workers; and supplies a wide range
            of quality personal protective equipments (PPE).
          </p>

          <hr className="border-neutral-300 mb-4 mt-8" />

          <div className="icons flex gap-4">
            <a href="https://www.instagram.com/safe_point_/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://web.facebook.com/Safepointltdke/">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://x.com/SAFEPOINTLTD1">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <div className="links space-y-4">
          <h2 className="font-bold text-base tracking-wide">Products</h2>
          <section className="flex flex-col gap-2">
            <Link to="/BodyProtection"  className="hover:text-[#6eb43f]">
              Body Protection
            </Link>
            <Link to="/EyeProtection" className="hover:text-[#6eb43f]">
              Eye Protection
            </Link>
            <Link to="/ChemicalProtection" className="hover:text-[#6eb43f]">
              Chemical Protection
            </Link>
            <Link to="/HeadProtection" className="hover:text-[#6eb43f]">
              Head Protection
            </Link>
            <Link to="/HandProtection" className="hover:text-[#6eb43f]">
              Hand Protection
            </Link>
            <Link to="/FootProtection" className="hover:text-[#6eb43f]">
              Foot Protection
            </Link>
          </section>
        </div>

        <div className="office flex flex-col md:items-center md:self-center gap-4">
          <h2 className="font-bold tracking-wide md:text-center text-base">
            Office Information
          </h2>

          <section className="flex flex-wrap md:flex-nowrap  gap-8">
            <div className="w-full">
              <div className="footer-icons mb-2">
                <i className="fa-solid fa-location-dot"></i>
                <p className="font-semibold">Office Location</p>
              </div>
              <p>Industrial Area, Nairobi</p>
              <p>Commercial ST after Unga Ltd</p>
              <p>Yogi Corp, 3rd Floor Room 3A</p>
              <div className="footer-icons my-2">
                <i className="fa-solid fa-phone"></i>
                <p className="font-semibold">Office Contact</p>
              </div>
              <p>(+254)-728-218-144</p>
            </div>

            <div className="hours w-full">
              <div className="footer-icons mb-2">
                <i class="fa-solid fa-hourglass-start"></i>
                <p className="font-semibold">Operating Hours</p>
              </div>
              <p>Monday to Friday</p>
              <p className="mb-2">8:00 am - 5:00 pm</p>
              <p>Saturday</p>
              <p className="mb-2">9:00 am - 1:00 pm</p>
              <p>Sundays and Public Holidays</p>
              <p>Closed</p>
            </div>
          </section>
        </div>
      </div>

      <hr className="my-2 px-4 lg:px-4 border-neutral-300" />
      <div className="anchor mb-2 flex flex-col items-center justify-between lg:flex-row px-4 lg:px-6">
        <p className="text-sm font-semibold">
          Copyright &copy; 2024 . Safepoint Limited
        </p>
        <p className="text-sm font-bold">
          Developed with 🤎 by{" "}
          <a href="https://briankimathi.vercel.app/" target="_blank">
            _Kimathi
          </a>
        </p>
      </div>
    </div>
  );
}

