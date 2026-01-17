/**
 * ReactBits Utility Library
 * Custom hooks and utilities for ReactBits-style animations and effects
 */

// Animation variants for Framer Motion
export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

// Floating animation for Lanyard
export const floatingAnimation = {
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};

// Glow pulse animation
export const glowPulse = {
    animate: {
        boxShadow: [
            '0 0 20px rgba(0, 212, 255, 0.3)',
            '0 0 40px rgba(168, 85, 247, 0.4)',
            '0 0 20px rgba(0, 212, 255, 0.3)'
        ],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};

// Text typing animation config
export const typingConfig = {
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000
};

// Hover effect presets
export const hoverScale = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 }
};

export const hoverGlow = {
    whileHover: {
        boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
        borderColor: 'rgba(168, 85, 247, 0.5)'
    },
    transition: { duration: 0.3 }
};

export const hoverLift = {
    whileHover: { y: -5, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)' },
    transition: { type: 'spring', stiffness: 300 }
};

// Color palette for ReactBits components
export const colors = {
    neonBlue: '#00d4ff',
    neonPurple: '#a855f7',
    neonPink: '#ec4899',
    neonCyan: '#22d3ee',
    darkBg: '#0a0a0f',
    cardBg: 'rgba(18, 18, 26, 0.6)'
};

// Preset gradients
export const gradients = {
    primary: 'linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)',
    secondary: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    dark: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 100%)',
    glow: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, transparent 70%)'
};

export default {
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    staggerItem,
    floatingAnimation,
    glowPulse,
    typingConfig,
    hoverScale,
    hoverGlow,
    hoverLift,
    colors,
    gradients
};
