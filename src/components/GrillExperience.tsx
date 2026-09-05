import React, { useState } from 'react';
import { Flame, Sparkles, Thermometer, TreePine, Droplets } from 'lucide-react';

interface GrillExperienceProps {
  lang: 'en' | 'si';
}

export const GrillExperience: React.FC<GrillExperienceProps> = ({ lang }) => {
  const [selectedWood, setSelectedWood] = useState<'binchotan' | 'hickory' | 'cherry' | 'mesquite'>('binchotan');

  const woodData = {
    binchotan: {
      name: 'Japanese White Binchotan',
      temp: '850°F (Ultra Sear)',
      smokeLevel: 'Smokeless High Radiant Heat',
      bestWith: 'Rosemary Lamb Skewers & Wagyu Cuts',
      description: 'Hand-crafted from Kishu oak, burns with zero flame flare-ups to preserve delicate natural intramuscular fat.'
    },
    hickory: {
      name: 'American Wild Hickory',
      temp: '650°F (Bold Smoke)',
      smokeLevel: 'Pungent & Bacon-like Smoke',
      bestWith: 'Smoked Beef Brisket & Ribs',
      description: 'The king of classic pit smoking, imparting an unmistakably rich, deep mahogany crust.'
    },
    cherry: {
      name: 'Sweet Orchard Cherrywood',
      temp: '550°F (Aromatic Roast)',
      smokeLevel: 'Subtle Sweet & Fruity',
      bestWith: 'Glazed Chicken Skewers & Atlantic Salmon',
      description: 'Produces a distinctive reddish-gold sheen and fragrant aroma that complements honey marinades.'
    },
    mesquite: {
      name: 'Southwestern Wild Mesquite',
      temp: '750°F (Earthy Heat)',
      smokeLevel: 'Intense Earthy Aromatics',
      bestWith: 'Tomahawk Steaks & Lamb Chops',
      description: 'High-energy timber beloved for high-heat open-flame searing with unmistakable campfire notes.'
    }
  };

  const currentWood = woodData[selectedWood];

  return (
    <section id="craft" className="py-24 bg-[#0a0a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'The Art of Fire & Smoke' : 'ගින්දර සහ දුමේ කලාව'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'en' ? 'Interactive Pitmaster Guide' : 'ග්‍රිල් තාක්ෂණික රහස්'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Select our signature charcoal and timber fuels to learn how each imparts its distinctive sear and aroma.'
              : 'අප භාවිත කරන ලී වර්ග සහ ග්‍රිල් උෂ්ණත්වයන් මෙතැනින් පරීක්ෂා කරන්න.'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Wood Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {(Object.keys(woodData) as Array<keyof typeof woodData>).map((key) => {
              const item = woodData[key];
              const isSelected = selectedWood === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedWood(key)}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500 shadow-lg shadow-amber-500/10'
                      : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 text-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-amber-500 text-black font-bold' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      <TreePine className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                        {item.name}
                      </h4>
                      <span className="text-xs text-amber-400 font-mono">{item.temp}</span>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-black uppercase">
                      Active
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Details Card */}
          <div className="lg:col-span-7 bg-[#121217] border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-4">
                <div>
                  <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Fuel Profile</span>
                  <h3 className="font-display text-2xl font-bold text-white mt-0.5">
                    {currentWood.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold font-mono">
                  <Thermometer className="w-4 h-4" />
                  <span>{currentWood.temp}</span>
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed">
                {currentWood.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-bold uppercase mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Smoke & Heat Ratio</span>
                  </div>
                  <p className="text-xs text-white font-medium">{currentWood.smokeLevel}</p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-bold uppercase mb-1">
                    <Droplets className="w-4 h-4" />
                    <span>Recommended Pairings</span>
                  </div>
                  <p className="text-xs text-white font-medium">{currentWood.bestWith}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <span>Used exclusively across our charcoal hearths</span>
              <span className="text-amber-400 font-semibold">100% All-Natural Sustained Timber</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
