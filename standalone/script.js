/**
 * THE ELITE GRILL - STANDALONE COMPREHENSIVE JAVASCRIPT ENGINE
 * Full features: 12-item Menu with Customization Modal, Search & Sort,
 * Interactive Wood Smoke Guide, Sommelier Pairing Guide, Pitmaster Searing Simulator,
 * Table Reservation Modal, Complete Cart Drawer with Delivery/Pickup/Dine-in,
 * Multi-Step Checkout with Order ID, Confetti & Web Audio Synthesizer,
 * English/Sinhala Bilingual Toggle.
 *
 * Author / Copyright: © SHANAKA DIMUTH
 */

// ==========================================
// 1. COMPREHENSIVE MENU DATA (12 ITEMS)
// ==========================================
const MENU_ITEMS = [
  {
    id: 'skewer-01',
    name: 'Charcoal Rosemary Lamb Skewers',
    sinhalaName: 'රෝස්මරී රසැති බැටළු මස් කෙබාබ්',
    category: 'skewers',
    description: 'Tender pasture-raised lamb marinated for 24 hours in wild mountain rosemary, smoked garlic, and cold-pressed olive oil, flame-kissed over white binchotan coals.',
    sinhalaDesc: 'පැය 24ක් රෝස්මරී සහ සුදුළූණු මිශ්‍රණයේ පදම් කර සුදු බින්චෝටන් අඟුරු මත ග්‍රිල් කරන ලද රසවත් බැටළු මස්.',
    price: 24.50,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 382,
    isChefSpecial: true,
    isBestseller: true,
    spicyLevel: 1,
    prepTime: '15-18 mins',
    calories: 580,
    tags: ['Wood-Fired', 'Chef Special', 'Gluten Free'],
    options: {
      doneness: ['Medium Rare', 'Medium', 'Well Done'],
      spiciness: ['Mild Herb', 'Warm Smoked', 'Fiery Chili'],
      sides: ['Charred Sourdough with Garlic Butter', 'Smoked Paprika Potato Wedges', 'Crisp Herb Slaw']
    }
  },
  {
    id: 'skewer-02',
    name: 'Prime Black Angus Beef Skewers',
    sinhalaName: 'ප්‍රයිම් ඇන්ගස් බීෆ් ස්කූවර්ස්',
    category: 'skewers',
    description: 'Dry-aged 35-day USDA Prime Angus cubes threaded with sweet shallots, bell peppers, and glazed with aged balsamic bourbon glaze.',
    sinhalaDesc: 'දින 35ක් වියළි වයස්ගත කළ ප්‍රයිම් ඇන්ගස් බීෆ් කැබලි, බෙල් පෙපර් සහ බෝර්බන් ග්ලේස් සමග ග්‍රිල් කරන ලදි.',
    price: 26.00,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 512,
    isBestseller: true,
    spicyLevel: 1,
    prepTime: '14-16 mins',
    calories: 640,
    tags: ['Dry-Aged', 'Prime Cut', 'Customer Favorite'],
    options: {
      doneness: ['Rare', 'Medium Rare', 'Medium', 'Well Done'],
      spiciness: ['Original Peppercorn', 'Spiced Hickory', 'Chili Crunch'],
      sides: ['Truffle Fries', 'Charred Corn Ribs', 'Garden Caesar']
    }
  },
  {
    id: 'skewer-03',
    name: 'Smoked Honey-Chili Chicken Skewers',
    sinhalaName: 'මීපැණි සහ මිරිස් මිශ්‍ර කුකුළු මස් කෙබාබ්',
    category: 'skewers',
    description: 'Free-range chicken thighs basted in wild honey, smoked chipotle, and charred lime juice, served with roasted garlic tzatziki dip.',
    sinhalaDesc: 'ස්වාභාවික මීපැණි සහ චිපොට්ලේ මිරිස් මිශ්‍ර කර ග්‍රිල් කළ කුකුළු මස් සහ සුදුළූණු ඩිප්.',
    price: 19.50,
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 290,
    isBestseller: false,
    spicyLevel: 2,
    prepTime: '12-15 mins',
    calories: 520,
    tags: ['Farm Fresh', 'Signature Glaze'],
    options: {
      spiciness: ['Sweet & Mild', 'Smoky Medium', 'Ghost Pepper Kick'],
      sides: ['Basmati Herb Rice', 'Charred Sourdough with Garlic Butter', 'Crisp Herb Slaw']
    }
  },
  {
    id: 'steak-01',
    name: 'Tomahawk Ribeye 32oz Feast',
    sinhalaName: 'ටොමහෝක් රිබ්අයි ග්‍රිල්ඩ් ස්ටීක්',
    category: 'steaks',
    description: 'Magnificent bone-in tomahawk ribeye seared on cast iron over glowing mesquite timber, topped with marrow herb butter and smoked Maldon flake salt.',
    sinhalaDesc: 'මෙස්කයිට් ලී අඟුරු මත රන්වන් වනතුරු ග්‍රිල් කරන ලද විශිෂ්ට ටොමහෝක් රිබ්අයි ස්ටීක්.',
    price: 89.00,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    reviewCount: 184,
    isChefSpecial: true,
    spicyLevel: 0,
    prepTime: '25-30 mins',
    calories: 1450,
    tags: ['Signature Reserve', 'Shareable (2-3)'],
    options: {
      doneness: ['Rare', 'Medium Rare', 'Medium', 'Well Done'],
      sides: ['Charred Asparagus with Parmesan', 'Truffle Mashed Potatoes', 'Wild Forest Mushrooms']
    }
  },
  {
    id: 'steak-02',
    name: 'Hickory Smoked Wagyu Striploin',
    sinhalaName: 'වැගියු ස්ට්‍රිප්ලොයින් ස්ටීක්',
    category: 'steaks',
    description: 'A5 Miyazaki Wagyu striploin lightly smoked with cherrywood and flash-seared at 850°F for melt-in-your-mouth perfection.',
    sinhalaDesc: 'චෙරිවුඩ් දුමෙන් සුවඳවත් කර 850°F අධික උෂ්ණත්වයෙන් සීර් කළ අතිවිශිෂ්ට වැගියු ස්ට්‍රිප්ලොයින්.',
    price: 74.00,
    image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 220,
    isBestseller: true,
    spicyLevel: 0,
    prepTime: '20 mins',
    calories: 780,
    tags: ['A5 Wagyu', 'Ultra Premium'],
    options: {
      doneness: ['Rare', 'Medium Rare', 'Medium'],
      sides: ['Truffle Mashed Potatoes', 'Charred Asparagus with Parmesan']
    }
  },
  {
    id: 'platter-01',
    name: 'The Grand Pitmaster Grill Board',
    sinhalaName: 'ග්‍රෑන්ඩ් පිට්මාස්ටර් ග්‍රිල් බෝර්ඩ්',
    category: 'platters',
    description: 'A celebration of smoke and fire: Lamb skewers, beef skewers, 12-hour smoked beef brisket, charred artisanal sausages, smoked corn ribs, pickles, and 3 house sauces.',
    sinhalaDesc: 'බැටළු මස් කෙබාබ්, බීෆ් ස්කූවර්ස්, පැය 12ක් ස්මෝක් කළ බ්‍රිස්කට් සහ සෝස් වර්ග 3ක් සහිත සම්පූර්ණ සංග්‍රහය.',
    price: 68.00,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 640,
    isChefSpecial: true,
    isBestseller: true,
    spicyLevel: 2,
    prepTime: '20-25 mins',
    calories: 1850,
    tags: ['Family / Sharing', 'Ultimate Feast', 'Chef Special'],
    options: {
      sides: ['Charred Sourdough with Garlic Butter', 'Crisp Herb Slaw', 'Smoked Paprika Potato Wedges']
    }
  },
  {
    id: 'seafood-01',
    name: 'Jumbo Tiger Prawn Charcoal Skewers',
    sinhalaName: 'ටයිගර් ප්‍රෝන්ස් ග්‍රිල්ඩ් ස්කූවර්ස්',
    category: 'seafood',
    description: 'Wild-caught colossal tiger prawns shell-on with garlic herb infused ghee, crushed pink peppercorn, and charred Meyer lemon.',
    sinhalaDesc: 'සුදුළූණු සහ කුළුබඩු මිශ්‍ර ගිතෙල් ගල්වා අඟුරු මත පුළුස්සන ලද විශාල ටයිගර් ඉස්සන්.',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 215,
    spicyLevel: 1,
    prepTime: '12-14 mins',
    calories: 410,
    tags: ['Wild Caught', 'Seafood Master'],
    options: {
      spiciness: ['Lemon Herb', 'Spicy Garlic Peri-Peri'],
      sides: ['Charred Sourdough with Garlic Butter', 'Crisp Herb Slaw']
    }
  },
  {
    id: 'seafood-02',
    name: 'Flame-Seared Atlantic Salmon Fillet',
    sinhalaName: 'ග්‍රිල් කරන ලද සැමන් මත්ස්‍යයා',
    category: 'seafood',
    description: 'Cedar plank roasted salmon with Dijon maple crust, dill crema, and blistered cherry vine tomatoes.',
    sinhalaDesc: 'සීඩර් ලී පුවරුවක් මත ඩිජොන් මේපල් සෝස් ගල්වා රෝස් කරන ලද අත්ලාන්තික් සැමන් මත්ස්‍ය පෙත්ත.',
    price: 29.50,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewCount: 168,
    spicyLevel: 0,
    prepTime: '15-18 mins',
    calories: 590,
    tags: ['Omega-3 Rich', 'Cedar Planked'],
    options: {
      sides: ['Charred Asparagus with Parmesan', 'Basmati Herb Rice']
    }
  },
  {
    id: 'side-01',
    name: 'Charred Sweet Corn Ribs with Cotija',
    sinhalaName: 'ග්‍රිල්ඩ් ස්වීට් කෝන් රිබ්ස්',
    category: 'sides',
    description: 'Spiral-cut sweet yellow corn caramelized over hot coals, tossed with smoked paprika butter, lime crema, and crumbled cotija cheese.',
    sinhalaDesc: 'දුම් දැමූ පැප්රිකා බටර්, දෙහි ක්‍රීම් සහ චීස් මිශ්‍ර කර ග්‍රිල් කළ බඩඉරිඟු.',
    price: 9.50,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 420,
    isBestseller: true,
    spicyLevel: 1,
    prepTime: '8 mins',
    calories: 280,
    tags: ['Vegetarian', 'Must-Try Side']
  },
  {
    id: 'side-02',
    name: 'Black Truffle & Aged Cheddar Fries',
    sinhalaName: 'ට්‍රෆල් සහ චෙඩර් ෆ්‍රයිස්',
    category: 'sides',
    description: 'Hand-cut Idaho russet potatoes double-fried in beef tallow, infused with white truffle essence, 24-month cheddar snow, and fresh chives.',
    sinhalaDesc: 'ට්‍රෆල් සුවඳැති, වසර 2ක් පැරණි චෙඩර් චීස් සහිත අර්තාපල් ෆ්‍රයිස්.',
    price: 11.00,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 560,
    isBestseller: true,
    spicyLevel: 0,
    prepTime: '8 mins',
    calories: 460,
    tags: ['Gourmet Side', 'Signature']
  },
  {
    id: 'drink-01',
    name: 'Smoked Rosemary Old Fashioned',
    sinhalaName: 'ස්මෝක්ඩ් රෝස්මරී ඕල්ඩ් ෆැශන්ඩ්',
    category: 'drinks',
    description: 'Handcrafted bourbon rested with orange bitters, rich demerara syrup, torched rosemary sprig, served under a crystal smoke cloche.',
    sinhalaDesc: 'දුම් දැමූ රෝස්මරී, තැඹිලි බිටර්ස් සහ බෝර්බන් විස්කි මිශ්‍රිත ප්‍රමුඛ කොක්ටේල්.',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 310,
    isChefSpecial: true,
    spicyLevel: 0,
    prepTime: '5 mins',
    calories: 190,
    tags: ['Signature Cocktail', 'Craft Mixology']
  },
  {
    id: 'drink-02',
    name: 'Charred Peach & Basil Sparkler',
    sinhalaName: 'ග්‍රිල්ඩ් පීච් සහ බැසිල් ස්පාක්ලර් (නොන්-ඇල්කොහොලික්)',
    category: 'drinks',
    description: 'Flame-roasted Georgia peach puree, wild basil leaves, effervescent sparkling mineral water, cold honey drop (Zero alcohol).',
    sinhalaDesc: 'ගින්දරෙන් රෝස් කළ පීච් යුෂ, බැසිල් කොළ සහ මීපැණි මිශ්‍ර නැවුම් මොක්ටේල්.',
    price: 9.00,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewCount: 145,
    spicyLevel: 0,
    prepTime: '4 mins',
    calories: 120,
    tags: ['Mocktail', 'Refreshing']
  }
];

