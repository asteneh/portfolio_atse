import React from "react";
import { FiFolder, FiExternalLink } from "react-icons/fi";

const projects = [
    {
        title: "Enterprise ERP System",
        description:
            "The digital brain of an entire company — finance, HRMS, stock, sales, and reporting all in one. Basically, I automated the \"who does what\" question.",
        tech: ["ASP.NET Core", "SQL Server", "React", "Onion Architecture"],
    },
    {
        title: "G_CRM System",
        description:
            "A complete CRM with lead management, omnichannel chat, and task tracking. Built in 2.5 months — faster than most people finish rearranging their desktop icons.",
        tech: ["ASP.NET Core", "SQL Server", "React", "REST APIs"],
    },
    {
        title: "Customer CRM Platform",
        description:
            "Customer registration, team management, bulk SMS, and activity tracking. Think of it as a social network for businesses, minus the memes.",
        tech: ["ASP.NET Core", "JavaScript", "AJAX", "MVC"],
    },
    {
        title: "Order Management System",
        description:
            "Dynamic fee calculation, product management, and admin dashboard. Because knowing where your money goes is better than checking your bank balance and crying.",
        tech: ["ASP.NET MVC", "SQL Server", "Razor Views"],
    },
    {
        title: "Ethiopian TV & Radio Stream",
        description:
            "Live streaming app for Ethiopian TV and radio channels. Bringing the high-voltage energy of Ethiopian media straight to your tiny screen. 📺",
        tech: ["React Native", "Expo", "JavaScript"],
    },
    {
        title: "Event Suggestion System",
        description:
            "AI-powered recommendations for events. Useful for people who think 'refreshing the browser' counts as an outdoor activity.",
        tech: ["React", "Node.js", "MongoDB", "AI Integration"],
    },
    {
        title: "Dynamic File Manager",
        description:
            "Category-based file upload with Mongoose data modeling. Keeping your digital mess in organized folders — something even my desktop can't achieve.",
        tech: ["Node.js", "MongoDB", "Mongoose", "AJAX"],
    },
    {
        title: "Milk Test Web App",
        description:
            "QR code scanning, daily test results, and dynamic pricing. The first line of defense between the cow and your cereal bowl. 🥛",
        tech: ["ASP.NET MVC", "Razor Pages", "SQL Server"],
    },
    {
        title: "Company Website & Dashboard",
        description:
            "CMS dashboard for managing banners, landing pages, and settings. Giving non-techies the power to break — I mean, update — things easily.",
        tech: ["ASP.NET MVC", "SQL Server", "JavaScript"],
    },
    {
        title: "Voucher Attachment System",
        description:
            "Production-optimized AJAX file upload. Because uploading files shouldn't feel like you're sending a fax in 1995.",
        tech: ["ASP.NET Core", "SQL Server", "AJAX"],
    },
];

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="section-header">
                    <h2>
                        My <span>Legendary</span> Works
                    </h2>
                    <p>10 real-world projects, 0 todo-list apps</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <div className="glass-card project-card" key={i}>
                            <div className="project-card-header">
                                <FiFolder className="project-card-icon" />
                                <div className="project-card-links">
                                    <a
                                        href={`https://github.com/atseneh`}
                                        target="_blank"
                                        rel="noreferrer"
                                        title="View on GitHub"
                                    >
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-card-tech">
                                {project.tech.map((t, j) => (
                                    <span key={j}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
