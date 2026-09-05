import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Utensils, Bike } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: (orderType: 'delivery' | 'pickup' | 'dinein', discount: number) => void;
  lang: 'en' | 'si';
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  lang
}) => {
  if (!isOpen) return null;

  const [orderType, setOrderType] = useState<'delivery' | 'pickup' | 'dinein'>('delivery');
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? (subtotal > 50 ? 0 : 4.50) : 0;
  const tax = subtotal * 0.08;
  const discountAmount = subtotal * (appliedDiscount / 100);
  const finalTotal = Math.max(0, subtotal + tax + deliveryFee - discountAmount);

  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'SHANAKA-VIP' || code === 'SHANAKA') {
      soundManager.playChime();
      setAppliedDiscount(20);
      setPromoError('');
    } else if (code === 'ELITE15' || code === 'WELCOME' || code === 'GRILL10') {
      soundManager.playChime();
      setAppliedDiscount(15);
      setPromoError('');
    } else {
      setPromoError(lang === 'en' ? 'Invalid code. Try "SHANAKA-VIP" or "ELITE15"' : 'අවලංගු කේතයකි. "SHANAKA-VIP" හෝ "ELITE15" භාවිතා කරන්න.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121217] border-l border-zinc-800 flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  {lang === 'en' ? 'Your Gourmet Order' : 'ඔබගේ ඇණවුම'}
                </h3>
                <span className="text-xs text-zinc-400">
                  {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} {lang === 'en' ? 'items selected' : 'ආහාර තෝරා ඇත'}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Fulfillment Toggle */}
          <div className="p-4 bg-zinc-950/60 border-b border-zinc-800/80">
            <div className="grid grid-cols-3 gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`py-1.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                  orderType === 'delivery'
                    ? 'bg-amber-500 text-black font-semibold shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Bike className="w-3.5 h-3.5" />
                {lang === 'en' ? 'Delivery' : 'ඩිලිවරි'}
              </button>
              <button
                type="button"
                onClick={() => setOrderType('pickup')}
                className={`py-1.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                  orderType === 'pickup'
                    ? 'bg-amber-500 text-black font-semibold shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                {lang === 'en' ? 'Pickup' : 'පිකප්'}
              </button>
              <button
                type="button"
                onClick={() => setOrderType('dinein')}
                className={`py-1.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                  orderType === 'dinein'
                    ? 'bg-amber-500 text-black font-semibold shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Utensils className="w-3.5 h-3.5" />
                {lang === 'en' ? 'Dine-In' : 'මේසයට'}
              </button>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h4 className="font-display text-base font-bold text-zinc-300">
                  {lang === 'en' ? 'Your cart is empty' : 'ඔබගේ කූඩය හිස්ව ඇත'}
                </h4>
                <p className="text-xs text-zinc-500 max-w-xs">
                  {lang === 'en'
                    ? 'Explore our rosemary lamb skewers and prime cuts to build your feast.'
                    : 'අපගේ මෙනුවෙන් ඔබ කැමති ග්‍රිල් ආහාර එකතු කරන්න.'}
                </p>
              </div>
            ) : (
              cartItems.map((cartItem, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex gap-3 text-left relative group"
                >
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-1">
                      <h4 className="text-sm font-bold text-white truncate">
                        {cartItem.item.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Custom details */}
                    <div className="text-[11px] text-zinc-400 space-y-0.5 mt-0.5">
                      {cartItem.selectedDoneness && <span>• {cartItem.selectedDoneness} </span>}
                      {cartItem.selectedSpiciness && <span>• {cartItem.selectedSpiciness} </span>}
                      {cartItem.selectedSide && <span>• Side: {cartItem.selectedSide}</span>}
                    </div>

                    <div className="mt-2.5 flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400">
                        ${(cartItem.item.price * cartItem.quantity).toFixed(2)}
                      </span>

                      {/* Quantity adjustments */}
                      <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-lg px-2 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(idx, cartItem.quantity - 1)}
                          className="text-zinc-400 hover:text-white text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white min-w-[16px] text-center">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(idx, cartItem.quantity + 1)}
                          className="text-zinc-400 hover:text-white text-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-zinc-800 bg-[#0c0c0f] space-y-4">
              
              {/* Promo code input */}
              <div className="space-y-1.5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Promo (e.g. SHANAKA-VIP)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white uppercase placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={applyPromo}
                    className="px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 text-xs font-semibold"
                  >
                    {lang === 'en' ? 'Apply' : 'යොදන්න'}
                  </button>
                </div>
                {appliedDiscount > 0 && (
                  <p className="text-[11px] text-emerald-400 font-medium">
                    ✓ {appliedDiscount}% VIP discount applied!
                  </p>
                )}
                {promoError && (
                  <p className="text-[11px] text-red-400 font-medium">{promoError}</p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>VIP Discount (-15%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Tax & Packaging (8%)</span>
                  <span className="text-white">${tax.toFixed(2)}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Specialized Insulated Delivery</span>
                    <span className="text-white">
                      {deliveryFee === 0 ? (
                        <span className="text-emerald-400 font-bold">FREE (Over $50)</span>
                      ) : (
                        `$${deliveryFee.toFixed(2)}`
                      )}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-zinc-800">
                  <span>Estimated Total</span>
                  <span className="text-amber-400 text-base font-extrabold">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                id="checkout-cta-btn"
                onClick={() => onProceedToCheckout(orderType, appliedDiscount)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:from-amber-400 hover:to-amber-600 transition-all active:scale-98"
              >
                <span>{lang === 'en' ? 'Proceed to Checkout' : 'ඇණවුම් කරන්න'}</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