// ==========================================
// 2. WOOD CRAFT FUELS DATA
// ==========================================
const WOOD_DATA = {
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

// ==========================================
// 3. SOMMELIER PAIRINGS DATA
// ==========================================
const PAIRING_DATA = [
  {
    id: 'pair-lamb',
    dishName: 'Rosemary Charred Lamb Skewers',
    beverageName: '2019 Oak Reserve Cabernet Sauvignon',
    beverageType: 'wine',
    tastingNotes: 'Blackberry, cedar spice, and velvety tannins balance the lamb fat and rosemary smoke.',
    recommendedWood: 'French Oak & Rosemary Embers',
    sauceName: 'Artisan Mint Chimichurri Dip',
    price: 14.50,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pair-wagyu',
    dishName: '45-Day Dry-Aged Wagyu Ribeye',
    beverageName: 'Château Grand Reserve Bordeaux',
    beverageType: 'wine',
    tastingNotes: 'Deep cassis, tobacco leaf, and structured minerality cut through intense Wagyu marbling.',
    recommendedWood: 'White Oak Binchotan Charcoal',
    sauceName: 'Black Truffle Bone-Marrow Butter',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pair-prawns',
    dishName: 'Smoked Garlic Jumbo Tiger Prawns',
    beverageName: 'Estate Marlborough Sauvignon Blanc',
    beverageType: 'wine',
    tastingNotes: 'Crisp passionfruit, lemongrass, and vibrant citrus brighten the flame-charred shellfish.',
    recommendedWood: 'Applewood Sweet Smoke',
    sauceName: 'Citrus Saffron Garlic Emulsion',
    price: 13.00,
    image: 'https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pair-ribs',
    dishName: 'Oak-Smoked Prime Beef Short Ribs',
    beverageName: 'Smoked Cherrywood Bourbon Sour',
    beverageType: 'cocktail',
    tastingNotes: 'Hand-flamed angostura, charred cherry oak syrup, and high-proof Kentucky bourbon.',
    recommendedWood: 'Texas Post Oak & Pecan',
    sauceName: 'Bourbon Spiced Plum Barbecue Glaze',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80'
  }
];

// ==========================================
// 4. REVIEWS DATA
// ==========================================
const REVIEWS_DATA = [
  {
    id: 'rev-1',
    author: 'Chef Alexander Vance',
    role: 'Michelin Star Guest Critic',
    rating: 5,
    date: '2 days ago',
    comment: 'The Rosemary Lamb skewers are an absolute masterclass in open-flame cooking. The crusting, internal succulence, and balanced smoke profile place The Elite Grill on another echelon.',
    dishRecommended: 'Charcoal Rosemary Lamb Skewers',
    avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-2',
    author: 'Eleanor Sterling',
    role: 'Food & Wine Columnist',
    rating: 5,
    date: '1 week ago',
    comment: 'We booked the VIP Chef’s Counter for an anniversary dinner. Watching the masters tend the white binchotan coals while tasting the Grand Pitmaster board was unforgettable.',
    dishRecommended: 'The Grand Pitmaster Grill Board',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-3',
    author: 'Marcus Chen',
    role: 'Local Verified Patron',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The online booking was seamless, table was ready as soon as we arrived. Ordered the Tomahawk and the Truffle Fries. Perfection from start to finish.',
    dishRecommended: 'Tomahawk Ribeye 32oz Feast',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
];

// ==========================================
// 5. WEB AUDIO SYNTHESIZER
// ==========================================
let audioCtx = null;
let soundEnabled = true;

function initAudio() {
  if (!audioCtx && typeof window !== 'undefined') {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    } catch (e) {}
  }
}

function playChime() {
  if (!soundEnabled) return;
  initAudio();
  if (!audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.5);
  } catch (e) {}
}

