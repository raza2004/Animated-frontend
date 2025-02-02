import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between md:justify-center px-4 py-4 md:px-10 md:py-6 backdrop-blur-md bg-black/30 text-gray-200">
        {/* Logo */}
        <div className="flex items-center md:absolute md:left-12 ">
          <Image src="/logo.png" width={110} height={80} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-14 justify-between font-normal text-lg md:ml-[3%]">
          <div>Home</div>
          <div>About</div>
          <div>Unsere Leistungen</div>
          <div>Blog</div>
          <div>Pages</div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </nav>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-10">
        <div className="flex flex-col md:text-center  md:items-center md:justify-center md:flex-row w-full text-white gap-6 md:gap-10">
          {/* Left Section */}
          <div className="flex-1 text-center  md:text-left">
            <h1 className="text-4xl  md:text-center  md:items-center md:justify-center md:text-[84px] leading-tight md:leading-[125px] font-bold">
              Infinite Vision Exceptional Webdesign
            </h1>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col items-center gap-4">
            <p className="text-base  md:text-center  md:items-center md:justify-center md:text-lg text-center w-full md:w-[61%] leading-6 md:leading-[28px]">
              Wir sind auf maßgeschneiderte Webdesigns spezialisiert und
              erstellen beeindruckende, benutzerfreundliche Websites, die Traffic
              anziehen und Conversions steigern. Lassen Sie uns Ihr Business mit
              einer Website unterstützen, die für Sie arbeitet.
            </p>

            <button className="flex flex-row items-center text-center justify-center px-8 py-3 sm:py-0.5 md:px-4  text-black md:font-extrabold md:w-[11.5vw] rounded-full bg-white text-base md:mt-16">
              Kontaktieren Sie Uns
              <Image
                className="ml-2"
                src="/right-arrow.svg"
                width={20}
                height={30}
                alt="Arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}