import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaUserShield, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiExpress, SiMongodb, SiDaisyui, SiDotenv, SiReactrouter } from "react-icons/si";  

const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "NextAuth", icon: <FaUserShield className="text-gray-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "DaisyUI", icon: <SiDaisyui className="text-purple-500" /> },
    { name: "Dotenv", icon: <SiDotenv className="text-gray-600" /> },
    { name: "React Router", icon: <SiReactrouter className="text-red-500" /> },
    { name: "Firestore", icon: <FaDatabase className="text-blue-600" /> }
];

const skillVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: i => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.2, duration: 0.5 }
    })
};

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // স্ক্রল করলে একবার animation চলবে

    return (
        <div ref={ref} className="py-10 bg-[#FBF8EF] border-2 border-border-color text-center rounded-2xl my-20 overflow-hidden">
            <h2 className="text-4xl font-bold mb-5">My Skills</h2>
            <p className="text-lg  mb-10">These are the technologies I work with.</p>
            
            <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center items-center" 
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} // স্ক্রল করলে animation শুরু হবে
            >
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        custom={index}
                        className="flex flex-col items-center justify-center p-3 border rounded-xl bg-white shadow-md md:h-36 md:w-36 w-28 h-28 transition-transform transform hover:scale-110 hover:shadow-xl hover:shadow-gray-500 duration-300"
                        variants={skillVariant}
                    >
                        <div className="text-5xl">{skill.icon}</div>
                        <p className="mt-2 font-semibold">{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default SkillsSection;
