import React from 'react';
import { ShieldCheck, CheckCircle, Car } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0E0E0E] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#262626] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                alt="Sigma Auctioneer Hub"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-md rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FFC400] flex items-center justify-center text-black font-black">
                    <Car className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">Sigma Automobile Hub</h4>
                    <p className="text-xs text-[#aaa]">State-of-the-art auction facility & inspection center</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Yellow corner accent */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#FFC400]" />
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider block">
              About Sigma Auctioneer
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Manrope'] leading-tight">
              BUILT AROUND TRUST. DRIVEN BY QUALITY.
            </h2>

            <p className="text-base text-[#aaa] leading-relaxed">
              Sigma Auctioneer provides customers with direct access to quality used vehicles through a professional, transparent, and exhilarating auction process. We eliminate traditional dealership markups and uncertainty by pairing rigorous mechanical inspections with real-time digital bidding.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#FFC400] shrink-0" />
                <span className="text-sm text-[#ddd]">Rigorous 150-Point Technical Inspection on Every Lot</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#FFC400] shrink-0" />
                <span className="text-sm text-[#ddd]">Guaranteed Clean Legal Title & Registration Status</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#FFC400] shrink-0" />
                <span className="text-sm text-[#ddd]">Transparent Buyer Fees with Zero Hidden Charges</span>
              </div>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-[#262626]">
                <ShieldCheck className="w-8 h-8 text-[#FFC400]" />
                <div>
                  <span className="text-xs text-[#888] block">Industry Accreditation</span>
                  <span className="text-sm font-bold text-white">Licensed Certified Motor Vehicle Auctioneer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
