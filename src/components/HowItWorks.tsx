import React from 'react';
import { UserPlus, Search, Gavel, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'REGISTER',
      description: 'Create your Sigma Auctioneer account in under 2 minutes with secure phone verification.',
      icon: UserPlus,
    },
    {
      num: '02',
      title: 'FIND YOUR VEHICLE',
      description: 'Browse our curated catalog of quality used cars with full 150-point inspection reports.',
      icon: Search,
    },
    {
      num: '03',
      title: 'PLACE YOUR BID',
      description: 'Bid confidently in real-time on live auctions or set maximum bids for upcoming lots.',
      icon: Gavel,
    },
    {
      num: '04',
      title: 'WIN & COLLECT',
      description: 'Complete fast secure payment and arrange showroom collection or insured doorstep delivery.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#0E0E0E] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider mb-2 block">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Manrope'] mb-4">
            HOW SIGMA AUCTIONS WORK
          </h2>
          <p className="text-base text-[#aaa]">
            Experience a streamlined, transparent car buying journey from registration to doorstep delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#141414] border border-[#262626] rounded-2xl p-8 relative group hover:border-[#FFC400]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-xl bg-[#FFC400] text-black font-extrabold text-lg flex items-center justify-center font-['Manrope'] shadow-lg shadow-[#FFC400]/10">
                      {step.num}
                    </span>
                    <Icon className="w-6 h-6 text-[#777] group-hover:text-[#FFC400] transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-['Manrope']">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#aaa] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#222]">
                  <span className="text-xs text-[#FFC400] font-semibold flex items-center gap-1">
                    Step {step.num} of 04
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
