
"use client";

import React, { useEffect, useState, useMemo } from 'react';

interface Star {
  id: number;
  x: string;
  y: string;
  size: string;
  animationDelay: string;
  animationDuration: string;
}

const createStar = (id: number): Star => ({
  id,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`, // Star size between 1px and 3px
  animationDelay: `${Math.random() * 5}s`,
  animationDuration: `${Math.random() * 3 + 4}s`, // Duration 4-7s
});

const HeroAnimation: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const stars = useMemo(() => {
    if (!isMounted) return [];
    const numStars = typeof window !== 'undefined' && window.innerWidth < 768 ? 30 : 60; // Fewer stars on mobile
    return Array.from({ length: numStars }, (_, i) => createStar(i));
  }, [isMounted]);

  if (!isMounted) {
    return null; // Avoid rendering on server or before hydration
  }

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none -z-10">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-primary/50 animate-twinkle"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

export default HeroAnimation;
