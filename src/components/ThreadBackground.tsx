"use client";

import React, { useEffect, useRef } from 'react';

const ThreadBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const threadCount = 12;
    const threads: Thread[] = [];

    class Thread {
      points: { x: number; y: number }[] = [];
      color: string;
      speed: number;
      offset: number;
      thickness: number;

      constructor(color: string) {
        this.color = color;
        this.speed = 0.001 + Math.random() * 0.002;
        this.offset = Math.random() * 1000;
        this.thickness = 1 + Math.random() * 2;
        
        // Initial points
        for (let i = 0; i < 20; i++) {
          this.points.push({ x: Math.random() * width, y: Math.random() * height });
        }
      }

      update(time: number) {
        this.points.forEach((p, i) => {
          const t = time * this.speed + this.offset + i * 0.2;
          // Use sine waves to simulate tangling/untangling
          p.x = (width / 2) + Math.sin(t * 0.7) * (width * 0.4) + Math.cos(t * 1.3) * (width * 0.1);
          p.y = (height / 2) + Math.cos(t * 0.8) * (height * 0.4) + Math.sin(t * 1.1) * (height * 0.1);
        });
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);

        for (let i = 1; i < this.points.length - 2; i++) {
          const xc = (this.points[i].x + this.points[i + 1].x) / 2;
          const yc = (this.points[i].y + this.points[i + 1].y) / 2;
          ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, xc, yc);
        }

        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.thickness;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 0.4;
        ctx.stroke();
      }
    }

    for (let i = 0; i < threadCount; i++) {
      threads.push(new Thread(i % 2 === 0 ? '#25B0C6' : '#111827'));
    }

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      
      threads.forEach(thread => {
        thread.update(time);
        thread.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.6
      }}
    />
  );
};

export default ThreadBackground;
