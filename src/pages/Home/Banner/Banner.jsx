import React, { useEffect, useRef } from "react";
import { animate, stagger } from "motion";
import BannerText from "./BannerText/BannerText";

const Banner = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !imageRef.current) return;

        // প্রথমে দুইটা এলিমেন্ট ইনভিজিবল থাকবে
        containerRef.current.style.visibility = "visible";
        imageRef.current.style.visibility = "visible";

        // BannerText এবং Image একসাথে Animate করবো
        animate(
            [containerRef.current, imageRef.current],
            { opacity: [0, 1], scale: [0.8, 1] }, // ছোট থেকে বড় + Fade-in effect
            {
                type: "spring",
                duration: 2,
                bounce: 0.3,
                delay: stagger(0.1), // স্ট্যাগার অ্যাড করলে smooth effect আসবে
            }
        );
    }, []);

    return (
        <div ref={containerRef} className="flex flex-col pt-5 pb-10 md:flex-row w-full gap-7 h-full invisible">
            <div className="md:w-1/2 w-full flex flex-col z-30 justify-center bg-[#FBF8EF] border-2 border-[#FFB433] px-5 rounded-2xl">
                <BannerText />
            </div>
            {/* Image Section */}
            <div className="md:w-1/2 w-full relative bg-[#FBF8EF] border-2 border-border-color rounded-2xl md:h-[600px] h-[400px] flex rounded-tl-none rounded-br-none justify-center items-center">
                {/* Image with Motion Effect */}
                <img
                    ref={imageRef}
                    className="rounded-2xl h-full invisible"
                    src="https://i.ibb.co.com/n87FFTTk/tanjim-enhanced-image.png"
                    alt="Profile"
                />
                <div className='md:h-[100px] md:w-[100px] h-[70px] w-[70px] text-background pt-6 pl-5 text-xl font-bold bg-text-color absolute left-0 rounded-2xl rounded-br-full top-0'>Hello!</div>
                <div className='md:h-[100px] md:w-[100px] h-[70px] w-[70px] text-background text-2xl font-bold flex pt-11 pl-10 bg-text-color absolute right-0 bottom-0 rounded-tl-full '>dear</div>
            </div>
        </div>
    );
};

export default Banner;
