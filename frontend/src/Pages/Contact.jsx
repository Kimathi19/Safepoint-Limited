
export default function Contact(){
    return (
      <>
        <div className="header container mx-auto mt-8  text-center w-[80%] md:w-[70%] lg:w-[40%]">
          <h1 className="font-bold text-xl tracking wide ">Get In Touch</h1>
          <p className=" text-neutral-600 text-pretty mt-2">
            Safepoint Limited supplies quality PPE and uniforms to public and
            private clients in Kenya and East Africa, featuring &nbsp;
            <span className="text-[#6eb43f] font-semibold underline">
              SafeTrek 
            </span>
            , our affordable, high-quality safety boot.
          </p>
        </div>



        <div className="form-holder container mx-auto mt-12 py-6 flex flex-col items-center lg:items-start lg:flex-row gap-8 ">
          <div className="information p-4 lg:p-8  w-[90%] border border-neutral-300 shadow-xl  lg:w-1/4 rounded-md mx-12">
            <h2 className="font-bold tex-lg mb-2">Contact Information</h2>
            <p className="text-neutral-600">
              Safepoint supplies quality PPE, uniforms, and safety boots across
              East Africa.
            </p>
            <div className="location flex mt-4 gap-3 mb-4 items-center">
              <i className="fa-solid fa-house mt-1 border p-2 rounded-md bg-neutral-200 dark-icon"></i>
              <div>
                <p className="font-bold">Our Location</p>
                <p className="text-neutral-500 text-sm ">
                  Industrial Area, Nairobi
                </p>
              </div>
            </div>
            <div className="phone flex gap-3 mb-4 items-center">
              <i className="fa-solid fa-phone-volume mt-1 border p-2 rounded-md bg-neutral-200 dark-icon"></i>
              <div>
                <p className="font-bold">Phone Number</p>
                <p className="text-neutral-500 text-sm">(+254)-728-218-144</p>
              </div>
            </div>
            <div className="email flex gap-3  items-center">
              <i className="fa-solid fa-envelope mt-1 border p-2 rounded-md bg-neutral-200 dark-icon"></i>
              <div>
                <p className="font-bold">Email Address</p>
                <p className="text-neutral-500 text-sm ">
                  safepointlimited@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="form w-[90%] lg:w-3/4">
            <form className="w-[90%] justify-self-center p-4" action="" method="POST">
              <div className="holder flex gap-24 w-full mb-8">
                <label htmlFor="name">
                  <p className="font-semibold">Your Name</p>
                  <input
                    className="w-full h-10 px-2 border-b border-neutral-500 outline-none bg-transparent focus:border focus:border-[#6eb43f]"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </label>
                <label htmlFor="email">
                  <p className="font-semibold">Your email</p>
                  <input
                    className="w-full h-10 px-2 border-b border-black outline-none bg-transparent focus:border focus:border-[#6eb43f]"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </label>
              </div>
              <label className="" htmlFor="subject">
                <p className="font-semibold">Your Subject</p>
                <input
                  className="w-full h-10 px-2 mb-8  border-b border-black outline-none bg-transparent focus:border focus:border-[#6eb43f]"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter your subject"
                />
              </label>
              <label htmlFor="message">
                <p className="font-semibold">Leave a message</p>
                <textarea
                  className="w-full mb-8 mt-2 px-2 border border-black outline-none bg-transparent focus:border focus:border-[#6eb43f] p-1"
                  rows="4"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                />
              </label>
              <button
                className=" block border border-[#33334e] py-2 px-6 rounded-md bg-[#33334e] text-white active:translate-y-1 hover:bg-[#33334e]/90 "
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </>
    );
}