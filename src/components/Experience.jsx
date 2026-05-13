import React from "react";

const experiences = [
    {
        date: "Current",
        title: "Head of Web Development",
        company: "Red Cloud ICT Solutions",
        description:
            "Leading the web development team, designing enterprise applications, and coordinating frontend-backend integration. Overseeing deployment, maintenance, and client requirements across multiple projects.",
        tags: ["React.js", "Node.js", ".NET", "SQL Server", "MongoDB"],
    },
    {
        date: "Previous",
        title: "Junior Associate & Programmer Lead",
        company: "CNET Software Technology",
        description:
            "Developed enterprise ERP systems using ASP.NET Core and SQL Server. Led full-stack projects, built scalable APIs with Onion Architecture, and worked on finance, HRMS, stock, sales, and reporting modules.",
        tags: ["ASP.NET Core", "MVC", "SQL Server", "JavaScript", "REST APIs"],
    },
    {
        date: "Education",
        title: "BSc in Electrical & Computer Engineering",
        company: "Addis Ababa University",
        description:
            "Completed an integrated Bachelor of Science covering core CS fundamentals, software engineering principles, and electrical engineering. This is where the addiction to clean code began.",
        tags: ["Computer Engineering", "Software Design", "Algorithms"],
    },
];

function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="section-header">
                    <h2>
                        My <span>Journey</span>
                    </h2>
                    <p>From student to team lead — the career so far</p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, i) => (
                        <div className="timeline-item" key={i}>
                            <div className="timeline-dot"></div>
                            <div className="glass-card timeline-content">
                                <span className="timeline-date">{exp.date}</span>
                                <h3>{exp.title}</h3>
                                <h4>{exp.company}</h4>
                                <p>{exp.description}</p>
                                <div className="timeline-tags">
                                    {exp.tags.map((tag, j) => (
                                        <span className="timeline-tag" key={j}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
