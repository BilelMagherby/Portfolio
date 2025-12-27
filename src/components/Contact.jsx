
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Linkedin, Github } from 'lucide-react';

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
                    <h2 className="section-title">
                        {data.ui.letsWork}
                    </h2>
                    <p className="section-subtitle">
                        {data.ui.haveProject}
                    </p>
                </motion.div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
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

                        <div className="social-buttons">
                            <a href={data.personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-btn linkedin">
                                <Linkedin size={20} /> LinkedIn
                            </a>
                            <a href={data.personalInfo.github} target="_blank" rel="noreferrer" className="social-btn github">
                                <Github size={20} /> GitHub
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-content">
                            <div className="form-group">
                                <label>{data.ui.name}</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label>{data.ui.message}</label>
                                <textarea rows={4} placeholder="..."></textarea>
                            </div>
                            <button className="submit-btn">
                                {data.ui.sendMessage} <Send size={18} />
                            </button>
                        </div>

                        {/* Form Background Decoration */}
                        <div className="form-deco"></div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
