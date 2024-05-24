import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/images/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header rounded-xl flex justify-between items-center pl-5 pr-2 py-2 text-sm shadow-lg' style={{ backgroundColor: "#525AA0" }}>
      <div className='logo'>
        <img src={Logo} alt="Rwilt Logo" height={100} width={100} />
      </div>

      <div className='menu hidden md:flex'>
        <ul className='flex gap-5 text-white'>
          <li>Find Work</li>
          <li>Find Talent</li>
          <li>Articles</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className='CTA-Buttons hidden md:flex gap-3'>
        <button className='text-white'>
          Log In
        </button>
        <button className='bg-white rounded-xl px-4 py-2 font-bold text-xs'>
          Join Now
        </button>
      </div>

      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='text-white'>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className='absolute top-16 left-0 w-full bg-[#525AA0] flex flex-col items-center md:hidden'>
          <ul className='flex flex-col items-center gap-5 text-white py-5'>
            <li>Find Work</li>
            <li>Find Talent</li>
            <li>Articles</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <div className='flex flex-col gap-3 mt-5'>
              <button className='text-white'>
                Log In
              </button>
              <button className='bg-white rounded-xl px-4 py-2 font-bold text-xs'>
                Join Now
              </button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
