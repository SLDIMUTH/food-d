import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, CheckCircle, ShieldCheck, CreditCard, DollarSign, Flame, Clock, MapPin, ArrowRight } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { triggerFlameBurstConfetti } from '../utils/confetti';
import { motion } from 'motion/react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  orderType: 'delivery' | 'pickup' | 'dinein';
  discountPercent: number;
  onOrderCompleted: () => void;
  lang: 'en' | 'si';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  orderType,
  discountPercent,
  onOrderCompleted,
  lang
}) => {
  if (!isOpen) return null;

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash' | 'digital'>('card');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [tableNumber, setTableNumber] = useState('Table 4');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? (subtotal > 50 ? 0 : 4.50) : 0;
  const tax = subtotal * 0.08;
  const discountAmount = subtotal * (discountPercent / 100);
  const total = Math.max(0, subtotal + tax + deliveryFee - discountAmount);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClick();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setOrderId('EG-ORD-' + Math.floor(10000 + Math.random() * 90000));
      setOrderConfirmed(true);
      soundManager.playChime();
      triggerFlameBurstConfetti();
    }, 1000);
  };

  const handleFinish = () => {
    soundManager.playClick();
    onOrderCompleted();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-xl bg-[#121217] border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {orderConfirmed ? (
          <div className="p-8 sm:p-10 text-center space-y-6 overflow-y-auto">
            <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto border border-amber-500/40 animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold">
                <Flame className="w-3.5 h-3.5" />
                {lang === 'en' ? 'Kitchen Received Order' : 'ඇණවුම භාරගන්නා ලදී'}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {lang === 'en' ? 'Flames Are Burning!' : 'පිසීමේ කටයුතු ආරම්භ විය'}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto">
                {lang === 'en'
                  ? `Thank you ${customerName}! Your order ${orderId} has been sent to our master grillers. Estimated preparation & dispatch time: 20-25 mins.`
                  : `ස්තූතියි ${customerName}! ඔබගේ ඇණවුම අංක ${orderId} ග්‍රිල් සූපවේදීන් වෙත යොමු කරන ලදී.`}
              </p>
            </div>

            {/* Tracking Progress Mockup */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 text-left space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Order ID:</span>
                <span className="font-mono font-bold text-amber-400">{orderId}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Type:</span>
                <span className="font-semibold text-white uppercase">{orderType}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Paid Amount:</span>
                <span className="font-bold text-amber-400">${total.toFixed(2)}</span>
              </div>

              {/* Status Tracker */}
              <div className="pt-2 border-t border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
                  <Flame className="w-4 h-4 animate-pulse" />
                  <span>Searing over Binchotan Hardwood Charcoal</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="w-2/5 h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" />
                </div>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm shadow-lg shadow-amber-500/20"
            >
              {lang === 'en' ? 'Return to Menu' : 'මෙනුවට ආපසු යන්න'}
            </button>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="flex flex-col h-full text-left">
            <div className="p-6 border-b border-zinc-800 bg-zinc-900/40">
              <div className="flex items-center gap-1.5 text-xs text-amber-500 font-semibold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Fast & Secure Checkout</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                {lang === 'en' ? 'Complete Your Order' : 'ඇණවුම සම්පූර්ණ කරන්න'}
              </h3>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 flex-1 text-xs">
              {/* Contact Info */}
              <div className="space-y-3">
                <label className="font-bold text-zinc-300 uppercase tracking-wider block">
                  {lang === 'en' ? '1. Customer Details' : '1. පාරිභෝගික විස්තර'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Delivery Address or Dine-in Table */}
              <div className="space-y-2">
                <label className="font-bold text-zinc-300 uppercase tracking-wider block">
                  {orderType === 'delivery' 
                    ? (lang === 'en' ? '2. Delivery Destination' : '2. ලිපිනය') 
                    : orderType === 'dinein' 
                    ? (lang === 'en' ? '2. Table Information' : '2. මේස අංකය')
                    : (lang === 'en' ? '2. Pickup Location' : '2. ලබාගන්නා ස්ථානය')}
                </label>
                {orderType === 'delivery' ? (
                  <input
                    type="text"
                    required
                    placeholder="Street Address, Apt / Unit, City *"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                ) : orderType === 'dinein' ? (
                  <input
                    type="text"
                    required
                    placeholder="Table Number (e.g. Table 4 or Bar 2)"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                ) : (
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>The Elite Grill Kitchen • 42 Grand Hearth Ave (Ready in 15 mins)</span>
                  </div>
                )}
              </div>

              {/* Payment Method */}
              <div className="space-y-2">
                <label className="font-bold text-zinc-300 uppercase tracking-wider block">
                  {lang === 'en' ? '3. Payment Method' : '3. ගෙවීම් ක්‍රමය'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-amber-500/15 border-amber-500 text-white font-semibold'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-amber-400" />
                    <span>Credit / Debit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('digital')}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === 'digital'
                        ? 'bg-amber-500/15 border-amber-500 text-white font-semibold'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>Apple / Google Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cash')}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === 'cash'
                        ? 'bg-amber-500/15 border-amber-500 text-white font-semibold'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <DollarSign className="w-4 h-4 text-amber-400" />
                    <span>Cash on Arrival</span>
                  </button>
                </div>
              </div>

              {/* Order summary small banner */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex justify-between items-center text-xs">
                <span className="text-zinc-400">Total Payable:</span>
                <span className="text-base font-extrabold text-amber-400">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="p-5 border-t border-zinc-800 bg-[#0c0c0f] flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white text-xs font-medium"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isProcessing || !customerName || !phone}
                className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 disabled:opacity-50 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 active:scale-98 transition-all"
              >
                <span>
                  {isProcessing ? 'Authorizing & Searing...' : `Place Order • $${total.toFixed(2)}`}
                </span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </form>
        )}

      </motion.div>
    </div>
  );
};
