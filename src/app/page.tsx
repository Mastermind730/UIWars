import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { FloatingNav } from "./components/FloatingNavbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";


import { Hero } from "./components/Home";
import { NextSection } from "./components/NextSection";
import StaticNavBar from "./components/StaticNavbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <>
    <StaticNavBar/>
      <FloatingNav navItems={navItems} />
      {/* <Hero>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        What&apos;s cooler than E-Library?{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Explore More</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Explore More.</span>
          </div>
        </div>
      </h2>
    </Hero> */}
    <Hero/>
    <NextSection/>
    <Contact/>
    <Footer/>
    </>
  );
}
