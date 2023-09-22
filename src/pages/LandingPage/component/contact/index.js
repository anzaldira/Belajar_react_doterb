import React from "react";

const Contact = () => { 
  return (
    <div className="w-full p-5 m-auto bg-white rounded-md mt-10 shadow-xl shadow-blue-600/40 ring ring-2 ring-white-600 lg:max-w-xl">
      <div className="mb-3 pt-0">
        <h3 className="text-center text-gray-800 font-bold text-s">Contact Us</h3>
      </div> 
      <form>
        <div className="mb-3 pt-0">      
            
          <input 
            type="text"
            placeholder="Your name"
            name="name"
            className="px-3 py-3 placeholder-gray-600 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0"> 
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-600 text-gray-800 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="Password"
            placeholder="Password"
            name="Password"
            className="px-3 py-3 placeholder-gray-600 text-gray-800 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit" 
          >
            Send a contact
          </button>
        </div>
        </form>
    </div>
  );
};

export default Contact;