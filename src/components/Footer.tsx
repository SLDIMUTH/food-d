import React, { useState } from 'react';
import { Flame, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
  lang: 'en' | 'si';
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, lang }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer id="contact" className="bg-[#08080a] border-t border-zinc-800 text-left pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-footer Call to Action */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-950/40 via-zinc-900 to-black border border-amber-500/30 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-2 relative z-10 max-w-xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-500" />
              {lang === 'en' ? 'Exclusive Flame Hearth Experience' : 'නියම ග්‍රිල් අත්දැකීම'}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {lang === 'en' ? 'Reserve Your Table For Tonight' : 'අද රාත්‍රිය සඳහා මේසයක් වෙන්කරන්න'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              {lang === 'en'
                ? 'Join us by the open binchotan fire. Experience live searing and handcrafted artisan skewers.'
                : 'පවුලේ සැමට හෝ මිතුරන්ට රසවත්ම රාත්‍රී ආහාර වේලක් රසවිඳීමට අප වෙත එන්න.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-black font-bold text-sm shadow-xl shadow-amber-500/25 hover:from-amber-400 hover:to-amber-600 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>{lang === 'en' ? 'Book a Table Now' : 'මේසය වෙන්කරන්න'}</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0e0e12] rounded-[10px] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-wider text-white">
                  The Elite Grill
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-amber-500 font-semibold uppercase">
                  Wood-Fired Smokehouse
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Artisanal open-flame cooking, certified prime dry-aged meats, and master-crafted skewers. Sourced sustainably and charred to perfection.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2.5 rounded-xl bg-zinc-900 text-zinc-400 hover:text-amber-400 border border-zinc-800 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-zinc-900 text-zinc-400 hover:text-amber-400 border border-zinc-800 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-zinc-900 text-zinc-400 hover:text-amber-400 border border-zinc-800 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Opening Hours</span>
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex justify-between py-1 border-b border-zinc-900">
                <span>Monday – Thursday</span>
                <span className="text-zinc-200">12:00 PM – 10:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-900">
                <span>Friday – Saturday</span>
                <span className="text-amber-400 font-medium">12:00 PM – 11:45 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-900">
                <span>Sunday (Roast Feast)</span>
                <span className="text-zinc-200">11:30 AM – 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Location</span>
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p className="text-zinc-300">42 Grand Hearth Ave</p>
              <p>Culinary Arts District</p>
              <p>New York, NY 10012</p>
              <div className="pt-1">
                <a href="tel:+18005554745" className="text-amber-400 hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3" /> +1 (800) 555-GRILL
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>VIP Secret Cut Club</span>
            </h4>
            <p className="text-xs text-zinc-400">
              Subscribe for private tasting invitations and 15% off your first reservation.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>You're subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 font-semibold text-xs border border-zinc-700 transition-colors"
                >
                  Join VIP Club
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p className="font-semibold text-zinc-200 tracking-wide">
            © SHANAKA DIMUTH. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#" className="hover:text-zinc-200">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-200">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-200">Culinary Certifications</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
