import { useState } from "react";
import { navlogo } from "../assets/";

interface NavLink {
  name: string;
  path?: string;
  children?: NavLink[];
}

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    {
      name: "Account",
      children: [
        { name: "Login", path: "/login" },
        { name: "Register", path: "/register" },
        { name: "Forgot Password", path: "/forgot-password" },
      ],
    },
    { name: "Service", path: "/Services" },
    { name: "Testimonies", path: "/testimonies" },
    { name: "Developers API", path: "/api/documentation" },
  ];

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-white text-xl font-bold">
              <a href="/">
                <img src={navlogo} alt="" className="w-[60px]" />
              </a>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.children ? (
                  <>
                    <button 
                      onClick={toggleDropdown}
                      className="text-gray-300 hover:text-white rounded-md text-sm font-medium"
                    >
                      {link.name}
                      <svg 
                        className={`h-4 w-4 inline-block ml-1 transform transition-transform duration-300 ease-in-out ${isDropdownOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`${isDropdownOpen ? 'block' : 'hidden'} absolute bg-gray-800 rounded-md shadow-lg mt-3 w-[150px]`}>
                      {link.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.path}
                          className="text-gray-300 hover:text-white block px-4 py-2 text-sm"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={`${isOpen ? "hidden" : "block"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={`${isOpen ? "block" : "hidden"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.children ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                  >
                    {link.name}
                  </button>
                  <div className={`${isDropdownOpen ? "block" : "hidden"} pl-4`}>
                    {link.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.path}
                        className="text-gray-300 hover:text-white block px-3 py-2 text-sm"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
