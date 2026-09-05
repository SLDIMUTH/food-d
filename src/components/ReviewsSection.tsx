import React from 'react';
import { Review } from '../types';
import { Star, Award, CheckCircle, MessageSquareQuote } from 'lucide-react';

interface ReviewsSectionProps {
  reviews: Review[];
  lang: 'en' | 'si';
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews, lang }) => {
  return (
    <section id="reviews" className="py-24 bg-[#0c0c10] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-800 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Verified Culinary Reviews' : 'පාරිභෝගික සහ විචාරක අදහස්'}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {lang === 'en' ? 'What Food Lovers Say' : 'ආහාර ලෝලීන්ගේ අදහස්'}
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-lg">
              {lang === 'en'
                ? 'From world-renowned culinary columnists to our cherished neighborhood regulars.'
                : 'අපගේ සේවාව සහ ආහාරවල රසය අත්විඳි පාරිභෝගිකයින්ගේ අත්දැකීම්.'}
            </p>
          </div>

          {/* Rating Snapshot */}
          <div className="flex items-center gap-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 shrink-0">
            <div className="text-3xl font-extrabold text-amber-400">4.9</div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-zinc-400 block mt-0.5">Based on 2,840+ genuine reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#121217] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-all text-left shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-400">{rev.date}</span>
                </div>

                <div className="relative">
                  <MessageSquareQuote className="w-8 h-8 text-zinc-800 absolute -top-3 -left-1 -z-0 opacity-50" />
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed relative z-10 italic">
                    "{rev.comment}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1">
                      <span>{rev.author}</span>
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                    </h4>
                    <span className="text-[11px] text-zinc-400">{rev.role}</span>
                  </div>
                </div>

                <div className="bg-zinc-900/60 rounded-lg p-2 text-[11px] text-zinc-400 flex items-center gap-1.5">
                  <span className="text-amber-500 font-semibold">Recommended:</span>
                  <span className="text-zinc-200 truncate">{rev.dishRecommended}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
