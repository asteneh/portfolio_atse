import React, { useState, useEffect } from "react";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const roles = [
    "Full Stack Developer",
    "ERP System Architect",
    "Web Development Lead",
    "Code Alchemist ✨",
];

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting && text === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(
                () => {
                    setText(
                        isDeleting
                            ? currentRole.substring(0, text.length - 1)
                            : currentRole.substring(0, text.length + 1)
                    );
                },
                isDeleting ? 40 : 80
            );
        }
        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content fade-up">
                    <div className="hero-badge">
                        <span className="dot"></span>
                        Available for hire
                    </div>
                    <h1>
                        Hey, I'm{" "}
                        <span className="gradient-text">Atseneh</span>
                    </h1>
                    <div className="hero-subtitle">
                        I'm a <span className="typed-text">{text}</span>
                    </div>
                    <p className="hero-description">
                        5.5+ years of turning caffeine into enterprise software.
                        I build ERP systems that actually make sense and web apps
                        that don't make people cry. Based in Addis Ababa 🇪🇹
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View My Work <FiArrowRight />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            <FiDownload /> Let's Talk
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-avatar">
                        <div className="hero-avatar-inner">
                            👨‍💻
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
