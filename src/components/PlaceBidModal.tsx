import React, { useState } from 'react';
import { Vehicle, UserProfile } from '../types';
import { X, Gavel, CheckCircle, AlertTriangle } from 'lucide-react';

interface PlaceBidModalProps {
  vehicle: Vehicle;
  user: UserProfile;
  onClose: () => void;
  onConfirmBid: (vehicleId: string, newBidAmount: number, userName: string) => void;
}

export const PlaceBidModal: React.FC<PlaceBidModalProps> = ({
  vehicle,
  user,
  onClose,
  onConfirmBid,
}) => {
  const minBid = vehicle.currentBid + 500;
  const [bidAmount, setBidAmount] = useState(minBid);
  const [confirmed, setConfirmed] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bidAmount < minBid) return;
    setSuccess(true);
    onConfirmBid(vehicle.id, bidAmount, user.name);
    setTimeout(() => {
      onClose();
    }, 2500);
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

        {success ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#FFC400]/20 text-[#FFC400] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white font-['Manrope']">Bid Placed Successfully!</h3>
            <p className="text-sm text-[#aaa]">
              Your bid of <strong className="text-[#FFC400]">${bidAmount.toLocaleString()}</strong> has been securely registered for Lot #{vehicle.id}.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#FFC400] text-black font-extrabold flex items-center justify-center shadow-lg shadow-[#FFC400]/20">
                <Gavel className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[#888] uppercase tracking-wider block">Place Live Bid</span>
                <h3 className="text-lg font-bold text-white font-['Manrope'] line-clamp-1">{vehicle.year} {vehicle.make} {vehicle.model}</h3>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[#262626] p-4 rounded-xl mb-6 space-y-2">
              <div className="flex justify-between text-xs text-[#888]">
                <span>Current Highest Bid:</span>
                <span className="font-mono font-bold text-white">${vehicle.currentBid.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs text-[#888]">
                <span>Minimum Required Bid:</span>
                <span className="font-mono font-bold text-[#FFC400]">${minBid.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs text-[#888]">
                <span>Bidder Account:</span>
                <span className="text-white font-medium">{user.name} ({user.bidderNumber})</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#888] font-medium mb-2">Your Bid Amount ($)</label>
                <input
                  type="number"
                  min={minBid}
                  step="100"
                  required
                  value={bidAmount}
                  onChange={(e) => setBidAmount(Number(e.target.value))}
                  className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl px-4 py-3 font-mono font-bold text-lg text-white focus:outline-none focus:border-[#FFC400]"
                />
              </div>

              <div className="flex items-start gap-3 bg-[#1c1c1c] p-3 rounded-lg border border-[#333]">
                <input
                  type="checkbox"
                  required
                  id="terms"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-1 accent-[#FFC400]"
                />
                <label htmlFor="terms" className="text-xs text-[#aaa] leading-relaxed cursor-pointer">
                  I understand that placing a bid is a binding commitment to purchase this vehicle if my bid wins the auction, subject to Sigma terms.
                </label>
              </div>

              <button
                type="submit"
                disabled={!confirmed}
                className="w-full py-4 bg-[#FFC400] hover:bg-[#e0ab00] disabled:opacity-50 text-black font-extrabold rounded-xl text-base transition-colors shadow-xl shadow-[#FFC400]/20 flex items-center justify-center gap-2"
              >
                <Gavel className="w-5 h-5" />
                <span>CONFIRM & PLACE BID (${bidAmount.toLocaleString()})</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
