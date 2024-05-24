import React, { useRef, useState, useEffect } from 'react';
import onboardWithoutRisk from "../assets/images/onboardWithoutRisk.png";
import bullet from "../assets/images/bullet.png";
import faviconWhite from "../assets/images/faviconWhite.png";

function WhyChooseUs() {
    const firstSliderRef = useRef(null);
    const secondSliderRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleMouseDown = (sliderRef, event) => {
        console.log('Mouse down:', event.clientX);
        setIsDragging(true);
        setStartPosition(event.clientX);
        setScrollPosition(sliderRef.current.scrollLeft);
    };

    const handleMouseMove = (sliderRef, event) => {
        if (!isDragging) return;
        console.log('Mouse move:', event.clientX);
        const newPosition = event.clientX;
        const distance = newPosition - startPosition;
        sliderRef.current.scrollLeft = scrollPosition - distance;
        console.log('Scroll position:', sliderRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        console.log('Mouse up');
        setIsDragging(false);
    };

    const addMouseEvents = (sliderRef) => {
        const slider = sliderRef.current;
        slider.addEventListener('mousedown', (event) => handleMouseDown(sliderRef, event));
        slider.addEventListener('mousemove', (event) => handleMouseMove(sliderRef, event));
        slider.addEventListener('mouseup', handleMouseUp);
        slider.addEventListener('mouseleave', handleMouseUp);
    };

    useEffect(() => {
        addMouseEvents(firstSliderRef);
        addMouseEvents(secondSliderRef);

        return () => {
            const firstSlider = firstSliderRef.current;
            const secondSlider = secondSliderRef.current;
            firstSlider.removeEventListener('mousedown', (event) => handleMouseDown(firstSliderRef, event));
            firstSlider.removeEventListener('mousemove', (event) => handleMouseMove(firstSliderRef, event));
            firstSlider.removeEventListener('mouseup', handleMouseUp);
            firstSlider.removeEventListener('mouseleave', handleMouseUp);

            secondSlider.removeEventListener('mousedown', (event) => handleMouseDown(secondSliderRef, event));
            secondSlider.removeEventListener('mousemove', (event) => handleMouseMove(secondSliderRef, event));
            secondSlider.removeEventListener('mouseup', handleMouseUp);
            secondSlider.removeEventListener('mouseleave', handleMouseUp);
        };
    }, []);

    return (
        <div className='mx-auto py-32 px-32 relative mt-10 mb-10 flex items-center' style={{background: "linear-gradient(180deg, rgba(237, 239, 255, 0) 0%, #EDEFFF 130.82%)"}}>
            <div className='w-1/2'>
                <div style={{ fontSize: "2rem", fontWeight: "bold", lineHeight: "1.3" }}>Why choose <br /> Zwilt?</div>
                <div className='w-1/3 mt-4 text-sm'>We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</div>
            </div>

            {/* First Slider */}
            <div ref={firstSliderRef} className='w-1/2 lg:w-4/6 flex items-center justify-between absolute px-12 rounded-lg py-12 overflow-hidden cursor-grab' style={{right: "-180px"}}>
                <div>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", lineHeight: "1.3" }}>Onboard without <br /> the risk.</div>
                    <div className='flex flex-col gap-1 mt-4 text-sm'>
                        <div className='flex gap-3 items-center'>
                            <img className='w-5 h-2' src={bullet} alt="" />
                            <span>We pick the best for you to select.</span>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img className='w-5 h-2' src={bullet} alt="" />
                            <span>Thousands of vetted candidates in dozens of categories.</span>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img className='w-5 h-2' src={bullet} alt="" />
                            <span>Risk-free resource swapping for the best fit.</span>
                        </div>
                    </div>

                    <div className='flex gap-3 items-center mt-5'>
                        <div className="flex justify-center items-center rounded-full overflow-hidden bg-black h-11 w-11" style={{ borderRadius: "35%" }}>
                            <img className={'h-2 w-3'} src={faviconWhite} alt="" />
                        </div>
                        <span className='font-bold text-sm'>Join Now</span>
                    </div>
                </div>
                <img className='h-96' src={onboardWithoutRisk} alt="" />
            </div>

            {/* Second Slider */}
            <div ref={secondSliderRef} className='w-1/2 lg:w-4/6 flex items-center justify-between absolute px-12 rounded-lg py-12 overflow-hidden cursor-grab' style={{right: "-180px", top: "450px"}}>
                <div>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", lineHeight: "1.3" }}>Another Great Feature.</div>
                    <div className='flex flex-col gap-1 mt-4 text-sm'>
                        <div className='flex gap-3 items-center'>
                            <img className='w-5 h-2' src={bullet} alt="" />
                            <span>Feature description one.</span>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img className='w-5 h-2' src={bullet} alt="" />
                            <span>Feature description two.</span>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img className='w-5 h-2' src={bullet} alt="" />
                            <span>Feature description three.</span>
                        </div>
                    </div>

                    <div className='flex gap-3 items-center mt-5'>
                        <div className="flex justify-center items-center rounded-full overflow-hidden bg-black h-11 w-11" style={{ borderRadius: "35%" }}>
                            <img className={'h-2 w-3'} src={faviconWhite} alt="" />
                        </div>
                        <span className='font-bold text-sm'>Discover More</span>
                    </div>
                </div>
                <img className='h-96' src={onboardWithoutRisk} alt="" />
            </div>
        </div>
    );
}

export default WhyChooseUs;
