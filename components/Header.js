 "use client";

import React, { useState } from 'react';
import { FaPhoneAlt, FaBars } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white p-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/background.jpg" alt="One FNG Logo" width={50} height={50} />
          <div className="ml-2">
            <h1 className="text-xl font-bold text-gray-800">ONE FNG</h1>
            <p className="text-sm font-serif text-gray-600">moving forward in every direction</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/overview" className="text-gray-800 hover:text-gray-600">Overview</Link>
          <Link href="/office" className="text-gray-800 hover:text-gray-600">Office</Link>
          <Link href="" className="text-gray-800 hover:text-gray-600">Retail</Link>
          <Link href="" className="text-gray-800 hover:text-gray-600">Highlights</Link>
          <Link href="" className="text-gray-800 hover:text-gray-600">Plans</Link>
          <Link href="" className="text-gray-800 hover:text-gray-600">Price List</Link>
          <Link href="/amen" className="text-gray-800 hover:text-gray-600">Amenities</Link>
          <Link href="/location" className="text-gray-800 hover:text-gray-600">Location</Link>
          <Link href="/gallery" className="text-gray-800 hover:text-gray-600">Gallery</Link>
          <Link href="/contact" className="text-orange-600 hover:text-orange-400">Contact Us</Link>
        </nav>
        <div className="hidden md:flex items-center text-orange-600">
          <FaPhoneAlt className="mr-2" />
          <span>+91 9070108108</span>
        </div>
        <div className="md:hidden">
          <FaBars className="text-gray-800 cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-white shadow-md">
          <nav className="flex flex-col space-y-2">
            <Link href="" className="text-gray-800 hover:text-gray-600">Overview</Link>
            <Link href="" className="text-gray-800 hover:text-gray-600">Office</Link>
            <Link href="" className="text-gray-800 hover:text-gray-600">Retail</Link>
            <Link href="" className="text-gray-800 hover:text-gray-600">Highlights</Link>
            <Link href="" className="text-gray-800 hover:text-gray-600">Plans</Link>
            <Link href="" className="text-gray-800 hover:text-gray-600">Price List</Link>
            <Link href="" className="text-gray-800 hover:text-gray-600">Amenities</Link>
            <Link href="" className="text-gray-800 hover:text-gray-600">Location</Link>
            <Link href="" className="text-gray-800 hover:text-gray-600">Gallery</Link>
            <Link href="/contact" className="text-orange-600 hover:text-orange-400">Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
