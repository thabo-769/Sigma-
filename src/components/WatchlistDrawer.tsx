import React from 'react';
import { Vehicle } from '../types';
import { X, Heart, Trash2, ArrowRight } from 'lucide-react';

interface WatchlistDrawerProps {
  watchlistIds: string[];
  vehicles: Vehicle[];
  onClose: () => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
  onRemoveWatchlist: (id: string) => void;
}

export const WatchlistDrawer: React.FC<WatchlistDrawerProps> = ({
  watchlistIds,
  vehicles,
  onClose,
  onSelectVehicle,
  onRemoveWatchlist,
}) => {
  const watchlistedVehicles = vehicles.filter((v) => watchlistIds.includes(v.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end">
      <div className="bg-[#101010] border-l border-[#262626] w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-[#222] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#FFC400] fill-[#FFC400]" />
            <h3 className="text-lg font-bold text-white font-['Manrope']">Saved Watchlist ({watchlistedVehicles.length})</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1A1A1A] text-white hover:bg-[#262626] border border-[#333]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {watchlistedVehicles.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <Heart className="w-12 h-12 text-[#444] mx-auto" />
              <h4 className="text-base font-bold text-white">Your Watchlist is Empty</h4>
              <p className="text-xs text-[#888] max-w-xs mx-auto">
                Click the heart icon on any vehicle card to save lots to your watchlist for quick bidding.
              </p>
            </div>
          ) : (
            watchlistedVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-[#161616] border border-[#262626] rounded-xl p-4 flex items-center gap-4 relative group hover:border-[#FFC400]/40 transition-colors"
              >
                <img src={vehicle.images[0]} alt="" className="w-20 h-16 object-cover rounded-lg border border-[#333]" />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-[#888] block">{vehicle.year}</span>
                  <h4 className="font-bold text-white text-sm truncate">{vehicle.make} {vehicle.model}</h4>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-mono font-bold text-[#FFC400] text-sm">${vehicle.currentBid.toLocaleString()}</span>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectVehicle(vehicle);
                      }}
                      className="text-xs text-[#FFC400] font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveWatchlist(vehicle.id)}
                  className="absolute top-2 right-2 text-[#777] hover:text-red-400 p-1"
                  title="Remove"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
