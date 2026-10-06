import React from 'react';
import { TESTIMONIALS } from '../data/mockVehicles';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#0E0E0E] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider mb-2 block">
            Customer Success Stories
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Manrope'] mb-4">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-base text-[#aaa]">
            Read verified experiences from buyers who secured their dream vehicles through Sigma Auctioneer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#141414] border border-[#262626] rounded-2xl p-8 relative flex flex-col justify-between hover:border-[#FFC400]/40 transition-colors"
            >
              <div className="absolute top-6 right-6 text-[#FFC400]/20">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFC400] text-[#FFC400]" />
                  ))}
                </div>

                <p className="text-sm text-[#ddd] leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#222]">
                <div className="font-bold text-white text-base">{t.name}</div>
                <div className="flex items-center justify-between text-xs text-[#888] mt-1">
                  <span>{t.role}</span>
                  <span className="text-[#FFC400]">{t.vehicle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
