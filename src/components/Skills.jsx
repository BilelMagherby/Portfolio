
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Database, Smartphone, GitBranch, Layers } from 'lucide-react';

const SkillCard = ({ title, items, icon: Icon, color }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="skill-card group"
    >
        <div className="skill-icon-box" style={{ backgroundColor: `${color}20` }}>
            <Icon size={24} style={{ color }} />
        </div>
        <h3 className="skill-title group-hover-text">{title}</h3>
        <div className="skill-tags">
            {items.map((item, idx) => (
                <span
                    key={idx}
                    className="skill-tag"
                >
                    {item}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = ({ data }) => {
    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title text-center gradient-text-title">
                        {data.ui.techExpertise}
                    </h2>

                    <div className="skills-grid">
                        <SkillCard
                            title="Frontend Development"
                            items={data.skills.frontend}
                            icon={Globe}
                            color="#00e5ff"
                        />
                        <SkillCard
                            title="Backend Systems"
                            items={data.skills.backend}
                            icon={Database}
                            color="#7042f8"
                        />
                        <SkillCard
                            title="Frameworks & Tools"
                            items={data.skills.frameworksTools}
                            icon={Layers}
                            color="#ff007a"
                        />
                        <SkillCard
                            title="Mobile Development"
                            items={data.skills.mobile}
                            icon={Smartphone}
                            color="#00ff9d"
                        />
                        <SkillCard
                            title="Version Control & Arch"
                            items={[...data.skills.versionControl, ...data.skills.architecture]}
                            icon={GitBranch}
                            color="#ff7f50"
                        />
                        <SkillCard
                            title="Other Skills"
                            items={[...data.skills.os, ...data.skills.databases, ...data.skills.other]}
                            icon={Cpu}
                            color="#ffd700"
                        />
                    </div>

                    <div className="languages-card">
                        <h3 className="languages-title">Languages</h3>
                        <div className="languages-grid">
                            {Object.entries(data.languages).map(([lang, level], idx) => (
                                <div key={idx} className="language-item">
                                    <span className="lang-name">{lang}</span>
                                    <span className="lang-level">{level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
