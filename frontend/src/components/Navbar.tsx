import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-lutapiPurpleDark p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-xl font-bold text-white">
          <Link to="/">Xplore Singapore</Link>
        </div>

        {/* Links Section */}
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