function playSizzle() {
  if (!soundEnabled) return;
  initAudio();
  if (!audioCtx) return;
  try {
    const bufferSize = audioCtx.sampleRate * 0.8;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.18;
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2800, audioCtx.currentTime);
    filter.Q.setValueAtTime(1.5, audioCtx.currentTime);
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);
    noise.start();
  } catch (e) {}
}

function playClick() {
  if (!soundEnabled) return;
  initAudio();
  if (!audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  } catch (e) {}
}

document.getElementById('soundToggleBtn')?.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  const icon = document.getElementById('soundIcon');
  const text = document.getElementById('soundText');
  if (soundEnabled) {
    icon.setAttribute('data-lucide', 'volume-2');
    text.textContent = 'Sound: ON';
    text.className = 'text-amber-300 font-semibold';
    playClick();
  } else {
    icon.setAttribute('data-lucide', 'volume-x');
    text.textContent = 'Sound: MUTED';
    text.className = 'text-zinc-500 font-semibold';
  }
  lucide.createIcons();
});

// ==========================================
// 6. BILINGUAL TRANSLATION (EN / SI)
// ==========================================
let currentLang = 'en';

const TRANSLATIONS = {
  en: {
    liveHearth: 'Open Hearth Kitchen Live',
    pairingGuide: 'Sommelier Pairings',
    navHome: 'Home',
    navCraft: 'Craft of Fire',
    navAbout: 'Our Heritage',
    navMenu: 'Master Menu',
    navReviews: 'Reviews',
    navSim: 'Grill Simulator',
    navBook: 'Book a Table',
    heroBadge: 'Michelin-Recognized Wood Smoke Masterclass',
    heroHeading: 'Artisanal Fire & <br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">Smokehouse Feasts.</span>',
    heroSubtitle: 'Experience hand-carved Wagyu ribeyes, rosemary-skewered lamb, and wild prawns seared to perfection over French oak and white Binchotan embers.',
    heroExplore: 'Explore Master Menu',
    heroReserve: 'Reserve Table',
    heroSim: 'Test Grill Sear',
    heroPairing: 'Sommelier Guide',
    craftBadge: 'The Art of Fire & Smoke',
    craftHeading: 'Interactive Pitmaster Guide',
    craftSubtitle: 'Select our signature charcoal and timber fuels to learn how each imparts its distinctive sear and aroma.',
    aboutBadge: 'Our Heritage & Philosophy',
    aboutHeading: 'Born From The Passion For <br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Pure Fire & Handcrafted Cuts</span>',
    aboutDesc: 'At The Elite Grill, we reject shortcuts. Every morning, our pits are stoked with natural oak, cherrywood, and Japanese white binchotan charcoal. We procure exclusively pasture-raised livestock, allowing each cut to age patiently in our temperature-controlled Himalayan rock salt vaults.',
    aboutP1Title: 'Master Pitmaster Techniques',
    aboutP1Desc: 'Decades of combined culinary expertise dedicated solely to wood-fired meat artistry.',
    aboutP2Title: 'Ethical & Pasture-Raised Sourcing',
    aboutP2Desc: 'Directly partnered with local family-owned ranches with 100% grass-fed assurance.',
    aboutP3Title: 'Authentic Hearthside Hospitality',
    aboutP3Desc: 'Uncompromising table service, pairing masterclasses, and customized cuts cooked to your exact request.',
    menuBadge: 'Charcoal & Oak Masterpieces',
    menuHeading: 'Our Fire-Crafted Menu',
    menuSubtitle: 'Every cut is seasoned with hand-ground wild spices and seared over natural fruitwood charcoals.',
    reviewsBadge: 'Verified Culinary Reviews',
    reviewsHeading: 'What Food Lovers Say',
    reviewsSubtitle: 'From world-renowned culinary columnists to our cherished neighborhood regulars.'
  },
  si: {
    liveHearth: 'සජීවී ග්‍රිල් මුළුතැන්ගෙය විවෘතයි',
    pairingGuide: 'රස ගැලපුම් මාර්ගෝපදේශය',
    navHome: 'මුල් පිටුව',
    navCraft: 'ගින්දරේ කලාව',
    navAbout: 'අපේ උරුමය',
    navMenu: 'ප්‍රධාන මෙනුව',
    navReviews: 'පාරිභෝගික අදහස්',
    navSim: 'ග්‍රිල් අත්හදා බලන්න',
    navBook: 'මේසයක් වෙන්කරන්න',
    heroBadge: 'මිචලින් පිළිගත් ග්‍රිල් සූපවේදී අත්දැකීම',
    heroHeading: 'ස්වාභාවික ලී අඟුරු දැල්ලෙන් <br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">පදම් වූ රසවත් මස් මංගල්‍යය.</span>',
    heroSubtitle: 'ජපන් බින්චෝටන් අඟුරු සහ ඕක් දැල්ලෙන් පරිපූර්ණව ග්‍රිල් කරන ලද රසවත් වැගියු, රෝස්මරී බැටළු මස් සහ මුහුදු ඉස්සන් රස විඳින්න.',
    heroExplore: 'මෙනුව බලන්න',
    heroReserve: 'මේසයක් වෙන්කරන්න',
    heroSim: 'ග්‍රිල් එක අත්හදා බලන්න',
    heroPairing: 'වයින් සහ සෝස් ගැලපුම',
    craftBadge: 'ගින්දර සහ දුමේ කලාව',
    craftHeading: 'ග්‍රිල් තාක්ෂණික රහස්',
    craftSubtitle: 'අප භාවිත කරන ස්වාභාවික ලී අඟුරු වර්ග සහ උෂ්ණත්වයන් මෙතැනින් පරීක්ෂා කරන්න.',
    aboutBadge: 'අපගේ අත්දැකීම සහ සම්ප්‍රදාය',
    aboutHeading: 'ගින්දර සහ විශිෂ්ට සූපවේදී කලාවේ <br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">නියම එකමුතුව</span>',
    aboutDesc: 'ද එලීට් ග්‍රිල් හිදී අප සෑම ආහාරයක්ම සකසන්නේ ස්වාභාවික ඕක් සහ ලී අඟුරු දැල්ල මතයි. ඉහළම ගුණාත්මක තත්ත්වයේ මස් වර්ග සහ නැවුම් කුළුබඩු මිශ්‍රණයන් සමගින් ඔබ වෙත පිදෙන විශිෂ්ටතම ආහාර වේලක්.',
    aboutP1Title: 'විශේෂඥ සූපවේදී තාක්ෂණය',
    aboutP1Desc: 'ග්‍රිල් සූපවේදය පිළිබඳ වසර ගණනාවක පරිණත පළපුරුද්ද.',
    aboutP2Title: 'උසස් ප්‍රමිතියේ ස්වාභාවික මස්',
    aboutP2Desc: 'දේශීය ගොවිපළවල් වෙතින් සෘජුවම ලබාගන්නා 100% නැවුම් අමුද්‍රව්‍ය.',
    aboutP3Title: 'ප්‍රමුඛ ආගන්තුක සත්කාරය',
    aboutP3Desc: 'ඔබේ කැමැත්ත පරිදිම පිසින ලද රසවත් ආහාර සහ උසස් සේවාව.',
    menuBadge: 'ලී අඟුරු දැල්ලෙන් පිසින ලද ආහාර',
    menuHeading: 'අපගේ විශේෂිත මෙනුව',
    menuSubtitle: 'නැවුම් කුළුබඩු සහ ස්වාභාවික ලී අඟුරු මත පදම් වූ විශිෂ්ටතම ආහාර පෙළගැස්ම.',
    reviewsBadge: 'පාරිභෝගික සහ විචාරක අදහස්',
    reviewsHeading: 'ආහාර ලෝලීන්ගේ අදහස්',
    reviewsSubtitle: 'අපගේ සේවාව සහ ආහාරවල රසය අත්විඳි සම්භාව්‍ය පාරිභෝගිකයින්ගේ සත්‍ය අදහස්.'
  }
};

