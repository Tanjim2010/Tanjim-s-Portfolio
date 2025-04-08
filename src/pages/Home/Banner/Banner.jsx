import React, { useEffect, useRef } from "react";
import { animate, stagger } from "motion";
import BannerText from "./BannerText/BannerText";
import './Banner.css';

const Banner = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const topLeftBoxRef = useRef(null);
    const bottomRightBoxRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !imageRef.current || !topLeftBoxRef.current || !bottomRightBoxRef.current) return;

        containerRef.current.style.visibility = "visible";
        imageRef.current.style.visibility = "visible";
        topLeftBoxRef.current.style.visibility = "visible";
        bottomRightBoxRef.current.style.visibility = "visible";

        // Main container and image animation
        animate(
            [containerRef.current, imageRef.current],
            { opacity: [0, 1], scale: [0.8, 1] },
            {
                type: "spring",
                duration: 2,
                bounce: 0.3,
                delay: stagger(0.1),
            }
        );

        // Top-Left Box Animation
        animate(
            topLeftBoxRef.current,
            { opacity: [0, 1], scale: [0.5, 1], rotate: [-20, 0] },
            {
                duration: 1.5,
                delay: 0.5,
                easing: "ease-in-out"
            }
        );

        // Bottom-Right Box Animation
        animate(
            bottomRightBoxRef.current,
            { opacity: [0, 1], y: [30, 0] },
            {
                duration: 1.5,
                delay: 0.7,
                easing: "ease-in-out"
            }
        );

    }, []);

    return (
        <div ref={containerRef} className="flex px-3 flex-col pt-5 pb-10 md:flex-row w-full gap-7 h-full invisible">
            <div className="md:w-1/2 w-full flex flex-col z-30 justify-center bg-[#FBF8EF] border-2 border-[#FFB433] px-5 rounded-2xl">
                <BannerText />
            </div>
            {/* Image Section */}
            <div className="md:w-1/2 w-full relative bg-[#FBF8EF] border-2 border-border-color rounded-2xl md:h-[500px] h-[400px] flex rounded-tl-none rounded-br-none justify-center items-center">
                {/* Rotating Border Effect */}
                <div className="relative lg:w-[370px] md:w-[250px] md:h-[250px] w-[230px] h-[230px] lg:h-[370px] flex justify-center items-center">
                    <div className="absolute w-full h-full border-[6px] border-dashed border-[#FFB433] rounded-full animate-spin-slow"></div>
                    <img
                        ref={imageRef}
                        className="relative p-1 md:w-[250px] md:h-[250px] rounded-full lg:h-[366px] h-[230px] w-[230px] lg:w-[366px] object-cover"
                        src="https://i.ibb.co.com/n87FFTTk/tanjim-enhanced-image.png"
                        alt="Profile"
                    />
                </div>
                {/* Top-Left Box with Animation */}
                <div
                    ref={topLeftBoxRef}
                    className='md:h-[100px] md:w-[100px] h-[70px] w-[70px] text-background pt-6 pl-5 text-xl font-bold bg-text-color absolute left-0 rounded-2xl rounded-br-full top-0 invisible'
                ></div>
                {/* Bottom-Right Box with Animation */}
                <div
                    ref={bottomRightBoxRef}
                    className='md:h-[100px] md:w-[100px] h-[70px] w-[70px] text-background text-2xl font-bold flex pt-11 pl-10 bg-text-color absolute right-0 bottom-0 rounded-tl-full invisible p-2'
                ></div>
            </div>
        </div>
    );
};

export default Banner;
