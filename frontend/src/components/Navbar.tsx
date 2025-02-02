import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-lutapiPurpleDark p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-xl font-bold text-white">
          <Link to="/">Xplore Singapore</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links Section */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } bg-lutapiPurpleDark absolute left-0 top-16 w-full p-4 text-white md:static md:top-0 md:flex md:w-auto md:space-x-6 md:p-0`}
        >
          <li>
            <Link to="/" className="block hover:text-gray-200 md:inline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block hover:text-gray-200 md:inline">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-gray-200 md:inline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
