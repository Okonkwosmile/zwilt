import React from 'react';
import faviconWhite from "../assets/images/faviconWhite.png";
import Logo from "../assets/images/logo.png";

function Footer() {
    return (
        <div className='relative pt-10' style={{ marginTop: "80px", background: "linear-gradient(180deg, #0C0C0C 0%, #0C0C0C 100%)" }}>
            {/* Skewed backgrounds */}
            <div className="absolute top-0 left-0 w-full h-48 bg-blue-500 transform -skew-y-2 origin-top-left" style={{ zIndex: 10, backgroundColor: "#0C0C0C" }}></div>

            {/* Main content */}    
            <div className='mx-auto w-5/6 relative mt-10'>
                {/* Skewed backgrounds */}
                <div className="absolute top-0 left-0 w-full h-48 bg-blue-500 transform -skew-y-2 origin-top-left" style={{ zIndex: 10, backgroundColor: "#525AA0" }}></div>

                {/* Call to action */}
                <div className="relative z-10 mx-auto w-full px-10 z-10 flex items-center justify-center pt-20 pb-5 mt-20" style={{ backgroundColor: "#525AA0", zIndex: "20" }}>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='font-bold text-center text-white' style={{ fontSize: "2rem", lineHeight: "1.3" }}>
                            Need a job done, and done <br /> well? Get started
                        </div>
                        <div className='flex gap-3 items-center mt-5'>
                            <div className="flex justify-center items-center rounded-full overflow-hidden bg-black h-11 w-11" style={{ borderRadius: "35%" }}>
                                <img className={'h-2 w-3'} style={{ transform: "rotate(90deg)" }} src={faviconWhite} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional content */}
                <div className='flex flex-col md:flex-row gap-8 w-full mx-auto mt-20 text-white'>
                {/* Left section */}
                <div className='w-full md:w-2/6'>
                    <img className='h-8' src={Logo} alt="" />
                    <div className='mt-5' style={{ color: "#D1D1D1" }}>We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</div>
                    <div className='mt-10'>
                        <div style={{ color: "#767679" }}>LINKS AND REDIRECTS</div>
                        <div className='flex gap-5 mt-3'>
                            <button className='px-8 py-2 text-xs rounded-lg' style={{ backgroundColor: "#292B34" }}>Hire Now</button>
                            <button className='px-8 py-2 text-xs rounded-lg' style={{ backgroundColor: "#292B34" }}>Apply Now</button>
                        </div>
                    </div>
                </div>
                
                {/* Right section */}
                <div className='w-full md:w-4/6'>
                    <div className='text-white font-bold' style={{ fontSize: "2.5rem", lineHeight: "1.3" }}>Connecting the right people to <br /> the right businesses.</div>
                    <div className='flex flex-col md:flex-row gap-5 md:gap-28 mt-20'>
                        <div className='flex flex-col gap-5'>
                            <div style={{ color: "#767679" }}>PLATFORM</div>
                            <div>Find Work</div>
                            <div>Find Talent</div>
                            <div>Categories</div>
                            <div>About Us</div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div style={{ color: "#767679" }}>CATEGORIES</div>
                            <div>Data Science</div>
                            <div>IT & Networking</div>
                            <div>Web & Mobile</div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div style={{ color: "#767679" }}>HELP</div>
                            <div>FAQ's</div>
                            <div>Contact Us</div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div style={{ color: "#767679" }}>GET IN TOUCH</div>
                            <div>Instagram</div>
                            <div>LinkedIn</div>
                            <div>Twitter</div>
                        </div>
                    </div>
                </div>
            </div>

            </div>

            {/* Footer */}
            <hr className='mt-10' style={{ borderColor: "#767679" }} />
            <div className='w-5/6 mt-3 pb-3 flex flex-col md:flex-row justify-between mx-auto' style={{ color: "#767679" }}>
                <div>All rights reserved by Zwilt</div>
                <div className='flex gap-5'>
                    <div className='underline'>Privacy Policy</div>
                    <div className='underline'>Terms and Conditions</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
