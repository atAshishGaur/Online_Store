import React from "react";
import Header from "./header";
import product1 from "../assets/page2/products1 (2).png";
import product2 from "../assets/page2/products1 (1).png";
import product3 from "../assets/page2/products1 (3).png";
import product4 from "../assets/page2/products1 (4).png";
import product5 from "../assets/page2/products1 (5).png";
import product6 from "../assets/page2/products1 (6).png";
import product7 from "../assets/page2/products1 (7).png";
import product8 from "../assets/page2/products1 (8).png";
import product9 from "../assets/page2/products1 (9).png";
import product10 from "../assets/page2/products1 (10).png";
import product11 from "../assets/page2/products1 (11).png";
import product12 from "../assets/page2/products1 (12).png";
import product13 from "../assets/page2/products1 (13).png";
import product14 from "../assets/page2/products1 (14).png";
import product15 from "../assets/page2/products1 (15).png";
import product16 from "../assets/page2/products1 (16).png";
import Footer from "./footer";
import { Link } from "react-router-dom";



const productImages = [
    product1, product2, product3, product4,
    product5, product6, product7, product8,
    product9, product10, product11, product12,
    product13, product14, product15, product16,
  ];
  const products = [
    {
      id: 1,
      image: product1,link: "/Products/jar-cones/Product-Detail",
      title: "DHOOP INCENSE CONES",
      description: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
      rating: 4.5,
      price : "$2.05"
    },
    {
      id: 2,
      image: product2,link: "/Products/jar-cones/Product-Detail",
      title: "HEM Incense",
      description: "100 pcs Sandal Dhoop Cones for Calm Mind",
      rating: 4.2,
      price : "$1.05"
    },
    {
      id: 3,
      image: product3,link: "/Products/jar-cones/Product-Detail",
      title: "Mystic Temple Incense",
      description: "Floral fragrance cones – pack of 100",
      rating: 4.0,
      price : "$2.75"
    },
    {
      id: 4,
      image: product4,
      title: "SAC Incense",
      description: "Relaxing dhoop cones with 4 variants",
      rating: 4.3,
      price : "$5.05"
    },
    {
      id: 5,
      image: product5,
      title: "Frankincense and Myrrh",
      description: "Premium mogra cones for everyday use",
      rating: 4.6,
      price : "$3.05"
    },
    {
      id: 6,
      image: product6,
      title: "Eucalyptus INCENSE CONES",
      description: "Fresh citrus combo dhoop cones",
      rating: 4.1,
      price : "$10.05"
    },
    {
      id: 7,
      image: product7,
      title: "Lavender INCENSE CONES",
      description: "Blended kesar-chandan aroma cones",
      rating: 4.4,
      price : "$4.05"
    },
    {
      id: 8,
      image: product8,
      title: "Sage INCENSE CONES",
      description: "100 pcs Ayurvedic tulsi cones",
      rating: 4.0,
      price : "$0.75"
    },
    {
      id: 9,
      image: product9,
      title: "Frankincense and Myrrh",
      description: "Earthy, grounding fragrance pack",
      rating: 4.2,
      price : "$3.05"
    },
    {
      id: 10,
      image: product10,
      title: "Eucalyptus INCENSE CONES",
      description: "Soothing jasmine cones for meditation",
      rating: 4.5,
      price : "$10.05"
    },
    {
      id: 11,
      image: product11,
      title: "Orange Blossom INCENSE CONES",
      description: "Traditional Indian blend cones",
      rating: 4.7,
      price : "$4.05"
    },
    {
      id: 12,
      image: product12, link: "/Products/jar-cones/Product-Detail",
      title: "Musk INCENSE CONES",
      description: "Mild vanilla scented cones pack",
      rating: 4.1,
      price : "$0.75"
    },
    {
      id: 13,
      image: product13,
      title: "Camphor Clarity",
      description: "Sharp camphor cones for spiritual use",
      rating: 4.3,
      price : "$3.05"
    },
    {
      id: 14,
      image: product14,
      title: "Bergamot and Myrrh",
      description: "Assorted floral dhoop cone jar",
      rating: 4.2,
      price: "$10.05",
    },
    {
      id: 15,
      image: product15,
      title: "Gardenia INCENSE CONES",
      description: "Crisp lemon scented dhoop cones",
      rating: 4.0,
      price : "$4.05"
    },
    {
      id: 16,
      image: product16,
      title: "Yerba Santa INCENSE CONES",
      description: "All natural herbal blend dhoop cones",
      rating: 4.4,
      price : "$0.75"
    },
  ];
  

const ProductGrid = () => {
  return (
    <div>
      <Header />

      <div className="mt-[310px] sm:mt-[280px] md:mt-[280px] xl:mt-[240px] text-[#C1C1C1] ml-4 md:ml-[135px]">
        <p>Product &gt; Dhoop Cones &gt; Jar Cones</p>
      </div>

      <div className="mt-[10px] ml-4 md:ml-[132px] flex  md:flex-row gap-4 text-[#979797] font-medium text-sm">

  {/* Price Dropdown */}
  <div className="relative inline-block">
    <button className="flex items-center justify-between border rounded-full border-[#B7B7B7]  px-3 py-3 w-[106px] h-[35px]">
      Price ($)
      <svg
        className="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </button>

  </div>

  {/* Category Dropdown */}
  <div className="relative inline-block">
  <button className="flex items-center justify-between border rounded-full border-[#B7B7B7]  px-3 py-3 w-[106px] h-[35px]">
      Category
      <svg
        className="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </button>
 
  </div>

</div>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:px-[135px] mt-6">
  {products.map((product) => (
    <Link
      to={product.link || "#"} // fallback if no link
      key={product.id}
      className="bg-white p-3 flex flex-col hover:shadow-md transition-shadow duration-200"
    >
      <img
        src={product.image}
        alt={`product ${product.id}`}
        className="object-cover"
      />
      <h3 className="mt-4 font-semibold text-[#FA5C98]">
        {product.title}
      </h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <div className="mt-2 text-yellow-500">★★★★☆</div>
      <div className="mt-2 font-semibold text-[#C0590E]">{product.price}</div>
    </Link>
  ))}
</div>
      {/* Pagination UI only (static) */}
<div className="flex justify-center items-center space-x-2 mt-6 mb-10">
<div className="flex gap-2">
  <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center gradient-btn ">
    1
  </button>
  <button className="w-10 h-10 rounded-full border-2 border-transparent items-center justify-center hover:border-gray-300 ">
  2
</button>

<button className="w-10 h-10 rounded-full border-2 border-transparent items-center justify-center hover:border-gray-300 ">
    3
  </button>
   <button className="w-10 h-10 rounded-full border-2 border-transparent items-center justify-center hover:border-gray-300 ">
    4
  </button>
  <button className="w-10 h-10 rounded-full border-2 border-transparent items-center justify-center hover:border-gray-300 ">
    5
  </button>
</div>



  <button className="px-3 py-1 text-[#E08468]  hover:bg-gray-200">
    Next
  </button>
</div>

      <Footer/>
    </div>
  );
};

export default ProductGrid;
