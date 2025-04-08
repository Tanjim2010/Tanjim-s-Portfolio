import { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "HostelHub",
    image: "https://i.ibb.co.com/HpM6VtyS/hostel-hub.png",
    live: "https://assignment-12-499f2.web.app/",
    detailPageTitle: "/project/hostelhub",
  },
  {
    title: "Visa Navigator",
    image: "https://i.ibb.co.com/rfqLQWsG/visa-navigator.png",
    live: "https://visa-navigator-client-three.vercel.app/",
    detailPageTitle: "/project/visa-navigator",
  },
  {
    title: "Tour Nest",
    image: "https://i.ibb.co.com/5p59qkj/Tour-nest.png",
    live: "https://tour-nest-a8f37.web.app/",
    detailPageTitle: "/project/tour-nest",
  },
];

const MyProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section id="my-projects" className="py-14 mb-20 mx-3 bg-[#FBF8EF] rounded-2xl border-2 border-border-color">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="group bg-white rounded-2xl shadow-md p-4 md:p-5 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="h-44 sm:h-48 md:h-52 w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">{project.title}</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mt-2">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex justify-center items-center border border-text-color px-4 py-2 rounded-xl hover:bg-text-color hover:text-background transition-colors duration-200"
              >
                Live Preview <FaExternalLinkAlt className="ml-2" />
              </a>
              <Link to={project.detailPageTitle} className="w-full sm:w-auto">
                <Button type="outline" className="w-full">
                  See Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
