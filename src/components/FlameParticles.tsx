import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  sparkleSpeed: number;
  sparkle: number;
}

export const FlameParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(245, 158, 11, ', // amber-500
      'rgba(217, 119, 6, ',  // amber-600
      'rgba(234, 88, 12, ',  // orange-600
      'rgba(251, 191, 36, ', // amber-400
      'rgba(239, 68, 68, '   // red-500
    ];

    const particles: Particle[] = [];
    const maxParticles = Math.min(35, Math.floor(width / 35));

    const createParticle = (initialY?: number): Particle => {
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * width,
        y: initialY !== undefined ? initialY : height + Math.random() * 20,
        radius: Math.random() * 1.8 + 0.8,
        color: colorBase,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(Math.random() * 0.8 + 0.5),
        alpha: Math.random() * 0.7 + 0.3,
        decay: Math.random() * 0.003 + 0.002,
        sparkleSpeed: Math.random() * 0.05 + 0.02,
        sparkle: Math.random() * Math.PI
      };
    };

    // Pre-populate particles across screen
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(Math.random() * height));
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.sparkle += p.sparkleSpeed;

        const currentAlpha = Math.max(0, p.alpha * (0.7 + 0.3 * Math.sin(p.sparkle)));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#f59e0b';
        ctx.fill();

        // Respawn when faded or scrolled out of view
        if (p.alpha <= 0 || p.y < -10) {
          particles[i] = createParticle();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-45"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
