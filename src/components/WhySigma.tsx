import React from 'react';
import { ShieldCheck, Award, TrendingUp, Users, Zap, Headphones } from 'lucide-react';

export const WhySigma: React.FC = () => {
  const features = [
    {
      title: 'QUALITY VEHICLES',
      description: 'Carefully selected used vehicles subjected to rigorous 150-point technical inspections.',
      icon: ShieldCheck,
    },
    {
      title: 'TRANSPARENT AUCTIONS',
      description: 'Clear vehicle history, upfront condition reports, and real-time bidding transparency.',
      icon: Award,
    },
    {
      title: 'COMPETITIVE PRICES',
      description: 'Access quality used cars at true wholesale auction prices without dealership markups.',
      icon: TrendingUp,
    },
    {
      title: 'TRUSTED SERVICE',
      description: 'Professional support throughout the buying process, title transfers, and paperwork.',
      icon: Users,
    },
    {
      title: 'EASY BIDDING',
      description: 'A simple, intuitive digital auction experience accessible from desktop, tablet, or mobile.',
      icon: Zap,
    },
    {
      title: 'CUSTOMER SUPPORT',
      description: 'Dedicated automotive advisors ready to assist you whenever you need guidance.',
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 bg-[#0A0A0A] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider mb-2 block">
            The Sigma Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Manrope'] mb-4">
            WHY CHOOSE SIGMA?
          </h2>
          <p className="text-base text-[#aaa]">
            Built to provide car buyers and collectors with absolute confidence, uncompromising quality, and seamless transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-[#141414] border border-[#262626] rounded-2xl p-8 hover:border-[#FFC400]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFC400]/10 flex items-center justify-center text-[#FFC400] mb-6 group-hover:bg-[#FFC400] group-hover:text-black transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-['Manrope']">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#aaa] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
