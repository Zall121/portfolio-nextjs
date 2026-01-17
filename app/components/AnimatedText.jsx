'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * AnimatedText Component
 * Supports typing, fade, glitch, gradient, and reveal animations
 */
export default function AnimatedText({
    text,
    texts = [],
    type = 'typing',
    className = '',
    speed = 100,
    delay = 0,
    loop = true,
    cursor = true,
    pauseDuration = 2000,
}) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);

    const allTexts = texts.length > 0 ? texts : [text];

    useEffect(() => {
        if (type !== 'typing') return;

        const currentText = allTexts[currentIndex];
        let timeout;

        if (isWaiting) {
            timeout = setTimeout(() => {
                setIsWaiting(false);
                setIsDeleting(true);
            }, pauseDuration);
            return () => clearTimeout(timeout);
        }

        if (isDeleting) {
            if (displayText === '') {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % allTexts.length);
            } else {
                timeout = setTimeout(() => {
                    setDisplayText((prev) => prev.slice(0, -1));
                }, speed / 2);
            }
        } else {
            if (displayText === currentText) {
                if (loop && allTexts.length > 1) {
                    setIsWaiting(true);
                }
            } else {
                timeout = setTimeout(() => {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                }, speed);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, currentIndex, isDeleting, isWaiting, type, allTexts, loop, pauseDuration, speed]);

    useEffect(() => {
        if (type === 'typing') {
            setDisplayText('');
            setCurrentIndex(0);
            setIsDeleting(false);
            setIsWaiting(false);
        }
    }, [text, texts, type]);

    if (type === 'typing') {
        return (
            <span className={`inline-flex items-center ${className}`}>
                <span style={{ fontFamily: 'monospace' }}>{displayText}</span>
                {cursor && (
                    <motion.span
                        className="inline-block w-[3px] h-[1.1em] ml-1"
                        style={{ backgroundColor: '#00d4ff' }}
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                    />
                )}
            </span>
        );
    }

    if (type === 'fade') {
        return (
            <span className={`inline-block relative ${className}`}>
                <AnimatePresence mode="wait">
                    <motion.span
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        onAnimationComplete={() => {
                            if (loop && allTexts.length > 1) {
                                setTimeout(() => {
                                    setCurrentIndex((prev) => (prev + 1) % allTexts.length);
                                }, pauseDuration);
                            }
                        }}
                    >
                        {allTexts[currentIndex]}
                    </motion.span>
                </AnimatePresence>
            </span>
        );
    }

    if (type === 'gradient') {
        return (
            <motion.span
                className={`inline-block ${className}`}
                style={{
                    backgroundImage: 'linear-gradient(90deg, #00d4ff, #a855f7, #ec4899, #a855f7, #00d4ff)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
                animate={{ backgroundPosition: ['0% center', '200% center'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
                {text || allTexts[0]}
            </motion.span>
        );
    }

    if (type === 'reveal') {
        const textToReveal = text || allTexts[0];
        return (
            <motion.span
                className={`inline-block ${className}`}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.03, delayChildren: delay / 1000 } },
                }}
            >
                {textToReveal.split('').map((char, index) => (
                    <motion.span
                        key={index}
                        className="inline-block"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </motion.span>
        );
    }

    return <span className={className}>{text || allTexts[0]}</span>;
}
