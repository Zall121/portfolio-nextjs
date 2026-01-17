'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            const sections = navItems.map((item) => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl' : 'bg-transparent'}`}
                style={{ backgroundColor: isScrolled ? 'rgba(10,10,10,0.9)' : 'transparent', borderBottom: isScrolled ? '1px solid #262626' : 'none' }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
            >
                <nav className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <motion.button onClick={() => scrollToSection('home')} className="text-xl font-bold text-[#f5f5f5]" whileHover={{ scale: 1.05 }}>
                            Faizal Hadyi.
                        </motion.button>

                        <ul className="hidden 2xl:flex items-center gap-1">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button onClick={() => scrollToSection(item.id)} className={`nav-link ${activeSection === item.id ? 'text-[#f5f5f5]' : ''}`}>{item.label}</button>
                                </li>
                            ))}
                        </ul>

                        <motion.button onClick={() => scrollToSection('contact')} className="hidden 2xl:flex btn-primary text-sm" whileHover={{ scale: 1.02 }}>Let's Talk</motion.button>

                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="2xl:hidden p-2 text-[#a3a3a3]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>
                </nav>
            </motion.header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div className="fixed inset-0 z-40 2xl:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="absolute inset-0 backdrop-blur-xl" style={{ backgroundColor: 'rgba(10,10,10,0.95)' }} onClick={() => setIsMobileMenuOpen(false)} />
                        <motion.nav className="absolute top-20 left-4 right-4 p-6 rounded-2xl" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                            <ul className="space-y-2">
                                {navItems.map((item, index) => (
                                    <li key={item.id}>
                                        <button onClick={() => scrollToSection(item.id)} className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeSection === item.id ? 'text-[#f5f5f5] bg-[#262626]' : 'text-[#a3a3a3]'}`}>
                                            <span style={{ fontFamily: 'monospace', opacity: 0.5 }} className="text-sm mr-2">0{index + 1}.</span>{item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function Footer() {
    return (
        <footer className="relative py-12 px-4" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid #262626' }}>
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-xl font-bold mb-4 text-[#f5f5f5]">Zall.Hdy</p>
                <p style={{ color: '#737373' }} className="text-sm mb-4">Junior Web & Android Developer</p>
                <p style={{ color: '#525252' }} className="text-sm">© {new Date().getFullYear()} Zall.Hdy.</p>
            </div>
        </footer>
    );
}

export default function Home() {
    return (
        <>
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
}
