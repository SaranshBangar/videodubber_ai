"use client"

import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-16 flex justify-between items-center px-6 border-b-[#CCC8C7] border-[0.5px]">
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          <RxHamburgerMenu />
        </button>
        <img src="/ProductHunt.svg" alt="" className="size-8 ml-4" />
      </div>

      <div className="hidden lg:flex flex-row justify-center items-center gap-8">
        <img src="/ProductHunt.svg" alt="" className="size-8" />
        <input type="text" placeholder="Search ( ctrl + k )" className="w-[220px] h-8 rounded-[100px] bg-[#F5F8FF] placeholder:text-[#9CA3AF] placeholder:text-3 p-2" />
      </div>

      <div className="hidden lg:flex flex-row justify-center items-center gap-8">
        <a href="https://www.producthunt.com/leaderboard/daily/2024/8/6?ref=header_nav" className="text-4 text-[#4B587C]">Launches</a>
        <a href="https://www.producthunt.com/categories?ref=header_nav" className="text-4 text-[#4B587C]">Products</a>
        <a href="https://www.producthunt.com/newsletters?ref=header_nav" className="text-4 text-[#4B587C]">News</a>
        <a href="https://www.producthunt.com/discussions?ref=header_nav" className="text-4 text-[#4B587C]">Community</a>
        <a href="https://www.producthunt.com/sponsor?ref=header_nav" className="text-4 text-[#4B587C]">Advertise</a>
      </div>

      <div className=" lg:flex flex-row justify-center items-center gap-4">
        <button className="w-[101px] h-9 bg-[#FEF6F2] text-[#E12E0D] text-3">Subscribe</button>
        <button className="w-[81px] h-9 rounded-[4px] bg-[#FF6154] text-white text-3">Sign in</button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <ul className="flex flex-col items-start p-4">
            <a href="https://www.producthunt.com/leaderboard/daily/2024/8/6?ref=header_nav" className="py-2 text-[#4B587C]">Launches</a>
            <a href="https://www.producthunt.com/categories?ref=header_nav" className="py-2 text-[#4B587C]">Products</a>
            <a href="https://www.producthunt.com/newsletters?ref=header_nav" className="py-2 text-[#4B587C]">News</a>
            <a href="https://www.producthunt.com/discussions?ref=header_nav" className="py-2 text-[#4B587C]">Community</a>
            <a href="https://www.producthunt.com/sponsor?ref=header_nav" className="py-2 text-[#4B587C]">Advertise</a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
