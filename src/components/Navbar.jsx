import React, { useEffect, useRef, useState } from "react";
import { IoMenu, IoSearchSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Navcomp from "./Navcomp";

const Navbar = () => {
  const [desktopMenu, setDesktopMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const desktopMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setQuery("");
    setDesktopMenu(false);
    setMobileMenu(false);
  };

  /* ================= CLOSE ON OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        desktopMenu &&
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(e.target)
      ) {
        setDesktopMenu(false);
      }

      if (
        mobileMenu &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [desktopMenu, mobileMenu]);

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex w-full items-center justify-evenly bg-black border-b border-white relative">
        <Link to="/" className="p-3">
          <h1 className="text-white font-semibold text-xl">
            New Pankaj <span className="text-[#12DAAA]">Electronics</span>
          </h1>
        </Link>

        <div className="relative flex items-center gap-1 text-white">
          {!desktopMenu ? (
            <IoMenu
              className="text-2xl cursor-pointer"
              onClick={() => setDesktopMenu(true)}
            />
          ) : (
            <MdClose
              className="text-2xl cursor-pointer"
              onClick={() => setDesktopMenu(false)}
            />
          )}
          <span className="text-sm">Menu</span>

          {desktopMenu && (
            <div
              ref={desktopMenuRef}
              className="absolute z-50 top-full mt-2 left-0"
            >
              <Navcomp onLinkClick={() => setDesktopMenu(false)} />
            </div>
          )}
        </div>

        <div className="flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="What are you looking for?"
            className="w-[400px] py-1 px-2 rounded-md outline-none"
          />
          <IoSearchSharp
            className="text-[#12DAAA] text-xl -ml-6 cursor-pointer"
            onClick={handleSearch}
          />
        </div>

        <div className="flex items-center gap-1 text-white">
          <FaLocationDot />
          Shahdara, Sector 141
        </div>
      </div>

      {/* ================= MOBILE NAVBAR ================= */}
      <div className="md:hidden w-full flex items-center justify-between bg-black border-b border-white px-3 py-2 relative z-50">
        <Link to="/">
          <h1 className="text-white font-semibold text-lg">
            New Pankaj <span className="text-[#12DAAA]">Electronics</span>
          </h1>
        </Link>

        {!mobileMenu ? (
          <IoMenu
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMobileMenu(true)}
          />
        ) : (
          <MdClose
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMobileMenu(false)}
          />
        )}
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="md:hidden fixed inset-0 bg-black z-40 overflow-y-auto overflow-x-hidden">
          <div ref={mobileMenuRef}>
            {/* CLOSE */}
            <div className="flex justify-end p-3">
              <MdClose
                className="text-white text-2xl cursor-pointer"
                onClick={() => setMobileMenu(false)}
              />
            </div>

            {/* SEARCH */}
            <div className="flex items-center px-3 pb-3 gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search products"
                className="flex-1 py-2 px-3 rounded-md outline-none"
              />
              <IoSearchSharp
                className="text-[#12DAAA] text-xl cursor-pointer"
                onClick={handleSearch}
              />
            </div>

            {/* CATEGORY MENU */}
            <Navcomp onLinkClick={() => setMobileMenu(false)} />

            {/* LOCATION */}
            <div className="flex items-center gap-2 text-white p-3 border-t border-zinc-700">
              <FaLocationDot />
              Shahdara, Sector 141
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
