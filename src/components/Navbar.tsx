import React, { useState } from 'react';
import { Heart, User, Menu, X } from 'lucide-react';
import { UserProfile } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  watchlistCount: number;
  onOpenWatchlist: () => void;
  user: UserProfile | null;
  onOpenAuth: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  watchlistCount,
  onOpenWatchlist,
  user,
  onOpenAuth,
  onOpenAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => handleNavClick('home')} className="cursor-pointer">
          <Logo size={40} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors relative py-2 ${
                activeTab === link.id ? 'text-[#FFC400] font-semibold' : 'text-[#aaa] hover:text-white'
              }`}
            >
              {link.label}
              {activeTab === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFC400] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAdmin}
            className="hidden lg:block text-xs font-medium text-[#777] hover:text-[#FFC400] px-2 py-1 transition-colors"
          >
            Admin
          </button>

          <button
            onClick={onOpenWatchlist}
            className="relative p-2.5 rounded-xl bg-[#141414] hover:bg-[#222] text-white border border-[#262626] transition-colors"
            title="Saved Watchlist"
          >
            <Heart className="w-4 h-4 text-[#FFC400]" />
            {watchlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#FFC400] text-black font-bold text-[10px] flex items-center justify-center">
                {watchlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenAuth}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFC400] hover:bg-[#e0ab00] text-black font-bold text-xs transition-colors"
          >
            <User className="w-3.5 h-3.5" />
            <span>{user ? user.name.split(' ')[0] : 'Sign In'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#141414] text-white border border-[#262626]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#222] px-6 py-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left text-base font-semibold py-2 px-3 rounded-lg ${
                activeTab === link.id ? 'bg-[#FFC400]/10 text-[#FFC400]' : 'text-[#aaa]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#222] flex flex-col gap-2">
            <button
              onClick={() => { onOpenAdmin(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 bg-[#141414] text-white font-semibold text-xs rounded-xl border border-[#262626]"
            >
              Admin Portal
            </button>
            <button
              onClick={() => { onOpenAuth(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 bg-[#FFC400] text-black font-bold text-xs rounded-xl"
            >
              {user ? user.name : 'Register / Sign In'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
