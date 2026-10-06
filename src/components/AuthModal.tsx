import React, { useState } from 'react';
import { UserProfile } from '../types';
import { X, User, Lock, Mail, Phone, CheckCircle, Shield } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
  onLogin: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const userProfile: UserProfile = {
      name: name || email.split('@')[0],
      email,
      phone: phone || '+1 (555) 019-2834',
      isRegisteredBidder: true,
      bidderNumber: `SIGMA-${Math.floor(100000 + Math.random() * 900000)}`,
    };

    onLogin(userProfile);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#141414] border border-[#262626] rounded-2xl max-w-md w-full p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#1A1A1A] text-white hover:bg-[#262626] border border-[#333]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#FFC400] text-black font-extrabold flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#FFC400]/20">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold text-white font-['Manrope']">
            {isRegister ? 'Register as Sigma Bidder' : 'Sign In to Sigma'}
          </h3>
          <p className="text-xs text-[#888] mt-1">
            {isRegister ? 'Unlock live auction bidding privileges instantly.' : 'Access your active bids, watchlist, and account.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#888] font-medium mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777]" />
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFC400]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#888] font-medium mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777]" />
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFC400]"
              />
            </div>
          </div>

          {isRegister && (
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#888] font-medium mb-1.5">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777]" />
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFC400]"
                />
              </div>
            </div>
          )}

          {!isRegister && (
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#888] font-medium mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777]" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  defaultValue="secretpassword"
                  className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFC400]"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 bg-[#FFC400] hover:bg-[#e0ab00] text-black font-extrabold rounded-xl text-sm transition-colors shadow-lg shadow-[#FFC400]/20 mt-2"
          >
            {isRegister ? 'Complete Registration' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-[#222] text-center">
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-xs text-[#aaa] hover:text-[#FFC400] transition-colors"
          >
            {isRegister ? 'Already have an account? Sign in' : "Don't have a Sigma account? Register now"}
          </button>
        </div>
      </div>
    </div>
  );
};
