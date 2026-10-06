import React from 'react';
import { Car, Shield, Globe, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-[#070707] border-t border-[#222] text-[#888] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1c1c1c]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FFC400] flex items-center justify-center text-black font-black">
                <Car className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white font-['Manrope'] tracking-tight">
                SIGMA<span className="text-[#FFC400] ml-1">AUCTIONEER</span>
              </span>
            </div>
            <p className="text-sm text-[#aaa] max-w-sm leading-relaxed">
              Quality used vehicles. Transparent auctions. Competitive prices. The premier destination for secure automotive auctions and trusted vehicle acquisition.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#instagram" className="w-9 h-9 rounded-lg bg-[#141414] hover:bg-[#FFC400] hover:text-black text-white border border-[#262626] flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#facebook" className="w-9 h-9 rounded-lg bg-[#141414] hover:bg-[#FFC400] hover:text-black text-white border border-[#262626] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-lg bg-[#141414] hover:bg-[#FFC400] hover:text-black text-white border border-[#262626] flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#youtube" className="w-9 h-9 rounded-lg bg-[#141414] hover:bg-[#FFC400] hover:text-black text-white border border-[#262626] flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm font-['Manrope'] uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FFC400] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('vehicles'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FFC400] transition-colors">
                  Vehicles & Auctions
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('how-it-works'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FFC400] transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FFC400] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FFC400] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm font-['Manrope'] uppercase tracking-wider">Legal & Compliance</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#privacy" className="hover:text-[#FFC400] transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-[#FFC400] transition-colors">Terms & Conditions</a></li>
              <li><a href="#bidding" className="hover:text-[#FFC400] transition-colors">Bidding Rules</a></li>
              <li><a href="#inspection" className="hover:text-[#FFC400] transition-colors">Inspection Guarantee</a></li>
              <li><a href="#licensing" className="hover:text-[#FFC400] transition-colors">Auctioneer License #90210</a></li>
            </ul>
          </div>

          {/* Hub & Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm font-['Manrope'] uppercase tracking-wider">Sigma Hub</h4>
            <p className="text-xs text-[#aaa] leading-relaxed">
              742 Automotive Parkway<br />
              Motor City, MC 90210<br />
              Mon – Sat: 9:00 AM – 6:00 PM
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#FFC400] font-semibold bg-[#141414] px-2.5 py-1 rounded border border-[#222]">
                <Shield className="w-3.5 h-3.5" />
                Secure SSL Encrypted
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#777] gap-4">
          <p>© 2026 Sigma Auctioneer. All rights reserved.</p>
          <p>Designed for professional automotive auctions worldwide.</p>
        </div>
      </div>
    </footer>
  );
};
