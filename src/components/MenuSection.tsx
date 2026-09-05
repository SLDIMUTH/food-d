import React, { useState, useMemo } from 'react';
import { MenuItem } from '../types';
import { Flame, Star, Plus, Clock, Search, Sparkles, Filter, Info } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface MenuSectionProps {
  menuItems: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  lang: 'en' | 'si';
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  menuItems,
  onSelectItem,
  onQuickAdd,
  lang
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterTag, setFilterTag] = useState<string>('all');

  const categories = [
    { id: 'all', name: lang === 'en' ? 'All Specialties' : 'සියල්ල' },
    { id: 'skewers', name: lang === 'en' ? 'Flame Skewers' : 'කෙබාබ් / ස්කූවර්ස්' },
    { id: 'steaks', name: lang === 'en' ? 'Prime Steaks' : 'ප්‍රයිම් ස්ටීක්ස්' },
    { id: 'platters', name: lang === 'en' ? 'Smoked Platters' : 'ප්ලැටර්ස්' },
    { id: 'seafood', name: lang === 'en' ? 'Wood Seafood' : 'සීෆුඩ්' },
    { id: 'sides', name: lang === 'en' ? 'Artisanal Sides' : 'සයිඩ් ඩිෂස්' },
    { id: 'drinks', name: lang === 'en' ? 'Craft Drinks' : 'බීම වර්ග' },
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.sinhalaName && item.sinhalaName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFilter = filterTag === 'all' || 
        (filterTag === 'chef' && item.isChefSpecial) ||
        (filterTag === 'bestseller' && item.isBestseller) ||
        (filterTag === 'spicy' && (item.spicyLevel ?? 0) > 0);

      return matchesCategory && matchesSearch && matchesFilter;
    });
  }, [menuItems, activeCategory, searchQuery, filterTag]);

  return (
    <section id="menu" className="py-24 bg-[#0a0a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Wood-Fired Culinary Creations' : 'ලී අඟුරු සූපවේදී නිර්මාණ'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {lang === 'en' ? 'Our Gourmet Specialties' : 'අපගේ විශේෂිත කෑම වර්ග'}
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            {lang === 'en'
              ? 'Every cut is seasoned with hand-milled spices, brushed with artisanal herbal glazes, and charred over selected hardwoods for incomparable tenderness.'
              : 'විශේෂිත කුළුබඩු හා ස්වාභාවික රසකාරක සමගින් සකසන ලද අපගේ උසස් තත්ත්වයේ ග්‍රිල් ආහාර මෙතැනින් තෝරාගන්න.'}
          </p>
        </div>

        {/* Search and Tag Controls */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === 'en' ? 'Search skewers, cuts, drinks...' : 'ආහාර සොයන්න...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Quick Filter Badges */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setFilterTag('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                filterTag === 'all'
                  ? 'bg-amber-500 text-black border-amber-500 font-semibold'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'All' : 'සියලුම'}
            </button>
            <button
              onClick={() => setFilterTag('bestseller')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                filterTag === 'bestseller'
                  ? 'bg-amber-500 text-black border-amber-500 font-semibold'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
              }`}
            >
              ⭐ {lang === 'en' ? 'Bestsellers' : 'ප්‍රමුඛ'}
            </button>
            <button
              onClick={() => setFilterTag('chef')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                filterTag === 'chef'
                  ? 'bg-amber-500 text-black border-amber-500 font-semibold'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
              }`}
            >
              🔥 {lang === 'en' ? "Chef's Choice" : 'විශේෂඥ තේරීම්'}
            </button>
            <button
              onClick={() => setFilterTag('spicy')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                filterTag === 'spicy'
                  ? 'bg-amber-500 text-black border-amber-500 font-semibold'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
              }`}
            >
              🌶️ {lang === 'en' ? 'Spiced / Chili' : 'කුළුබඩු අධික'}
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold shadow-lg shadow-amber-500/20'
                  : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800/80'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => {
                if (['skewers', 'steaks', 'platters', 'seafood'].includes(item.category)) {
                  soundManager.playSizzle(0.3);
                }
              }}
              className="group bg-[#111115] rounded-2xl border border-zinc-800/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/5"
            >
              {/* Image Container */}
              <div
                onClick={() => {
                  soundManager.playClick();
                  onSelectItem(item);
                }}
                className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-zinc-950"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-transparent opacity-80" />

                {/* Badges on Image */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.isChefSpecial && (
                    <span className="px-2.5 py-1 rounded-md bg-amber-500 text-black text-[11px] font-bold tracking-wide uppercase shadow">
                      Chef Special
                    </span>
                  )}
                  {item.isBestseller && (
                    <span className="px-2.5 py-1 rounded-md bg-orange-600 text-white text-[11px] font-bold tracking-wide uppercase shadow">
                      Bestseller
                    </span>
                  )}
                </div>

                {/* Spicy Indicator */}
                {item.spicyLevel !== undefined && item.spicyLevel > 0 && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm border border-zinc-700 text-xs font-semibold text-red-400">
                    {'🌶️'.repeat(item.spicyLevel)}
                  </div>
                )}

                {/* Prep Time pill */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded bg-black/70 backdrop-blur-sm text-[11px] text-zinc-300">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.prepTime}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3
                        onClick={() => {
                          soundManager.playClick();
                          onSelectItem(item);
                        }}
                        className="font-display text-lg font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        {item.name}
                      </h3>
                      {lang === 'si' && item.sinhalaName && (
                        <p className="text-xs text-amber-500/90 font-medium">{item.sinhalaName}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 shrink-0">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{item.rating}</span>
                      <span className="text-zinc-500 text-[10px]">({item.reviewCount})</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Action Buttons */}
                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-500 block">Price</span>
                    <span className="text-xl font-extrabold text-amber-400">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        soundManager.playClick();
                        onSelectItem(item);
                      }}
                      className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold transition-colors"
                    >
                      {lang === 'en' ? 'Customize' : 'වෙනස් කරන්න'}
                    </button>
                    <button
                      onClick={() => onQuickAdd(item)}
                      className="p-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold transition-all shadow-md shadow-amber-500/20 active:scale-90"
                      title="Quick Add to Order"
                      aria-label={`Add ${item.name} to order`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-zinc-900/30 rounded-2xl border border-zinc-800">
            <Info className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <p className="text-zinc-300 font-medium">No dishes found matching your search.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setFilterTag('all');
              }}
              className="mt-3 text-xs text-amber-400 underline hover:text-amber-300"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
