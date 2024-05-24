import React from 'react';
import avatar2 from "../../assets/images/avatar2.png";
import grooveLogo from "../../assets/images/grooveLogo.png";
import grooveLogoWhite from "../../assets/images/grooveLogoWhite.png";
import faviconBlue from "../../assets/images/faviconBlue.png";

function Testimonials() {
  return (
    <div className='relative mt-[-10] bg-black'>
      <div className="absolute top-0 left-0 w-full h-48 bg-black transform -skew-y-2 origin-top-left" style={{ zIndex: 10 }}></div>
      
      <div className="relative mx-auto w-11/12 md:w-5/6 lg:w-5/6 px-5 md:px-10 z-10 flex flex-col md:flex-row items-center justify-center py-16 lg:py-32 mt-20">
        <div className='w-full md:w-1/2'>
          <div className='text-white'>
            <div className='text-3xl md:text-4xl font-bold leading-tight mb-3'>How it worked</div>
            <div className='flex items-center mb-3'>
              <span className='mr-2'>For Jason</span>
              <img src={avatar2} alt="" className='mr-2 h-5 w-5 lg:h-10 lg:w-10 md:h-6 md:w-6'/>
              <span>at</span>
            </div>
            <div> <img className='w-32 md:w-40 lg:w-48 mt-5' src={grooveLogo} alt=""/></div>
          </div>

          <div className='mt-5 text-gray-300'>Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.</div>
          
          <div className='flex gap-3 items-center mt-8 md:mt-12'>
            <div className="flex justify-center items-center rounded-full overflow-hidden bg-white h-12 w-12">
              <img className='h-4 w-4' src={faviconBlue} alt=""/>
            </div>
            <div className="flex justify-center items-center rounded-full overflow-hidden bg-white h-12 w-12">
              <img className='h-4 w-4 transform rotate-180' src={faviconBlue} alt=""/>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 mt-10 md:mt-0'>
          <div className='mx-auto text-center md:text-left'>
            <div className='flex items-center justify-center md:w-2/3 md:gap-5 md:pl-16 md:justify-start mb-5'>
              <div className="referral-company-image py-5 px-2 w-16 h-16 flex justify-center items-center" style={{backgroundColor: "#AF7CFF", borderRadius: "40%"}}>
                <img src={grooveLogoWhite} alt="" />
              </div>
              <div>
                <div className='text-white font-bold'>Jason Makki</div>
                <div className='text-xs text-gray-300 mt-1'>
                  <div className='position'>Engineer at GROOVE</div>
                  <div className='location'>San Francisco</div>
                </div>
              </div>
            </div>
            <div className='text-gray-300 mt-5 whitespace-normal md:w-2/3 mx-auto'>
              Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
