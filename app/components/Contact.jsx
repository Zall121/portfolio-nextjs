'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    const contactInfo = [
        { icon: '📧', label: 'Email', value: 'faizalhadyi60@gmail.com', href: 'mailto:faizalhadyi60@gmail.com', color: '#00d4ff' },
        { icon: '💻', label: 'GitHub', value: 'github.com/Zall121', href: 'https://github.com/Zall121', color: '#a855f7' },
        { icon: '📸', label: 'Instagram', value: '@zall.hdy', href: 'https://www.instagram.com/zall.hdy/', color: '#ec4899' },
    ];

    return (
        <section id="contact" ref={ref} className="relative py-16 md:py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <motion.div className="text-center mb-10 md:mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
                    <span
                        className="inline-block px-3 py-1.5 md:px-4 md:py-2 mb-3 md:mb-4 rounded-full text-xs md:text-sm"
                        style={{ backgroundColor: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', color: '#a855f7', fontFamily: 'monospace' }}
                    >
                        {'<Contact />'}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">Get In Touch</h2>
                    <p className="text-sm md:text-base text-gray-400">Ingin berkenalan atau berdiskusi? Hubungi saya!</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Side - Contact Info */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} className="space-y-6 md:space-y-8">
                        {/* Intro */}
                        <div className="space-y-3 md:space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                Mari berkenalan dan terhubung<span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"></span>
                            </h3>
                            <p className="text-sm md:text-base text-gray-400">Saya senang berdiskusi tentang teknologi, berbagi pengalaman, atau sekadar menyapa!</p>
                        </div>

                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 gap-3 md:gap-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl transition-all"
                                    style={{
                                        backgroundColor: 'rgba(26, 26, 36, 0.8)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                    whileHover={{ y: -3, scale: 1.02, borderColor: info.color + '40' }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div
                                        className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-lg md:text-xl"
                                        style={{ backgroundColor: info.color + '20', border: `1px solid ${info.color}30` }}
                                    >
                                        {info.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs md:text-sm text-gray-500">{info.label}</p>
                                        <p className="text-sm md:text-base text-white font-medium truncate group-hover:text-cyan-400 transition-colors">{info.value}</p>
                                    </div>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </motion.a>
                            ))}
                        </div>

                        {/* Status Badge */}
                        <motion.div
                            className="p-4 md:p-6 rounded-xl"
                            style={{
                                background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(0,212,255,0.1))',
                                border: '1px solid rgba(34,197,94,0.2)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: '#22c55e', boxShadow: '0 0 10px rgba(34,197,94,0.5)' }}
                                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-sm md:text-base text-green-400 font-medium">Terbuka untuk berdiskusi dan belajar bersama</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}}>
                        <form
                            onSubmit={handleSubmit}
                            className="p-4 md:p-6 rounded-xl md:rounded-2xl"
                            style={{
                                backgroundColor: 'rgba(26, 26, 36, 0.8)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            {/* Terminal Header */}
                            <div className="flex items-center gap-2 mb-4 md:mb-6 pb-3 md:pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
                                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-[10px] md:text-xs text-gray-500" style={{ fontFamily: 'monospace' }}>send-message.js</span>
                            </div>

                            {/* Success Message */}
                            {submitted && (
                                <motion.div
                                    className="mb-4 md:mb-6 p-3 md:p-4 rounded-xl text-center text-sm md:text-base"
                                    style={{ backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e' }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    ✅ Pesan terkirim!
                                </motion.div>
                            )}

                            <div className="space-y-3 md:space-y-4">
                                {/* Name & Email Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                    <div>
                                        <label className="block text-xs md:text-sm mb-1.5 md:mb-2 text-gray-400" style={{ fontFamily: 'monospace' }}>
                                            <span className="text-purple-400">const</span> name =
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="'Your Name'"
                                            required
                                            className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base text-white placeholder-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                            style={{ backgroundColor: 'rgba(10,10,15,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs md:text-sm mb-1.5 md:mb-2 text-gray-400" style={{ fontFamily: 'monospace' }}>
                                            <span className="text-purple-400">const</span> email =
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="'your@email.com'"
                                            required
                                            className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base text-white placeholder-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                            style={{ backgroundColor: 'rgba(10,10,15,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-xs md:text-sm mb-1.5 md:mb-2 text-gray-400" style={{ fontFamily: 'monospace' }}>
                                        <span className="text-purple-400">const</span> subject =
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="'Project Discussion'"
                                        required
                                        className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base text-white placeholder-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                        style={{ backgroundColor: 'rgba(10,10,15,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-xs md:text-sm mb-1.5 md:mb-2 text-gray-400" style={{ fontFamily: 'monospace' }}>
                                        <span className="text-purple-400">const</span> message =
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="`Tell me about your project...`"
                                        required
                                        rows={4}
                                        className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base text-white placeholder-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none"
                                        style={{ backgroundColor: 'rgba(10,10,15,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base font-semibold text-white transition-all disabled:opacity-50"
                                    style={{
                                        background: 'linear-gradient(135deg, #00d4ff, #a855f7, #ec4899)',
                                        boxShadow: '0 4px 20px rgba(168,85,247,0.3)'
                                    }}
                                    whileHover={{ scale: 1.02, boxShadow: '0 6px 25px rgba(168,85,247,0.4)' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? '⏳ mengirim...' : '🚀 kirimPesan() →'}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
