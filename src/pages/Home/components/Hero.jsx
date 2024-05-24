import React from 'react';
import avatar from "../../../assets/images/avatar.gif";
import SearchBar from '../../../components/SearchBar';

function Hero() {
  return (
    <div className='w-full flex flex-col items-center justify-center my-8 md:my-20'>
      <div className='text-center mb-4'>
        <h1 className='text-2xl md:text-4xl font-bold'>
          Finding the right fit{' '}
          <img src={avatar} alt="Avatar" className='inline-block h-5 w-8 lg:h-10 lg:w-16 md:h-6 md:w-10'/>
          has
          <br />
          never been easier.
        </h1>
      </div>


      <div className='text-sm w-11/12 md:w-96 whitespace-normal text-center mb-6'>
        With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.
      </div>

      <SearchBar/>
    </div>
  );
}

export default Hero;
