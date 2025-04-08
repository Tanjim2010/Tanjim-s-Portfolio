import { Link, useParams } from "react-router-dom";
import Button from "../../../../Components/Button/Button";
import { FaArrowLeft } from "react-icons/fa";

const projectDetails = [
    {
        name: "Hostel Hub",
        category: "hostelhub",
        description:
            "A all in one Hostel Hub web application for different authorized users and smooth user experience.",
        image: "https://i.ibb.co.com/HpM6VtyS/hostel-hub.png",
        liveLink: "https://assignment-12-499f2.web.app/",
        codeLink: "https://github.com/Tanjim2010/Hostel-Hub-Client.git",
        keyFeatures: [
            "Two steps Authorization for Admin, User",
            "Different routes base role",
            "Stripe payment system",
            "Tree cards available for more better experience"
        ],
        challenges: [
            "Implementing real-time room availability",
            "Integrating payment gateways securely",
            "Optimizing performance for large data sets"
        ],
        technologiesUsed: [
            "React",
            "Firebase",
            "Tailwind CSS",
            "Node.js",
            "Tanstack",
            "Stripe",
            "MongoDB",
            "Express.js"
        ],
        potentialImprovements: [
            "Integrate SSLCommerz as an alternative payment gateway alongside Stripe.",
            "Enhance the admin panel with real-time analytics."
        ]
    },
    {
        name: "Tour Nest",
        category: "tour-nest",
        description:
            "A all in one tourist management web application for different authorized users and smooth user experience.",
        image: "https://i.ibb.co.com/5p59qkj/Tour-nest.png",
        liveLink: "https://tour-nest-a8f37.web.app/",
        codeLink: "https://github.com/Tanjim2010/Tour-Nest-Client.git",
        keyFeatures: [
            "Three steps Authorization for Admin, Tour-Guide, Tourist",
            "Different routes base role",
            "Stripe payment system"
        ],
        challenges: [
            "Implementing real-time room availability",
            "Integrating payment gateways securely",
            "Optimizing performance for large data sets"
        ],
        technologiesUsed: [
            "React",
            "Firebase",
            "Tailwind CSS",
            "Node.js",
            "Tanstack",
            "Stripe",
            "MongoDB",
            "Express.js"
        ],
        potentialImprovements: [
            "Integrate SSLCommerz as an alternative payment gateway alongside Stripe.",
            "Enhance the admin panel with real-time analytics."
        ]
    },
    {
        name: "VISA NAVIGATOR",
        category: "visa-navigator",
        description:
            "A platform for navigating visa requirements and application processes for travelers worldwide.",
        image: "https://i.ibb.co.com/rfqLQWsG/visa-navigator.png",
        liveLink: "https://visa-navigator-client-three.vercel.app/",
        codeLink: "https://github.com/Tanjim2010/Visa-Navigator-Client.git",
        keyFeatures: [
            "Comprehensive visa requirement database",
            "User-friendly search and filter options",
            "Step-by-step visa application guidance",
            "Responsive design for all devices"
        ],
        challenges: [
            "Compiling accurate visa data for multiple countries",
            "Creating an intuitive user experience",
            "Ensuring data privacy and security"
        ],
        technologiesUsed: ["React", "Firebase", "Node.js", "Tailwind CSS"],
        potentialImprovements: [
            "Implement SSLCommerz payment support for premium visa consultation services.",
            "Develop an admin panel for managing visa data, updating country requirements, and analyzing user trends."
        ]
    }
];

const ProjectDetailPage = () => {
    const { detail } = useParams();
    const project = projectDetails.find((item) => item.category === detail);

    if (!project) {
        return <div className="text-center text-red-500 mt-10">Project not found!</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-3 md:px-0 space-y-8 mb-20">
            <Link className="my-3" to={'/'}><Button className={'my-5 flex  items-center justify-center gap-3'} type={'outline'}><FaArrowLeft /> Back to Home</Button></Link>
            <img
                src={project.image}
                alt={project.name}
                className="w-full rounded-xl border-t-3 shadow-md"
            />
            <h2 className="text-3xl font-bold text-center">{project.name}</h2>
            <p className="text-lg ">{project.description}</p>

            <div className="flex gap-4 justify-center">
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 border border-border-color rounded text-border-color hover:bg-border-color hover:text-background transition-colors delay-75"
                >
                    View Live
                </a>
                <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded hover:bg-text-color hover:text-background transition-colors delay-75 border"
                >
                    Source Code
                </a>
            </div>

            <section>
                <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc list-inside space-y-1">
                    {project.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h3 className="text-2xl font-semibold mb-3">Challenges</h3>
                <ul className="list-disc list-inside space-y-1">
                    {project.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h3 className="text-2xl font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                    {project.technologiesUsed.map((tech, index) => (
                        <span
                            key={index}
                            className="badge badge-outline badge-lg px-4 py-2"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-2xl font-semibold mb-3">Future Plans</h3>
                <ul className="list-disc list-inside space-y-1">
                    {project.potentialImprovements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default ProjectDetailPage;
