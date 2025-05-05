import React from "react";
import { ChevronDown } from "lucide-react";
import layer from "../assets/page3/Layer 2.png";
import { Phone, Mail,User } from "lucide-react";

// Capitalize the component name to 'Second'
const Second=()=> {
  return (
    <div className="font-poppins px-4 py-12">
    {/* Heading */}
    <h2 className="text-center text-3xl font-bold mb-10">Let’s Connect</h2>

    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
      {/* Form Section */}
      <div className="w-full max-w-2xl space-y-6 ">
        <form className="space-y-4">
          {/* Name & Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Name */}
            <div className="flex-1 flex items-center shadow-md rounded-md px-4 h-[66px]">
            <User className="text-[#FA5C98]  mr-6" />
            <div className="h-6 w-px bg-gray-300 mx-4" />
              <input
                type="text"
                placeholder="Name"
                className="w-full h-full focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex-1 flex items-center  shadow-md rounded-md px-4 h-[66px]">
              <Phone className="text-[#FA5C98] mr-6" />
              <div className="h-6 w-px bg-gray-300 mx-4" />
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Phone Number"
                className="w-full h-full focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center shadow-md rounded-md px-4 h-[66px]">
            <Mail className="text-[#FA5C98] mr-6 " />
            <div className="h-6 w-px bg-gray-300 mx-4" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full h-full focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="shadow-md rounded-md px-4 py-2">
            <textarea
              placeholder="Write your message"
              className="w-full h-32 resize-none focus:outline-none"
            />
          </div>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-md">
        <img src={layer} alt="layer" className="w-full h-auto rounded" />
      </div>
    </div>
  </div>
  );
}

export default Second;
