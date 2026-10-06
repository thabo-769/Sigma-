import React, { useState } from 'react';
import { Vehicle, UserProfile } from '../types';
import { AuctionTimer } from './AuctionTimer';
import { X, Heart, ShieldCheck, Gauge, Fuel, Calendar, MapPin, CheckCircle, ArrowUpRight, MessageSquare, Award } from 'lucide-react';

interface VehicleDetailModalProps {
  vehicle: Vehicle;
  onClose: () => void;
  isWatchlisted: boolean;
  onToggleWatchlist: (id: string) => void;
  onOpenBidModal: (vehicle: Vehicle) => void;
  onOpenAuth: () => void;
  user: UserProfile | null;
  onContactClick: () => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  onClose,
  isWatchlisted,
  onToggleWatchlist,
  onOpenBidModal,
  onOpenAuth,
  user,
  onContactClick,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div className="bg-[#0f0f0f] border border-[#262626] rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Sticky Header inside modal */}
        <div className="sticky top-0 z-20 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#222] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold bg-[#FFC400] text-black px-2.5 py-1 rounded">
              LOT #{vehicle.id.replace('veh-', '30')}
            </span>
            <h2 className="text-xl font-extrabold text-white font-['Manrope']">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggleWatchlist(vehicle.id)}
              className={`p-2.5 rounded-xl border transition-colors ${
                isWatchlisted
                  ? 'bg-[#FFC400] text-black border-[#FFC400]'
                  : 'bg-[#1a1a1a] text-white border-[#333] hover:border-[#FFC400]'
              }`}
            >
              <Heart className={`w-5 h-5 ${isWatchlisted ? 'fill-black' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-[#1a1a1a] text-white hover:bg-[#262626] border border-[#333] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-4">
              <div className="relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-[#141414] border border-[#262626]">
                <img
                  src={vehicle.images[selectedImageIndex] || vehicle.images[0]}
                  alt={vehicle.model}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FFC400] text-black font-extrabold text-xs px-3 py-1 rounded tracking-wider uppercase shadow">
                    {vehicle.status === 'live' ? 'LIVE AUCTION' : 'UPCOMING'}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {vehicle.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {vehicle.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        selectedImageIndex === idx ? 'border-[#FFC400] scale-105' : 'border-[#262626] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Auction Bid Box Sidebar */}
            <div className="lg:col-span-4 bg-[#141414] border border-[#262626] rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#888] font-semibold block mb-1">
                  Current Bid
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold font-mono text-white">
                    ${vehicle.currentBid.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#888]">({vehicle.bidCount} bids placed)</span>
                </div>

                <div className="mt-6 pt-6 border-t border-[#222]">
                  <span className="text-xs uppercase tracking-wider text-[#888] font-semibold block mb-2">
                    Auction Ends In
                  </span>
                  <AuctionTimer endTime={vehicle.auctionEnd} />
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#222]">
                <button
                  onClick={() => {
                    if (!user) {
                      onOpenAuth();
                    } else {
                      onOpenBidModal(vehicle);
                    }
                  }}
                  className="w-full py-4 bg-[#FFC400] hover:bg-[#e0ab00] text-black font-extrabold rounded-xl text-base transition-colors flex items-center justify-center gap-2 shadow-xl shadow-[#FFC400]/20"
                >
                  <span>PLACE BID</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>

                {!user && (
                  <button
                    onClick={onOpenAuth}
                    className="w-full py-3 bg-[#1A1A1A] hover:bg-[#262626] text-white font-bold rounded-xl text-sm border border-[#333] transition-colors"
                  >
                    Register to Bid
                  </button>
                )}

                <button
                  onClick={() => {
                    onClose();
                    onContactClick();
                  }}
                  className="w-full py-3 bg-transparent hover:bg-[#1A1A1A] text-[#aaa] hover:text-white font-semibold rounded-xl text-sm border border-[#262626] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#FFC400]" />
                  <span>Contact Auctioneer</span>
                </button>
              </div>
            </div>
          </div>

          {/* Vehicle Specifications & Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#222]">
            <div className="lg:col-span-8 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 font-['Manrope']">Vehicle Description</h3>
                <p className="text-[#bbb] text-sm sm:text-base leading-relaxed">
                  {vehicle.description}
                </p>
              </div>

              {/* Specifications Table */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 font-['Manrope']">Vehicle Specifications</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-[#141414] border border-[#262626] p-4 rounded-xl">
                    <span className="text-xs text-[#888] block mb-1">Year</span>
                    <span className="text-sm font-bold text-white">{vehicle.year}</span>
                  </div>
                  <div className="bg-[#141414] border border-[#262626] p-4 rounded-xl">
                    <span className="text-xs text-[#888] block mb-1">Mileage</span>
                    <span className="text-sm font-bold text-white">{vehicle.mileage}</span>
                  </div>
                  <div className="bg-[#141414] border border-[#262626] p-4 rounded-xl">
                    <span className="text-xs text-[#888] block mb-1">Engine</span>
                    <span className="text-sm font-bold text-white">{vehicle.engine}</span>
                  </div>
                  <div className="bg-[#141414] border border-[#262626] p-4 rounded-xl">
                    <span className="text-xs text-[#888] block mb-1">Transmission</span>
                    <span className="text-sm font-bold text-white">{vehicle.transmission}</span>
                  </div>
                  <div className="bg-[#141414] border border-[#262626] p-4 rounded-xl">
                    <span className="text-xs text-[#888] block mb-1">Fuel Type</span>
                    <span className="text-sm font-bold text-white">{vehicle.fuel}</span>
                  </div>
                  <div className="bg-[#141414] border border-[#262626] p-4 rounded-xl">
                    <span className="text-xs text-[#888] block mb-1">Body Type</span>
                    <span className="text-sm font-bold text-white">{vehicle.bodyType}</span>
                  </div>
                  <div className="bg-[#141414] border border-[#262626] p-4 rounded-xl">
                    <span className="text-xs text-[#888] block mb-1">Colour</span>
                    <span className="text-sm font-bold text-white">{vehicle.colour}</span>
                  </div>
                  <div className="bg-[#141414] border border-[#262626] p-4 rounded-xl">
                    <span className="text-xs text-[#888] block mb-1">Condition</span>
                    <span className="text-sm font-bold text-white">{vehicle.condition}</span>
                  </div>
                  <div className="bg-[#141414] border border-[#262626] p-4 rounded-xl">
                    <span className="text-xs text-[#888] block mb-1">Registration</span>
                    <span className="text-sm font-bold text-white">{vehicle.regStatus}</span>
                  </div>
                </div>
              </div>

              {/* Inspection Guarantee */}
              <div className="bg-[#141414] border border-[#FFC400]/30 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 flex items-center justify-center text-[#FFC400] shrink-0 mt-1">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Sigma Certified Inspection Guarantee</h4>
                  <p className="text-xs text-[#aaa] leading-relaxed">
                    This vehicle has successfully passed our rigorous 150-point inspection covering engine health, transmission, suspension, brakes, electrical systems, and structural integrity. Buy with complete peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column: Bid Activity History */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base font-bold text-white font-['Manrope']">Live Bid History</h4>
                  <span className="text-xs text-[#888] font-mono">{vehicle.bidHistory.length} Bids</span>
                </div>

                {vehicle.bidHistory.length === 0 ? (
                  <div className="text-center py-8 text-xs text-[#777]">
                    No bids placed yet. Be the first bidder!
                  </div>
                ) : (
                  <div className="space-y-3">
                    {vehicle.bidHistory.map((bid) => (
                      <div key={bid.id} className="flex items-center justify-between p-3 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                        <div>
                          <span className="text-xs font-bold text-white block">{bid.userName}</span>
                          <span className="text-[10px] text-[#777]">{bid.timestamp}</span>
                        </div>
                        <span className="font-mono font-bold text-[#FFC400] text-sm">
                          ${bid.amount.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
