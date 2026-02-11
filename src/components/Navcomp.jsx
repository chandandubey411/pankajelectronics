import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const categories = [
  "Televisions & Accessories",
  "Home-Appliances",
  "Phones & Wearables",
  "Computers & Tablets",
  "Audio & Video",
  "Cameras & Accessories",
  "Smart Devices",
  "Home-Appliances",
];

const Navcomp = ({ onLinkClick }) => {
  return (
    <div className="list w-[300px] h-[300px] overflow-y-scroll py-2 px-3 custom-scrollbar bg-[rgba(0,0,0,0.8)] text-white">
      <h3 className="text-[17px] font-[700] mb-2">
        Shop by Category
      </h3>

      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className="text-[16px] font-[400] py-1 w-full"
          >
            <Link
              to={`/category/${encodeURIComponent(category)}`}
              onClick={() => onLinkClick?.()}   // 🔥 MENU CLOSE HERE
              className="w-full flex items-center justify-between hover:text-cyan-400 transition"
            >
              <span>{category}</span>
              <FaAngleRight />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navcomp;
