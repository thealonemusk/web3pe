import logo from '../../images/logo.png'


const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 bg-gray-900'>
      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5' />
      <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
        <p className='text-white text-sm text-center'>
          @Web3pe 2023
        </p>
        <p className='text-white text-sm text-center'>
          All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;