function toggleLanguage() {
  playClick();
  currentLang = currentLang === 'en' ? 'si' : 'en';
  applyTranslations();
  renderMenu();
  renderWoodExperience();
}

function applyTranslations() {
  const t = TRANSLATIONS[currentLang];
  const langText = document.getElementById('langText');
  if (langText) langText.textContent = currentLang === 'en' ? 'සිංහල / English' : 'English / සිංහල';

  const setT = (id, text, isHtml = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (isHtml) el.innerHTML = text;
    else el.textContent = text;
  };

  setT('topBarLiveHearth', t.liveHearth);
  setT('topPairingText', t.pairingGuide);
  setT('navLinkHome', t.navHome);
  setT('navLinkCraft', t.navCraft);
  setT('navLinkAbout', t.navAbout);
  setT('navLinkMenu', t.navMenu);
  setT('navLinkReviews', t.navReviews);
  setT('navSimText', t.navSim);
  setT('navBookText', t.navBook);

  setT('heroBadge', t.heroBadge);
  setT('heroHeading', t.heroHeading, true);
  setT('heroSubtitle', t.heroSubtitle);
  setT('heroReserveText', t.heroReserve);
  setT('heroSimText', t.heroSim);
  setT('heroPairingText', t.heroPairing);

  setT('craftBadge', t.craftBadge);
  setT('craftHeading', t.craftHeading);
  setT('craftSubtitle', t.craftSubtitle);

  setT('aboutBadge', t.aboutBadge);
  setT('aboutHeading', t.aboutHeading, true);
  setT('aboutDesc', t.aboutDesc);
  setT('aboutPillar1Title', t.aboutP1Title);
  setT('aboutPillar1Desc', t.aboutP1Desc);
  setT('aboutPillar2Title', t.aboutP2Title);
  setT('aboutPillar2Desc', t.aboutP2Desc);
  setT('aboutPillar3Title', t.aboutP3Title);
  setT('aboutPillar3Desc', t.aboutP3Desc);

  setT('menuBadge', t.menuBadge);
  setT('menuHeading', t.menuHeading);
  setT('menuSubtitle', t.menuSubtitle);

  setT('reviewsBadge', t.reviewsBadge);
  setT('reviewsHeading', t.reviewsHeading);
  setT('reviewsSubtitle', t.reviewsSubtitle);
}

