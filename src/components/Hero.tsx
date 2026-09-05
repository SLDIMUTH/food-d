import React from 'react';
import { Calendar, UtensilsCrossed, Star, Flame, ShieldCheck, Smartphone, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
  onOpenSimulator: () => void;
  onOpenPairing?: () => void;
  lang: 'en' | 'si';
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu, onOpenSimulator, onOpenPairing, lang }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-orange-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-7 text-left"
          >
            {/* Top Micro-badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>
                {lang === 'en' 
                  ? 'Authentic Charcoal & Wood-Fired Kitchen' 
                  : 'නියම ලී අඟුරු ග්‍රිල් අත්දැකීම'}
              </span>
            </div>

            {/* Headline matching mockup */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                {lang === 'en' ? (
                  <>
                    Artisanal Fire & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                      Smokehouse Feasts.
                    </span>
                  </>
                ) : (
                  <>
                    නියම ගිනි සහ <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                      විශිෂ්ට ග්‍රිල් අත්දැකීම.
                    </span>
                  </>
                )}
              </h1>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                {lang === 'en'
                  ? 'Savor the fiery craftsmanship of master pitmasters. From our signature 24-hour herb-infused lamb skewers to 45-day dry-aged steaks seared over open hardwood embers.'
                  : 'විශේෂඥ සූපවේදීන්ගේ අත්දැකීම් සමගින් නැවුම් මස් වර්ග, ස්වාභාවික කුළුබඩු හා ලී අඟුරු දැල්ලෙන් පිළියෙළ කෙරෙන රසවත්ම ග්‍රිල් ආහාර රසවිඳින්න.'}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-book-btn"
                onClick={() => {
                  soundManager.playClick();
                  onOpenReservation();
                }}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-black font-bold text-sm tracking-wide shadow-xl shadow-amber-600/30 hover:shadow-amber-500/50 hover:from-amber-400 hover:to-amber-600 transition-all flex items-center gap-2.5 active:scale-95 group"
              >
                <Calendar className="w-4 h-4 text-black group-hover:rotate-6 transition-transform" />
                <span>{lang === 'en' ? 'Book a Table' : 'මේසයක් වෙන්කරන්න'}</span>
                <ArrowRight className="w-4 h-4 text-black/70 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-explore-menu-btn"
                onClick={() => {
                  soundManager.playClick();
                  onExploreMenu();
                }}
                className="px-7 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-sm border border-zinc-700/80 hover:border-amber-500/50 transition-all flex items-center gap-2 active:scale-95"
              >
                <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                <span>{lang === 'en' ? 'Explore Menu' : 'මෙනුව බලන්න'}</span>
              </button>

              {/* Live Pitmaster Simulator Trigger */}
              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenSimulator();
                }}
                className="px-4 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-semibold text-xs border border-amber-500/30 transition-all flex items-center gap-1.5 active:scale-95"
                title="Open Interactive Grill Master Simulator"
              >
                <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>{lang === 'en' ? 'Test Grill Sear' : 'ග්‍රිල් අත්දැකීම'}</span>
              </button>

              {/* Sommelier Pairing Guide Plugin Trigger */}
              {onOpenPairing && (
                <button
                  onClick={() => {
                    soundManager.playClick();
                    onOpenPairing();
                  }}
                  className="px-4 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 font-semibold text-xs border border-zinc-700/70 hover:border-amber-500/40 transition-all flex items-center gap-1.5 active:scale-95"
                  title="Wine & Wood-Smoke Flavor Pairing Guide"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'en' ? 'Flavor Pairing' : 'රස ගැලපීම්'}</span>
                </button>
              )}
            </div>

            {/* Quick Metrics / Social Proof */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="flex items-center gap-1 text-amber-400 font-bold text-xl sm:text-2xl">
                  4.9 <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-xs text-zinc-400 font-medium mt-0.5">
                  {lang === 'en' ? '2,800+ 5-Star Reviews' : '2,800+ තරු 5 ඇගයීම්'}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">800°F</div>
                <div className="text-xs text-zinc-400 font-medium mt-0.5">
                  {lang === 'en' ? 'Live Fire Sear' : 'උණුසුම් ග්‍රිල් දැල්ල'}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-zinc-400 font-medium mt-0.5">
                  {lang === 'en' ? 'Prime Fresh Cuts' : 'නැවුම් මස් පමණි'}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Signature Skewers Board Display (Matching Image Mockup) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Glow Backing */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/30 via-orange-600/20 to-transparent rounded-3xl blur-2xl opacity-70" />

            <div
              onMouseEnter={() => soundManager.playSizzle(0.7)}
              className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#121216] shadow-2xl p-3 sm:p-4 group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85"
                  alt="Gourmet Grilled Skewers on Rustic Wooden Board"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating Badge: Fiverr Choice / Signature Selection */}
                <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/40 flex items-center gap-2 shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                  <span className="text-xs font-bold tracking-wider text-amber-300 uppercase">
                    Chef's Daily Board
                  </span>
                </div>

                {/* Floating Bottom Card: Rosemary Lamb & Angus Skewers */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0e0e12]/90 backdrop-blur-md rounded-xl p-3.5 border border-zinc-700/70 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">Signature Skewers Platter</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-black">HOT</span>
                    </div>
                    <p className="text-xs text-zinc-400">Marinated in wild rosemary, garlic & smoked paprika</p>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-400 font-bold text-base">$24.50</div>
                    <span className="text-[11px] text-zinc-400">Hover for Sizzle</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#17171d] border border-amber-500/30 rounded-xl p-3 shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                <Flame className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs text-zinc-400 font-medium">Binchotan Coals</div>
                <div className="text-sm font-bold text-white">Pure Oak Smoke</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Badges matching the poster in the user's prompt:
            - Bespoke Design
            - Mobile Perfect
            - Fast & Secure
            - Booking & Ordering
        */}
        <div className="mt-16 pt-8 border-t border-zinc-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3.5 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  {lang === 'en' ? 'Bespoke Design' : 'සුවිශේෂී මෝස්තරය'}
                </h4>
                <p className="text-xs text-zinc-400">
                  {lang === 'en' ? 'Tailored gourmet experience' : 'අලංකාර සුවිශේෂී අත්දැකීම'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3.5 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  {lang === 'en' ? 'Mobile Perfect' : 'ජංගම දුරකථනයට සුදුසු'}
                </h4>
                <p className="text-xs text-zinc-400">
                  {lang === 'en' ? 'Seamless on all devices' : 'සියලු තිරවල පහසු භාවිතය'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3.5 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  {lang === 'en' ? 'Fast & Secure' : 'වේගවත් සහ සුරක්ෂිත'}
                </h4>
                <p className="text-xs text-zinc-400">
                  {lang === 'en' ? 'Instant checkout & safety' : 'ක්ෂණිකව ඇණවුම් කිරීම'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3.5 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  {lang === 'en' ? 'Booking & Ordering' : 'වෙන්කිරීම් සහ ඇණවුම්'}
                </h4>
                <p className="text-xs text-zinc-400">
                  {lang === 'en' ? 'Tables & takeout online' : 'මේස හා ආහාර වෙන්කරන්න'}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
