import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import logo from '../../images/logo.png'
import { useState, useContext } from 'react'
import { TransactionContext } from "../context/TransactionContext";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const { connectWallet, currentAccount } = useContext(TransactionContext)
  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>

      {!currentAccount ? (<button type="button" onClick={connectWallet} className="flex clex-row justify-center items-center my-5 bg-[#1ae069] p-3 px-5 rounded-full cursor-pointer hover:bg-[#2546bd]"><p className="text-black text-base font-semibold">Connect Wallet</p></button>) : (<div><div className='text-white md:text-2xl hidden md:flex'>
        Welcome, your wallet is connected!
      </div>
        <div className='text-white text-2xl md:hidden'>
          Welcome!
        </div>
      </div>)}

    </nav>
  );
}

export default Navbar;

