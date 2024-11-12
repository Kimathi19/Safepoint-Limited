import logo from "../Pages/Assets/Safepoint logo.png";

export default function Footer() {
  return (
    <div className="footer w-full absolute botttom-0  text pt-8 px-6">
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
      <hr className="my-4 mx-4 lg:mx-20 border-neutral-700" />

      <div className="quicklinks gap-8">
        <div className="socials">
          <div className="limited font-bold gap-2 flex items-center   text-[#3f95ae] capitalize tracking-wide">
            <img className="w-8 md:w-10 " src={logo} alt="" />
            <h3>Safepoint Limited</h3>
          </div>
          <p>
            Safepoint Limited manufactures a wide variety of protective wear for
            farm, industry and service center workers; and supplies a wide range
            of quality personal protective equipments (PPE).
          </p>
          <p>Reach us on social media</p>
          <hr />
          <div className="icons flex gap-4">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
          </div>
        </div>
        <div className="links">
          <h2 className="font-bold text-center">Products</h2>
          <p>
            {" "}
            <a href="">Body Protection</a>
          </p>
          <p>
            {" "}
            <a href="">Chemical Protection </a>
          </p>
          <p>
            {" "}
            <a href="">Eye Protection </a>
          </p>
          <p>
            {" "}
            <a href="">Head Protection </a>
          </p>
          <p>
            {" "}
            <a href="">Hand Protection </a>
          </p>
          <p>
            {" "}
            <a href="">Foot Protection </a>
          </p>
        </div>
        <div className="office">
          <h2 className="font-bold text-center">Office Information</h2>
          <div className="footer-icons">
            <i className="fa-solid fa-location-dot"></i>
            <p>Office location</p>
          </div>
          <p>Industrial Area, Nairobi</p>
          <p>Commercial ST after Unga Ltd</p>
          <p>Yogi Corp, 3rd Floor Room 3A</p>
          <div className="footer-icons">
            <i className="fa-solid fa-phone"></i>
            <p>Office contact</p>
          </div>
          <p>(+254)-728-218-144</p>
        </div>
        <div className="hours">
          <div className="footer-icons">
            <i class="fa-solid fa-hourglass-start"></i>
            <p>Operating hours</p>
          </div>
          <p>Monday to Friday</p>
          <p>8:00 am - 5:00 pm</p>
          <p>Saturday</p>
          <p>9:00 am - 1:00 pm</p>
          <p>Sundays and Public Holidays</p>
          <p>Closed</p>
        </div>
      </div>
      <hr className="my-4 px-4 lg:mx-20 border-neutral-700" />
      <div className="anchor mb-2 flex flex-col items-center justify-between lg:flex-row px-4 lg:px-20">
        <p className="text-sm font-semibold">
          Copyright &copy; 2024 . Safepoint Limited
        </p>
        <p className="text-sm font-bold">
          Developed with 🤎 by{" "}
          <a href="https://github.com/Kimathi19" target="_blank">
            _Kimathi
          </a>
        </p>
      </div>
    </div>
  );
}
