import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Flame, Sparkles, Volume2, Plus, CheckCircle, Info, RotateCcw } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { triggerFlameBurstConfetti } from '../utils/confetti';
import { MenuItem } from '../types';

interface GrillSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCustomCutToCart: (item: MenuItem, doneness: string, notes: string) => void;
  lang: 'en' | 'si';
}

interface MeatCut {
  id: string;
  name: string;
  nameSi: string;
  price: number;
  image: string;
  recommendedTemp: number;
  description: string;
}

const CUTS: MeatCut[] = [
  {
    id: 'wagyu-ribeye',
    name: 'A5 Wagyu Striploin Cut',
    nameSi: 'A5 වග්‍යු බීෆ් කට්',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    recommendedTemp: 135,
    description: 'Intensely marbled Japanese Wagyu seared over glowing charcoal.'
  },
  {
    id: 'lamb-skewer',
    name: 'Rosemary Garlic Lamb Skewer',
    nameSi: 'රෝස්මරී සුදුලූනු බැටළු මස් කෙබාබ්',
    price: 24.50,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    recommendedTemp: 145,
    description: '24-hour herb infused lamb cubes threaded on rosemary skewers.'
  },
  {
    id: 'tiger-prawn',
    name: 'Jumbo Wood-Fired Tiger Prawn',
    nameSi: 'දැල්ලෙන් පිළිස්සූ ඉස්සන්',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80',
    recommendedTemp: 140,
    description: 'Sweet tiger prawns brushed with smoked garlic herb butter.'
  }
];

