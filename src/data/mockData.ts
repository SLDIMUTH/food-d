import { MenuItem, Review } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'skewer-01',
    name: 'Charcoal Rosemary Lamb Skewers',
    sinhalaName: 'රෝස්මරී රසැති බැටළු මස් කෙබාබ්',
    category: 'skewers',
    description: 'Tender pasture-raised lamb marinated for 24 hours in wild mountain rosemary, smoked garlic, and cold-pressed olive oil, flame-kissed over white binchotan coals.',
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
      doneness: ['Rare', 'Medium Rare', 'Medium', 'Medium Well'],
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
      doneness: ['Rare', 'Medium Rare', 'Medium'],
      sides: ['Charred Asparagus with Parmesan', 'Truffle Mashed Potatoes', 'Wild Forest Mushrooms']
    }
  },
  {
    id: 'steak-02',
    name: 'Hickory Smoked Wagyu Striploin',
    sinhalaName: 'වැගියු ස්ට්‍රිප්ලොයින් ස්ටීක්',
    category: 'steaks',
    description: 'A5 Miyazaki Wagyu striploin lightly smoked with cherrywood and flash-seared at 800°F for melt-in-your-mouth perfection.',
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
      doneness: ['Rare', 'Medium Rare'],
      sides: ['Truffle Mashed Potatoes', 'Charred Asparagus with Parmesan']
    }
  },
  {
    id: 'platter-01',
    name: 'The Grand Pitmaster Grill Board',
    sinhalaName: 'ග්‍රෑන්ඩ් පිට්මාස්ටර් ග්‍රිල් බෝර්ඩ්',
    category: 'platters',
    description: 'A celebration of smoke and fire: Lamb skewers, beef skewers, 12-hour smoked beef brisket, charred artisanal sausages, smoked corn ribs, pickles, and 3 house sauces.',
    price: 68.00,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewCount: 640,
    isChefSpecial: true,
    isBestseller: true,
    spicyLevel: 2,
    prepTime: '20-25 mins',
    calories: 1850,
    tags: ['Family / Sharing', 'Ultimate Feast', 'Chef Special']
  },
  {
    id: 'seafood-01',
    name: 'Jumbo Tiger Prawn Charcoal Skewers',
    sinhalaName: 'ටයිගර් ප්‍රෝන්ස් ග්‍රිල්ඩ් ස්කූවර්ස්',
    category: 'seafood',
    description: 'Wild-caught colossal tiger prawns shell-on with garlic herb infused ghee, crushed pink peppercorn, and charred Meyer lemon.',
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
    price: 29.50,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewCount: 168,
    spicyLevel: 0,
    prepTime: '15-18 mins',
    calories: 590,
    tags: ['Omega-3 Rich', 'Cedar Planked']
  },
  {
    id: 'side-01',
    name: 'Charred Sweet Corn Ribs with Cotija',
    sinhalaName: 'ග්‍රිල්ඩ් ස්වීට් කෝන් රිබ්ස්',
    category: 'sides',
    description: 'Spiral-cut sweet yellow corn caramelized over hot coals, tossed with smoked paprika butter, lime crema, and crumbled cotija cheese.',
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

export const REVIEWS: Review[] = [
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

export const TIME_SLOTS = [
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM',
  '07:30 PM', '08:00 PM', '08:30 PM', '09:15 PM'
];
