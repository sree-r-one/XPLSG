import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="dark:bg-dark flex w-full items-center bg-white drop-shadow-md">
      <div className="container mx-auto px-4">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link to="/" className="block w-full py-5">
              <h2 className="text-xl font-bold text-black dark:text-white">
                Xplore Singapore
              </h2>
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={toggleMenu}
                id="navbarToggler"
                className={`${
                  isMenuOpen && "navbarTogglerActive"
                } ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`dark:bg-dark-2 absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !isMenuOpen && "hidden"
                }`}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/">Home</ListItem>
                  <ListItem NavLink="/explore">Explore</ListItem>
                  <ListItem NavLink="/about">About</ListItem>
                  <ListItem NavLink="/blog">Blog</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <Link
                to="/signin"
                className="text-dark hover:text-primary px-7 py-3 text-base font-medium dark:text-white"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="bg-lutapiPurpleLight hover:bg-primary/90 rounded-md px-7 py-3 text-base font-medium text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

interface ListItemProps {
  children: React.ReactNode;
  NavLink: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, NavLink }) => {
  return (
    <li>
      <Link
        to={NavLink}
        className="text-body-color hover:text-dark dark:text-dark-6 flex py-2 text-base font-medium lg:ml-12 lg:inline-flex dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
