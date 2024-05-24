import React from 'react';
import badgeIcon from "../../assets/images/badgeIcon.png";
import categoryIcon from "../../assets/images/categoryIcon.png";
import profilesIcon from "../../assets/images/profilesIcon.png";
import shopifyIcon from "../../assets/images/shopifyIcon.png";
import magentoIcon from "../../assets/images/magentoIcon.png";
import dataIcon from "../../assets/images/dataIcon.png";
import dotNetIcon from "../../assets/images/dotNetIcon.png";
import webflowIcon from "../../assets/images/webflowIcon.png";
import cinema4dLogo from "../../assets/images/cinema-4dLogo.png";
import photoshopLogo from "../../assets/images/photoshopLogo.png";
import afterEffectLogo from "../../assets/images/afterEffectLogo.png";
import unrealLogo from "../../assets/images/unrealLogo.png";
import figmaLogo from "../../assets/images/figmaLogo.png";
import favicon from "../../assets/images/favicon.png";
import faviconWhite from "../../assets/images/faviconWhite.png";
import SkillBoard from '../SkillBoard';

function Marketplace() {
  // Array of objects containing icon and name data
  const professionals = [
    { icon: shopifyIcon, name: 'Shopify Developer' },
    { icon: magentoIcon, name: 'Magento Developer' },
    { icon: dataIcon, name: 'Data Scientist' },
    { icon: webflowIcon, name: 'Webflow Developer' },  
    { icon: dotNetIcon, name: 'Dot Net Developer' },
    { icon: favicon, name: '' },
  ];

  const designCreatives = [
    { icon: favicon, name: '' },
    { icon: figmaLogo, name: 'UX Designer' },
    { icon: photoshopLogo, name: 'Graphics Designer' },
    { icon: afterEffectLogo, name: 'Illustration Artist' },
    { icon: unrealLogo, name: 'Unreal Engine' },
    { icon: cinema4dLogo, name: 'Cinema 4D' },
  ];

  return (
    <div className='relative' style={{ marginTop: "-35px" }}>
      <div className="absolute top-0 left-0 w-full h-48 bg-blue-500 transform -skew-y-3 origin-top-left" style={{ zIndex: 0, backgroundColor: "#EDEFFF" }}></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center py-16 mt-20 bg-[#EDEFFF]">
        <div className='text-center mt-6 font-bold text-2xl md:text-3xl lg:text-4xl leading-tight'>
          Your one-stop marketplace for <br /> finding the talent your business needs.
        </div>
        
        <div className='w-11/12 md:w-5/6 lg:w-5/6 lg:gap-16 px-5 md:px-10 mt-10 flex flex-col md:flex-row justify-between items-center'>
          <div className='w-full md:w-1/2 mb-10 md:mb-0'>
            <div className='text-base md:text-lg lg:text-xl mb-5 font-bold'>
              Find Dev and IT professionals to <br /> scale your business.
            </div>
            <div className='flex gap-10 md:gap-20'>
              <div className='flex items-center text-xs'>
                <span className='mr-3'>
                  <img src={badgeIcon} alt="" className='h-4 w-4'/>
                </span>
                989 Skills
              </div>
              <div className='flex items-center text-xs'>
                <span className='mr-3'>
                  <img src={categoryIcon} alt="" className='h-4 w-4'/>
                </span>
                45 Sub-Categories
              </div>
            </div>
            <div className='flex items-center text-xs mt-5'>
              <span className='mr-3'>
                <img src={profilesIcon} alt="" className='h-4 w-4'/>
              </span>
              1011 Profiles
            </div>
          </div>

          <SkillBoard title={"IT & Development"} array={professionals} />
        </div>

        <div className='w-11/12 md:w-5/6 lg:w-5/6 lg:gap-16 px-5 md:px-10 mt-10 flex flex-col md:flex-row justify-between items-center pb-16'>
          <div className='w-full md:w-1/2 mb-10 md:mb-0'>
            <div className='text-base md:text-lg lg:text-xl mb-5 font-bold'>
            Explore Creative individuals with a <br /> keen eye for detail.  
            </div>
            <div className='flex gap-10 md:gap-20'>
              <div className='flex items-center text-xs'>
                <span className='mr-3'>
                  <img src={badgeIcon} alt="" className='h-4 w-4'/>
                </span>
                989 Skills
              </div>
              <div className='flex items-center text-xs'>
                <span className='mr-3'>
                  <img src={categoryIcon} alt="" className='h-4 w-4'/>
                </span>
                45 Sub-Categories
              </div>
            </div>
            <div className='flex items-center text-xs mt-5'>
              <span className='mr-3'>
                <img src={profilesIcon} alt="" className='h-4 w-4'/>
              </span>
              1011 Profiles
            </div>
          </div>

          <SkillBoard title={"Design & Creative"} array={designCreatives} />
        </div>
<br />
<br />
        <div className='w-11/12 md:w-5/6 lg:w-5/6 lg:mt-20 px-5 md:px-10 flex flex-col md:flex-row justify-between items-center pb-16' style={{ marginTop: "-90px" }}>
          <div className='w-full md:w-1/2 flex justify-center md:justify-start items-center mb-10 md:mb-0'>
            <div className='flex items-center'>
              <div className="flex justify-center items-center rounded-full overflow-hidden bg-black h-16 w-16">
                <img className='h-8 w-8' src={faviconWhite} alt="" />
              </div>
              <span className='ml-3 font-bold'>Explore More</span>
            </div>
          </div>

          <div className='w-full md:w-1/2 text-center md:text-left'>
            <span className='font-bold'>30 more</span> to explore
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
