export default function Contact(){
    return (
      <>
        <div className="header container mx-auto mt-12  text-center w-[75%]">
          <h1>Get In Touch</h1>
          <p>
            Safepoint Limited supplies quality PPE and uniforms to public and
            private clients in Kenya and East Africa, featuring SafeTrek, our
            affordable, high-quality safety boot.
          </p>
        </div>
        <div className="form-holder container mx-auto mt-24 border border-black py-12 flex">
          <div className="information p-12 border border-black  w-1/4 rounded-md mx-12">
            <h2 className="font-bold">Contact Information</h2>
            <p className="text-neutral-600">
              Safepoint supplies quality PPE, uniforms, and safety boots across
              East Africa.
            </p>
            <div className="location flex gap-3 mb-4 items-center">
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
            <div className="email flex gap-3 mb-14 items-center">
              <i className="fa-solid fa-envelope mt-1 border p-2 rounded-md bg-neutral-200 dark-icon"></i>
              <div>
                <p className="font-bold">Email Address</p>
                <p className="text-neutral-500 text-sm ">
                  safepointlimited@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="form w-1/2  justify-self-center">
            <form className="w-full" action="" method="POST">
              <div className="holder flex gap-24 w-full mb-8">
                <label htmlFor="name">
                  <p>Your Name</p>
                  <input
                    className="w-full h-10 px-2 border-b border-black outline-none bg-transparent focus:border focus:border-[#6eb43f]"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </label>
                <label htmlFor="email">
                  <p>Your email</p>
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
                <p>Your Subject</p>
                <input
                  className="w-full h-10 px-2 mb-8  border-b border-black outline-none bg-transparent focus:border focus:border-[#6eb43f]"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter your subject"
                />
              </label>
              <label htmlFor="message">
                <p>Leave a message</p>
                <textarea
                  className="w-full mb-8  px-2 border border-black outline-none bg-transparent focus:border focus:border-[#6eb43f]"
                  rows="4" 
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                />
              </label>
              <button className="block " type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </>
    );
}