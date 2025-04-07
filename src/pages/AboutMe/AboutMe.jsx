import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
    const aboutMeRef = useRef(null);
    const isInView = useInView(aboutMeRef, { once: true }); // স্ক্রল করার পর একবার animation হবে

    return (
        <div id="about-me">
            <motion.div
                ref={aboutMeRef}
                className="md:p-10 p-4 mt-10 border-2 rounded-2xl border-[#FFB433] bg-[#FBF8EF]"
                initial={{ opacity: 0, scale: 0.8 }} // শুরুর অবস্থান
                animate={isInView ? { opacity: 1, scale: 1 } : {}} // স্ক্রল করলে animate হবে
                transition={{ type: "spring", duration: 2, bounce: 0.3 }}
            >
                <h2 className="text-3xl font-bold text-center">About Me</h2>
                <h4 className="text-center font-semibold">Here is some info about me. I think you’ll like it.</h4>
                <div className="flex flex-col-reverse gap-5 lg:flex-row">
                    <div className='mt-5 lg:w-1/2 w-full'>
                        <div className="flex gap-2 mt-3 items-center">
                            <h3 className="md:text-xl font-bold text-border-color">Name:</h3>
                            <h3 className='md:text-xl font-bold'>Md Tanjim Hossen</h3>
                        </div>
                        <div className="flex gap-2 mt-3 items-center">
                            <h3 className="md:text-xl font-bold text-border-color">Role:</h3>
                            <h4 className="md:text-xl font-bold">
                                <Typewriter
                                    words={["Web Developer", "Fronted Developer", "MERN Stack Developer"]}
                                    loop={40}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={100}
                                    deleteSpeed={100}
                                    delaySpeed={3000}
                                />
                            </h4>
                        </div>
                        <div className="flex gap-2 mt-3 items-center">
                            <h3 className="md:text-xl font-bold text-border-color">Hobby:</h3>
                            <h3 className='md:text-xl font-bold'>Learning Ethical Hacking, Exploring more backend technology, etc.</h3>
                        </div>
                        <div className="flex gap-2 mt-3 items-center">
                            <h3 className="md:text-xl font-bold text-border-color">Passion:</h3>
                            <h3 className='md:text-xl font-bold'>Building intuitive, user-friendly websites and applications.</h3>
                        </div>
                        <div className="flex gap-2 mt-3 items-center">
                            <h3 className="md:text-xl font-bold text-border-color">Free Times:</h3>
                            <ul className="md:text-xl font-bold list-disc md:pl-5 pl-1">
                                <li>Likes to play Football</li>
                                <li>Like Read any story books</li>
                                <li>Like to extra Prayer</li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center lg:justify-end items-end">
                        <div className='p-4 rounded-2xl border-t-4 border max-w-[240px] border-text-color bg-[#B4EBE6] mt-3'>
                            <div>
                                <img className='md:h-[200px] object-cover border-3 border-border-color md:w-[200px] mx-auto rounded-full'
                                    src="https://i.ibb.co.com/n87FFTTk/tanjim-enhanced-image.png" alt="" />
                            </div>
                            <div className='mt-3 text-center'>
                                <h3 className='text-2xl font-bold'>Md Tanjim Hossen</h3>
                                <h4 className="font-semibold my-1 text-border-color">
                                    <Typewriter
                                        words={["Web Developer", "Fronted Developer", "MERN Stack Developer"]}
                                        loop={40}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={100}
                                        deleteSpeed={100}
                                        delaySpeed={3000}
                                    />
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutMe;
