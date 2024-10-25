"use client";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLinks";
import Link from "next/link";
import Image from "next/image";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },

  {
    title: "Contact",
    path: "#contact",
  },
];

const StaticNavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setVisible(false); // Scrolling down
    } else {
      setVisible(true); // Scrolling up
    }
    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed mx-auto top-0 right-0 bg-[#121212] bg-opacity-100 left-0 opacity-80 z-10 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className=" text-2xl md:text-4-xl lg:text-6xl sm:text-2xl"
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Image
                src="/images/menu.png"
                alt="menu image"
                width={20}
                height={20}
              />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Image
                src="/images/cross.png"
                alt="cross image"
                width={20}
                height={20}
              />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 gap-3 ">
            {navLinks.map((link, index) => (
              <li className="text-center mx-auto" key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        {navbarOpen ? <MenuOverlay /> : null}
      </div>
    </nav>
  );
};

export default StaticNavBar;
