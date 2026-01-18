'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, staggerItem } from '@/lib/reactbits';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const highlights = [
        { number: '2+', label: 'Tahun Belajar', icon: '📅' },
        { number: '10+', label: 'Proyek Kecil-Kecilan Dibuat', icon: '🚀' },
        { number: '∞', label: 'Semangat Belajar', icon: '📚' },
        { number: '100%', label: 'Dedikasi', icon: '💯' },
    ];

    const passions = [
        { icon: '⚡', title: 'Performa', description: 'Membangun aplikasi cepat dengan kode teroptimasi.' },
        { icon: '🎨', title: 'Desain Bersih', description: 'Menciptakan antarmuka intuitif yang disukai pengguna.' },
        { icon: '🔧', title: 'Problem Solving', description: 'Mengubah tantangan kompleks menjadi solusi elegan.' },
        { icon: '📚', title: 'Terus Belajar', description: 'Selalu menjelajahi teknologi baru.' },
    ];

    return (
        <section id="about" ref={ref} className="relative py-12 sm:py-16 lg:py-24 px-3 sm:px-4 overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)' }} />
            <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)' }} />

            <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span
                        className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 rounded-full text-xs sm:text-sm"
                        style={{
                            backgroundColor: 'rgba(168,85,247,0.1)',
                            border: '1px solid rgba(168,85,247,0.2)',
                            color: '#a855f7',
                            fontFamily: 'monospace'
                        }}
                    >
                        {'<About />'}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">About Me</h2>
                    <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2" style={{ color: '#9ca3af' }}>
                        Developer bersemangat yang menciptakan pengalaman digital bermakna
                    </p>
                </motion.div>

                {/* Main Content - Stacked on mobile, side by side on larger */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-8 sm:mb-12">
                    {/* Code Window */}
                    <motion.div
                        className="relative flex justify-center order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.div
                            className="relative w-full max-w-sm sm:max-w-md p-4 sm:p-5 rounded-xl sm:rounded-2xl"
                            style={{
                                backgroundColor: 'rgba(18,18,26,0.9)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(24px)',
                                boxShadow: '0 20px 40px -20px rgba(0,0,0,0.5), 0 0 60px -30px rgba(168,85,247,0.3)'
                            }}
                            whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -20px rgba(0,0,0,0.6), 0 0 80px -30px rgba(168,85,247,0.4)' }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Window header */}
                            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 pb-2 sm:pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-[10px] sm:text-xs" style={{ color: '#6b7280', fontFamily: 'monospace' }}>about-me.json</span>
                            </div>

                            {/* Code content */}
                            <pre className="text-[11px] sm:text-xs md:text-sm overflow-x-auto leading-relaxed" style={{ fontFamily: 'monospace', color: '#d1d5db' }}>
                                {`{
  `}<span style={{ color: '#a855f7' }}>"name"</span>{`: `}<span style={{ color: '#22c55e' }}>"Zall.Hdy"</span>{`,
  `}<span style={{ color: '#a855f7' }}>"title"</span>{`: `}<span style={{ color: '#22c55e' }}>"Junior Web & Android Dev"</span>{`,
  `}<span style={{ color: '#a855f7' }}>"location"</span>{`: `}<span style={{ color: '#22c55e' }}>"Indonesia"</span>{`,
  `}<span style={{ color: '#a855f7' }}>"experience"</span>{`: `}<span style={{ color: '#00d4ff' }}>3</span>{`,
  `}<span style={{ color: '#a855f7' }}>"passions"</span>{`: [
    `}<span style={{ color: '#22c55e' }}>"clean code"</span>{`,
    `}<span style={{ color: '#22c55e' }}>"user experience"</span>{`,
    `}<span style={{ color: '#22c55e' }}>"innovation"</span>{`
  ]
}`}
                            </pre>
                        </motion.div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        className="space-y-3 sm:space-y-4 order-1 lg:order-2 text-center lg:text-left"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        <motion.h3
                            variants={staggerItem}
                            className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-snug"
                        >
                            Membangun masa depan, <br className="hidden sm:block" />
                            <span className="text-gradient-blue-purple">satu baris kode sekaligus</span>
                        </motion.h3>
                        <motion.p
                            variants={staggerItem}
                            style={{ color: '#9ca3af' }}
                            className="leading-relaxed text-sm sm:text-base"
                        >
                            Saya adalah Junior Developer yang bersemangat terus belajar dan berkembang di bidang pengembangan web dan mobile.
                        </motion.p>
                        <motion.p
                            variants={staggerItem}
                            style={{ color: '#9ca3af' }}
                            className="leading-relaxed text-sm sm:text-base"
                        >
                            Saya fokus pada pengembangan web dan Android dengan Laravel, Filament, Next.js, dan Java. Portfolio ini sebagai pengenalan diri dan perjalanan belajar saya.
                        </motion.p>

                        {/* Quick info badges */}
                        <motion.div
                            variants={staggerItem}
                            className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2"
                        >
                            {['Laravel', 'Filament', 'Next.js', 'Android'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(59,130,246,0.15) 100%)',
                                        border: '1px solid rgba(168,85,247,0.2)',
                                        color: '#e0e0e0'
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats Grid - Enhanced responsive */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {highlights.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            variants={staggerItem}
                            className="group relative text-center p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, rgba(30,30,40,0.8) 0%, rgba(20,20,30,0.8) 100%)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                backdropFilter: 'blur(10px)'
                            }}
                            whileHover={{
                                y: -5,
                                boxShadow: '0 15px 30px -10px rgba(168,85,247,0.2)'
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Gradient overlay on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(59,130,246,0.1) 100%)'
                                }}
                            />

                            <div className="relative z-10">
                                <span className="text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2 block group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </span>
                                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-blue-purple block mb-0.5 sm:mb-1">
                                    {stat.number}
                                </span>
                                <span className="text-[10px] sm:text-xs lg:text-sm block" style={{ color: '#6b7280' }}>
                                    {stat.label}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Passions Grid - Enhanced responsive */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {passions.map((passion, index) => (
                        <motion.div
                            key={passion.title}
                            variants={staggerItem}
                            className="group cursor-pointer p-4 sm:p-5 rounded-xl sm:rounded-2xl relative overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, rgba(30,30,40,0.6) 0%, rgba(20,20,30,0.6) 100%)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                backdropFilter: 'blur(10px)'
                            }}
                            whileHover={{
                                y: -5,
                                boxShadow: '0 20px 40px -15px rgba(168,85,247,0.25)'
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Animated gradient border on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(59,130,246,0.2) 100%)',
                                    padding: '1px'
                                }}
                            />

                            <div className="relative z-10 flex sm:block items-start gap-3 sm:gap-0">
                                <span className="text-2xl sm:text-3xl lg:text-4xl sm:mb-3 block group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                    {passion.icon}
                                </span>
                                <div>
                                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">
                                        {passion.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                                        {passion.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
