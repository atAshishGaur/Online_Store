import React from "react";
import { ChevronDown } from "lucide-react";
import { Phone, Mail, User } from "lucide-react";
import fb from "../assets/page3/fb.png"
import twitter from "../assets/page3/twitter.png";
import insta from "../assets/page3/insta.png"
import youtube from "../assets/page3/youtube.png"

const Footer = () => {
  return (
    <div className="w-full bg-[#FA5C98] font-roboto">

    <div className="border-b border-white pb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start px-4">
      
        <div className="flex text-white space-x-4 mt-10 md:mt-24 md:ml-24 w-full md:w-auto justify-center md:justify-start">
          <Mail className="w-6 h-6 md:w-8 md:h-8" />
          <span className="text-lg font-semibold">Sign Up To Shop Now</span>
        </div>
  
        <div className="w-full max-w-[592px] mt-6 md:mt-[75px] md:ml-auto flex justify-center md:justify-start px-4">
          <div className="w-full h-[49px] bg-white rounded-md flex items-center shadow-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-full px-4 text-gray-700 focus:outline-none"
            />
            <button className="h-[40px] mr-[4px] rounded-md px-6 bg-[#FA5C98] text-white text-sm font-semibold hover:bg-pink-600 transition duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  

    <div className="flex flex-wrap justify-between gap-y-10 px-6 md:px-20 py-10 text-white text-sm">
     
      <div className="w-full sm:w-[45%] md:w-[20%]">
        <h3 className="text-xl font-medium mb-3">Contact Us</h3>
        <p className="text-white/80 mb-2">Demo Store</p>
        <p className="text-white/80 mb-2">No. 1258 Utawala, Nairobi, 01010</p>
        <p className="text-white/80 mb-2">Kenya</p>
        <p className="text-white/80 mb-2">+25470101010</p>
        <p className="text-white/80">example@gmail.com</p>
      </div>
  
     
      <div className="w-full sm:w-[45%] md:w-[15%]">
        <h3 className="text-xl font-medium mb-3">Information</h3>
        <p className="text-white/80 mb-2">Privacy Policy</p>
        <p className="text-white/80 mb-2">Refund Policy</p>
        <p className="text-white/80 mb-2">Shipping Policy</p>
        <p className="text-white/80 mb-2">Terms Of Service</p>
        <p className="text-white/80">Blogs</p>
      </div>
  
      <div className="w-full sm:w-[45%] md:w-[15%]">
        <h3 className="text-xl font-medium mb-3">Account</h3>
        <p className="text-white/80 mb-2">Search</p>
        <p className="text-white/80 mb-2">About Us</p>
        <p className="text-white/80 mb-2">Faq</p>
        <p className="text-white/80 mb-2">Contact</p>
        <p className="text-white/80">Help</p>
      </div>
  
 
      <div className="w-full sm:w-[45%] md:w-[15%]">
        <h3 className="text-xl font-medium mb-3">Quick Links</h3>
        <p className="text-white/80 mb-2">Shankh</p>
        <p className="text-white/80 mb-2">Kalash</p>
        <p className="text-white/80 mb-2">Incense Holders</p>
        <p className="text-white/80">Cone Dhoop</p>
      </div>
  
      <div className="w-full sm:w-[45%] md:w-[20%]">
        <h3 className="text-xl font-medium mb-3">Social Media</h3>
        <p className="text-white/80">Follow us on social media and stay updated.</p>
        <div className="flex mt-4 gap-3">
          <img src={twitter} alt="twitter" className="w-6 h-6" />
          <img src={fb} alt="fb" className="w-6 h-6" />
          <img src={insta} alt="insta" className="w-6 h-6" />
          <img src={youtube} alt="youtube" className="w-6 h-6" />
        </div>
      </div>
    </div>
  </div>
  );
};
export default Footer;
