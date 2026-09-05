import React, { useState } from 'react';
import { MenuItem, CartItem } from './types';
import { MENU_ITEMS, REVIEWS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { DishModal } from './components/DishModal';
import { ReservationModal } from './components/ReservationModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AboutSection } from './components/AboutSection';
import { GrillExperience } from './components/GrillExperience';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { FlameParticles } from './components/FlameParticles';
import { GrillSimulatorModal } from './components/GrillSimulatorModal';
import { PairingGuideModal } from './components/PairingGuideModal';
import { soundManager } from './utils/audio';
import { Check, Flame, ShoppingBag } from 'lucide-react';

export default function App() {
  // Navigation, Language, and Audio state
  const [lang, setLang] = useState<'en' | 'si'>('en');
  const [showPreloader, setShowPreloader] = useState(true);
  const [isSoundOn, setIsSoundOn] = useState(() => soundManager.isEnabled());

  // Modals & Panels
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isPairingOpen, setIsPairingOpen] = useState(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      item: MENU_ITEMS[0], // Charcoal Rosemary Lamb Skewers pre-added as a delicious starter item
      quantity: 1,
      selectedDoneness: 'Medium',
      selectedSpiciness: 'Warm Smoked',
      selectedSide: 'Smoked Paprika Potato Wedges'
    }
  ]);
  const [checkoutOrderType, setCheckoutOrderType] = useState<'delivery' | 'pickup' | 'dinein'>('delivery');
  const [checkoutDiscount, setCheckoutDiscount] = useState(0);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleToggleSound = () => {
    const nextState = soundManager.toggleSound();
    setIsSoundOn(nextState);
    showToast(nextState ? 'Sound FX Enabled (Sizzle On)' : 'Sound Muted');
  };

  // Quick add to cart
  const handleQuickAdd = (item: MenuItem) => {
    soundManager.playChime();
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (ci) => ci.item.id === item.id && !ci.selectedDoneness && !ci.selectedSide
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += 1;
        return next;
      }
      return [
        ...prev,
        {
          item,
          quantity: 1,
          selectedDoneness: item.options?.doneness ? item.options.doneness[1] : undefined,
          selectedSpiciness: item.options?.spiciness ? item.options.spiciness[0] : undefined,
          selectedSide: item.options?.sides ? item.options.sides[0] : undefined
        }
      ];
    });
    showToast(lang === 'en' ? `Added "${item.name}" to order!` : `"${item.name}" ඇණවුමට එක් කරන ලදී!`);
  };

  // Customized add from modal
  const handleAddToCartWithCustomization = (
    item: MenuItem,
    quantity: number,
    doneness?: string,
    spiciness?: string,
    side?: string,
    notes?: string
  ) => {
    soundManager.playChime();
    setCartItems((prev) => [
      ...prev,
      {
        item,
        quantity,
        selectedDoneness: doneness,
        selectedSpiciness: spiciness,
        selectedSide: side,
        specialInstructions: notes
      }
    ]);
    showToast(lang === 'en' ? `Added ${quantity}x "${item.name}" to order!` : `"${item.name}" ඇණවුමට එක් කරන ලදී!`);
  };

  // Add customized cut from interactive simulator
  const handleAddSimulatorCut = (item: MenuItem, doneness: string, notes: string) => {
    soundManager.playChime();
    setCartItems((prev) => [
      ...prev,
      {
        item,
        quantity: 1,
        selectedDoneness: doneness,
        specialInstructions: notes
      }
    ]);
    showToast(lang === 'en' ? `Added Custom Seared "${item.name}"!` : `"${item.name}" ඇණවුමට එක් කරන ලදී!`);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    soundManager.playClick();
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems((prev) => {
      const next = [...prev];
      next[index].quantity = newQty;
      return next;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    soundManager.playClick();
    setCartItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleProceedToCheckout = (orderType: 'delivery' | 'pickup' | 'dinein', discount: number) => {
    soundManager.playClick();
    setCheckoutOrderType(orderType);
    setCheckoutDiscount(discount);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderCompleted = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#f4f4f5] font-sans antialiased selection:bg-amber-500 selection:text-black relative">
      {/* Interactive Floating Wood-Fired Embers Canvas */}
      <FlameParticles />

      {/* Intro Preloading Screen Animation */}
      {showPreloader && (
        <Preloader
          onComplete={() => setShowPreloader(false)}
          lang={lang}
        />
      )}

      {/* Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        lang={lang}
        onToggleLang={() => setLang(lang === 'en' ? 'si' : 'en')}
        isSoundOn={isSoundOn}
        onToggleSound={handleToggleSound}
        onOpenSimulator={() => setIsSimulatorOpen(true)}
        onReplayPreloader={() => setShowPreloader(true)}
        onOpenPairing={() => setIsPairingOpen(true)}
      />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero
          onOpenReservation={() => setIsReservationOpen(true)}
          onExploreMenu={scrollToMenu}
          onOpenSimulator={() => setIsSimulatorOpen(true)}
          onOpenPairing={() => setIsPairingOpen(true)}
          lang={lang}
        />

        {/* Menu Section */}
        <MenuSection
          menuItems={MENU_ITEMS}
          onSelectItem={(item) => setSelectedItemForModal(item)}
          onQuickAdd={handleQuickAdd}
          lang={lang}
        />

        {/* About & Heritage Section */}
        <AboutSection lang={lang} />

        {/* Interactive Pitmaster Grill Craft */}
        <GrillExperience lang={lang} />

        {/* Verified Reviews Section */}
        <ReviewsSection reviews={REVIEWS} lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={() => setIsReservationOpen(true)}
        lang={lang}
      />

      {/* Item Detail / Customization Modal */}
      <DishModal
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
        onAddToCart={handleAddToCartWithCustomization}
        lang={lang}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        lang={lang}
      />

      {/* Interactive Pitmaster Grill Simulator Modal */}
      <GrillSimulatorModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
        onAddCustomCutToCart={handleAddSimulatorCut}
        lang={lang}
      />

      {/* Sommelier & Wine / Flavor Pairing Guide Modal */}
      <PairingGuideModal
        isOpen={isPairingOpen}
        onClose={() => setIsPairingOpen(false)}
        onAddPairingToCart={handleQuickAdd}
        lang={lang}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={handleProceedToCheckout}
        lang={lang}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        orderType={checkoutOrderType}
        discountPercent={checkoutDiscount}
        onOrderCompleted={handleOrderCompleted}
        lang={lang}
      />

      {/* Floating Action Bar for Mobile View */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-30 flex items-center gap-2 bg-[#121217]/95 backdrop-blur-lg border border-zinc-800 p-2 rounded-2xl shadow-2xl">
        <button
          onClick={() => {
            soundManager.playClick();
            setIsReservationOpen(true);
          }}
          className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-xs flex items-center justify-center gap-1.5 shadow"
        >
          <Flame className="w-4 h-4" />
          <span>{lang === 'en' ? 'Book Table' : 'මේසයක් වෙන්කරන්න'}</span>
        </button>
        <button
          onClick={() => {
            soundManager.playClick();
            setIsSimulatorOpen(true);
          }}
          className="p-3 rounded-xl bg-zinc-900 text-amber-400 border border-amber-500/40"
          title="Grill Simulator"
        >
          <Flame className="w-4 h-4" />
        </button>
        <button
          onClick={() => {
            soundManager.playClick();
            setIsCartOpen(true);
          }}
          className="px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 font-bold text-xs flex items-center gap-1.5 border border-zinc-700"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>{totalCartCount}</span>
        </button>
      </div>

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-8 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-zinc-900/95 border border-amber-500/40 text-white text-xs font-semibold shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-4 duration-200">
          <div className="w-5 h-5 rounded-full bg-amber-500 text-black flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

