import React, { useState } from 'react';
import { Flame, Calendar, ShoppingBag, Menu, X, Phone, Clock, MapPin, Sparkles, Globe, Volume2, VolumeX, FlameKindling } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
  lang: 'en' | 'si';
  onToggleLang: () => void;
  isSoundOn: boolean;
  onToggleSound: () => void;
  onOpenSimulator: () => void;
  onReplayPreloader: () => void;
  onOpenPairing?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
  lang,
  onToggleLang,
  isSoundOn,
  onToggleSound,
  onOpenSimulator,
  onReplayPreloader,
  onOpenPairing
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: lang === 'en' ? 'Home' : 'මුල් පිටුව', href: '#home' },
    { name: lang === 'en' ? 'About Us' : 'අප ගැන', href: '#about' },
    { name: lang === 'en' ? 'Specialties' : 'විශේෂ ආහාර', href: '#menu' },
    { name: lang === 'en' ? 'Grill Craft' : 'ග්‍රිල් තාක්ෂණය', href: '#craft' },
    { name: lang === 'en' ? 'Reviews' : 'ප්‍රතිචාර', href: '#reviews' },
    { name: lang === 'en' ? 'Contact' : 'විස්තර', href: '#contact' },
  ];

  return (
    <>
      {/* Top Utility Bar - Clean, High Quality, Zero Overflow */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0c]/95 backdrop-blur-md border-b border-zinc-800/80">
        <div className="hidden lg:flex items-center justify-between px-6 py-1.5 text-xs text-zinc-400 border-b border-zinc-900 bg-black/60 overflow-hidden">
          <div className="flex items-center gap-3 shrink-0">
            <span className="flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
              <span>{lang === 'en' ? 'Open Hearth Kitchen' : 'සජීවී ග්‍රිල් පෝරණුව'}</span>
            </span>
            <span className="text-zinc-700">•</span>
            <span className="flex items-center gap-1.5 text-zinc-400 text-xs">
              <Clock className="w-3.5 h-3.5 text-amber-500/80" />
              <span>12:00 PM – 11:30 PM Daily</span>
            </span>
            <span className="text-zinc-700 hidden xl:inline">•</span>
            <span className="hidden xl:flex items-center gap-1.5 text-zinc-400 text-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-500/80" />
              <span>42 Grand Hearth Ave, Culinary District</span>
            </span>
          </div>

          <div className="flex items-center gap-3.5 shrink-0">
            {/* Sommelier & Pairing Guide Quick Link */}
            {onOpenPairing && (
              <>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    onOpenPairing();
                  }}
                  className="flex items-center gap-1.5 text-zinc-300 hover:text-amber-400 transition-colors text-[11px] font-semibold"
                  title="Wine & Wood-Smoke Pairing Sommelier"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'en' ? 'Pairing Guide' : 'රස ගැලපීම්'}</span>
                </button>
                <span className="text-zinc-700">•</span>
              </>
            )}

            {/* Replay Preloader Button */}
            <button
              onClick={onReplayPreloader}
              className="flex items-center gap-1 text-zinc-400 hover:text-amber-400 transition-colors text-[11px]"
              title="Replay intro flame ignition"
            >
              <FlameKindling className="w-3.5 h-3.5 text-amber-500" />
              <span>{lang === 'en' ? 'Intro' : 'හැඳින්වීම'}</span>
            </button>
            <span className="text-zinc-700">•</span>

            {/* Audio Toggle */}
            <button
              onClick={onToggleSound}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 transition-colors text-[11px]"
              title={isSoundOn ? 'Mute Kitchen Sizzle FX' : 'Enable Kitchen Sizzle Audio FX'}
            >
              {isSoundOn ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-300 font-semibold">Sound: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
                  <span className="text-zinc-500">Sound: OFF</span>
                </>
              )}
            </button>
            <span className="text-zinc-700">•</span>

            <a href="tel:+18005554745" className="flex items-center gap-1 hover:text-amber-400 transition-colors text-[11px]">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>+1 (800) 555-GRILL</span>
            </a>
            <span className="text-zinc-700">•</span>

            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 hover:text-amber-400 border border-zinc-700/60 text-[11px] transition"
              title="Change Language"
            >
              <Globe className="w-3 h-3 text-amber-400" />
              <span>{lang === 'en' ? 'English (EN)' : 'සිංහල (SI)'}</span>
            </button>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all">
              <div className="w-full h-full bg-[#0d0d10] rounded-[10px] flex items-center justify-center">
                <Flame className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-amber-400 transition-colors">
                The Elite Grill
              </span>
              <span className="text-[10px] tracking-[0.24em] text-amber-400/90 font-semibold uppercase">
                Wood-Fired Smokehouse
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Interactive Grill Simulator Trigger Button */}
            <button
              onClick={() => {
                soundManager.playClick();
                onOpenSimulator();
              }}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-amber-400 hover:text-amber-300 font-semibold text-xs border border-amber-500/30 hover:border-amber-500/60 shadow-md transition-all active:scale-95"
              title="Interactive Pitmaster Grill Searing Simulator"
            >
              <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>{lang === 'en' ? 'Live Grill Sim' : 'ග්‍රිල් අත්දැකීම'}</span>
            </button>

            {/* Audio Toggle (Mobile / Tablet) */}
            <button
              onClick={onToggleSound}
              className="lg:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400"
              title="Toggle Sizzle Sound"
            >
              {isSoundOn ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-zinc-500" />}
            </button>

            {/* Mobile Lang Button */}
            <button
              onClick={onToggleLang}
              className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400 text-xs font-semibold"
            >
              {lang === 'en' ? 'SI' : 'EN'}
            </button>

            {/* Cart Button */}
            <button
              id="cart-trigger-btn"
              onClick={() => {
                soundManager.playClick();
                onOpenCart();
              }}
              className="relative p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 hover:text-amber-400 hover:border-amber-500/40 transition-all group"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-amber-500 text-black font-bold text-xs flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book a Table Button */}
            <button
              id="nav-book-table-btn"
              onClick={() => {
                soundManager.playClick();
                onOpenReservation();
              }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-black font-semibold text-sm tracking-wide shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:from-amber-400 hover:to-amber-600 transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>{lang === 'en' ? 'Book a Table' : 'මේසයක් වෙන්කරන්න'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0c0c0e] border-b border-zinc-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-zinc-200 hover:text-amber-400 py-1 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
              {onOpenPairing && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPairing();
                  }}
                  className="w-full py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 font-semibold text-xs flex items-center justify-center gap-2 hover:border-amber-500/40"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'en' ? 'Sommelier & Pairing Guide' : 'වයින් සහ රස ගැලපුම් මාර්ගෝපදේශය'}</span>
                </button>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSimulator();
                }}
                className="w-full py-2.5 rounded-xl bg-zinc-900 border border-amber-500/40 text-amber-400 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4" />
                <span>{lang === 'en' ? 'Open Live Grill Simulator' : 'සජීවී ග්‍රිල් අත්දැකීම විවෘත කරන්න'}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                {lang === 'en' ? 'Book a Table' : 'මේසයක් වෙන්කරන්න'}
              </button>
              <div className="text-xs text-zinc-400 flex items-center justify-center gap-2 pt-2">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                12:00 PM – 11:30 PM Daily
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

