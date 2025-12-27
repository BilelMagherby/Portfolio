
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Experience = ({ data }) => {
    return (
        <section id="experience" className="section-padding">
            <div className="container">
                <h2 className="section-title text-center">
                    {data.ui.professionalJourney}
                </h2>

                <div className="timeline-container">
                    {/* Vertical Line */}
                    <div className="timeline-line"></div>

                    {data.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`timeline-item ${index % 2 === 0 ? 'reverse' : ''}`}
                        >
                            {/* Dot on Line */}
                            <div className="timeline-dot"></div>

                            {/* Spacer */}
                            <div className="timeline-spacer"></div>

                            {/* Content Box */}
                            <div className="timeline-content card group">
                                <div className="timeline-header">
                                    <div>
                                        <h3 className="role-title">{exp.role}</h3>
                                        <p className="company-name">{exp.company}</p>
                                    </div>
                                    <div className="timeline-meta">
                                        <div className="meta-item">
                                            <Calendar size={14} /> {exp.period}
                                        </div>
                                        <div className="meta-item">
                                            <MapPin size={14} /> {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <ul className="timeline-desc">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>
                                            <span className="bullet"></span>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
