import React from 'react';
import logo from '../../images/logo.png';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center p-8 bg-gray-900 text-white'>
      <img src={logo} alt="Logo" className="w-24 mb-8" />
      <div className='w-3/4 h-0.5 bg-gray-400 my-8' />
      <div className='w-3/4 flex justify-between items-center mb-8'>
        <p className='text-sm text-center'>
          @Web3pe 2023
        </p>
        <p className='text-sm text-center'>
          All Rights Reserved
        </p>
      </div>
      <div className="flex justify-center space-x-8 mb-8">
        <FaGithub size={24} />
        <FaTwitter size={24} />
        <FaInstagram size={24} />
      </div>
      <form className="w-3/4 flex justify-between">
        <input type="email" id="newsletter" placeholder="Subscribe to our newsletter" className="p-2 rounded bg-white text-black flex-grow mr-2" />
        <button type="submit" className="p-2 rounded bg-blue-500 text-white">Subscribe</button>
      </form>
    </div>
  );
}

export default Footer;