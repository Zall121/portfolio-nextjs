'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { projects, categories } from '@/data/projects';
import { staggerContainer, staggerItem } from '@/lib/reactbits';

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState(1); // 1 = next, -1 = prev

    const filteredProjects = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

    const openLightbox = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeLightbox = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject) {
            setSlideDirection(1);
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setSlideDirection(-1);
            setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };

    return (
        <section id="projects" ref={ref} className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
                    <motion.span
                        className="inline-block px-4 py-2 mb-4 rounded-full text-sm"
                        style={{ backgroundColor: 'rgba(163,163,163,0.1)', border: '1px solid rgba(163,163,163,0.2)', color: '#a3a3a3', fontFamily: 'monospace' }}
                    >
                        {'<Projects />'}
                    </motion.span>
                    <h2 className="section-title">Featured Work</h2>
                    <p className="section-subtitle">Showcase proyek yang menunjukkan kemampuan saya</p>
                </motion.div>

                {/* Filter */}
                <motion.div className="flex flex-wrap justify-center gap-3 mb-12" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                            style={{
                                background: activeCategory === category ? '#f5f5f5' : 'rgba(26,26,26,0.8)',
                                color: activeCategory === category ? '#0a0a0a' : '#a3a3a3',
                                border: activeCategory === category ? 'none' : '1px solid #333',
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid - 1 column on mobile */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                    {filteredProjects.map((project) => (
                        <motion.article key={project.id} variants={staggerItem} className="group relative" layout>
                            {/* Gallery - Simple photo display */}
                            {project.category === 'Gallery' ? (
                                <motion.div
                                    className="relative overflow-hidden rounded-2xl cursor-pointer"
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => openLightbox(project)}
                                >
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-white font-medium text-lg">📷 {project.title}</span>
                                        <span className="text-white/70 text-sm mt-1">Lihat {project.images.length} Foto</span>
                                    </div>
                                </motion.div>
                            ) : (
                                /* Web & Android - Card style */
                                <motion.div
                                    className="relative h-full rounded-2xl overflow-hidden cursor-pointer transition-all"
                                    style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', backdropFilter: 'blur(8px)' }}
                                    whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
                                    onClick={() => openLightbox(project)}
                                >
                                    {/* Thumbnail */}
                                    <div className="relative h-48 overflow-hidden" style={{ background: '#262626' }}>
                                        {project.featured && (
                                            <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-semibold z-10" style={{ background: '#f5f5f5', color: '#0a0a0a' }}>
                                                ⭐ Unggulan
                                            </div>
                                        )}
                                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs z-10" style={{ backgroundColor: 'rgba(10,10,15,0.8)', border: '1px solid rgba(255,255,255,0.1)', color: '#d1d5db' }}>
                                            {project.category}
                                        </div>

                                        {/* Thumbnail Image */}
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        {/* Fallback icon if image fails */}
                                        <div className="w-full h-full items-center justify-center absolute inset-0" style={{ display: 'none' }}>
                                            <span className="text-4xl opacity-50">
                                                {project.category === 'Web' ? '🌐' : '📱'}
                                            </span>
                                        </div>

                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-white font-medium">Lihat {project.images.length} Foto →</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-sm mb-4 line-clamp-2" style={{ color: '#9ca3af' }}>{project.description}</p>

                                        {/* Tags */}
                                        {project.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.slice(0, 6).map((tag) => (
                                                    <span key={tag} className="px-2 py-1 rounded-md text-xs" style={{ backgroundColor: 'rgba(26,26,36,0.8)', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </motion.article>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop - Pure black for Gallery */}
                        <motion.div
                            className={`absolute inset-0 ${selectedProject.category === 'Gallery' ? 'bg-black' : 'bg-black/90 backdrop-blur-md'}`}
                            onClick={closeLightbox}
                        />

                        {/* Close button - Always visible */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Gallery - Fullscreen smooth carousel */}
                        {selectedProject.category === 'Gallery' ? (
                            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                                {/* Draggable Carousel */}
                                <div className="relative w-full h-full overflow-hidden">
                                    <motion.div
                                        className="flex h-full items-center cursor-grab active:cursor-grabbing"
                                        style={{
                                            width: `${selectedProject.images.length * 100}%`,
                                            x: `${-currentImageIndex * (100 / selectedProject.images.length)}%`
                                        }}
                                        drag="x"
                                        dragConstraints={{
                                            left: -((selectedProject.images.length - 1) * window.innerWidth),
                                            right: 0
                                        }}
                                        dragElastic={0.1}
                                        dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
                                        onDragEnd={(event, info) => {
                                            const threshold = 100;
                                            const velocity = info.velocity.x;
                                            const offset = info.offset.x;

                                            let newIndex = currentImageIndex;

                                            // Fast swipe
                                            if (velocity < -500 && currentImageIndex < selectedProject.images.length - 1) {
                                                newIndex = currentImageIndex + 1;
                                            } else if (velocity > 500 && currentImageIndex > 0) {
                                                newIndex = currentImageIndex - 1;
                                            }
                                            // Slow drag
                                            else if (offset < -threshold && currentImageIndex < selectedProject.images.length - 1) {
                                                newIndex = currentImageIndex + 1;
                                            } else if (offset > threshold && currentImageIndex > 0) {
                                                newIndex = currentImageIndex - 1;
                                            }

                                            setSlideDirection(newIndex > currentImageIndex ? 1 : -1);
                                            setCurrentImageIndex(newIndex);
                                        }}
                                        animate={{
                                            x: `${-currentImageIndex * (100 / selectedProject.images.length)}%`
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 30,
                                            mass: 0.8
                                        }}
                                    >
                                        {selectedProject.images.map((img, idx) => (
                                            <div
                                                key={idx}
                                                className="flex-shrink-0 h-full flex items-center justify-center"
                                                style={{ width: `${100 / selectedProject.images.length}%` }}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`${selectedProject.title} - ${idx + 1}`}
                                                    className="max-w-[95%] max-h-[85vh] object-contain select-none pointer-events-none"
                                                    draggable="false"
                                                />
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Navigation Arrows */}
                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                        >
                                            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                        >
                                            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}

                                {/* Dots indicator - Instagram style */}
                                <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                                    {selectedProject.images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`rounded-full transition-all ${idx === currentImageIndex
                                                ? 'w-2.5 h-2.5 bg-blue-500'
                                                : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            /* Web & Android - Modal style */
                            <motion.div
                                className="relative z-10 max-w-4xl w-full p-4"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                                        <p className="text-sm" style={{ color: '#9ca3af' }}>{selectedProject.description}</p>
                                    </div>
                                </div>

                                {/* Image Carousel with Swipe */}
                                <div className="relative rounded-2xl overflow-hidden" style={{ backgroundColor: 'rgba(18,18,26,0.8)' }}>
                                    <div className="aspect-video relative overflow-hidden">
                                        <motion.div
                                            className="flex h-full"
                                            style={{ width: `${selectedProject.images.length * 100}%` }}
                                            animate={{ x: `-${currentImageIndex * (100 / selectedProject.images.length)}%` }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            drag="x"
                                            dragConstraints={{ left: 0, right: 0 }}
                                            dragElastic={0.2}
                                            onDragEnd={(event, info) => {
                                                const threshold = 50;
                                                if (info.offset.x < -threshold && currentImageIndex < selectedProject.images.length - 1) {
                                                    setCurrentImageIndex(currentImageIndex + 1);
                                                } else if (info.offset.x > threshold && currentImageIndex > 0) {
                                                    setCurrentImageIndex(currentImageIndex - 1);
                                                }
                                            }}
                                        >
                                            {selectedProject.images.map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex-shrink-0 h-full flex items-center justify-center"
                                                    style={{ width: `${100 / selectedProject.images.length}%`, backgroundColor: '#1a1a1a' }}
                                                >
                                                    <img
                                                        src={img}
                                                        alt={`${selectedProject.title} - ${idx + 1}`}
                                                        className="max-w-full max-h-full object-contain pointer-events-none select-none"
                                                        draggable="false"
                                                    />
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Navigation Arrows */}
                                    {selectedProject.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                                            >
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                                            >
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Dots */}
                                <div className="mt-4 flex items-center justify-center gap-2">
                                    {selectedProject.images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`w-3 h-3 rounded-full transition-all ${idx === currentImageIndex
                                                ? 'bg-[#f5f5f5] w-6'
                                                : 'bg-white/30 hover:bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <p className="text-center text-sm mt-2" style={{ color: '#6b7280' }}>
                                    {currentImageIndex + 1} / {selectedProject.images.length}
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
