import React from 'react'

const Popover = () => {
  return (
    <div className='min-h-[60dvh]'>
      <div id="modal-dialog" className=" flex justify-center ">
        <form
          className=" m-4 shadow-lg  w-[90%] bg-white md:max-w-[30rem] rounded-md overflow-hidden"
          action="getlikekimathi@gmail.com"
          method='post'
        >
          <div className="heading flex items-center justify-center bg-[#3f95ae] text-white gap-4 py-2">
            <i className="fa-solid fa-cart-shopping animate-bounce"></i>
            <h1>Make your Order</h1>
          </div>
          <div className="form flex flex-col p-8 gap-4">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                className="h-10 w-full px-4 bg-[whitesmoke] outline-none border focus:border-[#6eb43f] rounded-sm"
                placeholder="Name"
                required
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                className=" h-10 w-full px-4 bg-[whitesmoke] outline-none border focus:border-[#6eb43f] rounded-sm"
                placeholder="Email Address"
                required
              />
            </label>
            <label className="" htmlFor="subject">
              <input
                className="h-10 w-full px-4 bg-[whitesmoke] outline-none border focus:border-[#6eb43f] rounded-sm"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </label>
            <label htmlFor="message">
              <textarea
                className=" w-full px-2
                py-1 bg-[whitesmoke] outline-none border focus:border-[#6eb43f] rounded-sm"
                rows="4"
                id="message"
                name="message"
                placeholder="Enter message"
              />
            </label>
            <button
              className="py-2 text-white bg-[#3f95ae] hover:bg-[#3f95ae]/90 transition-colors active:translate-y-[2px]"
              type="Submit"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popover