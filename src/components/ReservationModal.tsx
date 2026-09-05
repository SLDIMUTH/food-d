import React, { useState } from 'react';
import { TableReservation } from '../types';
import { TIME_SLOTS } from '../data/mockData';
import { X, Calendar, Clock, Users, Flame, CheckCircle, Sparkles, Phone, Mail, User, MapPin } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { triggerGoldSparksConfetti } from '../utils/confetti';
import { motion } from 'motion/react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'si';
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  // Form State
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[4] || '06:30 PM');
  const [guests, setGuests] = useState(2);
  const [seatingArea, setSeatingArea] = useState<'hearth' | 'patio' | 'chef_counter'>('hearth');
  const [occasion, setOccasion] = useState('Dinner with Friends');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  
  // Submission State
  const [confirmedReservation, setConfirmedReservation] = useState<TableReservation | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    soundManager.playClick();
    setIsSubmitting(true);
    setTimeout(() => {
      const newReservation: TableReservation = {
        id: 'EG-' + Math.floor(100000 + Math.random() * 900000),
        fullName,
        email,
        phone,
        guests,
        date,
        timeSlot,
        seatingArea,
        occasion,
        specialRequests,
        status: 'confirmed',
        createdAt: new Date().toISOString()
      };
      setConfirmedReservation(newReservation);
      setIsSubmitting(false);
      soundManager.playChime();
      triggerGoldSparksConfetti();
    }, 600);
  };

  const resetForm = () => {
    soundManager.playClick();
    setConfirmedReservation(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-2xl bg-[#121217] border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
          aria-label="Close reservation dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedReservation ? (
          /* Confirmation Receipt View */
          <div className="p-8 sm:p-10 text-center space-y-6 overflow-y-auto">
            <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto border border-amber-500/40">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                {lang === 'en' ? 'Reservation Confirmed' : 'මේසය වෙන්කිරීම සාර්ථකයි'}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {lang === 'en' ? 'We are Excited to Host You' : 'ඔබව සාදරයෙන් පිළිගනිමු'}
              </h3>
              <p className="text-zinc-400 text-sm max-w-md mx-auto">
                {lang === 'en'
                  ? `Your table at The Elite Grill is reserved under ${confirmedReservation.fullName}. A confirmation SMS has been prepared for ${confirmedReservation.phone}.`
                  : `${confirmedReservation.fullName} නමින් ඔබගේ මේසය වෙන්කරන ලදී.`}
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 max-w-md mx-auto text-left space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-zinc-800">
                <span className="text-xs text-zinc-400">Confirmation Code</span>
                <span className="text-sm font-mono font-bold text-amber-400">
                  {confirmedReservation.id}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-zinc-500 block">Date</span>
                  <span className="font-semibold text-white">{confirmedReservation.date}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Time</span>
                  <span className="font-semibold text-amber-400">{confirmedReservation.timeSlot}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Party Size</span>
                  <span className="font-semibold text-white">{confirmedReservation.guests} Guests</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Atmosphere</span>
                  <span className="font-semibold text-white capitalize">
                    {confirmedReservation.seatingArea.replace('_', ' ')}
                  </span>
                </div>
              </div>
              {confirmedReservation.occasion && (
                <div className="pt-2 border-t border-zinc-800 text-xs">
                  <span className="text-zinc-500 block">Occasion</span>
                  <span className="text-zinc-300">{confirmedReservation.occasion}</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm shadow-lg shadow-amber-500/25"
              >
                {lang === 'en' ? 'Done & Return to Menu' : 'අවසන් කරන්න'}
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="flex flex-col h-full overflow-hidden text-left">
            {/* Header */}
            <div className="p-6 sm:p-7 border-b border-zinc-800/80 bg-zinc-900/40">
              <div className="flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-1">
                <Flame className="w-4 h-4" />
                <span>The Elite Grill Reservation</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {lang === 'en' ? 'Book Your Table' : 'ඔබගේ මේසය වෙන්කරන්න'}
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                {lang === 'en'
                  ? 'Reserve your dining experience at our live wood-fire culinary hearth.'
                  : 'නියම ග්‍රිල් අත්දැකීම ලබාගැනීමට පහත පෝරමය පුරවන්න.'}
              </p>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-6 sm:p-7 overflow-y-auto space-y-6 flex-1">
              
              {/* Step 1: Party Size & Date & Time */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  {lang === 'en' ? 'Party Size' : 'පුද්ගලයින් ගණන'}
                </label>
                <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                        guests === num
                          ? 'bg-amber-500 text-black border-amber-500 shadow-md'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {lang === 'en' ? 'Reservation Date' : 'දිනය'}
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {lang === 'en' ? 'Time Slot' : 'වේලාව'}
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating Area Selection */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {lang === 'en' ? 'Seating Ambiance' : 'වාඩිවීමේ පරිසරය'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div
                    onClick={() => setSeatingArea('hearth')}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      seatingArea === 'hearth'
                        ? 'bg-amber-500/10 border-amber-500 text-white'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold text-xs text-amber-400">Main Hearth Hall</div>
                    <div className="text-[11px] text-zinc-400 mt-1">Cozy indoor fireplace, ambient acoustic jazz</div>
                  </div>

                  <div
                    onClick={() => setSeatingArea('patio')}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      seatingArea === 'patio'
                        ? 'bg-amber-500/10 border-amber-500 text-white'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold text-xs text-amber-400">Open-Flame Patio</div>
                    <div className="text-[11px] text-zinc-400 mt-1">Outdoor star terrace with heating lamps</div>
                  </div>

                  <div
                    onClick={() => setSeatingArea('chef_counter')}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      seatingArea === 'chef_counter'
                        ? 'bg-amber-500/10 border-amber-500 text-white'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold text-xs text-amber-400">VIP Chef's Counter</div>
                    <div className="text-[11px] text-zinc-400 mt-1">Front row viewing the live binchotan grill</div>
                  </div>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  {lang === 'en' ? 'Contact Information' : 'සම්බන්ධතා විස්තර'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder={lang === 'en' ? 'Full Name *' : 'සම්පූර්ණ නම *'}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder={lang === 'en' ? 'Phone Number *' : 'දුරකථන අංකය *'}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder={lang === 'en' ? 'Email Address (For Calendar Invite)' : 'විද්‍යුත් තැපෑල'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  {lang === 'en' ? 'Dining Occasion & Dietary Notes' : 'විශේෂ අවශ්‍යතා'}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'e.g. Birthday celebration, Quiet table, High chair needed...' : 'උපන්දින සාදයක්, සන්සුන් මේසයක්...'}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                />
              </div>

            </div>

            {/* Footer Buttons */}
            <div className="p-5 border-t border-zinc-800 bg-zinc-950/60 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={resetForm}
                className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 text-xs font-medium"
              >
                {lang === 'en' ? 'Cancel' : 'අවලංගු කරන්න'}
              </button>

              <button
                type="submit"
                disabled={isSubmitting || !fullName || !phone}
                className="flex-1 sm:flex-initial px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 disabled:opacity-50 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 active:scale-98 transition-all"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>
                  {isSubmitting
                    ? (lang === 'en' ? 'Confirming...' : 'වෙන්කරමින්...')
                    : (lang === 'en' ? 'Confirm Table Reservation' : 'වෙන්කිරීම තහවුරු කරන්න')}
                </span>
              </button>
            </div>
          </form>
        )}

      </motion.div>
    </div>
  );
};
