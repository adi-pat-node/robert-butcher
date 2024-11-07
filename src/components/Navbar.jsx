import { useState } from "react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed top-4 left-0 right-0 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center  rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex justify-center gap-6">
            <div>
              <a href="#">
                <img src={logo} width={90} alt="" />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((items, index) => (
                  <li key={index}>
                    <a
                      href={items.href}
                      className="text-sm hover:text-yellow-400"
                      onClick={(e) => handleLinkClick(e, items.href)}
                    >
                      {items.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <a href="#">
              <img src={logo} width={90} alt="" className="m-2" />
            </a>
          </div>
          <div className="flex items-center ">
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none lg:hidden"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="m-2 h-6 w-5" />
              ) : (
                <FaBars className="m-2 h-6 w-5" />
              )}
            </button>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((items, index) => (
                <li key={index}>
                  <a
                    href={items.href}
                    className="block w-full text-xl font-semibold"
                    onClick={(e) => handleLinkClick(e, items.href)}
                  >
                    {items.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;