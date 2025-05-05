import Header from "./header";
import ProductDetail1 from "../assets/page2/ProductDetail (1).png";
import ProductDetail2 from "../assets/page2/ProductDetail (2).png";
import ProductDetail3 from "../assets/page2/ProductDetail (3).png";
import ProductDetail4 from "../assets/page2/ProductDetail (4).png";
import ProductDetail5 from "../assets/page2/ProductDetail (5).png";
import Product1 from "../assets/page2/products1 (5).png";
import Product2 from "../assets/page2/products1 (13).png";
import Product3 from "../assets/page2/products1 (14).png";
import Product4 from "../assets/page2/products1 (16).png";
import blackHeart from "../assets/page2/black-heart.png";
import redHeart from "../assets/page2/red-heart.png";
import Footer from "./footer";

const ProductDetail = () => {
  return (
    <div className="font-poppins">
      <Header />

      <div className="mt-[310px] sm:mt-[280px] md:mt-[280px] xl:mt-[210px] text-[#C1C1C1] ml-4 md:ml-[135px]">
        <p>Product &gt; Dhoop Cones &gt; Jar Cones</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-6 md:mt-10 px-4 md:px-[135px]">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-row md:flex-col gap-2 sm:gap-3 md:gap-4">
            {[
              ProductDetail1,
              ProductDetail2,
              ProductDetail3,
              ProductDetail4,
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumbnail-${i}`}
                className="object-cover border border-gray-200 rounded hover:border-[#FA5C98] cursor-pointer w-16 sm:w-24 md:w-28"
              />
            ))}
          </div>

          <div className="bg-[#FFF2F8] w-full md:w-[450px] h-auto p-4 flex justify-center items-center md:w-auto">
            <img
              src={ProductDetail5}
              alt="main product"
              className="w-40 sm:w-60 md:w-72 lg:w-80 xl:w-[299px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="flex-1 mt-6 md:mt-0">
          <p>
            <span className="font-semibold">Brand: </span> Rashmi Divine
            Solutions
          </p>
          <p>
            <span className="font-semibold">Scent: </span> Floral
          </p>
          <p>
            <span className="font-semibold"> Availability: </span> Only 2 in
            Stock
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 mt-[10px]">
            Lavender Dhoop Cone Sticks Pack of 100-Piece/Jar by Rashmi Divine
          </h1>
          <div className="mt-[8px]">
            <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
              <li>
                Lavender Dhoop sticks activate your senses and relax the nerves,
                making you less anxious. They also hold the power to cleanse the
                air.
              </li>
              <li>
                Lavender Crafted out of the finest quality ingredients, this
                leaves a magnificent and alluring fragrance and adds more to
                your ‘spiritual time
              </li>
              <li>
                Lavender Dhoop sticks are Charcoal Free Dhoop Sticks with
                soothing fragrances which don't cause eye irritation and
                headache.
              </li>
            </ul>
          </div>

          <div className="flex items-center text-[28px] mt-[10px] text-yellow-500 mb-3">
            ★★★★☆
            <span className="text-sm text-gray-600 ml-2">(245 ratings)</span>
          </div>
          <div className=" text-[14px] ">USD(incl. of all taxes)</div>

          <div className="text-2xl mt-[15px] font-bold mb-4">$4.05</div>

          <div className="flex gap-7">
            <div className="flex items-center border rounded-md w-fit px-3 py-1 gap-4">
              <button className="text-xl font-semibold hover:text-black">
                −
              </button>
              <span className="text-base font-medium">1</span>
              <button className="text-xl font-semibold hover:text-black">
                +
              </button>
            </div>
            <div className="flex gap-4">
              <button className="gradient-btn text-white px-6 py-2 rounded hover:bg-[#e24b87] transition">
                Buy Now
              </button>
              <button className="border border-orange-400 text-orange-400 px-6 py-2 rounded hover:bg-[#fa5c981a] transition">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 mb-6">
            Enjoy the calming scent of sandalwood with our premium Jar Dhoop
            Cones. Perfect for pooja, meditation, and creating a peaceful home
            atmosphere.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-[135px] mt-10 font-poppins">
        {/* Responsive Headings */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-[90px] text-base sm:text-lg md:text-xl font-medium text-gray-800 mb-6">
          <span className="cursor-pointer hover:text-[#FA5C98] transition">
            Description
          </span>
          <span className="cursor-pointer hover:text-[#FA5C98] transition">
            Product Information
          </span>
          <span className="cursor-pointer hover:text-[#FA5C98] transition">
            Reviews
          </span>
        </div>
        <hr className="border-t border-gray-300 mx-auto w-full md:w-[100%] mb-6" />

        {/* Centered Paragraph */}
        <div className="max-w-4xl mx-auto text-sm sm:text-base text-gray-700 ">
          Dhoop incense cone made from natural herbs and scented. Long lasting
          enthralling dhoop batti for regular use – encouraging and cheering
          dhoop incense cones.
        </div>
      </div>

      <div className="mt-[60px]">
        <h2 className="text-center text-[30px] font-bold">Related Products</h2>
      </div>

      <div className="flex flex-wrap gap-10 justify-center mt-[60px] px-4 md:px-[135px] mb-[80px]">
        <div className="relative w-[180px] sm:w-[200px] md:w-[220px] shadow-md rounded-md overflow-hidden">
          <img
            src={Product1}
            alt="Product 1"
            className="w-[279px] h-[375px] object-coverr"
          />

          <div className="absolute top-2 left-2 bg-[#12A05C] text-white text-xs font-semibold px-2 py-1 rounded-full">
            New
          </div>

          <div className="absolute top-2 right-2 bg-slate-200 text-white text-xs p-1 rounded-full cursor-pointer">
            <img src={redHeart} alt="" />
          </div>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[80%]">
            <button className="w-full bg-[#FA5C98] text-white text-sm py-2 rounded hover:bg-pink-500 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="relative w-[180px] sm:w-[200px] md:w-[220px] shadow-md rounded-md overflow-hidden">
          <img src={Product2} alt="Product 2" className="w-[279px] h-[375px]" />

          <div className="absolute top-2 left-2 bg-[#E73C17] text-white text-xs font-semibold px-2 py-1 rounded-full">
            -10%
          </div>

          <div className="absolute top-2 right-2 bg-slate-100 text-white text-xs p-1 rounded-full cursor-pointer">
            <img src={blackHeart} alt="" />
          </div>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[80%]">
            <button className="w-full bg-[#FA5C98] text-white text-sm py-2 rounded hover:bg-pink-500 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="relative w-[180px] sm:w-[200px] md:w-[220px] shadow-md rounded-md overflow-hidden">
          <img src={Product3} alt="Product 3" className="w-[279px] h-[375px]" />

          <div className="absolute top-2 left-2 bg-[#FF9900] text-white text-xs font-semibold px-2 py-1 rounded-full">
            Hot
          </div>

          <div className="absolute top-2 right-2 bg-slate-100 text-white text-xs p-1 rounded-full cursor-pointer">
            <img src={blackHeart} alt="" />
          </div>

          <div className="absolute bottom-2  left-1/2 transform -translate-x-1/2 w-[80%]">
            <button className="w-full bg-[#FA5C98] text-white text-sm py-2 rounded hover:bg-pink-500 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="relative w-[180px] sm:w-[200px] md:w-[220px] shadow-md rounded-md overflow-hidden">
          <img src={Product4} alt="Product 4" className="w-[279px] h-[375px]" />

          <div className="absolute top-2 left-2 bg-[#22D734] text-white text-xs font-semibold px-2 py-1 rounded-full">
            New
          </div>

          <div className="absolute top-2 right-2 bg-slate-100 text-white text-xs p-1 rounded-full cursor-pointer">
            <img src={blackHeart} alt="" />
          </div>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[80%]">
            <button className="w-full bg-[#C6C6C6] text-white text-sm py-2 rounded  transition">
              Out of Stock
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
