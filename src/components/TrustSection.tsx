import React from 'react';
import { ShieldCheck, FileText, Award, Lock } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustItems = [
    {
      title: 'Transparent Auctions',
      desc: 'Live bid histories and transparent pricing with no hidden reserves.',
      icon: ShieldCheck,
    },
    {
      title: 'Verified Vehicle Information',
      desc: '150-point technical inspection reports and verified odometer records.',
      icon: FileText,
    },
    {
      title: 'Professional Service',
      desc: 'Expert support for ownership transfer, registration, and logistics.',
      icon: Award,
    },
    {
      title: 'Secure Transactions',
      desc: 'Bank-grade encrypted payments and secure vehicle escrow protection.',
      icon: Lock,
    },
  ];

  return (
    <section className="py-16 bg-[#0A0A0A] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#141414] border border-[#262626] rounded-2xl p-6 flex items-start gap-4 hover:border-[#FFC400]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFC400]/10 flex items-center justify-center text-[#FFC400] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1 font-['Manrope']">{item.title}</h4>
                  <p className="text-xs text-[#aaa] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
