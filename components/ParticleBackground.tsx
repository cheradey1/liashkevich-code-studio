import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  heroTitleRect: DOMRect | null;
}

const heatingColors = ['#c53030', '#e53e3e', '#ff4500']; // Reds & Oranges
const hotColors = ['#FFD700', '#ffc800', '#ff8c00']; // Gold, Yellow, Orange
const coolColors = ['#00BFFF', '#8A2BE2', '#FF007F']; // Neon Blue, Purple, Pink


const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ heroTitleRect }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let currentColors = coolColors;

        class Particle {
            x: number = 0;
            y: number = 0;
            radius: number = 1;
            color: string = '#FF4500';
            speedY: number = 1;
            speedX: number = 0;
            opacity: number = 1;
            life: number = 100;
            maxLife: number = 100;

            constructor() {
                this.reset();
            }

            reset() {
                if (heroTitleRect) {
                  this.x = heroTitleRect.left + Math.random() * heroTitleRect.width;
                  this.y = heroTitleRect.top + Math.random() * heroTitleRect.height;
                } else {
                  // Position off-screen if no rect, although it won't be created
                  this.x = -100;
                  this.y = -100;
                }
                
                this.radius = Math.random() * 3 + 1;
                this.speedY = Math.random() * 2.5 + 1; // Faster initial speed
                this.speedX = (Math.random() - 0.5) * 2; // More horizontal sway
                this.maxLife = 100 + Math.random() * 100; // Live longer, travel further
                
                this.life = this.maxLife;
                this.opacity = 1;
                this.color = currentColors[Math.floor(Math.random() * currentColors.length)];
            }

            draw() {
                if (!ctx) return;
                ctx.shadowBlur = 8;
                ctx.shadowColor = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fill();
                ctx.closePath();
                ctx.shadowBlur = 0;
            }

            update() {
                this.life--;
                
                if (this.life <= 0) {
                   this.reset();
                }

                this.y -= this.speedY;
                this.x += this.speedX;

                if (this.speedY > 0.1) {
                    this.speedY -= 0.02; // gravity/drag effect
                }

                this.opacity = (this.life / this.maxLife) * 0.8 + Math.random() * 0.2;
                
                if (this.radius > 0.2) {
                    this.radius -= 0.03; // Shrink a bit faster
                }
                
                this.draw();
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = heroTitleRect ? 150 : 0; // More particles
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };
        
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };


        const animate = () => {
            if (!ctx) {
                animationFrameId = requestAnimationFrame(animate);
                return;
            };

            // Sync with 5s CSS animation timing
            const progress = (Date.now() % 5000) / 5000;
            
            let newColors;

            // Determine color palette based on animation progress to match CSS
            if (progress >= 0.4 && progress <= 0.6) {
                // 40%-60%: Peak heat (yellow/gold)
                newColors = hotColors;
            } else if ((progress >= 0.1 && progress < 0.4) || (progress > 0.6 && progress <= 0.9)) {
                // 10%-40% (heating up) & 60%-90% (cooling down): Warm red glow
                newColors = heatingColors;
            } else {
                // 0%-10% & 90%-100%: Cool state
                newColors = coolColors;
            }
            
            // If color palette changes, update currentColors
            if (JSON.stringify(newColors) !== JSON.stringify(currentColors)) {
                currentColors = newColors;
                // Instantly re-color all particles for a dramatic synchronized effect
                for (const particle of particles) {
                    particle.color = currentColors[Math.floor(Math.random() * currentColors.length)];
                }
            }
            
            ctx.globalCompositeOperation = 'source-over';
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'lighter';

            for (const particle of particles) {
                particle.update();
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        
        handleResize();
        init();
        animate();

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, [heroTitleRect]);

    return <canvas ref={canvasRef} id="particle-canvas" className="fixed top-0 left-0 pointer-events-none"></canvas>;
};

export default ParticleBackground;