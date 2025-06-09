import React, { useState, useEffect } from "react";
import { FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../components/Header.jsx";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);
 const [menuOpen, setMenuOpen] = useState(() => {
  const saved = localStorage.getItem("menuOpen");
  return saved !== null ? JSON.parse(saved) : false;
});


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
  localStorage.setItem("menuOpen", JSON.stringify(menuOpen));
}, [menuOpen]);


  useEffect(() => {
  const interval = setInterval(() => {
    const bannerFrame = document.querySelector(".goog-te-banner-frame");

    if (bannerFrame) {
      const bannerHeight = bannerFrame.offsetHeight;
      document.body.style.paddingTop = `${bannerHeight}px`;
    } else {
      document.body.style.paddingTop = "0px";
    }
  }, 500);

  return () => clearInterval(interval);
}, []);



  const linkClasses = ({ isActive }) =>
    `p-2 rounded transition duration-500 ease-in-out transform flex items-center ${
      isActive ? "text-green-600 font-bold" : "hover:text-green-500"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-10 ${
        scrolled ? "shadow-md bg-white" : "bg-transparent"
      }`}
    >
      {/* Topbar */}
      <div
        className={`bg-green-500 text-white ${scrolled ? "hidden" : "block"}`}
      >
        <div className="container mx-auto flex justify-end items-center gap-4 py-1 px-6 ">
          {/* Google Translate container with Tailwind styling */}
          <div
            id="google_translate_element"
            className="text-xs bg-white text-black"
          ></div>

          {/* LinkedIn Icon */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-200"
          >
            <FaLinkedin className="text-lg" />
          </a>
        </div>
      </div>

      {/* Menubar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-green-500">
            GangaSeeds
          </a>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-lg font-semibold">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About us
            </NavLink>
            <NavLink to="/product" className={linkClasses}>
              Products
            </NavLink>
            {/* <NavLink to="/career" className={linkClasses}>Career</NavLink> */}
            <NavLink to="/contact" className={linkClasses}>
              Contact us
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            menuOpen ? "block" : "hidden"
          } bg-white shadow-md text-center py-4`}
        >
          <NavLink
            to="/"
            className={linkClasses}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={linkClasses}
            onClick={() => setMenuOpen(false)}
          >
            About us
          </NavLink>
          <NavLink
            to="/product"
            className={linkClasses}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </NavLink>
          {/* <NavLink to="/career" className={linkClasses} onClick={() => setMenuOpen(false)}>
            Career
          </NavLink> */}
          <NavLink
            to="/contact"
            className={linkClasses}
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
