// import logo from "./logo.svg";
import "./Main.css";

import handImage from "../assets/page3/Frame (1).png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import dhoop2 from "../assets/page1/Rectangle 15.png";
import dhoop3 from "../assets/page1/Rectangle 16.png";
import dhoop4 from "../assets/page1/Rectangle 17.png";
import dhoop5 from "../assets/page1/Rectangle 18.png";
import dhoop6 from "../assets/page1/Rectangle 19.png";
import dhoop1 from "../assets/page1/Rectangle 14.png";

import bigFlamingo from "../assets/page3/bigFlammingo.png";
import tick from "../assets/page3/tick.png";
import Second from "./second";
import yog1 from "../assets/page1/yog1.png";
import yog2 from "../assets/page1/yog2.png";
import yog3 from "../assets/page1/yog3.png";
import Footer from "./footer";
import Header from "./header";

const dhoopImages = [
  { src: dhoop1, name: "Cone Dhoop" },
  { src: dhoop2, name: "Incense Holders" },
  { src: dhoop3, name: "Incense Sticks" },
  { src: dhoop4, name: "Shankh" },
  { src: dhoop5, name: "Kalash" },
  { src: dhoop6, name: "Buddha Statue" },
];
function Main() {
 return (
  <div className="font-poppins">
    <Header />

    <div className="mt-[220px] bg-[#FFEEF68A] w-full max-w-screen-xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-6 rounded-lg">
      <div className="bg-white rounded-full p-2 w-12 h-12 flex items-center justify-center">
        <button>
          <MdKeyboardArrowLeft className="text-pink-300 w-10 h-10" />
        </button>
      </div>

      <img
        src={handImage}
        alt="Hand"
        className="w-24 h-32 md:w-[261px] md:h-[204px] object-contain"
      />

      <div className="text-center md:text-left text-2xl md:text-4xl lg:text-5xl font-extrabold leading-snug flex-1">
        Transform Your Mind & Soul: <br className="hidden md:block" />
        Discover Your Spiritual Path with Our Courses
      </div>

      <div className="bg-white rounded-full p-2 w-12 h-12 flex items-center justify-center">
        <button>
          <MdKeyboardArrowRight className="text-pink-300 w-10 h-10" />
        </button>
      </div>
    </div>

    <div className="font-bold text-lg px-4 py-6 md:px-12 lg:px-24 xl:px-20 max-w-screen-xl mx-auto">
      Shop From Our Top Categories
    </div>

    <div className="flex flex-wrap gap-8 justify-center md:justify-center">
      {dhoopImages.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={image.src}
            alt={`Hand ${index + 1}`}
            className="w-24 h-32 sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[218px] object-contain"
          />
          <div className="mt-2 text-sm font-semibold text-center">
            {image.name}
          </div>
          <button className="mt-2 text-[#FA5C98] transition duration-300">
            Shop Now
          </button>
        </div>
      ))}
    </div>

    <div className="bg-[#FFF2F8] flex flex-col mt-[60px] xl:ml-[160px] w-full md:w-[1210px] h-auto px-4 py-8">
      <div className="text-[50px] font-extrabold text-center mb-20">
        Why PINK FLAMINGO?
      </div>

      <div className="flex flex-col md:flex-row items-center md:ml-[110px] gap-8">
        <img
          src={bigFlamingo}
          alt="big Flamingo"
          className="w-24 h-32 md:w-[261px] md:h-[204px] object-contain"
        />

        <div className="space-y-4 md:ml-[60px]">
          {[
            "Spirituality can provide them with a framework for understanding the universe and their role in it",
            "Coping with stress and uncertainty",
            "Spirituality can be a path to personal growth and self-discovery",
            "Spirituality can provide people with a sense of community and connection with others",
          ].map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-base md:text-lg text-gray-800"
            >
              <img src={tick} alt="tick" className="w-5 h-5" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="text-center text-[30px] font-bold mt-[50px]">
      Our Latest Blogs
    </div>

    <div className="mt-10 flex flex-wrap gap-8 justify-center px-4">
      <div className="w-full sm:w-[300px] md:w-[350px] bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
        <img src={yog1} alt="yog1" className="w-full h-auto rounded-md" />
        <h3 className="text-lg font-bold text-center mt-4">
          The Power of Mindfulness
        </h3>
        <p className="text-sm text-gray-700 mt-2 text-justify">
          Mindfulness is the practice of being present and fully engaged in the
          moment. It is about paying attention to our thoughts, feelings, and
          sensations in a non-judgmental way.
        </p>
        <button className="gradient-btn rounded-md p-2 mt-8">
          Read More
        </button>
      </div>

      <div className="w-full sm:w-[300px] md:w-[350px] bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
        <img src={yog2} alt="yog2" className="w-full h-auto rounded-md" />
        <h3 className="text-lg font-bold text-center mt-4">
          Connecting with the Divine
        </h3>
        <p className="text-sm text-gray-700 mt-2 text-justify">
          Connecting with the Divine refers to the process of establishing a
          spiritual connection or relationship with a higher power, such as God,
          the Universe, or a higher consciousness.
        </p>
        <button className="gradient-btn rounded-md p-2 mt-8">
          Read More
        </button>
      </div>

      <div className="w-full sm:w-[300px] md:w-[350px] bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
        <img src={yog3} alt="yog3" className="w-full h-auto rounded-md" />
        <h3 className="text-lg font-bold text-center mt-4">
          The Beauty of Forgiveness
        </h3>

        <p className="text-sm text-gray-700 mt-2 text-justify">
          The beauty of forgiveness lies in its transformative power. It has the
          ability to heal wounds and to restore relationships that have been
          damaged. Forgiveness brings a new level of understanding.
        </p>
        <button className="gradient-btn rounded-md p-2 mt-4">
          Read More
        </button>
      </div>
    </div>

    <Second />
    <Footer />
  </div>
);

}

export default Main;
