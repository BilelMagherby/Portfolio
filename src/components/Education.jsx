
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = ({ data }) => {
    return (
        <section id="education" className="section-padding relative">
            {/* Background decoration */}
            <div className="bg-blur-blob"></div>

            <div className="container">
                <h2 className="section-title text-center">
                    {data.ui.educationCert}
                </h2>

                <div className="education-list">
                    {data.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="education-item"
                        >
                            <div className="edu-icon-box">
                                <GraduationCap size={32} />
                            </div>

                            <div className="edu-content">
                                <h3 className="edu-degree">{edu.degree}</h3>
                                <p className="edu-institution">
                                    <Award size={16} className="icon-gold" />
                                    {edu.institution}
                                </p>
                            </div>

                            <div className="edu-period">
                                {edu.period}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
