import React, { useState } from 'react';
import { FAQS } from '../data/mockVehicles';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#0A0A0A] border-b border-[#222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFC400] uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Manrope'] mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-base text-[#aaa]">
            Everything you need to know about bidding, inspections, payments, and vehicle collection.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 text-left font-bold text-white flex items-center justify-between gap-4 hover:text-[#FFC400] transition-colors"
                >
                  <span className="font-['Manrope'] text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#FFC400] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#aaa] leading-relaxed border-t border-[#222]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
