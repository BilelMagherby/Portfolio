
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ lang, setLang, navData, ui }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: navData.about, href: '#about' },
        { name: navData.skills, href: '#skills' },
        { name: navData.experience, href: '#experience' },
        { name: navData.projects, href: '#projects' },
        { name: navData.education, href: '#education' },
        { name: navData.contact, href: '#contact' },
    ];

    const toggleLang = () => {
        setLang(lang === 'en' ? 'fr' : 'en');
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo">
                    <Code2 size={32} className="logo-icon" />
                    <span>Bilel.Dev</span>
                </a>

                {/* Desktop Menu */}
                <div className="nav-menu desktop-only">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}



                    <button onClick={toggleLang} className="btn-lang" title="Toggle Language">
                        <Globe size={18} /> {lang.toUpperCase()}
                    </button>

                    <a href="#contact" className="btn btn-primary">{ui.nav.hireMe}</a>
                </div>




                {/* Mobile Controls - Language Only */}
                <div className="flex items-center gap-4 mobile-only" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button onClick={toggleLang} className="btn-lang">
                        {lang.toUpperCase()}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mobile-menu mobile-only"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mobile-nav-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
