import React from 'react'
import one from "../../assets/images/one.png"
import faviconWhite from "../../assets/images/faviconWhite.png"
import oneSectionImage from "../../assets/images/oneSectionImage.png"

function Journey({bgColor, serialNumber}) {
  return (
    <div className='mx-auto w-5/6 relative mt-10'>
        <div className="absolute top-0 left-0 w-full h-48 bg-blue-500 transform -skew-y-2 origin-top-left" style={{ zIndex: 10, backgroundColor: bgColor }}>
        </div>

        <div className="relative z-10 mx-auto w-full px-10 z-10 flex items-center justify-center pt-20 pb-5 mt-20" style={{ backgroundColor: bgColor, zIndex: "20"}}>
            <div className='w-1/2' style={{marginTop: "-50px"}}>
                <div className='flex gap-3'>
                    <img className='h-16 w-10' src={serialNumber} alt="" />
                    <div>
                        <div className='font-bold' style={{fontSize: "2rem", lineHeight: "1.3"}}>Find your next star <br /> performer.</div>
                        <div className='mt-5 text-sm'>Explore the vast Zwilt marketplace to find the candidate <br /> that meets your needs.</div>
                        <div className='flex gap-3 items-center mt-5'>
                            <div className="flex justify-center items-center rounded-full overflow-hidden bg-black h-11 w-11" style={{ borderRadius: `${"35%"}` }}>
                                <img className={'h-2 w-3'} src={faviconWhite} alt="" />
                            </div>
                            <span className='font-bold text-sm'>Join Now</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <img style={{top: "-30px", right: "-20px", transform: "rotate(-2deg)"}} className='absolute' src={oneSectionImage} alt="" />
            </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-48 transform -skew-y-2 origin-bottom-left" style={{ zIndex: 10, backgroundColor: bgColor, bottom: "-50px" }}>
</div>


    </div>
  )
}

export default Journey  