document.getElementById('langToggleBtn')?.addEventListener('click', toggleLanguage);

// ==========================================
// 7. EMBER CANVAS PARTICLES
// ==========================================
const canvas = document.getElementById('emberCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.2 + 0.8,
      alpha: Math.random() * 0.75 + 0.25,
      speedY: Math.random() * 0.9 + 0.3,
      speedX: (Math.random() - 0.5) * 0.6,
      hue: Math.random() > 0.5 ? 38 : 26
    });
  }

  function renderEmbers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y -= p.speedY;
      p.x += p.speedX;
      if (p.y < -10) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 100%, 55%, ${p.alpha})`;
      ctx.shadowBlur = 12;
      ctx.shadowColor = `hsl(${p.hue}, 100%, 50%)`;
      ctx.fill();
    });
    requestAnimationFrame(renderEmbers);
  }
  renderEmbers();
}

// ==========================================
// 8. PRELOADER ENGINE
// ==========================================
const preloader = document.getElementById('preloader');
const preloaderBar = document.getElementById('preloaderBar');
const preloaderPercent = document.getElementById('preloaderPercent');
let preProgress = 0;

const preloaderInterval = setInterval(() => {
  preProgress += 5;
  if (preloaderBar) preloaderBar.style.width = preProgress + '%';
  if (preloaderPercent) preloaderPercent.textContent = preProgress + '%';
  if (preProgress >= 100) {
    clearInterval(preloaderInterval);
    dismissPreloader();
  }
}, 40);

function dismissPreloader() {
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 700);
  }
}
document.getElementById('skipPreloaderBtn')?.addEventListener('click', dismissPreloader);

// ==========================================
// 9. WOOD CRAFT & FIRE EXPERIENCE
// ==========================================
let activeWoodKey = 'binchotan';

function renderWoodExperience() {
  const container = document.getElementById('woodButtonsContainer');
  if (!container) return;

  container.innerHTML = Object.keys(WOOD_DATA).map(key => {
    const item = WOOD_DATA[key];
    const isSelected = key === activeWoodKey;
    return `
      <button onclick="selectWoodKey('${key}')" class="p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
        isSelected
          ? 'bg-amber-500/15 border-amber-500 shadow-lg shadow-amber-500/10 text-white'
          : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 text-zinc-400'
      }">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center ${
            isSelected ? 'bg-amber-500 text-black font-bold' : 'bg-zinc-800 text-zinc-400'
          }">
            <i data-lucide="flame" class="w-5 h-5"></i>
          </div>
          <div>
            <h4 class="text-sm font-bold ${isSelected ? 'text-white' : 'text-zinc-300'}">${item.name}</h4>
            <span class="text-xs text-amber-400 font-mono">${item.temp}</span>
          </div>
        </div>
        ${isSelected ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-black uppercase">Active</span>' : ''}
      </button>
    `;
  }).join('');

  const current = WOOD_DATA[activeWoodKey];
  document.getElementById('woodFuelName').textContent = current.name;
  document.getElementById('woodFuelTemp').textContent = current.temp;
  document.getElementById('woodFuelDesc').textContent = current.description;
  document.getElementById('woodFuelSmoke').textContent = current.smokeLevel;
  document.getElementById('woodFuelPairing').textContent = current.bestWith;

  lucide.createIcons();
}

function selectWoodKey(key) {
  playClick();
  activeWoodKey = key;
  renderWoodExperience();
}
renderWoodExperience();

// ==========================================
// 10. MENU SEARCH, FILTER & SORT RENDERING
// ==========================================
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'featured';

function renderMenu() {
  const menuGrid = document.getElementById('menuGrid');
  if (!menuGrid) return;

  let list = [...MENU_ITEMS];

  // Category filter
  if (currentCategory !== 'all') {
    list = list.filter(item => item.category === currentCategory);
  }

  // Search filter
  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase().trim();
    list = list.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.sinhalaName.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  // Sort
  if (currentSort === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  if (list.length === 0) {
    menuGrid.innerHTML = `
      <div class="col-span-full py-16 text-center text-zinc-500 space-y-3">
        <i data-lucide="flame" class="w-12 h-12 text-zinc-700 mx-auto"></i>
        <p class="text-sm">No smokehouse cuts matched your filter. Try another keyword or category.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  menuGrid.innerHTML = list.map(item => {
    const title = currentLang === 'si' ? item.sinhalaName : item.name;
    const desc = currentLang === 'si' ? item.sinhalaDesc : item.description;

    return `
      <div class="rounded-3xl border border-zinc-800 bg-[#121217] overflow-hidden hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-xl">
        <div class="relative h-56 overflow-hidden">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-transparent"></div>
          
          <div class="absolute top-4 left-4 flex gap-1.5">
            ${item.isChefSpecial ? '<span class="px-2.5 py-0.5 rounded-full bg-amber-500 text-black font-extrabold text-[10px] uppercase tracking-wider">Chef Special</span>' : ''}
            ${item.isBestseller ? '<span class="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/40 text-amber-300 font-bold text-[10px] uppercase tracking-wider">Popular</span>' : ''}
          </div>

          <div class="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-zinc-800 text-xs font-bold text-amber-400 flex items-center gap-1 font-mono">
            <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400"></i>
            <span>${item.rating}</span>
          </div>

          <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-zinc-400">
            <span class="flex items-center gap-1">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-400"></i>
              <span>${item.prepTime}</span>
            </span>
            <span class="flex items-center gap-1">
              <i data-lucide="flame" class="w-3.5 h-3.5 text-amber-400"></i>
              <span>${item.calories} kcal</span>
            </span>
          </div>
        </div>

        <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-2 mb-1.5">
              <h3 class="font-display text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                ${title}
              </h3>
              <span class="text-amber-400 font-bold font-display text-lg shrink-0">$${item.price.toFixed(2)}</span>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed line-clamp-2">${desc}</p>
          </div>

          <div class="pt-4 border-t border-zinc-800 flex items-center justify-between gap-2">
            <div class="flex gap-1.5 flex-wrap">
              ${item.tags.map(t => `<span class="px-2 py-0.5 rounded bg-zinc-800/80 text-[10px] text-zinc-400 font-medium">${t}</span>`).join('')}
            </div>

            <div class="flex items-center gap-2">
              <button onclick="openDishDetailModal('${item.id}')" class="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition border border-zinc-700">
                Options
              </button>
              <button onclick="addToCartQuick('${item.id}')" class="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition flex items-center gap-1 active:scale-95 shadow-md shadow-amber-500/20">
                <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    playClick();
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.getAttribute('data-category') || 'all';
    renderMenu();
  });
});

document.getElementById('menuSearchInput')?.addEventListener('input', (e) => {
  currentSearch = e.target.value;
  renderMenu();
});

document.getElementById('menuSortSelect')?.addEventListener('change', (e) => {
  currentSort = e.target.value;
  renderMenu();
});

renderMenu();

// ==========================================
// 11. ITEM CUSTOMIZATION DETAIL MODAL
// ==========================================
let activeModalItem = null;
let modalQuantity = 1;
let selectedDoneness = '';
let selectedSpiciness = '';
let selectedSide = '';

function openDishDetailModal(itemId) {
  playClick();
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  activeModalItem = item;
  modalQuantity = 1;

  document.getElementById('dishModalImg').src = item.image;
  document.getElementById('dishModalTitle').textContent = currentLang === 'si' ? item.sinhalaName : item.name;
  document.getElementById('dishModalPrice').textContent = `$${item.price.toFixed(2)}`;
  document.getElementById('dishModalDesc').textContent = currentLang === 'si' ? item.sinhalaDesc : item.description;

  // Badges
  const badgesContainer = document.getElementById('dishModalBadges');
  badgesContainer.innerHTML = `
    ${item.isChefSpecial ? '<span class="px-2.5 py-0.5 rounded bg-amber-500 text-black text-xs font-bold uppercase">Chef Special</span>' : ''}
    <span class="px-2 py-0.5 rounded bg-zinc-900/80 border border-zinc-700 text-xs text-zinc-300 font-mono">${item.prepTime}</span>
    <span class="px-2 py-0.5 rounded bg-zinc-900/80 border border-zinc-700 text-xs text-zinc-300 font-mono">${item.calories} kcal</span>
  `;

  // Doneness
  const donenessSection = document.getElementById('dishModalDonenessSection');
  const donenessBtns = document.getElementById('dishModalDonenessBtns');
  if (item.options?.doneness && item.options.doneness.length > 0) {
    donenessSection.style.display = 'block';
    selectedDoneness = item.options.doneness[1] || item.options.doneness[0];
    donenessBtns.innerHTML = item.options.doneness.map(d => `
      <button type="button" onclick="selectDishDoneness('${d}', this)" class="doneness-btn py-2 px-3 rounded-xl border text-xs font-semibold ${d === selectedDoneness ? 'active border-amber-500 bg-amber-500/20 text-white' : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700'}">${d}</button>
    `).join('');
  } else {
    donenessSection.style.display = 'none';
    selectedDoneness = '';
  }

  // Spiciness
  const spicinessSection = document.getElementById('dishModalSpicinessSection');
  const spicinessBtns = document.getElementById('dishModalSpicinessBtns');
  if (item.options?.spiciness && item.options.spiciness.length > 0) {
    spicinessSection.style.display = 'block';
    selectedSpiciness = item.options.spiciness[0];
    spicinessBtns.innerHTML = item.options.spiciness.map(s => `
      <button type="button" onclick="selectDishSpiciness('${s}', this)" class="spiciness-btn py-2 px-3 rounded-xl border text-xs font-semibold ${s === selectedSpiciness ? 'active border-amber-500 bg-amber-500/20 text-white' : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700'}">${s}</button>
    `).join('');
  } else {
    spicinessSection.style.display = 'none';
    selectedSpiciness = '';
  }

  // Sides
  const sidesSection = document.getElementById('dishModalSidesSection');
  const sidesSelect = document.getElementById('dishModalSidesSelect');
  if (item.options?.sides && item.options.sides.length > 0) {
    sidesSection.style.display = 'block';
    sidesSelect.innerHTML = item.options.sides.map(s => `<option value="${s}">${s}</option>`).join('');
    selectedSide = item.options.sides[0];
    sidesSelect.onchange = (e) => { selectedSide = e.target.value; };
  } else {
    sidesSection.style.display = 'none';
    selectedSide = '';
  }

  document.getElementById('dishModalNotes').value = '';
  updateDishModalPricing();
  openModal('dishModal');
}

function selectDishDoneness(d, btn) {
  playClick();
  selectedDoneness = d;
  document.querySelectorAll('.doneness-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectDishSpiciness(s, btn) {
  playClick();
  selectedSpiciness = s;
  document.querySelectorAll('.spiciness-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function changeDishModalQty(delta) {
  playClick();
  modalQuantity = Math.max(1, modalQuantity + delta);
  updateDishModalPricing();
}

function updateDishModalPricing() {
  document.getElementById('dishModalQty').textContent = modalQuantity;
  if (!activeModalItem) return;
  const total = activeModalItem.price * modalQuantity;
  document.getElementById('dishModalTotalPrice').textContent = `$${total.toFixed(2)}`;
}

function confirmDishModalAdd() {
  if (!activeModalItem) return;
  playChime();
  const notes = document.getElementById('dishModalNotes')?.value?.trim();

  const customSpecs = [];
  if (selectedDoneness) customSpecs.push(selectedDoneness);
  if (selectedSpiciness) customSpecs.push(selectedSpiciness);
  if (selectedSide) customSpecs.push(selectedSide);
  if (notes) customSpecs.push(notes);

  cart.push({
    id: activeModalItem.id + '-' + Date.now(),
    baseId: activeModalItem.id,
    name: activeModalItem.name,
    price: activeModalItem.price,
    image: activeModalItem.image,
    qty: modalQuantity,
    specs: customSpecs.join(' • ')
  });

  closeModal('dishModal');
  updateCartUI();
  toggleCartDrawer(true);
}

// ==========================================
// 12. SOMMELIER PAIRINGS
// ==========================================
function renderPairingsModal() {
  const container = document.getElementById('pairingCardsList');
  if (!container) return;

  container.innerHTML = PAIRING_DATA.map(p => `
    <div class="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 transition flex flex-col sm:flex-row items-center gap-4">
      <img src="${p.image}" alt="${p.beverageName}" class="w-full sm:w-28 h-28 object-cover rounded-xl border border-zinc-800 shrink-0" />
      <div class="flex-1 space-y-1.5 text-left w-full">
        <div class="flex items-center justify-between">
          <span class="text-[10px] text-amber-400 uppercase font-bold tracking-wider">${p.dishName}</span>
          <span class="text-amber-400 font-bold font-display text-base">$${p.price.toFixed(2)}</span>
        </div>
        <h4 class="font-display text-sm font-bold text-white">${p.beverageName}</h4>
        <p class="text-xs text-zinc-300 leading-relaxed">${p.tastingNotes}</p>
        <div class="flex items-center gap-3 pt-1 text-[10px] text-zinc-400">
          <span>Wood: <strong class="text-amber-300">${p.recommendedWood}</strong></span>
          <span>•</span>
          <span>Sauce: <strong class="text-white">${p.sauceName}</strong></span>
        </div>
      </div>
      <button onclick="addPairingToCart('${p.id}')" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition flex items-center justify-center gap-1 shrink-0">
        <i data-lucide="plus" class="w-3.5 h-3.5"></i>
        <span>Add Pair</span>
      </button>
    </div>
  `).join('');

  lucide.createIcons();
}
renderPairingsModal();

function addPairingToCart(pairingId) {
  playChime();
  const pair = PAIRING_DATA.find(p => p.id === pairingId);
  if (!pair) return;

  cart.push({
    id: 'pair-' + Date.now(),
    name: `${pair.beverageName} & ${pair.sauceName}`,
    price: pair.price,
    qty: 1,
    specs: `Sommelier Pairing for ${pair.dishName}`
  });

  closeModal('pairingModal');
  updateCartUI();
  toggleCartDrawer(true);
}

document.getElementById('topPairingBtn')?.addEventListener('click', () => openModal('pairingModal'));
document.getElementById('heroPairingBtn')?.addEventListener('click', () => openModal('pairingModal'));

// ==========================================
// 13. REVIEWS GRID RENDERING
// ==========================================
function renderReviews() {
  const container = document.getElementById('reviewsGrid');
  if (!container) return;

  container.innerHTML = REVIEWS_DATA.map(rev => `
    <div class="bg-[#121217] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-all text-left shadow-lg">
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1 text-amber-400">
            ${'<i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>'.repeat(rev.rating)}
          </div>
          <span class="text-[11px] text-zinc-400">${rev.date}</span>
        </div>
        <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">"${rev.comment}"</p>
      </div>

      <div class="pt-4 border-t border-zinc-800/80 space-y-2">
        <div class="flex items-center gap-3">
          <img src="${rev.avatar}" alt="${rev.author}" class="w-10 h-10 rounded-full object-cover border border-amber-500/30" />
          <div>
            <h4 class="text-sm font-bold text-white flex items-center gap-1">
              <span>${rev.author}</span>
              <i data-lucide="check-circle" class="w-3 h-3 text-emerald-400"></i>
            </h4>
            <span class="text-[11px] text-zinc-400">${rev.role}</span>
          </div>
        </div>
        <div class="bg-zinc-900/60 rounded-lg p-2 text-[11px] text-zinc-400 flex items-center gap-1.5">
          <span class="text-amber-500 font-semibold">Recommended:</span>
          <span class="text-zinc-200 truncate">${rev.dishRecommended}</span>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}
renderReviews();

// ==========================================
// 14. COMPLETE CART & PRICING ENGINE
// ==========================================
let cart = [];
let orderMode = 'delivery';
let discountPercent = 0;

function setOrderMode(mode) {
  playClick();
  orderMode = mode;
  document.querySelectorAll('.order-mode-btn').forEach(btn => {
    btn.className = 'order-mode-btn flex-1 py-1.5 rounded-xl text-xs font-semibold bg-zinc-900 text-zinc-400 hover:text-white';
  });

  const activeBtn = document.getElementById(`orderMode${mode.charAt(0).toUpperCase() + mode.slice(1)}`);
  if (activeBtn) {
    activeBtn.className = 'order-mode-btn flex-1 py-1.5 rounded-xl text-xs font-semibold bg-amber-500 text-black';
  }

  const addrField = document.getElementById('checkoutAddressField');
  if (addrField) {
    if (mode === 'dinein') {
      addrField.innerHTML = `
        <label class="block text-xs font-semibold text-zinc-300 mb-1">Hearth Table Number</label>
        <input type="text" id="custTable" value="Table 4 (Hearthside)" class="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-amber-500" />
      `;
    } else if (mode === 'pickup') {
      addrField.innerHTML = `
        <label class="block text-xs font-semibold text-zinc-300 mb-1">Pickup Counter</label>
        <div class="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
          Pick up directly at <strong>42 Grand Hearth Ave Smokehouse Counter</strong> in 20 minutes.
        </div>
      `;
    } else {
      addrField.innerHTML = `
        <label class="block text-xs font-semibold text-zinc-300 mb-1">Delivery Address</label>
        <input type="text" id="custAddress" required placeholder="Street Address, Apt, City" class="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-amber-500" />
      `;
    }
  }

  updateCartTotals();
}

function toggleCartDrawer(open = true) {
  playClick();
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (open) {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
  } else {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
  }
}
document.getElementById('cartBtn')?.addEventListener('click', () => toggleCartDrawer(true));

function addToCartQuick(itemId) {
  playChime();
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const existing = cart.find(i => i.baseId === itemId && !i.specs);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: itemId + '-' + Date.now(),
      baseId: itemId,
      name: item.name,
      price: item.price,
      image: item.image,
      qty: 1,
      specs: ''
    });
  }

  updateCartUI();
  toggleCartDrawer(true);
}

