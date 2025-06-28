import React from "react";
import {memo} from "react"
import Logo from "../assets/images/sheba_Logo_footer.svg";

const Footer = () => {
  return (
    <div>
      <footer className="bg-main_color px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6">
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 w-full">
          
          {/* Left Section - Logo, Description, and Navigation */}
          <div className="flex-1 space-y-6">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <a href="javascript:void(0)">
                <img 
                  src={Logo} 
                  alt="logo" 
                  className="w-24 sm:w-32 lg:w-36" 
                />
              </a>
            </div>

            {/* Description */}
            <div className="max-w-sm mx-auto lg:mx-0">
              <p className="text-white text-sm sm:text-base font-normal font-main leading-6 text-center lg:text-left">
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>

            {/* Navigation Links */}
            <nav className="w-full">
              <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 sm:gap-x-6 gap-y-3">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-white text-sm sm:text-base lg:text-lg font-semibold font-lato leading-6 hover:opacity-80 transition-opacity"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-white text-sm sm:text-base lg:text-lg font-semibold font-lato leading-6 hover:opacity-80 transition-opacity"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-white text-sm sm:text-base lg:text-lg font-semibold font-lato leading-6 hover:opacity-80 transition-opacity"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-white text-sm sm:text-base lg:text-lg font-semibold font-lato leading-6 hover:opacity-80 transition-opacity"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-white text-sm sm:text-base lg:text-lg font-semibold font-lato leading-6 hover:opacity-80 transition-opacity"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-white text-sm sm:text-base lg:text-lg font-semibold font-lato leading-6 hover:opacity-80 transition-opacity"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Section - App Download Buttons */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <div className="text-center lg:text-left space-y-6">
              <h6 className="text-white font-bold text-base">Get The App</h6>
              
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 justify-center lg:justify-start items-center lg:items-start">
                {/* App Store Button */}
                <button
                  type="button"
                  className="w-full sm:w-auto px-4 sm:px-6 lg:px-7 py-2 cursor-pointer inline-flex items-center justify-center rounded-lg text-white text-lg sm:text-xl tracking-wider border-none outline-none bg-black hover:bg-[#222] active:bg-black transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    sm:width="36px"
                    fill="#fff"
                    className="inline mr-2 flex-shrink-0"
                    viewBox="0 0 22.773 22.773"
                  >
                    <path
                      d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                      data-original="#000000"
                    />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white leading-none font-medium">
                      Download on the
                    </p>
                    <span className="text-sm sm:text-base">App Store</span>
                  </div>
                </button>

                {/* Google Play Button */}
                <button
                  type="button"
                  className="w-full sm:w-auto px-4 sm:px-6 lg:px-7 py-2 cursor-pointer inline-flex items-center justify-center rounded-lg text-white text-lg sm:text-xl tracking-wider border-none outline-none bg-black hover:bg-[#222] active:bg-black transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    sm:width="36px"
                    fill="#fff"
                    className="inline mr-2 flex-shrink-0"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#57cef3"
                      d="M7 3v58l33-29z"
                      data-original="#57cef3"
                    />
                    <path
                      fill="#fff200"
                      d="m36 32 8-10 15 10-15 10z"
                      data-original="#fff200"
                    />
                    <path
                      fill="#48ff48"
                      d="M36 32 7 3h4l34 20z"
                      data-original="#48ff48"
                    />
                    <path
                      fill="#ff6c58"
                      d="M36 32 7 61h4l34-20z"
                      data-original="#ff6c58"
                    />
                    <path
                      fill="#f33"
                      d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z"
                      data-original="#ff3333"
                    />
                    <path
                      fill="#0779e4"
                      d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z"
                      data-original="#0779e4"
                    />
                    <path
                      fill="#314a52"
                      d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z"
                      data-original="#314a52"
                    />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white leading-none font-medium">
                      Get it on
                    </p>
                    <span className="text-sm sm:text-base">Google Play</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 sm:my-8 border-white opacity-30" />

        {/* Bottom Section - Copyright and Social Media */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 w-full">
          
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-white font-normal font-secondary text-sm sm:text-base leading-6">
              © 2024 AI DETECT. <span className="font-main">All rights reserved.</span>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center sm:justify-end">
            <ul className="flex space-x-4 sm:space-x-6">
              <li>
                <a 
                  href="javascript:void(0)"
                  className="block hover:opacity-80 transition-opacity"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="fill-white w-6 h-6 sm:w-7 sm:h-7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="javascript:void(0)"
                  className="block hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white w-6 h-6 sm:w-7 sm:h-7"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="javascript:void(0)"
                  className="block hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white w-6 h-6 sm:w-7 sm:h-7"
                    viewBox="0 0 49.652 49.652"
                  >
                    <path
                      d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z"
                      data-original="#000000"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="block hover:opacity-80 transition-opacity"
                  aria-label="GitHub"
                >
                  <svg 
                    className="fill-white w-6 h-6 sm:w-7 sm:h-7" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default memo(Footer);