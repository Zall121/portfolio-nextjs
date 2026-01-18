'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen({ onComplete }) {
    const [showText, setShowText] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Show text after logo animation
        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 1200);

        // Start exit animation
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, 3000);

        // Complete and unmount
        const completeTimer = setTimeout(() => {
            onComplete?.();
        }, 3500);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(exitTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
            style={{
                background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 70%, #000000 100%)'
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                            background: 'rgba(147, 112, 219, 0.4)',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* Glow effect behind logo */}
            <motion.div
                className="absolute"
                style={{
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(147, 112, 219, 0.3) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            />

            {/* Logo container */}
            <motion.div
                className="relative z-10"
                initial={{ scale: 0, opacity: 0, filter: 'blur(20px)' }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    filter: 'blur(0px)',
                }}
                transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1], // Custom spring-like easing
                }}
            >
                {/* Logo with pulse effect */}
                <motion.div
                    className="relative"
                    animate={{
                        boxShadow: [
                            '0 0 20px rgba(147, 112, 219, 0.3)',
                            '0 0 60px rgba(147, 112, 219, 0.5)',
                            '0 0 20px rgba(147, 112, 219, 0.3)',
                        ],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    style={{ borderRadius: '50%' }}
                >
                    <motion.img
                        src="/logos/logozall.png"
                        alt="Zall.Hdy Logo"
                        className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-full"
                        style={{
                            filter: 'drop-shadow(0 0 30px rgba(147, 112, 219, 0.5))',
                        }}
                        initial={{ rotate: -180 }}
                        animate={{ rotate: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Name text with typing/fade effect */}
            <motion.div
                className="mt-8 overflow-hidden z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                    opacity: showText ? 1 : 0,
                    y: showText ? 0 : 30
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                <motion.h1
                    className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text"
                    style={{
                        backgroundImage: 'linear-gradient(135deg, #f5f5f5 0%, #a78bfa 50%, #f5f5f5 100%)',
                        backgroundSize: '200% 100%',
                    }}
                    animate={{
                        backgroundPosition: ['0% center', '100% center', '0% center'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    Zall.Hdy
                </motion.h1>
            </motion.div>

            {/* Subtitle with delayed appearance */}
            <motion.p
                className="mt-2 text-sm md:text-base tracking-widest uppercase z-10"
                style={{ color: '#737373' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: showText ? 0.7 : 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: 'easeOut',
                }}
            >
                Portfolio
            </motion.p>

            {/* Loading indicator */}
            <motion.div
                className="absolute bottom-16 flex gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: showText ? 1 : 0 }}
                transition={{ delay: 0.3 }}
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{ background: 'rgba(147, 112, 219, 0.8)' }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
}
