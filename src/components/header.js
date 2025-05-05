// import logo from "./logo.svg";
// import "../";
// import aa from "../public/"
import border from "../assets/page3/Group 107.png";
import flamingo from "../assets/page3/Group.png";
import { MapPin } from "lucide-react";
import locationicon from "../assets/page3/location 1.png";
import { Search } from "lucide-react";
import store from "../assets/page3/storee.png";
import people from "../assets/page3/peopleicon.png";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
    
  return (
    <div className="font-poppins fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="relative w-full">
        <img src={border} alt="border" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-black text-xs sm:text-sm md:text-lg font-semibold text-center px-2">
            QUICK BUY! Get up to 25% off on All Stones
          </div>
        </div>
      </div>

      <div className="mt-8 px-4 flex flex-wrap items-center justify-between gap-4 font-righteous max-w-screen-xl mx-auto">
        <Link to="/Home">

        <div className="flex items-center min-w-[200px]">
          <img src={flamingo} alt="flamingo" className="h-10 sm:h-12 md:h-14" />
          <div className="ml-2 mt-1">
            <div>
              <span className="text-pink-400">PINK</span>
              <span className="text-black">FLAMINGO</span>
            </div>
            <div className="text-pink-400 text-[10px]">TAGLINE GOES HERE</div>
          </div>
        </div>
        </Link>

        <div className="flex-1 w-full md:w-[600px] h-[49px] flex items-center border border-gray-300 rounded-lg shadow-sm bg-white">
          <div className="font-manrope flex items-center gap-1 px-2 bg-[#FA5C98] text-white w-[120px] h-[49px] rounded">
            <img src={locationicon} alt="location" className="" />
            <div className="flex flex-col leading-tight">
              <span className="text-[15px] font-medium">Deliver to</span>
              <span className="text-[15px]">110094</span>
            </div>
          </div>

          <input
            type="text"
            placeholder="Search for medication & Wellness products"
            className="ml-2 flex-1 outline-none bg-transparent placeholder-gray-400 text-sm font-poppins"
          />
          <Search size={18} className="text-gray-500  mr-3" />
        </div>

        <div className="flex items-center gap-4">
          <button>
            <img src={store} alt="store" className="w-6 h-6" />
          </button>
          <button>
            <img src={people} alt="people" className="w-6 h-6" />
          </button>
          <div className="font-semibold text-sm font-poppins">
            SIGN IN / SIGNUP
          </div>
        </div>
      </div>

      <div className="mt-8 mb-[10px] px-4 xl:ml-[340px] md:ml-[120px] md:text-[18px] flex flex-wrap justify-center md:gap-10 md:justify-start gap-6 text-base font-semibold max-w-screen-xl mx-auto">
        <div className="hover:text-[#FA5C98] cursor-pointer">
        <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? 'text-[#FA5C98] font-semibold' :  'text-gray-700'
  }
>
 Home
</NavLink>
        </div>

        <div className="relative group inline-block text-left">
     
        <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? 'text-gray-700' : 'text-[#FA5C98] font-semibold'
  }
> <div className="flex items-center gap-1 cursor-pointer hover:text-[#FA5C98]">
            <span> Products</span>
            <ChevronDown size={16} className="text-[#FA5C98]"/>
          </div>
 
  
</NavLink>

      
      <div className="absolute hidden group-hover:block  bg-white shadow-lg z-20  rounded md:w-[200px]">
        {[
          "Dhoop Cones",
          "Incense Holders",
          "Yantras",
          "Incense Sticks",
          "Pooja Thali Sets",
          "Shankh",
          "Kalash",
          "Book Rests",
        ].map((item) => (
          <div
            key={item}
            className={`relative px-4 py-2 hover:bg-gray-100 hover:text-[#FA5C98] cursor-pointer 
              ${item === "Dhoop Cones" ? "group/sub" : ""}`}
          >
            {item}

            {/* Nested Submenu for Dhoop Cones */}
            {item === "Dhoop Cones" && (
              <div className="absolute left-full top-0  hidden group-hover/sub:block bg-white shadow-lg rounded md:w-[220px]  z-30">
                {[
                  <Link to="/Products/jar-cones">Jar Cones</Link>,
                  "Chandan Bamboo Dhoop",
                  "Backflow Cone Dhoop",
                  "Buddha Red Incense Cone",
                  "Mountain Sandal Dhoop",
                  "Cone Sandal Dhoop",
                ].map((subItem) => (
                  <div
                    key={subItem}
                    className="px-4 py-2 text-gray-800 hover:text-[#FA5C98] hover:bg-gray-100 cursor-pointer"

                  >
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

        <div className="relative group inline-block">
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#FA5C98]">
            <span>Services</span>
            <ChevronDown size={16} className="text-[#FA5C98]" />
          </div>
          <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg z-10 min-w-[150px] py-2 rounded">
            {["Service 1", "service2"].map((item) => (
              <div
                key={item}
                className="px-4 py-2 hover:bg-gray-100 hover:text-[#FA5C98] cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hover:text-[#FA5C98] cursor-pointer">Courses</div>
        <div className="hover:text-[#FA5C98] cursor-pointer">Blogs</div>
        <div className="hover:text-[#FA5C98] cursor-pointer">Videos</div>
        <div className="hover:text-[#FA5C98] cursor-pointer">Contact Us</div>
      </div>
    </div>
  );
};
export default Header;
