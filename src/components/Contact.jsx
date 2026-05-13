import React from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from "react-icons/fi";

function Contact() {
    return (
        <>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="section-header">
                        <h2>
                            Let's <span>Connect</span>
                        </h2>
                        <p>I don't bite — unless you write spaghetti code</p>
                    </div>

                    <div className="glass-card contact-card">
                        <h3>Got a project in mind?</h3>
                        <p>
                            Whether you need an ERP system, a web app, or just want to chat
                            about the best way to structure a database — I'm always open to
                            new opportunities and conversations.
                        </p>

                        <div className="social-links">
                            <a
                                href="https://github.com/Atseneh"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link"
                                title="GitHub"
                            >
                                <FiGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/atseneh-abate-b17386118/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link"
                                title="LinkedIn"
                            >
                                <FiLinkedin />
                            </a>
                            <a
                                href="https://x.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link"
                                title="Twitter / X"
                            >
                                <FiTwitter />
                            </a>
                            <a
                                href="mailto:atseneh@example.com"
                                className="social-link"
                                title="Email"
                            >
                                <FiMail />
                            </a>
                        </div>

                        <a href="mailto:atseneh@example.com" className="btn btn-primary">
                            <FiMail /> Say Hello
                        </a>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>
                        Built with <FiHeart className="heart" /> by Atseneh Abate ·{" "}
                        {new Date().getFullYear()}
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Contact;