function updateCartQty(id, delta) {
  playClick();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) badge.textContent = totalCount;

  const list = document.getElementById('cartItemsList');
  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `
      <div class="h-64 flex flex-col items-center justify-center text-center text-zinc-500 space-y-3">
        <i data-lucide="shopping-bag" class="w-12 h-12 text-zinc-700"></i>
        <p class="text-sm">Your smokehouse order is currently empty.</p>
      </div>
    `;
    lucide.createIcons();
    updateCartTotals();
    return;
  }

  list.innerHTML = cart.map(item => `
    <div class="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-3 text-left">
      <div class="flex-1 min-w-0">
        <h4 class="text-xs font-bold text-white font-display truncate">${item.name}</h4>
        ${item.specs ? `<p class="text-[10px] text-amber-300 truncate mt-0.5">${item.specs}</p>` : ''}
        <span class="text-xs text-amber-400 font-mono font-bold block mt-1">$${(item.price * item.qty).toFixed(2)}</span>
      </div>
      <div class="flex items-center gap-2 bg-black/60 px-2.5 py-1 rounded-xl border border-zinc-800 shrink-0">
        <button onclick="updateCartQty('${item.id}', -1)" class="text-zinc-400 hover:text-white text-xs font-bold px-1">-</button>
        <span class="text-xs font-bold font-mono text-white">${item.qty}</span>
        <button onclick="updateCartQty('${item.id}', 1)" class="text-zinc-400 hover:text-white text-xs font-bold px-1">+</button>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
  updateCartTotals();
}

function updateCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = orderMode === 'delivery' ? (subtotal > 50 ? 0 : 4.50) : 0;
  const discountVal = subtotal * (discountPercent / 100);
  const total = Math.max(0, subtotal + deliveryFee - discountVal);

  document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;

  const delRow = document.getElementById('deliveryRow');
  if (delRow) {
    if (orderMode === 'delivery') {
      delRow.style.display = 'flex';
      document.getElementById('cartDelivery').textContent = deliveryFee === 0 ? 'FREE ($50+)' : `$${deliveryFee.toFixed(2)}`;
    } else {
      delRow.style.display = 'none';
    }
  }

  const discountRow = document.getElementById('discountRow');
  if (discountPercent > 0 && discountRow) {
    discountRow.style.display = 'flex';
    document.getElementById('discountPercent').textContent = discountPercent;
    document.getElementById('cartDiscount').textContent = `-$${discountVal.toFixed(2)}`;
  } else if (discountRow) {
    discountRow.style.display = 'none';
  }
}

function applyPromoCode() {
  playClick();
  const input = document.getElementById('promoInput');
  const notice = document.getElementById('promoNotice');
  if (!input || !notice) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'SHANAKA-VIP' || code === 'SHANAKA') {
    discountPercent = 20;
    playChime();
    notice.className = 'text-[11px] text-emerald-400 font-medium block';
    notice.textContent = '✓ 20% Shanaka Dimuth VIP discount applied!';
  } else if (code === 'ELITE15') {
    discountPercent = 15;
    playChime();
    notice.className = 'text-[11px] text-emerald-400 font-medium block';
    notice.textContent = '✓ 15% VIP discount applied!';
  } else {
    notice.className = 'text-[11px] text-rose-400 font-medium block';
    notice.textContent = 'Invalid promo code. Try "SHANAKA-VIP".';
  }
  updateCartTotals();
}

// ==========================================
// 15. MULTI-STEP CHECKOUT
// ==========================================
function openCheckoutModal() {
  if (cart.length === 0) {
    alert('Please add at least one wood-fired cut to your order.');
    return;
  }
  playClick();
  toggleCartDrawer(false);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = orderMode === 'delivery' ? (subtotal > 50 ? 0 : 4.50) : 0;
  const discountVal = subtotal * (discountPercent / 100);
  const grandTotal = Math.max(0, subtotal + deliveryFee - discountVal);

  document.getElementById('checkoutTotalAmount').textContent = `$${grandTotal.toFixed(2)}`;
  document.getElementById('checkoutFormView').classList.remove('hidden');
  document.getElementById('checkoutSuccessView').classList.add('hidden');
  openModal('checkoutModal');
}

function selectPayMethod(method, btn) {
  playClick();
  document.querySelectorAll('.pay-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

document.getElementById('checkoutForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  playClick();

  const name = document.getElementById('custName')?.value || 'Guest';
  const orderNum = 'EG-ORD-' + Math.floor(10000 + Math.random() * 90000);

  // Switch to success view
  document.getElementById('checkoutFormView').classList.add('hidden');
  const successView = document.getElementById('checkoutSuccessView');
  successView.classList.remove('hidden');
  document.getElementById('orderSuccessId').textContent = orderNum;
  document.getElementById('orderSuccessMessage').textContent = `Thank you ${name}! Your order ${orderNum} has been sent to our master grillers. Estimated preparation time: 20-25 mins.`;

  playChime();
  if (window.confetti) {
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
  }

  cart = [];
  updateCartUI();
});

function finishCheckout() {
  closeModal('checkoutModal');
}

// ==========================================
// 16. PITMASTER GRILL SIMULATOR
// ==========================================
let simCut = { name: 'Wagyu Ribeye', price: 38.00 };
let simWood = 'White Oak';

function selectSimulatorCut(type, btn) {
  playClick();
  document.querySelectorAll('.sim-cut-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (type === 'wagyu') simCut = { name: 'Wagyu Ribeye', price: 38.00 };
  if (type === 'lamb') simCut = { name: 'Rosemary Charred Lamb', price: 26.00 };
  if (type === 'prawns') simCut = { name: 'Garlic Tiger Prawns', price: 29.00 };
}

function selectSimulatorWood(wood, btn) {
  playClick();
  document.querySelectorAll('.sim-wood-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  simWood = wood;
}

document.getElementById('tempSlider')?.addEventListener('input', (e) => {
  const temp = e.target.value;
  document.getElementById('tempDisplay').textContent = temp + '°F';
  const doneness = temp > 720 ? 'Well Done Char (160°F)' : temp > 600 ? 'Medium Rare (135°F)' : 'Rare Tender (125°F)';
  document.getElementById('searDonenessText').textContent = doneness;
});

function triggerSimulatorSear() {
  playSizzle();
  const visual = document.getElementById('searCutVisual');
  const marks = document.getElementById('charMarks');
  if (visual && marks) {
    visual.classList.add('sizzle-active');
    marks.classList.remove('opacity-0');
    setTimeout(() => visual.classList.remove('sizzle-active'), 1800);
  }
}

function addCustomSearToCart() {
  playChime();
  const temp = document.getElementById('tempSlider')?.value || '650';
  cart.push({
    id: 'sim-' + Date.now(),
    name: `Custom Seared ${simCut.name}`,
    price: simCut.price,
    qty: 1,
    specs: `Seared over ${simWood} timber at ${temp}°F`
  });
  closeModal('simulatorModal');
  updateCartUI();
  toggleCartDrawer(true);
}

document.getElementById('navSimulatorBtn')?.addEventListener('click', () => openModal('simulatorModal'));
document.getElementById('heroSimulatorBtn')?.addEventListener('click', () => openModal('simulatorModal'));

// ==========================================
// 17. TABLE RESERVATIONS
// ==========================================
document.getElementById('navReservationBtn')?.addEventListener('click', () => openModal('reservationModal'));
document.getElementById('heroReservationBtn')?.addEventListener('click', () => openModal('reservationModal'));

document.getElementById('reservationForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  playChime();
  if (window.confetti) {
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
  }
  closeModal('reservationModal');
  alert('Reservation Confirmed! A VIP hearth table has been reserved under your name. We look forward to hosting you.');
});

// ==========================================
// 18. MODAL UTILITIES
// ==========================================
function openModal(id) {
  playClick();
  const m = document.getElementById(id);
  if (m) {
    m.classList.remove('hidden');
    m.classList.add('flex');
  }
}

function closeModal(id) {
  playClick();
  const m = document.getElementById(id);
  if (m) {
    m.classList.add('hidden');
    m.classList.remove('flex');
  }
}

// Global click outside modal backdrop to close
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    closeModal(e.target.id);
  }
});

// Initialize Lucide Icons
lucide.createIcons();
