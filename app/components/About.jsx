'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, staggerItem } from '@/lib/reactbits';
import Lanyard3D from './Lanyard3D/Lanyard3D';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const highlights = [
        { number: '3+', label: 'Tahun Belajar', icon: '📅' },
        { number: '10+', label: 'Proyek Dibuat', icon: '🚀' },
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
        <section id="about" ref={ref} className="relative py-16 lg:py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-2 mb-4 rounded-full text-sm" style={{ backgroundColor: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', color: '#a855f7', fontFamily: 'monospace' }}>{'<About />'}</span>
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Developer bersemangat yang menciptakan pengalaman digital bermakna</p>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
                    {/* 3D Lanyard */}
                    <motion.div
                        className="relative flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="w-full max-w-md">
                            <Lanyard3D />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div className="space-y-4" variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                        <motion.h3 variants={staggerItem} className="text-xl lg:text-2xl font-bold text-white">
                            Membangun masa depan, <span className="text-gradient-blue-purple">satu baris kode sekaligus</span>
                        </motion.h3>
                        <motion.p variants={staggerItem} style={{ color: '#9ca3af' }} className="leading-relaxed text-sm lg:text-base">
                            Saya adalah Junior Developer yang bersemangat belajar dan berkembang di bidang pengembangan web dan mobile.
                        </motion.p>
                        <motion.p variants={staggerItem} style={{ color: '#9ca3af' }} className="leading-relaxed text-sm lg:text-base">
                            Saya fokus pada pengembangan web dan Android dengan Laravel, React, Next.js, dan Java. Portfolio ini sebagai pengenalan diri dan perjalanan belajar saya.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12" variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                    {highlights.map((stat) => (
                        <motion.div key={stat.label} variants={staggerItem} className="card text-center group py-4" whileHover={{ y: -5 }}>
                            <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">{stat.icon}</span>
                            <span className="text-2xl lg:text-3xl font-bold text-gradient-blue-purple block mb-1">{stat.number}</span>
                            <span className="text-xs lg:text-sm" style={{ color: '#6b7280' }}>{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Passions */}
                <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-4" variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                    {passions.map((passion) => (
                        <motion.div key={passion.title} variants={staggerItem} className="card group cursor-pointer py-4" whileHover={{ y: -5 }}>
                            <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{passion.icon}</span>
                            <h4 className="text-sm lg:text-base font-semibold text-white mb-1">{passion.title}</h4>
                            <p className="text-xs" style={{ color: '#6b7280' }}>{passion.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
