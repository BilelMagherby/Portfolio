
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';

const Projects = ({ data }) => {
    return (
        <section id="projects" className="section-padding bg-darker">
            <div className="container">
                <h2 className="section-title text-center">
                    {data.ui.featuredProjects}
                </h2>

                <div className="projects-grid">
                    {data.projects.map((proj, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="project-card group"
                        >
                            {/* Top Gradient Line */}
                            <div className="card-gradient-top"></div>

                            <div className="project-content">
                                <div className="project-header">
                                    <div>
                                        <h3 className="project-title">{proj.title}</h3>
                                        <div className="project-type">
                                            <Layers size={14} />
                                            {proj.type}
                                        </div>
                                    </div>
                                    <span className="project-period">
                                        {proj.period}
                                    </span>
                                </div>

                                <div className="project-tech">
                                    {proj.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <ul className="project-desc">
                                    {proj.description.map((desc, i) => (
                                        <li key={i}>
                                            <span className="bullet-arrow">›</span>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    {data.ui.viewDetails} <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
