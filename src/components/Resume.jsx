import React, { useState, useEffect, useCallback } from "react";
import { FiDownload, FiX } from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import pdf from "../Assets/ATSE-BIT.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Resume() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [width, setWidth] = useState(1200);
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    const openModal = useCallback(() => {
        setLoading(true);
        setIsOpen(true);
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setLoading(false);
    }

    return (
        <>
            {/* Inline teaser section */}
            <section className="resume-section" id="resume">
                <div className="container">
                    <div className="section-header">
                        <h2>
                            My <span>Resume</span>
                        </h2>
                        <p>The official paper trail of my adventures in code</p>
                    </div>

                    <div className="resume-cta">
                        <div className="glass-card resume-teaser">
                            <div className="resume-teaser-icon">📄</div>
                            <h3>Want to see the full story?</h3>
                            <p>
                                Click below to view my complete resume — or just download it
                                and read it with your morning coffee.
                            </p>
                            <div className="resume-teaser-actions">
                                <button onClick={openModal} className="btn btn-primary">
                                    View Resume
                                </button>
                                <a
                                    href={pdf}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline"
                                >
                                    <FiDownload /> Download PDF
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fullscreen Modal */}
            {isOpen && (
                <div className="resume-modal-overlay" onClick={() => setIsOpen(false)}>
                    <div
                        className="resume-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="resume-modal-header">
                            <h3>📄 My Resume</h3>
                            <div className="resume-modal-actions">
                                <a
                                    href={pdf}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary btn-sm"
                                >
                                    <FiDownload /> Download
                                </a>
                                <button
                                    className="resume-modal-close"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close"
                                >
                                    <FiX />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="resume-modal-body">
                            {loading && (
                                <div className="resume-loader">
                                    <div className="resume-spinner">
                                        <div className="spinner-ring"></div>
                                        <div className="spinner-ring"></div>
                                        <div className="spinner-ring"></div>
                                    </div>
                                    <p>Loading your resume...</p>
                                </div>
                            )}
                            <Document
                                file={pdf}
                                onLoadSuccess={onDocumentLoadSuccess}
                                className="resume-pdf-container"
                                loading=""
                            >
                                {Array.from(new Array(numPages || 1), (_, index) => (
                                    <Page
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                        scale={width > 786 ? 1.5 : 0.55}
                                        className="resume-pdf-page"
                                        loading=""
                                    />
                                ))}
                            </Document>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Resume;
