import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Sparkles, ArrowRight } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface PreloaderProps {
  onComplete: () => void;
  lang: 'en' | 'si';
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, lang }) => {
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const phases = lang === 'en' ? [
    'Igniting Hardwood Embers...',
    'Curing Japanese Binchotan Charcoal...',
    'Seasoning 24-Hour Herb Skewers...',
    'Calibrating Open Hearth to 800°F...',
    'Welcome to The Elite Grill'
  ] : [
    'ලී අඟුරු දැල්වීම...',
    'ජපන් බින්චෝටන් අඟුරු සකස් කිරීම...',
    'පැය 24ක් මැරිනේට් කළ මස් පිළියෙල කිරීම...',
    'ග්‍රිල් උදුන 800°F වෙත රත් කිරීම...',
    'The Elite Grill වෙත සාදරයෙන් පිළිගනිමු'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            soundManager.playChime();
            setIsFinished(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        // Accelerate smoothly
        const increment = prev < 50 ? 2.5 : prev < 85 ? 3.5 : 5;
        const next = Math.min(100, prev + increment);
        const nextIdx = Math.min(phases.length - 1, Math.floor((next / 100) * phases.length));
        setPhaseIndex(nextIdx);
        return next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [phases.length, onComplete]);

  const handleSkip = () => {
    soundManager.playClick();
    setIsFinished(true);
    setTimeout(onComplete, 400);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070709] text-white select-none overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-600/20 rounded-full blur-[90px] pointer-events-none" />

          {/* Floating Ember Dots */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
                  y: (typeof window !== 'undefined' ? window.innerHeight : 600) + 20,
                  opacity: 0,
                  scale: 0.5 + Math.random() * 0.8
                }}
                animate={{
                  y: -50,
                  opacity: [0, 0.8, 0],
                  x: `+=${(Math.random() - 0.5) * 80}`
                }}
                transition={{
                  duration: 2.5 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeOut'
                }}
                className="absolute w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]"
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md w-full">
            {/* Animated Logo Icon with Flame Rings */}
            <div className="relative mb-6">
              {/* Outer Pulse Rings */}
              <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-4 rounded-3xl bg-amber-500/20 blur-md"
              />
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 p-0.5 shadow-2xl shadow-amber-500/30 flex items-center justify-center">
                <div className="w-full h-full bg-[#0d0d12] rounded-[14px] flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                      scale: [1, 1.06, 1],
                      rotate: [-2, 2, -2]
                    }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Flame className="w-10 h-10 text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Brand Title */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="space-y-1 mb-8"
            >
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-wider text-white">
                THE ELITE GRILL
              </h1>
              <p className="text-[11px] tracking-[0.3em] font-semibold text-amber-500 uppercase">
                Wood-Fired Artisan Smokehouse
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full bg-zinc-900/90 rounded-full h-2 p-0.5 border border-zinc-800 relative overflow-hidden mb-4 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Progress Percentage & Status Phrase */}
            <div className="flex items-center justify-between w-full text-xs mb-8">
              <div className="flex items-center gap-1.5 text-zinc-400 font-medium h-5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="truncate">{phases[phaseIndex]}</span>
              </div>
              <span className="text-amber-400 font-mono font-bold ml-2">
                {Math.round(progress)}%
              </span>
            </div>

            {/* Quick Skip Button */}
            <button
              onClick={handleSkip}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-amber-300 text-xs font-medium border border-zinc-800/80 transition-all active:scale-95"
            >
              <span>{lang === 'en' ? 'Skip to Dining' : 'වහාම ඇතුල්වන්න'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
