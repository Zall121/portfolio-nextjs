'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { education, certifications } from '@/data/experience';
import { staggerContainer, staggerItem } from '@/lib/reactbits';

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="experience" ref={ref} className="relative py-24 px-4 overflow-hidden" style={{ backgroundColor: 'rgba(13,13,20,0.5)' }}>
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
                    <motion.span
                        className="inline-block px-4 py-2 mb-4 rounded-full text-sm"
                        style={{ backgroundColor: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', color: '#00d4ff', fontFamily: 'monospace' }}
                    >
                        {'<Education />'}
                    </motion.span>
                    <h2 className="section-title">Education History</h2>
                    <p className="section-subtitle">Perjalanan pendidikan saya</p>
                </motion.div>

                {/* Timeline */}
                <motion.div className="relative" variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, #00d4ff, #a855f7, #ec4899)', transform: 'translateX(-50%)' }} />

                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            variants={staggerItem}
                            className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Node */}
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 z-10" style={{ transform: 'translateX(-50%)' }}>
                                <motion.div
                                    className="w-full h-full rounded-full"
                                    style={{ background: edu.current ? '#22c55e' : 'linear-gradient(to bottom right, #00d4ff, #a855f7)' }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                />
                                {edu.current && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{ backgroundColor: '#22c55e' }}
                                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                )}
                            </div>

                            {/* Card */}
                            <motion.div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`} whileHover={{ y: -5 }}>
                                <div className="relative p-6 rounded-2xl transition-all card">
                                    {edu.current && (
                                        <div className="absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: 'rgba(34,197,94,0.2)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e' }}>
                                            Sekarang
                                        </div>
                                    )}

                                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                    <p style={{ color: '#a855f7' }}>{edu.school}</p>
                                    <p className="text-sm mt-1" style={{ color: '#6b7280' }}>{edu.startDate} - {edu.endDate} • {edu.location}</p>
                                    <p className="text-sm mt-3" style={{ color: '#9ca3af' }}>{edu.description}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Skills & Certifications */}
                <motion.div className="grid md:grid-cols-1 gap-8 mt-20" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
                    {/* Certifications / Learning */}
                    <div className="card">
                        <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6"><span className="text-2xl">📚</span> Self Learning</h3>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {certifications.map((cert) => (
                                <div
                                    key={cert.id}
                                    className="p-4 rounded-xl text-center transition-all"
                                    style={{ backgroundColor: 'rgba(26,26,36,0.5)', border: '1px solid rgba(255,255,255,0.05)' }}
                                >
                                    <h4 className="font-semibold text-white">{cert.name}</h4>
                                    <p className="text-sm" style={{ color: '#6b7280' }}>{cert.issuer} • {cert.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