export const GrillSimulatorModal: React.FC<GrillSimulatorModalProps> = ({
  isOpen,
  onClose,
  onAddCustomCutToCart,
  lang
}) => {
  const [selectedCut, setSelectedCut] = useState<MeatCut>(CUTS[0]);
  const [internalTemp, setInternalTemp] = useState<number>(135);
  const [woodType, setWoodType] = useState<'Binchotan' | 'Hickory' | 'Applewood'>('Binchotan');
  const [isSearing, setIsSearing] = useState(false);
  const [searMarksLevel, setSearMarksLevel] = useState<number>(1);
  const [searFeedback, setSearFeedback] = useState<string | null>(null);

  if (!isOpen) return null;

  // Doneness level determination
  const getDonenessLabel = (temp: number) => {
    if (temp < 130) return { title: 'Rare', color: 'text-red-400', desc: 'Cool red center, delicate texture' };
    if (temp < 140) return { title: 'Medium Rare', color: 'text-rose-400', desc: 'Warm pink center, chef recommended' };
    if (temp < 150) return { title: 'Medium', color: 'text-amber-400', desc: 'Pink center with savory crust' };
    if (temp < 160) return { title: 'Medium Well', color: 'text-orange-400', desc: 'Subtle pink ribbon, firm texture' };
    return { title: 'Well Done', color: 'text-yellow-600', desc: 'Uniform brown sear throughout' };
  };

  const doneness = getDonenessLabel(internalTemp);

  const handleTriggerSear = () => {
    soundManager.playSizzle(1.6);
    setIsSearing(true);
    setSearMarksLevel((prev) => Math.min(prev + 1, 3));

    setTimeout(() => {
      setIsSearing(false);
      const diff = Math.abs(internalTemp - selectedCut.recommendedTemp);
      if (diff <= 5) {
        setSearFeedback(lang === 'en' ? '★ Michelin-Grade Pitmaster Precision!' : '★ සුපිරි සූපවේදී නිරවද්‍යතාවය!');
        triggerFlameBurstConfetti();
      } else {
        setSearFeedback(lang === 'en' ? 'Hot & caramelized wood-fired crust locked in!' : 'සුවඳවත් අඟුරු රසය හොඳින් ඇතුළත් විය!');
      }
    }, 1600);
  };

  const handleReset = () => {
    soundManager.playClick();
    setSearMarksLevel(1);
    setSearFeedback(null);
  };

  const handleOrderSearedItem = () => {
    soundManager.playChime();
    const item: MenuItem = {
      id: `custom-${selectedCut.id}`,
      name: selectedCut.name,
      sinhalaName: selectedCut.nameSi,
      category: 'skewers',
      price: selectedCut.price,
      description: `${selectedCut.description} Seared over ${woodType} coals to ${doneness.title} (${internalTemp}°F).`,
      image: selectedCut.image,
      rating: 5.0,
      reviewCount: 1,
      prepTime: '15-20 min',
      tags: ['Custom Searing', 'Pitmaster Spec', 'Charcoal'],
      isChefSpecial: true
    };

    onAddCustomCutToCart(
      item,
      doneness.title,
      `Pitmaster Simulator Spec: ${woodType} Oak Wood, Temp: ${internalTemp}°F (${doneness.title})`
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-2xl bg-[#101015] border border-amber-500/30 rounded-3xl shadow-2xl shadow-black/90 p-6 sm:p-8 overflow-hidden text-left my-8"
      >
        {/* Amber Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1 pr-10 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 animate-pulse" />
            <span>{lang === 'en' ? 'Live Hearth Simulator' : 'සජීවී ග්‍රිල් අත්දැකීම'}</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-white">
            {lang === 'en' ? 'Craft Your Custom Flame Sear' : 'ඔබගේ ග්‍රිල් මස් පිසීමේ අත්දැකීම'}
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm">
            {lang === 'en'
              ? 'Control the charcoal temp, hear the sizzle, and dial in the master doneness.'
              : 'අඟුරු උෂ්ණත්වය පාලනය කර, සැබෑ ශබ්දය අසා ඔබ කැමති පරිදි මස් පිසගන්න.'}
          </p>
        </div>

        {/* 1. Cut Selector */}
        <div className="space-y-2 mb-6">
          <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
            {lang === 'en' ? '1. Select Cut' : '1. මස් වර්ගය තෝරන්න'}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {CUTS.map((cut) => {
              const isSelected = selectedCut.id === cut.id;
              return (
                <button
                  key={cut.id}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedCut(cut);
                    setInternalTemp(cut.recommendedTemp);
                    setSearMarksLevel(1);
                    setSearFeedback(null);
                  }}
                  className={`p-3 rounded-xl border text-left flex sm:flex-col items-center sm:items-start gap-3 transition-all ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500 shadow-md shadow-amber-500/10'
                      : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <img
                    src={cut.image}
                    alt={cut.name}
                    className="w-12 h-12 sm:w-full sm:h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-xs font-bold text-white line-clamp-1">
                      {lang === 'en' ? cut.name : cut.nameSi}
                    </div>
                    <div className="text-amber-400 font-semibold text-xs mt-0.5">
                      ${cut.price.toFixed(2)}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Interactive Grill Grate & Searing Visualizer */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#18181f] to-[#0d0d10] border border-zinc-800 p-5 mb-6 overflow-hidden">
          {/* Iron Grate Background Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] [background-size:16px_16px] opacity-15 pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 z-10">
            {/* Searing Meat Graphic with Live Marks */}
            <div className="relative w-44 h-32 rounded-xl overflow-hidden shadow-2xl border border-amber-500/40 group">
              <img
                src={selectedCut.image}
                alt={selectedCut.name}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isSearing ? 'scale-105 contrast-125 brightness-90' : ''
                }`}
              />

              {/* Glowing Ember Underglow */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-transparent to-transparent pointer-events-none" />

              {/* Sear Crosshatch Marks Overlay */}
              {searMarksLevel >= 1 && (
                <div
                  className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(20,10,0,0.6)_0px,rgba(20,10,0,0.6)_3px,transparent_3px,transparent_14px)] pointer-events-none transition-opacity duration-500"
                  style={{ opacity: searMarksLevel * 0.35 }}
                />
              )}
              {searMarksLevel >= 2 && (
                <div
                  className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,rgba(20,10,0,0.7)_0px,rgba(20,10,0,0.7)_3px,transparent_3px,transparent_14px)] pointer-events-none transition-opacity duration-500"
                  style={{ opacity: 0.7 }}
                />
              )}

              {/* Sizzling Smoke & Sparks when active */}
              {isSearing && (
                <div className="absolute inset-0 bg-amber-500/20 backdrop-blur-[1px] flex items-center justify-center animate-pulse">
                  <span className="text-[11px] font-black tracking-widest text-amber-300 uppercase bg-black/70 px-2 py-0.5 rounded shadow">
                    SEARING 800°F
                  </span>
                </div>
              )}
            </div>

            {/* Controls & Temperature Dial */}
            <div className="flex-1 w-full space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-300">
                  {lang === 'en' ? 'Core Temperature' : 'උෂ්ණත්වය'}:
                </span>
                <span className={`font-mono font-bold text-sm ${doneness.color}`}>
                  {internalTemp}°F • {doneness.title}
                </span>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="120"
                max="170"
                step="1"
                value={internalTemp}
                onChange={(e) => {
                  setInternalTemp(Number(e.target.value));
                  setSearFeedback(null);
                }}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />

              <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                <span>120° Rare</span>
                <span>135° Med-Rare</span>
                <span>145° Med</span>
                <span>165°+ Well</span>
              </div>

              <p className="text-xs text-zinc-400 italic">
                {doneness.desc}
              </p>

              {/* Sear Trigger Button with Sound Effect */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleTriggerSear}
                  disabled={isSearing}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-amber-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-orange-600/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Flame className={`w-4 h-4 text-yellow-300 ${isSearing ? 'animate-bounce' : ''}`} />
                  <span>
                    {isSearing
                      ? (lang === 'en' ? 'Searing on Hearth...' : 'ග්‍රිල් වෙමින් පවතී...')
                      : (lang === 'en' ? 'Sear On Cast Iron (Sound On)' : 'ග්‍රිල් කරන්න (ශබ්දය සහිතව)')}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  title="Reset Grill"
                  className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {searFeedback && (
                <div className="text-xs text-amber-400 font-semibold flex items-center gap-1.5 animate-in fade-in duration-300">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{searFeedback}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3. Wood Smoke Selector */}
        <div className="flex items-center justify-between text-xs mb-6">
          <span className="text-zinc-400 font-medium">
            {lang === 'en' ? 'Wood Fuel:' : 'ලී වර්ගය:'}
          </span>
          <div className="flex items-center gap-2">
            {(['Binchotan', 'Hickory', 'Applewood'] as const).map((wood) => (
              <button
                key={wood}
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setWoodType(wood);
                }}
                className={`px-3 py-1 rounded-full border text-xs transition-colors ${
                  woodType === wood
                    ? 'bg-amber-500 text-black font-bold border-amber-500'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                {wood}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
          <div>
            <div className="text-xs text-zinc-400">
              {lang === 'en' ? 'Custom Crafted Price' : 'මිල'}:
            </div>
            <div className="text-xl font-bold text-amber-400">
              ${selectedCut.price.toFixed(2)}
            </div>
          </div>

          <button
            onClick={handleOrderSearedItem}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-black font-bold text-sm tracking-wide shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:from-amber-400 hover:to-amber-600 transition-all flex items-center gap-2 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>{lang === 'en' ? 'Add Custom Sear to Order' : 'ඇණවුමට එක් කරන්න'}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
