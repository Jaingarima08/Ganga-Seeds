import React, { useState, useEffect } from "react";
import { FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../assets/GEMBA_LOGO.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle mobile menu visibility
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md bg-white" : "bg-transparent"
        }`}
      >
        {/* Topbar */}
        <div
          className={`bg-green-500 text-white ${scrolled ? "hidden" : "block"}`}
        >
          <div className="container mx-auto flex justify-end md:justify-end py-2 px-6 flex-wrap md:flex-nowrap">
            {/* Contact Section */}
            <div className="flex flex-row md:flex-row space-x-4 space-y-0 md:space-y-0 md:space-x-4 lg:items-center">

              {/* LinkedIn Tab */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Menubar */}
        <div
          className={`bg-white font-sans shadow-md duration-1000 ${
            scrolled ? "mt-0" : "mt-0"
          }`}
        >
          <div className="container mx-auto flex justify-between items-center py-4 px-4">
            <div className="flex-shrink-0">
              {/* <img src="" alt="Logo" className="h-10 w-auto" />
               */}
               <a href="/" className="text-2xl font-bold text-green-500">GangaSeeds</a>
            </div>

            {/* Hamburger Icon for mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-2xl focus:outline-none"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
                {/* Toggle between hamburger and close icon */}
              </button>
            </div>

            {/* Menu Items - Hidden on mobile */}
            <div className={`hidden md:flex space-x-6`}>
              <div className="text-lg font-semibold flex space-x-1 items-center ">
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:text-green-500 flex items-center"
                  to="/"
                  activeClassName="bg-white"
                >
                  Home
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:text-green-500 flex items-center"
                  to="/about"
                  activeClassName="bg-white"
                >
                  About us
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:text-green-500 flex items-center"
                  to="/product"
                  activeClassName="bg-white"
                >
                  Products
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:text-green-500 flex items-center"
                  to="/career"
                  activeClassName="bg-white"
                >
                  Career
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:text-green-500 flex items-center"
                  to="/contact"
                  activeClassName="bg-white"
                >
                  Contact us
                </NavLink>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden ${
              menuOpen ? "block" : "hidden"
            } bg-white shadow-md text-center py-4`}
          >
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About us
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/product"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/career"
              onClick={() => setMenuOpen(false)}
            >
              Career
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact us
            </NavLink>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
