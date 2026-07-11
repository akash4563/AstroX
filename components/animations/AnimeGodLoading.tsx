import React from 'react';
import { motion } from 'framer-motion';

export default function AnimeGodLoading() {
  return (
    <div className="relative w-72 h-72 flex items-center justify-center">
      {/* Outer pulsing aura (Cosmic Energy) */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-electric-blue rounded-full blur-3xl opacity-50"
      />
      <motion.div
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute inset-0 bg-saffron rounded-full blur-3xl opacity-50"
      />

      {/* Rotating Sacred Geometry (Mandala / Yantra) */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute w-56 h-56 text-saffron/40"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
        {/* Star of David / Shatkona - representing Shiva and Shakti */}
        <polygon points="50,10 85,75 15,75" fill="none" stroke="currentColor" strokeWidth="1" />
        <polygon points="50,90 15,25 85,25" fill="none" stroke="currentColor" strokeWidth="1" />
      </motion.svg>

      {/* Anime God Silhouette (Lord Shiva) */}
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.8 }}
        animate={{ y: [15, -15, 15], opacity: [0.9, 1, 0.9], scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-48 h-48 flex flex-col items-center justify-center"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,153,51,0.8)]">
          {/* Glowing Halo */}
          <circle cx="100" cy="80" r="45" stroke="#FF9933" strokeWidth="2" strokeDasharray="4 6" className="animate-[spin_10s_linear_infinite]" />

          {/* Crescent Moon (Chandrasekhara) */}
          <path d="M75 45 C85 40, 95 50, 90 60 C80 55, 70 50, 75 45 Z" fill="#00E5FF" opacity="0.9" />

          {/* Third Eye (Trinetra) */}
          <path d="M100 70 C100 70, 105 75, 100 82 C95 75, 100 70, 100 70 Z" fill="#00E5FF" />

          {/* Trishul (Trident) - held on the side */}
          <path d="M150 50 L150 150 M130 70 C130 90, 170 90, 170 70 M150 50 L145 60 M150 50 L155 60 M130 70 L125 75 M170 70 L175 75" stroke="#FF9933" strokeWidth="3" strokeLinecap="round" />

          {/* Damaru (Drum) attached to Trishul */}
          <path d="M140 100 L160 115 L140 115 L160 100 Z" fill="#00E5FF" opacity="0.7" />

          {/* Meditating Figure (Shiva Silhouette) */}
          <path d="M100 90 L125 130 H75 L100 90 Z" fill="url(#shiva_grad)" />
          <path d="M125 130 L160 170 H90 L125 130 Z" fill="url(#shiva_grad)" opacity="0.85" />
          <path d="M75 130 L40 170 H110 L75 130 Z" fill="url(#shiva_grad)" opacity="0.85" />

          {/* Snake around neck (Vasuki) */}
          <path d="M90 100 Q100 115 110 100" stroke="#00E5FF" strokeWidth="3" fill="none" strokeLinecap="round" />

          <defs>
            <linearGradient id="shiva_grad" x1="100" y1="90" x2="100" y2="170" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF9933" />
              <stop offset="0.5" stopColor="#00E5FF" />
              <stop offset="1" stopColor="#0B0E14" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Manifestation Text */}
      <div className="absolute -bottom-8 w-full text-center">
         <motion.div
           animate={{ opacity: [0.4, 1, 0.4] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="text-saffron font-bold text-sm tracking-widest uppercase"
         >
           Lord Shiva Manifesting...
         </motion.div>
      </div>
    </div>
  );
}
