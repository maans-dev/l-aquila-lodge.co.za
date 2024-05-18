import React from 'react';
import Image from "next/image";


const Header = () => {
  return (
    <header className="bg-white text-white py-4">
      <div className="container mx-auto text-center">
      <div className="text-2xl text-black mb-4 flex justify-center">
  <Image
    src="/fynbos-logo.png"
    width={300}
    height={500}
    alt="Picture of the author"
  />
</div>

        <nav className="flex flex-row items-center justify-center">
          <a href="#" className="text-black hover:text-gray-300 px-4">Home</a>
          <a href="#" className="text-black hover:text-gray-300 px-4">Flowers</a>
          <a href="#" className="text-black hover:text-gray-300 px-4">Services</a>
          <a href="#" className="text-black hover:text-gray-300 px-4">Workshop</a>
          <a href="#" className="text-black hover:text-gray-300 px-4">Our Story</a>

        </nav>
      </div>
    </header>
  );
};

export default Header;
