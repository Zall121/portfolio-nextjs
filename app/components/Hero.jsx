'use client';

import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import LanyardSection from './LanyardSection';
import { staggerContainer, staggerItem } from '@/lib/reactbits';

export default function Hero() {
    const roles = ['Junior Web Developer', 'Junior Backend Developer', 'Junior Laravel Developer', 'Junior Android Developer'];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden px-4 pt-16 pb-4 lg:py-0">
            {/* Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

            {/* Full-Width Signature "Portfolio." Background Text */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
            >
                <motion.span
                    className="whitespace-nowrap"
                    style={{
                        fontFamily: "'Allura', 'Dancing Script', 'Great Vibes', 'Parisienne', cursive",
                        fontSize: 'clamp(8rem, 25vw, 28rem)',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        background: 'linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(59,130,246,0.12) 50%, rgba(168,85,247,0.08) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '-0.03em',
                        textShadow: '0 0 120px rgba(168,85,247,0.08)',
                    }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                >
                    Portfolio.
                </motion.span>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">

                    {/* Lanyard Canvas */}
                    <motion.div
                        id="lanyard-container"
                        className="order-1 lg:order-2 w-full flex justify-center relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div id="lanyard-wrapper" className="w-full h-full relative z-10">
                            <LanyardSection className="w-full h-full" />
                        </div>
                    </motion.div>

                    {/* Responsive Lanyard Styles */}
                    <style>{`
                        #lanyard-container {
                            height: min(500px, 55vh);
                        }
                        #lanyard-wrapper {
                            max-width: 300px;
                        }
                        @media (min-width: 1024px) {
                            #lanyard-container {
                                height: min(700px, 80vh);
                            }
                            #lanyard-wrapper {
                                max-width: 500px;
                            }
                        }
                    `}</style>

                    {/* Text Content */}
                    <motion.div className="order-2 lg:order-1 text-center lg:text-left" variants={staggerContainer} initial="hidden" animate="visible">
                        {/* Terminal */}
                        <motion.div
                            variants={staggerItem}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-3 rounded-full"
                            style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            <span style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#a3a3a3' }}>
                                ~/portfolio $ whoami
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1 variants={staggerItem} className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-2 text-[#f5f5f5]">
                            Hi, I'm <span>Zall.Hdy</span>
                        </motion.h1>

                        {/* Role */}
                        <motion.div variants={staggerItem} className="text-base sm:text-lg lg:text-2xl mb-3 h-7 lg:h-8" style={{ color: '#a3a3a3' }}>
                            {'< '}<AnimatedText texts={roles} type="typing" speed={80} pauseDuration={2500} className="text-[#f5f5f5]" />{' />'}
                        </motion.div>

                        {/* Description */}
                        <motion.p variants={staggerItem} className="text-sm mb-3 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ color: '#a3a3a3' }}>
                            Junior Developer yang fokus belajar dan berkembang di bidang pengembangan web dan aplikasi mobile.
                        </motion.p>

                        {/* Built With - Small inline */}
                        <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-2 mb-4 justify-center lg:justify-start">
                            <span className="text-xs" style={{ color: '#525252' }}>Built with</span>
                            {[
                                { name: 'Next.js', icon: '▲' },
                                { name: 'React', icon: '⚛️' },
                                { name: 'Tailwind', icon: '🎨' },
                                { name: 'Framer', icon: '🎬' },
                            ].map((tech) => (
                                <span
                                    key={tech.name}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#737373' }}
                                >
                                    <span className="text-xs">{tech.icon}</span>
                                    {tech.name}
                                </span>
                            ))}
                        </motion.div>

                        {/* Code Block - Desktop only */}
                        <motion.div
                            variants={staggerItem}
                            className="hidden lg:block mb-4 p-4 rounded-xl max-w-lg"
                            style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-3 h-3 rounded-full bg-[#525252]" />
                                <div className="w-3 h-3 rounded-full bg-[#404040]" />
                                <div className="w-3 h-3 rounded-full bg-[#333]" />
                                <span className="ml-2 text-xs" style={{ color: '#737373', fontFamily: 'monospace' }}>developer.js</span>
                            </div>
                            <pre className="text-sm" style={{ fontFamily: 'monospace' }}>
                                <code>
                                    <span style={{ color: '#737373' }}>const</span>{' '}
                                    <span style={{ color: '#f5f5f5' }}>developer</span>{' = '}
                                    <span style={{ color: '#a3a3a3' }}>{'{'}</span>
                                    {'\n'}
                                    <span style={{ color: '#737373' }}>  name:</span>{' '}
                                    <span style={{ color: '#a3a3a3' }}>"Zall.Hdy"</span>,
                                    {'\n'}
                                    <span style={{ color: '#737373' }}>  available:</span>{' '}
                                    <span style={{ color: '#f5f5f5' }}>true</span>
                                    {'\n'}
                                    <span style={{ color: '#a3a3a3' }}>{'}'}</span>;
                                </code>
                            </pre>
                        </motion.div>

                        {/* Buttons */}
                        <motion.div variants={staggerItem} className="flex flex-row gap-3 justify-center lg:justify-start">
                            <motion.button onClick={() => scrollToSection('projects')} className="btn-primary text-sm px-4 py-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                Projects →
                            </motion.button>
                            <motion.button onClick={() => scrollToSection('contact')} className="btn-secondary text-sm px-4 py-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                Contact
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
