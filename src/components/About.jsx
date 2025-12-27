
import React from 'react';
import { motion } from 'framer-motion';
import { User, Zap } from 'lucide-react';

const About = ({ data }) => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-header">
                        <span className="icon-box">
                            <User size={24} />
                        </span>
                        <h2 className="section-title">{data.ui.aboutMe}</h2>
                    </div>

                    <div className="about-grid">
                        <div className="card about-text-card">
                            <p className="about-text">
                                {data.profile}
                            </p>
                        </div>

                        <div className="strengths-column">
                            <h3 className="column-title">
                                <Zap className="icon-yellow" size={20} /> {data.ui.myStrengths}
                            </h3>
                            <div className="strengths-list">
                                {data.strengths.map((str, index) => (
                                    <div key={index} className="strength-item">
                                        <p>{str}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
