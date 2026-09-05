import React from 'react';
import { Flame, Award, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  lang: 'en' | 'si';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section id="about" className="py-24 bg-[#0e0e12] border-t border-b border-zinc-800/80 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-zinc-800 aspect-[3/4] bg-zinc-900">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                    alt="Grilling steaks on open flame"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-left">
                  <div className="text-amber-400 font-bold text-xl">45 Days</div>
                  <p className="text-xs text-zinc-400 mt-1">Himalayan Salt Dry-Aging Chamber for supreme tenderness.</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 text-left">
                  <Flame className="w-6 h-6 text-amber-400 mb-2" />
                  <div className="text-white font-bold text-base">White Binchotan</div>
                  <p className="text-xs text-zinc-300 mt-1">Smokeless high-heat charcoal that locks in natural meat juices.</p>
                </div>

                <div className="rounded-2xl overflow-hidden border border-zinc-800 aspect-[3/4] bg-zinc-900">
                  <img
                    src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80"
                    alt="Chef seasoning prime steak"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Our Heritage & Philosophy' : 'අපගේ අත්දැකීම සහ සම්ප්‍රදාය'}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              {lang === 'en' ? (
                <>
                  Born From The Passion For <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                    Pure Fire & Handcrafted Cuts
                  </span>
                </>
              ) : (
                <>
                  ගින්දර සහ විශිෂ්ට සූපවේදී කලාවේ <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                    නියම එකමුතුව
                  </span>
                </>
              )}
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {lang === 'en'
                ? 'At The Elite Grill, we reject shortcuts. Every morning, our pits are stoked with natural oak, cherrywood, and Japanese white binchotan charcoal. We procure exclusively pasture-raised livestock, allowing each cut to age patiently in our temperature-controlled Himalayan rock salt vaults.'
                : 'ද එලීට් ග්‍රිල් හිදී අප සෑම ආහාරයක්ම සකසන්නේ ස්වාභාවික ඕක් සහ ලී අඟුරු දැල්ල මතයි. ඉහළම ගුණාත්මක තත්ත්වයේ මස් වර්ග සහ නැවුම් කුළුබඩු මිශ්‍රණයන් සමගින් ඔබ වෙත පිදෙන විශිෂ්ටතම ආහාර වේලක්.'}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 border border-amber-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {lang === 'en' ? 'Master Pitmaster Techniques' : 'විශේෂඥ සූපවේදී තාක්ෂණය'}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {lang === 'en'
                      ? 'Decades of combined culinary expertise dedicated solely to wood-fired meat artistry.'
                      : 'වසර ගණනාවක පලපුරුද්දක් සහිත සූපවේදීන්.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 border border-amber-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {lang === 'en' ? '100% Hormone-Free Ethical Sourcing' : '100% නැවුම් සහ ස්වාභාවික'}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {lang === 'en'
                      ? 'Partnered directly with sustainable family ranches ensuring prime ethical standards.'
                      : 'ස්වාභාවික ගොවිපළවල් වලින් ලබාගන්නා උසස්ම අමුද්‍රව්‍ය.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 border border-amber-500/20">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {lang === 'en' ? 'Warm Hospitality & Table Service' : 'විශිෂ්ට පාරිභෝගික සත්කාරය'}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {lang === 'en'
                      ? 'Whether dining under the stars on our patio or by the hearth, your comfort is guaranteed.'
                      : 'ඔබට සුවපහසු සුහදශීලී සේවාවක් සැමවිටම ලබාදෙන්නෙමු.'}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
