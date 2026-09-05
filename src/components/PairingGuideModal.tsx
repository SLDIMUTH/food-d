import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Wine, Flame, Sparkles, Check, Plus, Award } from 'lucide-react';
import { MenuItem } from '../types';
import { soundManager } from '../utils/audio';

export interface PairingSuggestion {
  id: string;
  dishName: string;
  dishNameSi: string;
  beverageName: string;
  beverageType: 'wine' | 'cocktail' | 'craft';
  tastingNotes: string;
  tastingNotesSi: string;
  recommendedWood: string;
  sauceName: string;
  price: number;
  image: string;
}

const PAIRING_DATA: PairingSuggestion[] = [
  {
    id: 'pair-lamb',
    dishName: 'Rosemary Charred Lamb Skewers',
    dishNameSi: 'රෝස්මරී ලෑම්බ් ස්කුවර්ස්',
    beverageName: '2019 Oak Reserve Cabernet Sauvignon',
    beverageType: 'wine',
    tastingNotes: 'Blackberry, cedar spice, and velvety tannins balance the lamb fat and rosemary smoke.',
    tastingNotesSi: 'බෙරි සහ කුළුබඩු මිශ්‍රිත උසස් වයින් වර්ගයක් මස් රසය සමග මනාව ගැලපේ.',
    recommendedWood: 'French Oak & Rosemary Embers',
    sauceName: 'Artisan Mint Chimichurri Dip',
    price: 14.50,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pair-wagyu',
    dishName: '45-Day Dry-Aged Wagyu Ribeye',
    dishNameSi: 'වගියු රිබ් අයි ස්ටීක්',
    beverageName: 'Château Grand Reserve Bordeaux',
    beverageType: 'wine',
    tastingNotes: 'Deep cassis, tobacco leaf, and structured minerality cut through intense Wagyu marbling.',
    tastingNotesSi: 'ප්‍රංශයේ උසස්ම රතු වයින් සමග ස්ටීක් මස්වල නියම රසය විඳගන්න.',
    recommendedWood: 'White Oak Binchotan Charcoal',
    sauceName: 'Black Truffle Bone-Marrow Butter',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pair-prawns',
    dishName: 'Smoked Garlic Jumbo Tiger Prawns',
    dishNameSi: 'ලොකු කොස්තා ඉස්සන් ග්‍රිල්',
    beverageName: 'Estate Marlborough Sauvignon Blanc',
    beverageType: 'wine',
    tastingNotes: 'Crisp passionfruit, lemongrass, and vibrant citrus brighten the flame-charred shellfish.',
    tastingNotesSi: 'නැවුම් දෙහි සහ පැෂන් රසයෙන් පිරි සුදු වයින් ඉස්සන් සමග අතිවිශිෂ්ටයි.',
    recommendedWood: 'Applewood Sweet Smoke',
    sauceName: 'Citrus Saffron Garlic Emulsion',
    price: 13.00,
    image: 'https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pair-ribs',
    dishName: 'Oak-Smoked Prime Beef Short Ribs',
    dishNameSi: 'බීෆ් ෂෝට් රිබ්ස්',
    beverageName: 'Smoked Cherrywood Bourbon Sour',
    beverageType: 'cocktail',
    tastingNotes: 'Hand-flamed angostura, charred cherry oak syrup, and high-proof Kentucky bourbon.',
    tastingNotesSi: 'දුම් දැමූ චෙරි සහ බර්බන් කොක්ටේල් එක රිබ්ස් සමග උපරිම රසයක් ගෙනදෙයි.',
    recommendedWood: 'Texas Post Oak & Pecan',
    sauceName: 'Bourbon Spiced Plum Barbecue Glaze',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80'
  }
];

interface PairingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPairingToCart: (item: MenuItem) => void;
  lang: 'en' | 'si';
}

export const PairingGuideModal: React.FC<PairingGuideModalProps> = ({
  isOpen,
  onClose,
  onAddPairingToCart,
  lang
}) => {
  if (!isOpen) return null;

  const handleAddPairing = (pairing: PairingSuggestion) => {
    soundManager.playChime();
    const menuItem: MenuItem = {
      id: `pair-${pairing.id}`,
      name: `${pairing.beverageName} & ${pairing.sauceName}`,
      sinhalaName: `${pairing.dishNameSi} රස ගැලපීම`,
      category: 'drinks',
      price: pairing.price,
      description: `Sommelier selected pairing: ${pairing.tastingNotes}`,
      image: pairing.image,
      rating: 4.9,
      reviewCount: 38,
      prepTime: '5 min',
      tags: ['Sommelier Choice', 'Wine & Sauce Pairing'],
      isChefSpecial: true
    };
    onAddPairingToCart(menuItem);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#111116] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-zinc-800/80 bg-gradient-to-r from-amber-950/40 via-zinc-900 to-[#111116] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Wine className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl font-bold text-white">
                    {lang === 'en' ? "Sommelier & Flavor Pairing Guide" : "වයින් සහ රස ගැලපුම් මඟපෙන්වීම"}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-amber-500/30">
                    VIP Plugin
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {lang === 'en'
                    ? "Hand-selected vintage wines, artisan sauces, and wood smoke profiles tailored for each dish."
                    : "ප්‍රධාන කෑම වේල් සඳහා නිර්දේශිත උසස් වයින්, සෝස් සහ දුම් රසයන්."}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body: Pairings Grid */}
          <div className="p-6 overflow-y-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PAIRING_DATA.map((pairing) => (
                <div
                  key={pairing.id}
                  className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="flex gap-4">
                    <img
                      src={pairing.image}
                      alt={pairing.beverageName}
                      className="w-20 h-24 rounded-xl object-cover border border-zinc-800 shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-500" />
                        {pairing.dishName}
                      </span>
                      <h4 className="font-display text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        {pairing.beverageName}
                      </h4>
                      <p className="text-[11px] text-zinc-400 leading-relaxed">
                        {lang === 'en' ? pairing.tastingNotes : pairing.tastingNotesSi}
                      </p>
                    </div>
                  </div>

                  {/* Sommelier Pairing Spec */}
                  <div className="pt-2 border-t border-zinc-800/80 grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded-xl bg-black/40 border border-zinc-800/60">
                      <span className="block text-[10px] text-zinc-500 font-medium">Wood Embers</span>
                      <span className="text-zinc-200 font-semibold">{pairing.recommendedWood}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-zinc-800/60">
                      <span className="block text-[10px] text-zinc-500 font-medium">Glaze / Dip</span>
                      <span className="text-amber-400 font-semibold">{pairing.sauceName}</span>
                    </div>
                  </div>

                  {/* Add to order button */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-xs text-zinc-500 block">Pairing Set Price</span>
                      <span className="text-sm font-bold text-amber-400">${pairing.price.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => handleAddPairing(pairing)}
                      className="px-4 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-black font-semibold text-xs border border-amber-500/30 hover:border-amber-400 transition-all flex items-center gap-1.5 active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? "Add Pairing to Order" : "කූඩයට එක්කරන්න"}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* VIP Coupon Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/50 via-zinc-900 to-black border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-black flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Exclusive Sommelier & VIP Member Promo
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Use code <span className="text-amber-400 font-mono font-bold">SHANAKA-VIP</span> at checkout for 20% off your entire order!
                  </p>
                </div>
              </div>
              <span className="px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/40">
                20% OFF: SHANAKA-VIP
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
