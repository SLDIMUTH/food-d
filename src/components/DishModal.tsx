import React, { useState } from 'react';
import { MenuItem } from '../types';
import { X, Flame, Star, Clock, Check, ShoppingBag } from 'lucide-react';

interface DishModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (
    item: MenuItem,
    quantity: number,
    doneness?: string,
    spiciness?: string,
    side?: string,
    notes?: string
  ) => void;
  lang: 'en' | 'si';
}

export const DishModal: React.FC<DishModalProps> = ({ item, onClose, onAddToCart, lang }) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedDoneness, setSelectedDoneness] = useState<string>(
    item.options?.doneness ? item.options.doneness[1] || item.options.doneness[0] : ''
  );
  const [selectedSpiciness, setSelectedSpiciness] = useState<string>(
    item.options?.spiciness ? item.options.spiciness[0] : ''
  );
  const [selectedSide, setSelectedSide] = useState<string>(
    item.options?.sides ? item.options.sides[0] : ''
  );
  const [specialNotes, setSpecialNotes] = useState('');

  const totalPrice = item.price * quantity;

  const handleAdd = () => {
    onAddToCart(
      item,
      quantity,
      selectedDoneness || undefined,
      selectedSpiciness || undefined,
      selectedSide || undefined,
      specialNotes.trim() || undefined
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121216] border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-60 sm:h-72 w-full bg-black shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-black/30 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                {item.isChefSpecial && (
                  <span className="px-2.5 py-0.5 rounded bg-amber-500 text-black text-xs font-bold uppercase">
                    Chef's Choice
                  </span>
                )}
                <span className="px-2 py-0.5 rounded bg-zinc-900/80 border border-zinc-700 text-xs text-zinc-300 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  {item.prepTime}
                </span>
                {item.calories && (
                  <span className="text-xs text-zinc-400">{item.calories} kcal</span>
                )}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {item.name}
              </h3>
              {lang === 'si' && item.sinhalaName && (
                <p className="text-sm text-amber-400">{item.sinhalaName}</p>
              )}
            </div>
            <div className="text-right">
              <span className="text-xs text-zinc-400 block">Unit Price</span>
              <span className="text-2xl font-extrabold text-amber-400">
                ${item.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Customization Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
          <p className="text-sm text-zinc-300 leading-relaxed">
            {item.description}
          </p>

          {/* Doneness Option */}
          {item.options?.doneness && (
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                {lang === 'en' ? 'Meat Doneness' : 'පිසීමේ මට්ටම'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {item.options.doneness.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDoneness(d)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border flex items-center justify-between transition-all ${
                      selectedDoneness === d
                        ? 'bg-amber-500/15 border-amber-500 text-amber-300 font-semibold'
                        : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span>{d}</span>
                    {selectedDoneness === d && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Spiciness Level */}
          {item.options?.spiciness && (
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                {lang === 'en' ? 'Spiciness & Glaze Flavor' : 'කුළුබඩු රස මට්ටම'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {item.options.spiciness.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSpiciness(s)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border flex items-center justify-between transition-all ${
                      selectedSpiciness === s
                        ? 'bg-amber-500/15 border-amber-500 text-amber-300 font-semibold'
                        : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span>{s}</span>
                    {selectedSpiciness === s && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Complimentary Side */}
          {item.options?.sides && (
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                {lang === 'en' ? 'Select Complimentary Side' : 'අමතර සයිඩ් ඩිෂ් එකක්'}
              </label>
              <div className="space-y-2">
                {item.options.sides.map((side) => (
                  <button
                    key={side}
                    type="button"
                    onClick={() => setSelectedSide(side)}
                    className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-medium border flex items-center justify-between transition-all ${
                      selectedSide === side
                        ? 'bg-amber-500/15 border-amber-500 text-amber-300 font-semibold'
                        : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span>{side}</span>
                    {selectedSide === side && <Check className="w-4 h-4 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
              {lang === 'en' ? 'Special Chef Instructions (Optional)' : 'විශේෂ උපදෙස් (විකල්ප)'}
            </label>
            <input
              type="text"
              placeholder={lang === 'en' ? 'e.g., Dressing on the side, extra charred, allergy notes...' : 'උදා: ලූනු රහිතව, වැඩිපුර කුළුබඩු...'}
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-5 border-t border-zinc-800 bg-[#0e0e12] flex items-center justify-between gap-4 shrink-0">
          {/* Quantity Stepper */}
          <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-1.5">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-7 h-7 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center font-bold"
            >
              -
            </button>
            <span className="text-sm font-bold text-white w-6 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-7 h-7 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center font-bold"
            >
              +
            </button>
          </div>

          {/* Add to Order Button */}
          <button
            onClick={handleAdd}
            className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-600/30 hover:from-amber-400 hover:to-amber-600 transition-all active:scale-98"
          >
            <ShoppingBag className="w-4 h-4 text-black" />
            <span>
              {lang === 'en' ? 'Add to Order' : 'ඇණවුමට එකතු කරන්න'} • ${totalPrice.toFixed(2)}
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};
