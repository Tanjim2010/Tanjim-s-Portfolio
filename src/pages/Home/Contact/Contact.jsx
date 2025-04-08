import { FaPhone, FaEnvelope, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { animate } from "motion"; // motion library import
import Button from "../../../Components/Button/Button";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const containerRef = useRef(null); // for animating the container
    const emailFormRef = useRef(null); // for animating the email form
    const contactInfoRef = useRef(null); // for animating the contact info

    useEffect(() => {
        // Create the intersection observer
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animating the entire contact section when it enters the viewport
                        animate(containerRef.current, { opacity: [0, 1], y: [30, 0] }, { duration: 1.5, easing: "ease-out" });
                        // Animating the email form when it enters the viewport
                        animate(emailFormRef.current, { opacity: [0, 1], x: [-50, 0] }, { duration: 1, delay: 0.3, easing: "ease-out" });
                        // Animating the contact information section when it enters the viewport
                        animate(contactInfoRef.current, { opacity: [0, 1], x: [50, 0] }, { duration: 1, delay: 0.5, easing: "ease-out" });

                        // Unobserve after animation completes (trigger animation only once)
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 } // Trigger animation when 50% of the section is in the viewport
        );

        // Start observing the contact section
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        // Clean up the observer on component unmount
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_s8zsx6a",
                "template_ojy5ezi",
                form.current,
                "9w2lD5LUpWI15kQzb"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setIsSent(true);
                    setLoading(false);
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    setLoading(false);
                }
            );
    };

    return (
        <section ref={containerRef} className="py-14 mb-20 mx-3 bg-[#FBF8EF] rounded-2xl border-2 border-border-color">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Contact Me</h2>

            <div className="grid md:grid-cols-2 gap-10 px-6 md:px-12">
                {/* Email Form */}
                <div ref={emailFormRef}>
                    <h3 className="text-xl font-semibold mb-6">Email Me</h3>

                    {isSent && (
                        <p className="text-green-600 font-medium mb-4">
                            ✅ Message sent successfully!
                        </p>
                    )}

                    <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block mb-2">Name:</label>
                            <input
                                name="user_name"
                                type="text"
                                required
                                className="w-full p-3 rounded-md bg-white border border-border-color focus:outline-yellow-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Email:</label>
                            <input
                                name="user_email"
                                type="email"
                                required
                                className="w-full p-3 rounded-md bg-white border border-border-color focus:outline-yellow-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Message:</label>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                className="w-full p-3 rounded-md bg-white border border-border-color focus:outline-yellow-500"
                            ></textarea>
                        </div>
                        <Button
                            type="outline"
                            className="font-bold"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send"}
                        </Button>
                    </form>
                </div>

                {/* Contact Info */}
                <div ref={contactInfoRef}>
                    <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                    <ul className="space-y-5 text-lg">
                        <li className="flex items-center gap-3">
                            <FaPhone /> 01888156886
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope /> mdtanbirhosen912@gmail.com
                        </li>
                        <li className="flex items-center gap-3 hover:cursor-not-allowed">
                            <FaLinkedin /> Linkedin
                        </li>
                        <li>
                            <a
                                className="flex items-center gap-3 hover:underline"
                                href="https://www.facebook.com/profile.php?id=61551814694251"
                            >
                                <FaFacebook /> Facebook
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaWhatsapp /> +8801888156886
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;
