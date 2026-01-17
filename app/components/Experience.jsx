'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { education, certifications } from '@/data/experience';
import { staggerContainer, staggerItem } from '@/lib/reactbits';

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="experience" ref={ref} className="relative py-16 md:py-24 px-4 overflow-hidden" style={{ backgroundColor: 'rgba(13,13,20,0.5)' }}>
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <motion.div className="text-center mb-10 md:mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
                    <motion.span
                        className="inline-block px-3 py-1.5 md:px-4 md:py-2 mb-3 md:mb-4 rounded-full text-xs md:text-sm"
                        style={{ backgroundColor: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', color: '#00d4ff', fontFamily: 'monospace' }}
                    >
                        {'<Education />'}
                    </motion.span>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">Education History</h2>
                    <p className="text-sm md:text-base text-gray-400">Perjalanan pendidikan saya</p>
                </motion.div>

                {/* Education Cards - Vertical Timeline */}
                <motion.div className="relative" variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                    {/* Timeline Line - Hidden on mobile, visible on md+ */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, #00d4ff, #a855f7, #ec4899)', transform: 'translateX(-50%)' }} />

                    {/* Mobile Timeline Line */}
                    <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, #00d4ff, #a855f7, #ec4899)' }} />

                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            variants={staggerItem}
                            className={`relative flex mb-8 md:mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Node - Mobile */}
                            <div className="md:hidden absolute left-4 w-3 h-3 z-10" style={{ transform: 'translateX(-50%)', top: '1.5rem' }}>
                                <motion.div
                                    className="w-full h-full rounded-full"
                                    style={{ background: edu.current ? '#22c55e' : 'linear-gradient(to bottom right, #00d4ff, #a855f7)', boxShadow: edu.current ? '0 0 20px rgba(34,197,94,0.5)' : '0 0 15px rgba(0,212,255,0.3)' }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                />
                                {edu.current && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{ backgroundColor: '#22c55e' }}
                                        animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                )}
                            </div>

                            {/* Node - Desktop */}
                            <div className="hidden md:block absolute left-1/2 w-4 h-4 z-10" style={{ transform: 'translateX(-50%)', top: '1.5rem' }}>
                                <motion.div
                                    className="w-full h-full rounded-full"
                                    style={{ background: edu.current ? '#22c55e' : 'linear-gradient(to bottom right, #00d4ff, #a855f7)', boxShadow: edu.current ? '0 0 20px rgba(34,197,94,0.5)' : '0 0 15px rgba(0,212,255,0.3)' }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                />
                                {edu.current && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{ backgroundColor: '#22c55e' }}
                                        animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                )}
                            </div>

                            {/* Card */}
                            <motion.div
                                className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div
                                    className="relative p-4 md:p-6 rounded-xl md:rounded-2xl transition-all"
                                    style={{
                                        backgroundColor: 'rgba(26, 26, 36, 0.8)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    {edu.current && (
                                        <div
                                            className="absolute -top-2.5 md:-top-3 right-4 md:right-6 px-2.5 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-semibold"
                                            style={{ backgroundColor: 'rgba(34,197,94,0.2)', border: '1px solid rgba(34,197,94,0.4)', color: '#22c55e' }}
                                        >
                                            🎓 Sekarang
                                        </div>
                                    )}

                                    {/* Icon + Title */}
                                    <div className="flex items-start gap-3 mb-3">
                                        <div
                                            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-lg md:text-xl"
                                            style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(168,85,247,0.2))', border: '1px solid rgba(255,255,255,0.1)' }}
                                        >
                                            🏫
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base md:text-xl font-bold text-white leading-tight">{edu.degree}</h3>
                                            <p className="text-sm md:text-base text-purple-400 font-medium">{edu.school}</p>
                                        </div>
                                    </div>

                                    {/* Meta Info */}
                                    <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            📅 {edu.startDate} - {edu.endDate}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            📍 {edu.location}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{edu.description}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Self Learning Section */}
                <motion.div
                    className="mt-12 md:mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                >
                    <div
                        className="p-4 md:p-8 rounded-xl md:rounded-2xl"
                        style={{
                            backgroundColor: 'rgba(26, 26, 36, 0.6)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <h3 className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
                            <span className="text-xl md:text-2xl">📚</span>
                            <span>Self Learning</span>
                            <span className="ml-auto text-xs md:text-sm font-normal text-gray-500">Belajar Mandiri</span>
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    className="p-3 md:p-4 rounded-lg md:rounded-xl text-center transition-all"
                                    style={{
                                        backgroundColor: 'rgba(26,26,36,0.8)',
                                        border: '1px solid rgba(255,255,255,0.05)'
                                    }}
                                    whileHover={{ y: -3, borderColor: 'rgba(168,85,247,0.3)' }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="text-2xl md:text-3xl mb-2">💡</div>
                                    <h4 className="font-semibold text-white text-sm md:text-base">{cert.name}</h4>
                                    <p className="text-xs md:text-sm text-gray-500 mt-1">{cert.issuer} • {cert.date}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
