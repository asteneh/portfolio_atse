import React from "react";
import {
    FiMapPin,
    FiBriefcase,
    FiAward,
    FiCode,
    FiDatabase,
    FiGlobe,
} from "react-icons/fi";

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section-header">
                    <h2>
                        About <span>Me</span>
                    </h2>
                    <p>The story behind the code</p>
                </div>

                <div className="about-grid">
                    {/* Left — Stats */}
                    <div className="about-image-wrapper">
                        <div className="about-stats">
                            <div className="glass-card stat-card">
                                <div className="stat-number">5.5+</div>
                                <div className="stat-label">Years Exp</div>
                            </div>
                            <div className="glass-card stat-card">
                                <div className="stat-number">10+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="glass-card stat-card">
                                <div className="stat-number">3</div>
                                <div className="stat-label">Companies</div>
                            </div>
                        </div>

                        <div className="about-highlights" style={{ marginTop: "24px" }}>
                            <div className="highlight-item">
                                <FiMapPin className="icon" /> Addis Ababa, Ethiopia
                            </div>
                            <div className="highlight-item">
                                <FiBriefcase className="icon" /> Head of Web Dev
                            </div>
                            <div className="highlight-item">
                                <FiAward className="icon" /> BSc — AAU
                            </div>
                            <div className="highlight-item">
                                <FiCode className="icon" /> Full Stack Dev
                            </div>
                            <div className="highlight-item">
                                <FiDatabase className="icon" /> ERP Developer
                            </div>
                            <div className="highlight-item">
                                <FiGlobe className="icon" /> API Integrator
                            </div>
                        </div>
                    </div>

                    {/* Right — Text */}
                    <div className="about-text">
                        <h3>
                            I write code that <span>runs businesses</span>
                        </h3>
                        <p>
                            I'm Atseneh Abate — a Full Stack Software Developer with a knack
                            for building enterprise systems that don't need a 200-page manual
                            to understand. I've spent over 5.5 years crafting ERP platforms,
                            CRM systems, and web applications across the finance, HR, sales,
                            and inventory domains.
                        </p>
                        <p>
                            My journey started at <strong>CNET Software Technology</strong>,
                            where I went from writing my first production API to leading
                            full-stack projects using ASP.NET Core, SQL Server, and Onion
                            Architecture. Then I leveled up to{" "}
                            <strong>Red Cloud ICT Solutions</strong>, where I now lead the
                            web development team — designing, building, and shipping
                            enterprise-grade applications.
                        </p>
                        <p>
                            I graduated with a BSc in Computer Engineering from{" "}
                            <strong>Addis Ababa University</strong> — where I discovered that
                            debugging at 3 AM is both a curse and a lifestyle.
                        </p>
                        <p style={{ color: "var(--cyan)", fontWeight: 500 }}>
                            Fun fact: I once built a complete CRM system in 2.5 months. That's
                            faster than most people finish a Netflix series. 🍿
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
