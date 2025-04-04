import { animate, stagger } from "motion";
import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import './BannerText.css';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Button from "../../../../Components/Button/Button";
import { Link } from "react-router-dom";

export default function BannerText() {
    const containerRef = useRef(null);

    const handleType = (count) => {
        console.log(count);
    };

    const handleDone = () => {
        console.log("Done after 5 loops!");
    };

    useEffect(() => {
        if (!containerRef.current) return;

        containerRef.current.style.visibility = "visible";

        const words = Array.from(containerRef.current.querySelectorAll("span"));

        animate(
            words,
            { opacity: [0, 1], y: [10, 0] },
            {
                type: "spring",
                duration: 2,
                bounce: 0,
                delay: stagger(0.08),
            }
        );
    }, []);

    return (
        <div ref={containerRef} className="flex flex-col items-start invisible my-10">
            <div className="text-lg font-semibold will-change-transform">
                <span className="inline-block mb-1 md:text-2xl ">Hi! I am,</span> <br />
                <span className="inline-block md:text-4xl text-2xl font-bold mb-3">Md. Tanjim Hossen</span> <br />
                <h1 className="text-xl">
                    <span className="text-[#FFB433] md:text-5xl text-2xl font-bold">
                        <Typewriter
                            words={["Web Developer", "Fronted Developer", "MERN Stack Developer"]}
                            loop={40}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={3000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span> <br />
                    <span className="flex gap-5 mt-4">
                        <div className="relative inline-block cursor-pointer">
                            <Link><div className="tooltip" data-tip="Visit My Facebook">
                                <div className="absolute inset-0 border-4 border-dashed border-text-color rounded-full animate-spin-slow"></div>
                                <FaFacebook className="text-5xl p-2 rounded-full bg-white hover:scale-110 transition-all" />
                            </div></Link>
                        </div>
                        <div className="relative inline-block cursor-pointer">
                            <div className="tooltip" data-tip="Visit My Github">
                                <div className="absolute inset-0 border-4 border-dashed border-text-color rounded-full animate-spin-slow"></div>
                                <FaGithub className="text-5xl  p-2 rounded-full bg-white hover:scale-110 transition-all" />
                            </div>
                        </div>
                        <div className="relative inline-block cursor-pointer">
                            <div className="tooltip" data-tip="Visit My LinkIn">
                                <div className="absolute inset-0 border-4 border-dashed border-text-color rounded-full animate-spin-slow"></div>
                                <FaLinkedinIn className="text-5xl  p-2 rounded-full bg-white hover:scale-110 transition-all" />
                            </div>
                        </div>
                        <div className="relative inline-block cursor-pointer">
                            <Link to={'https://x.com/MdTanjimHossen'} target="blank">
                                <div className="tooltip" data-tip="Visit My Twitter">
                                    <div className="absolute inset-0 border-4 border-dashed  border-text-color rounded-full animate-spin-slow"></div>
                                    <FaTwitter className="text-5xl  p-2  rounded-full bg-white hover:scale-110 transition-all" />
                                </div>
                            </Link>
                        </div>
                    </span>
                </h1>
                <Button className={'my-4'} type={'outline'}>Download Resume</Button>
            </div>
        </div>
    );
}
