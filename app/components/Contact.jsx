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

    return (
        <section id="contact" ref={ref} className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
                    <span className="inline-block px-4 py-2 mb-4 rounded-full text-sm" style={{ backgroundColor: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', color: '#a855f7', fontFamily: 'monospace' }}>{'<Contact />'}</span>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Ingin berkenalan atau berdiskusi? Hubungi saya!</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white">Mari <span className="text-gradient-blue-purple">berkenalan dan terhubung</span></h3>
                            <p style={{ color: '#9ca3af' }}>Saya senang berdiskusi tentang teknologi, berbagi pengalaman, atau sekadar menyapa!</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { label: 'Email', value: 'faizalhadyi60@gmail.com', href: 'mailto:faizalhadyi60@gmail.com' },
                                { label: 'GitHub', value: 'github.com/Zall121', href: 'https://github.com/Zall121' },
                                { label: 'Instagram', value: '@zall.hdy', href: 'https://www.instagram.com/zall.hdy/' },
                            ].map((info) => (
                                <motion.a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer" className="card group" whileHover={{ y: -5 }}>
                                    <p className="text-sm" style={{ color: '#6b7280' }}>{info.label}</p>
                                    <p className="text-white font-medium">{info.value}</p>
                                </motion.a>
                            ))}
                        </div>

                        <div className="p-6 rounded-xl" style={{ background: 'linear-gradient(to right, rgba(34,197,94,0.1), rgba(0,212,255,0.1))', border: '1px solid rgba(34,197,94,0.2)' }}>
                            <div className="flex items-center gap-3">
                                <motion.div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#22c55e' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                                <span style={{ color: '#22c55e' }} className="font-medium">Terbuka untuk berdiskusi dan belajar bersama</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}}>
                        <form onSubmit={handleSubmit} className="card">
                            <div className="flex items-center gap-2 mb-6 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-xs" style={{ color: '#6b7280', fontFamily: 'monospace' }}>send-message.js</span>
                            </div>

                            {submitted && <div className="mb-6 p-4 rounded-xl text-center" style={{ backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#22c55e' }}>✓ Pesan terkirim!</div>}

                            <div className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm mb-2" style={{ color: '#9ca3af', fontFamily: 'monospace' }}><span style={{ color: '#a855f7' }}>const</span> name =</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="'Your Name'" required className="input-field" />
                                    </div>
                                    <div>
                                        <label className="block text-sm mb-2" style={{ color: '#9ca3af', fontFamily: 'monospace' }}><span style={{ color: '#a855f7' }}>const</span> email =</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="'your@email.com'" required className="input-field" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm mb-2" style={{ color: '#9ca3af', fontFamily: 'monospace' }}><span style={{ color: '#a855f7' }}>const</span> subject =</label>
                                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="'Project Discussion'" required className="input-field" />
                                </div>
                                <div>
                                    <label className="block text-sm mb-2" style={{ color: '#9ca3af', fontFamily: 'monospace' }}><span style={{ color: '#a855f7' }}>const</span> message =</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="`Tell me about your project...`" required rows={5} className="input-field resize-none" />
                                </div>
                                <motion.button type="submit" disabled={isSubmitting} className="w-full btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    {isSubmitting ? '⏳ mengirim...' : 'kirimPesan() →'}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
