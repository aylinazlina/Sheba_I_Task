import React, { useState, memo } from "react";
import Logo from "../assets/images/sheba_Logo.svg";
import Button from "../commoncomponents/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header className="flex shadow-md py-3 sm:py-4 px-4 sm:px-6 lg:px-10 bg-white min-h-[60px] sm:min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-5 w-full">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="javascript:void(0)" className="block">
              <img 
                src={Logo} 
                alt="logo" 
                className="w-8 xs:w-10 sm:w-12 md:w-16 lg:w-36 h-auto" 
              />
            </a>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-x-2 xl:gap-x-6">
              <li className="px-2 xl:px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-hover_color hover:font-semibold text-primary_color block font-normal text-lg xl:text-[20px] font-font_Inter transition-all duration-200"
                >
                  Home
                </a>
              </li>
              <li className="px-2 xl:px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-hover_color hover:font-semibold text-primary_color block font-normal text-lg xl:text-[20px] font-font_Inter transition-all duration-200"
                >
                  About Us
                </a>
              </li>
              <li className="px-2 xl:px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-hover_color hover:font-semibold text-primary_color block font-normal text-lg xl:text-[20px] font-font_Inter transition-all duration-200"
                >
                  All Service
                </a>
              </li>
              <li className="px-2 xl:px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-hover_color hover:font-semibold text-primary_color block font-normal text-lg xl:text-[20px] font-font_Inter transition-all duration-200"
                >
                  All Page
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={closeMenu}
            ></div>
            
            {/* Menu Panel */}
            <div className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
              
              {/* Close Button */}
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-black"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>

              {/* Mobile Menu Items */}
              <nav className="pt-16 px-6">
                <ul className="space-y-1">
                  <li className="border-b border-gray-200 pb-3">
                    <a
                      href="javascript:void(0)"
                      onClick={closeMenu}
                      className="hover:text-hover_color hover:font-semibold text-primary_color block font-normal text-lg sm:text-xl font-font_Inter py-2 transition-all duration-200"
                    >
                      Home
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a
                      href="javascript:void(0)"
                      onClick={closeMenu}
                      className="hover:text-hover_color hover:font-semibold text-primary_color block font-normal text-lg sm:text-xl font-font_Inter py-2 transition-all duration-200"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a
                      href="javascript:void(0)"
                      onClick={closeMenu}
                      className="hover:text-hover_color hover:font-semibold text-primary_color block font-normal text-lg sm:text-xl font-font_Inter py-2 transition-all duration-200"
                    >
                      All Service
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <a
                      href="javascript:void(0)"
                      onClick={closeMenu}
                      className="hover:text-hover_color hover:font-semibold text-primary_color block font-normal text-lg sm:text-xl font-font_Inter py-2 transition-all duration-200"
                    >
                      All Page
                    </a>
                  </li>
                </ul>

                {/* Mobile Login Button */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button 
                    btnDesign="w-full px-6 py-3 bg-primary_color rounded-lg text-white font-font_Inter font-bold text-base cursor-pointer hover:opacity-90 transition-opacity" 
                    btnContent="Log In"
                  />
                </div>
              </nav>
            </div>
          </div>

          {/* Right Section - Login Button and Mobile Menu Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Desktop Login Button */}
            <div className="hidden sm:block">
              <Button 
                btnDesign="px-4 sm:px-6 lg:px-7 py-2 sm:py-3 bg-primary_color rounded-lg text-white font-font_Inter font-bold text-sm sm:text-base cursor-pointer hover:opacity-90 transition-opacity" 
                btnContent="Log In"
              />
            </div>
            
            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-1 cursor-pointer hover:bg-gray-100 rounded transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default memo(Navbar);