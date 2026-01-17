'use client';

import { useEffect, useRef } from 'react';

/**
 * Lanyard - Scales to fit, no cutoff
 */
export default function LanyardSection({ className = '' }) {
    const canvasRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;
        let time = 0;

        let isDragging = false;
        let dragOffsetX = 0;
        let currentSwing = 0;
        let targetSwing = 0;
        let velocity = 0;

        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = '/assets/profile.jpg';
        img.onload = () => { imageRef.current = img; };

        let W = 0, H = 0, CX = 0, scale = 1;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            W = canvas.offsetWidth;
            H = canvas.offsetHeight;
            CX = W / 2;
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // Calculate scale to fit lanyard in canvas
            const totalHeight = 500; // clip + strap + connector + card
            const totalWidth = 280;
            const scaleH = (H - 20) / totalHeight;
            const scaleW = (W - 40) / totalWidth;
            scale = Math.min(scaleH, scaleW, 1);
        };
        resize();
        window.addEventListener('resize', resize);

        const baseClipY = 20;
        const baseStrapLength = 100;
        const baseCW = 240, baseCH = 320, baseCR = 12;

        const roundRect = (x, y, w, h, r) => {
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.arcTo(x + w, y, x + w, y + h, r);
            ctx.arcTo(x + w, y + h, x, y + h, r);
            ctx.arcTo(x, y + h, x, y, r);
            ctx.arcTo(x, y, x + w, y, r);
            ctx.closePath();
        };

        const render = () => {
            ctx.clearRect(0, 0, W, H);
            if (W === 0) return;

            time += 0.02;

            // Scaled dimensions
            const CW = baseCW * scale;
            const CH = baseCH * scale;
            const CR = baseCR * scale;
            const clipY = baseClipY * scale + 10;
            const strapLength = baseStrapLength * scale;

            if (!isDragging) {
                targetSwing = Math.sin(time) * 15 * scale;
                const spring = 0.08;
                const damping = 0.92;
                velocity += (targetSwing - currentSwing) * spring;
                velocity *= damping;
                currentSwing += velocity;
            } else {
                currentSwing += (dragOffsetX - currentSwing) * 0.3;
            }

            currentSwing = Math.max(-80 * scale, Math.min(80 * scale, currentSwing));

            const swingAngle = currentSwing * 0.008;
            const cardX = CX + currentSwing * 0.5;
            const cardY = clipY + strapLength + 35 * scale;

            // TOP CLIP
            ctx.save();
            ctx.translate(CX, clipY);
            roundRect(-14 * scale, -18 * scale, 28 * scale, 38 * scale, 7 * scale);
            ctx.fillStyle = '#1e1e1e';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(0, -22 * scale, 10 * scale, Math.PI, 0);
            ctx.strokeStyle = '#3a3a3a';
            ctx.lineWidth = 4 * scale;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 10 * scale, 8 * scale, 0, Math.PI * 2);
            ctx.fillStyle = '#0a0a0a';
            ctx.fill();
            ctx.restore();

            // STRAP
            const strapW = 16 * scale;
            const curve = currentSwing * 0.3;

            ctx.beginPath();
            ctx.moveTo(CX - strapW / 2, clipY + 10 * scale);
            ctx.quadraticCurveTo(CX + curve - strapW / 2, clipY + strapLength / 2, cardX - strapW / 2, clipY + strapLength);
            ctx.lineTo(cardX + strapW / 2, clipY + strapLength);
            ctx.quadraticCurveTo(CX + curve + strapW / 2, clipY + strapLength / 2, CX + strapW / 2, clipY + 10 * scale);
            ctx.closePath();
            ctx.fillStyle = '#151515';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(CX, clipY + 10 * scale);
            ctx.quadraticCurveTo(CX + curve, clipY + strapLength / 2, cardX, clipY + strapLength);
            ctx.strokeStyle = '#222';
            ctx.lineWidth = 2 * scale;
            ctx.stroke();

            // CONNECTOR
            ctx.save();
            ctx.translate(cardX, clipY + strapLength);
            ctx.rotate(swingAngle);
            roundRect(-18 * scale, -8 * scale, 36 * scale, 36 * scale, 7 * scale);
            ctx.fillStyle = '#1a1a1a';
            ctx.fill();
            roundRect(-11 * scale, -5 * scale, 22 * scale, 10 * scale, 4 * scale);
            ctx.fillStyle = '#0a0a0a';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(0, 32 * scale, 9 * scale, 0, Math.PI * 2);
            ctx.fillStyle = '#222';
            ctx.fill();
            ctx.restore();

            // CARD
            ctx.save();
            ctx.translate(cardX, cardY);
            ctx.rotate(swingAngle);

            const cx = -CW / 2, cy = 10 * scale;

            ctx.shadowColor = 'rgba(0,0,0,0.3)';
            ctx.shadowBlur = 25 * scale;
            ctx.shadowOffsetY = 12 * scale;

            roundRect(cx, cy, CW, CH, CR);
            ctx.fillStyle = '#0b0b0b';
            ctx.fill();
            ctx.shadowColor = 'transparent';

            roundRect(cx, cy, CW, CH, CR);
            ctx.strokeStyle = '#1a1a1a';
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.save();
            roundRect(cx, cy, CW, CH, CR);
            ctx.clip();

            if (imageRef.current) {
                const im = imageRef.current;
                const ir = im.width / im.height;
                const cr = CW / CH;
                let dw, dh, dx, dy;
                if (ir > cr) { dh = CH; dw = CH * ir; dx = cx - (dw - CW) / 2; dy = cy; }
                else { dw = CW; dh = CW / ir; dx = cx; dy = cy - (dh - CH) / 2; }
                ctx.drawImage(im, dx, dy, dw, dh);
            } else {
                ctx.fillStyle = '#0b0b0b';
                ctx.fillRect(cx, cy, CW, CH);

                ctx.fillStyle = '#2a2a2a';
                ctx.font = `${10 * scale}px Inter, sans-serif`;
                ctx.textAlign = 'left';
                ctx.fillText('▲ Portfolio', cx + 16 * scale, cy + 26 * scale);
                ctx.textAlign = 'right';
                ctx.fillText('2024', cx + CW - 16 * scale, cy + 26 * scale);

                ctx.textAlign = 'center';
                ctx.fillStyle = '#eee';
                ctx.font = `bold ${72 * scale}px Inter, sans-serif`;
                ctx.fillText('ZH', 0, cy + CH / 2 - 5 * scale);

                ctx.fillStyle = '#555';
                ctx.font = `bold ${14 * scale}px Inter, sans-serif`;
                ctx.fillText('ZALL', 0, cy + CH - 60 * scale);

                ctx.fillStyle = '#eee';
                ctx.font = `bold ${20 * scale}px Inter, sans-serif`;
                ctx.fillText('HDY', 0, cy + CH - 38 * scale);

                ctx.fillStyle = '#333';
                ctx.font = `${9 * scale}px monospace`;
                ctx.fillText('DEVELOPER', 0, cy + CH - 15 * scale);
            }
            ctx.restore();

            ctx.beginPath();
            ctx.arc(0, cy + 20 * scale, 6 * scale, 0, Math.PI * 2);
            ctx.fillStyle = '#000';
            ctx.fill();

            ctx.restore();
        };

        const getX = (e) => {
            const rect = canvas.getBoundingClientRect();
            const t = e.touches ? e.touches[0] : e;
            return t.clientX - rect.left;
        };

        const start = (e) => {
            e.preventDefault();
            isDragging = true;
            velocity = 0;
        };

        const move = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = getX(e);
            dragOffsetX = (x - CX) * 1.5;
            dragOffsetX = Math.max(-80 * scale, Math.min(80 * scale, dragOffsetX));
        };

        const end = () => {
            isDragging = false;
            velocity = (dragOffsetX - currentSwing) * 0.5;
        };

        canvas.addEventListener('mousedown', start);
        canvas.addEventListener('mousemove', move);
        canvas.addEventListener('mouseup', end);
        canvas.addEventListener('mouseleave', end);
        canvas.addEventListener('touchstart', start, { passive: false });
        canvas.addEventListener('touchmove', move, { passive: false });
        canvas.addEventListener('touchend', end);
        canvas.addEventListener('touchcancel', end);

        const loop = () => {
            render();
            animationId = requestAnimationFrame(loop);
        };
        loop();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className={`relative ${className}`}>
            <canvas
                ref={canvasRef}
                className="w-full h-full cursor-grab active:cursor-grabbing"
                style={{ touchAction: 'none' }}
            />
        </div>
    );
}
