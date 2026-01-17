'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/skills';
import Image from 'next/image';

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="skills" ref={ref} className="relative py-24 px-4 overflow-hidden" style={{ backgroundColor: '#0d0d14' }}>
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Skills Categories */}
                <div className="space-y-16">
                    {skills.map((skillGroup, groupIndex) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: groupIndex * 0.2 }}
                        >
                            {/* Category Header */}
                            <div className="mb-6">
                                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                                    {skillGroup.category}
                                </h2>
                                <p className="text-xs text-gray-500">{skillGroup.subtitle}</p>
                            </div>

                            {/* Skills Grid - 4 columns */}
                            <div className="grid grid-cols-4 gap-2 sm:gap-3">
                                {skillGroup.items.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className="group"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: groupIndex * 0.1 + index * 0.03 }}
                                        whileHover={{ y: -3, scale: 1.02 }}
                                    >
                                        <div
                                            className="relative p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl transition-all duration-300 h-full"
                                            style={{
                                                backgroundColor: 'rgba(26, 26, 36, 0.8)',
                                                border: '1px solid rgba(255,255,255,0.05)',
                                            }}
                                        >
                                            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                                                {/* Logo */}
                                                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 relative flex-shrink-0">
                                                    <Image
                                                        src={skill.logo}
                                                        alt={skill.name}
                                                        fill
                                                        className="object-contain"
                                                        sizes="40px"
                                                    />
                                                </div>
                                                {/* Text */}
                                                <div className="min-w-0 text-center sm:text-left">
                                                    <p className="text-[8px] sm:text-xs md:text-sm font-medium text-white truncate">
                                                        {skill.name}
                                                    </p>
                                                    <p className="text-[6px] sm:text-[10px] md:text-xs text-gray-500 truncate">
                                                        {skill.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
