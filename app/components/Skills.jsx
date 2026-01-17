'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills } from '@/data/skills';
import { staggerContainer, staggerItem } from '@/lib/reactbits';

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...skills.map((s) => s.category)];
    const filteredSkills = activeCategory === 'All' ? skills : skills.filter((s) => s.category === activeCategory);

    return (
        <section id="skills" ref={ref} className="relative py-24 px-4 overflow-hidden" style={{ backgroundColor: 'rgba(13,13,20,0.5)' }}>
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
                    <motion.span
                        className="inline-block px-4 py-2 mb-4 rounded-full text-sm"
                        style={{ backgroundColor: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', color: '#00d4ff', fontFamily: 'monospace' }}
                    >
                        {'<Skills />'}
                    </motion.span>
                    <h2 className="section-title">Tech Stack</h2>
                    <p className="section-subtitle">Teknologi & alat yang saya gunakan untuk mewujudkan ide</p>
                </motion.div>

                {/* Filter */}
                <motion.div className="flex flex-wrap justify-center gap-3 mb-12" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                            style={{
                                background: activeCategory === category ? 'linear-gradient(to right, #00d4ff, #a855f7)' : 'rgba(18,18,26,0.5)',
                                color: activeCategory === category ? 'white' : '#9ca3af',
                                border: activeCategory === category ? 'none' : '1px solid rgba(255,255,255,0.05)',
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div className="space-y-12" variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                    {filteredSkills.map((skillGroup) => (
                        <motion.div key={skillGroup.category} variants={staggerItem} className="space-y-6">
                            <div className="flex items-center gap-4">
                                <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                                <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.1), transparent)' }} />
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {skillGroup.items.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className="group relative"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <motion.div
                                            className="relative p-4 rounded-xl transition-all"
                                            style={{
                                                backgroundColor: 'rgba(18,18,26,0.6)',
                                                border: '1px solid rgba(255,255,255,0.05)',
                                                backdropFilter: 'blur(8px)',
                                            }}
                                            whileHover={{ boxShadow: `0 0 30px ${skill.color}20` }}
                                        >
                                            <div className="text-center mb-3">
                                                <span className="text-3xl group-hover:scale-110 inline-block transition-transform">{skill.icon}</span>
                                            </div>
                                            <div className="text-center">
                                                <span className="text-sm font-medium" style={{ color: '#d1d5db' }}>{skill.name}</span>
                                            </div>
                                            <div className="mt-3">
                                                <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(10,10,15,0.5)' }}>
                                                    <motion.div
                                                        className="h-full rounded-full"
                                                        style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }}
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                                                        viewport={{ once: true }}
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
