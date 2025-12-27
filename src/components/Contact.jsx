
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = ({ data }) => {
    return (
        <section id="contact" className="section-padding bg-gradient-dark">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="contact-header text-center"
                >
                    <h2 className="section-title special-contact-title">
                        {data.ui.letsWork}
                    </h2>
                    <p className="section-subtitle">
                        {data.ui.haveProject}
                    </p>
                </motion.div>

                <div className="contact-container-centered">
                    {/* Contact Info */}
                    <div className="contact-info-centered">
                        <div className="contact-cards-row">
                            <div className="contact-card">
                                <div className="contact-row">
                                    <div className="contact-icon-box bg-cyan">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="contact-label">Email</h4>
                                        <p className="contact-value">{data.personalInfo.email}</p>
                                    </div>
                                </div>
                                <a href={`mailto:${data.personalInfo.email}`} className="contact-link cyan">
                                    {data.ui.sendMessage}
                                </a>
                            </div>

                            <div className="contact-card">
                                <div className="contact-row">
                                    <div className="contact-icon-box bg-purple">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="contact-label">Phone</h4>
                                        <p className="contact-value">{data.personalInfo.phone}</p>
                                    </div>
                                </div>
                                <a href={`tel:${data.personalInfo.phone}`} className="contact-link purple">
                                    Call now
                                </a>
                            </div>
                        </div>

                        <div className="social-buttons centered">
                            <a href={data.personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-btn linkedin">
                                <Linkedin size={20} /> LinkedIn
                            </a>
                            <a href={data.personalInfo.github} target="_blank" rel="noreferrer" className="social-btn github">
                                <Github size={20} /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
