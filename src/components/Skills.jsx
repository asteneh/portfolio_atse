import React from "react";
import {
    SiCsharp,
    SiMicrosoftsqlserver,
    SiTypescript,
    SiTailwindcss,
    SiBootstrap,
    SiMongodb,
    SiExpress,
} from "react-icons/si";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiDotnet,
    DiGit,
    DiHtml5,
    DiCss3,
} from "react-icons/di";

const skills = [
    { name: "C#", icon: <SiCsharp /> },
    { name: ".NET Core", icon: <DiDotnet /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React.js", icon: <DiReact /> },
    { name: "Node.js", icon: <DiNodejs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "SQL Server", icon: <SiMicrosoftsqlserver /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "HTML5", icon: <DiHtml5 /> },
    { name: "CSS3", icon: <DiCss3 /> },
    { name: "Git", icon: <DiGit /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
];

function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="section-header">
                    <h2>
                        Tech <span>Arsenal</span>
                    </h2>
                    <p>
                        The weapons I use to fight bugs and build features
                    </p>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, i) => (
                        <div className="skill-item" key={i}>
                            <div className="skill-icon">{skill.icon}</div>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
