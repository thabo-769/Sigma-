import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onViewVehicles: () => void;
  onHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewVehicles, onHowItWorks }) => {
  return (
    <section className="relative bg-[#0A0A0A] overflow-hidden py-16 lg:py-24 border-b border-[#1f1f1f]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FFC400]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#141414] border border-[#262626] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#FFC400]">
              <Zap className="w-3.5 h-3.5" />
              <span>SIGMA AUCTIONEER</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-['Manrope']">
              FIND YOUR NEXT CAR. <br />
              <span className="text-[#FFC400]">BID WITH CONFIDENCE.</span>
            </h1>

            <p className="text-lg text-[#aaa] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Quality used vehicles. Transparent auctions. Competitive prices.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onViewVehicles}
                className="w-full sm:w-auto px-8 py-4 bg-[#FFC400] hover:bg-[#e0ab00] text-black font-extrabold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FFC400]/10"
              >
                <span>VIEW AVAILABLE VEHICLES</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onHowItWorks}
                className="w-full sm:w-auto px-8 py-4 bg-[#141414] hover:bg-[#1a1a1a] text-white font-bold text-sm rounded-xl border border-[#262626] transition-colors flex items-center justify-center"
              >
                <span>HOW THE AUCTION WORKS</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#262626] shadow-2xl bg-[#141414]">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
                alt="Sigma Featured Vehicle"
                className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#FFC400] font-bold uppercase tracking-wider block">Featured Lot</span>
                  <span className="text-sm font-bold text-white">2020 BMW 320i M-Sport</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#888] block">Current Bid</span>
                  <span className="font-mono font-bold text-[#FFC400] text-base">$26,800</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
