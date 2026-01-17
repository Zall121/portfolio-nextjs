'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { education, certifications } from '@/data/experience';

export default function Experience() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="relative py-12 md:py-24 px-2 md:px-4 overflow-hidden"
            style={{ backgroundColor: '#0a0a0a' }}
        >
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-8 md:mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.span
                        className="inline-block px-2 py-1 md:px-4 md:py-2 mb-2 md:mb-4 rounded-full text-[10px] md:text-sm"
                        style={{ backgroundColor: 'transparent', border: '1px solid #525252', color: '#a3a3a3', fontFamily: 'monospace' }}
                    >
                        {'<Education />'}
                    </motion.span>
                    <h2 className="text-xl md:text-4xl font-bold text-[#f5f5f5] mb-1 md:mb-3">Education History</h2>
                    <p className="text-xs md:text-base text-[#737373]">Perjalanan pendidikan saya</p>
                </motion.div>

                {/* Timeline - Centered line, alternating left-right */}
                <div className="relative">
                    {/* Center Timeline Line */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
                        style={{ backgroundColor: '#333' }}
                    >
                        <motion.div
                            className="w-full"
                            style={{ height: lineHeight, backgroundColor: '#525252' }}
                        />
                    </div>

                    {/* Timeline Items - Alternating left-right */}
                    {education.map((edu, index) => (
                        <TimelineItem key={edu.id} edu={edu} index={index} />
                    ))}
                </div>

                {/* Self Learning Section */}
                <motion.div
                    className="mt-10 md:mt-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <div
                        className="p-3 md:p-8 rounded-lg md:rounded-2xl"
                        style={{
                            backgroundColor: 'transparent',
                            border: '1px solid #525252'
                        }}
                    >
                        <h3 className="flex items-center gap-2 text-sm md:text-xl font-bold text-[#f5f5f5] mb-3 md:mb-6">
                            <span className="text-base md:text-2xl">📚</span>
                            <span>Self Learning</span>
                            <span className="ml-auto text-[10px] md:text-sm font-normal text-[#525252]">Belajar Mandiri</span>
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    className="p-2 md:p-4 rounded-lg text-center"
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: '1px solid #333'
                                    }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    whileHover={{ borderColor: '#737373', transition: { duration: 0.2 } }}
                                >
                                    <div className="text-lg md:text-3xl mb-1 md:mb-2">💡</div>
                                    <h4 className="font-semibold text-[#f5f5f5] text-[10px] md:text-base">{cert.name}</h4>
                                    <p className="text-[8px] md:text-sm text-[#525252] mt-0.5 md:mt-1">{cert.issuer} • {cert.date}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Timeline item - alternating left-right with centered line
function TimelineItem({ edu, index }) {
    const itemRef = useRef(null);
    const isItemInView = useInView(itemRef, { once: false, amount: 0.5 });

    // Alternate: even = left, odd = right
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            ref={itemRef}
            className={`relative flex items-center mb-4 md:mb-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            animate={isItemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -30 : 30 }}
            transition={{ duration: 0.4 }}
        >
            {/* Content Card */}
            <div className={`w-[45%] ${isLeft ? 'pr-2 md:pr-4 text-right' : 'pl-2 md:pl-4 text-left'}`}>
                <motion.div
                    className="p-2 md:p-5 rounded-lg md:rounded-xl"
                    style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #525252'
                    }}
                    whileHover={{
                        borderColor: '#737373',
                        transition: { duration: 0.2 }
                    }}
                >
                    {/* Current Badge */}
                    {edu.current && (
                        <motion.div
                            className={`inline-block px-1.5 py-0.5 md:px-2.5 md:py-1 mb-1 md:mb-2 rounded-full text-[8px] md:text-xs font-semibold`}
                            style={{ backgroundColor: 'transparent', border: '1px solid #22c55e', color: '#22c55e' }}
                            initial={{ opacity: 0 }}
                            animate={isItemInView ? { opacity: 1 } : { opacity: 0 }}
                        >
                            🎓 Sekarang
                        </motion.div>
                    )}

                    {/* Date */}
                    <p className="text-[8px] md:text-xs text-[#737373] mb-0.5 md:mb-1">
                        {edu.startDate} - {edu.endDate}
                    </p>

                    {/* Degree */}
                    <h3 className="text-[10px] md:text-lg font-bold text-[#f5f5f5] mb-0.5">{edu.degree}</h3>

                    {/* School */}
                    <h4 className="text-[8px] md:text-sm text-[#a3a3a3] font-medium mb-0.5 md:mb-1">{edu.school}</h4>

                    {/* Location - Hidden on mobile for space */}
                    <p className="hidden md:block text-[10px] md:text-xs text-[#525252] mb-1">
                        📍 {edu.location}
                    </p>

                    {/* Description - Hidden on mobile for space */}
                    <p className="hidden md:block text-[10px] md:text-sm text-[#737373] leading-relaxed">{edu.description}</p>
                </motion.div>
            </div>

            {/* Center Node */}
            <div className="w-[10%] flex justify-center">
                <motion.div
                    className="w-2 h-2 md:w-3 md:h-3 rounded-full z-10"
                    style={{
                        backgroundColor: edu.current ? '#22c55e' : 'transparent',
                        border: edu.current ? 'none' : '2px solid #525252'
                    }}
                    initial={{ scale: 0 }}
                    animate={isItemInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
                />
            </div>

            {/* Empty space for opposite side */}
            <div className="w-[45%]" />
        </motion.div>
    );
}
