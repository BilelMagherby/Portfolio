
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import bilelImg from '../assets/bilel.jpg';

const Hero = ({ data }) => {
    const { personalInfo, profile, ui } = data;

    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text-content"
                >
                    <div className="badge">PORTFOLIO 2025</div>
                    <h1 className="hero-title">
                        Hi, I'm <br />
                        <span className="gradient-text">{personalInfo.name}</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        {personalInfo.title}
                    </h2>
                    <p className="hero-description">
                        {profile.split('.')[0]}.
                    </p>

                    <div className="social-links">
                        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon">
                            <Linkedin size={24} />
                        </a>
                        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-icon">
                            <Github size={24} />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} className="social-icon">
                            <Mail size={24} />
                        </a>
                    </div>

                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            {ui.contactMe}
                        </a>
                        <a href="#projects" className="btn">
                            {ui.viewWork}
                        </a>
                    </div>

                    <div className="hero-contact-info">
                        <div className="contact-item">
                            <MapPin size={16} className="icon-highlight" />
                            {personalInfo.location}
                        </div>
                        <div className="contact-item">
                            <Phone size={16} className="icon-highlight" />
                            {personalInfo.phone}
                        </div>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-image-content"
                >
                    <div className="image-wrapper">
                        <div className="orbit orbit-1"></div>
                        <div className="orbit orbit-2"></div>

                        <div className="image-container">
                            <img
                                src={bilelImg}
                                alt={personalInfo.name}
                                className="profile-img"
                            />
                        </div>

                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="floating-card card-right"
                        >
                            <div className="card-number">1+</div>
                            <div className="card-label">Year Exp</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="floating-card card-left"
                        >
                            <div className="card-number primary-text">10+</div>
                            <div className="card-label">Projects</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
