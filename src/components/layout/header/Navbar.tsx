"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/pacs_logo.webp";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="h-[88px]"></div>

      <nav
        className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              className="h-12 w-auto"
              alt="PACS Logo"
              width={48}
              height={48}
              priority
            />
          </Link>

          <div className="flex md:order-2">
            <Link
              href="/contact"
              className="hidden md:block text-white bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg px-6 py-3 text-center transition-all duration-300"
            >
              Contact
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`items-center justify-between ${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              {[
                { name: "Home", path: "/" },
                { name: "Programs", path: "/programs" },
                { name: "About", path: "/about" },
              ].map((item) => (
                <li key={item.name} className="w-full md:w-auto">
                  <Link
                    href={item.path}
                    className="block text-lg py-3 px-4 rounded-lg hover:text-primaryColor transition-all duration-300 w-full md:w-auto text-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="md:hidden w-full">
                <Link
                  href="/contact"
                  className="block text-lg py-3 px-4 rounded-lg hover:text-primaryColor transition-all duration-300 w-full text-center"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
