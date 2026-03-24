import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* ================= BRAND ================= */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">
            New Pankaj <span className="text-[#12DAAA]">Electronics</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Your trusted destination for electronics, home appliances,
            mobiles, laptops, and smart devices in Noida.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="p-2 bg-zinc-800 rounded hover:bg-[#12DAAA] hover:text-black">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-zinc-800 rounded hover:bg-[#12DAAA] hover:text-black">
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919821900257"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-zinc-800 rounded hover:bg-[#12DAAA] hover:text-black"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#12DAAA]">Home</Link></li>
            <li><Link to="/aboutUs" className="hover:text-[#12DAAA]">About Us</Link></li>
            <li><Link to="/contactUS" className="hover:text-[#12DAAA]">Contact Us</Link></li>
            <li><Link to="/listing" className="hover:text-[#12DAAA]">All Products</Link></li>
          </ul>
        </div>

        {/* ================= CATEGORIES ================= */}
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Televisions & Accessories</li>
            <li>Home Appliances</li>
            <li>Phones & Wearables</li>
            <li>Computers & Tablets</li>
            <li>Audio & Video</li>
            <li>Gaming</li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>

          <div className="space-y-3 text-sm">
            <p className="flex gap-2 items-start">
              <FaLocationDot className="mt-1" />
              SH 23, 1st Floor, Reet Square,<br />
              Shahdara, Sector 141,<br />
              Noida, Uttar Pradesh 201304
            </p>

            <p className="flex gap-2 items-center">
              <FaPhone />
              +91 98219 00257
            </p>

            <p>
              <strong>Store Hours:</strong><br />
              Mon – Sun: 11:00 AM – 9:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-zinc-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} New Pankaj Electronics. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
