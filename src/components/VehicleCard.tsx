import React from 'react';
import { Vehicle } from '../types';
import { Heart, ArrowRight } from 'lucide-react';
import { AuctionTimer } from './AuctionTimer';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelectVehicle: (vehicle: Vehicle) => void;
  isWatchlisted: boolean;
  onToggleWatchlist: (vehicleId: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  onSelectVehicle,
  isWatchlisted,
  onToggleWatchlist,
}) => {
  const isLive = vehicle.status === 'live';

  return (
    <div 
      onClick={() => onSelectVehicle(vehicle)}
      className="group bg-[#141414] border border-[#222] rounded-xl overflow-hidden hover:border-[#FFC400]/50 transition-all cursor-pointer flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[#1a1a1a]">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${
            isLive ? 'bg-[#FFC400] text-black' : 'bg-[#262626] text-white'
          }`}>
            {isLive ? 'Live' : 'Upcoming'}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWatchlist(vehicle.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
            isWatchlisted ? 'bg-[#FFC400] text-black' : 'bg-black/60 text-white hover:bg-[#FFC400] hover:text-black'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isWatchlisted ? 'fill-black' : ''}`} />
        </button>
      </div>

      {/* Info */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <span className="text-xs text-[#888] font-mono">{vehicle.year} • {vehicle.mileage}</span>
          <h3 className="text-base font-bold text-white group-hover:text-[#FFC400] transition-colors line-clamp-1">
            {vehicle.make} {vehicle.model}
          </h3>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#1f1f1f]">
          <div>
            <span className="text-[10px] text-[#777] uppercase block">Current Bid</span>
            <span className="text-lg font-mono font-bold text-white">${vehicle.currentBid.toLocaleString()}</span>
          </div>
          <div className="text-right">
            <AuctionTimer endTime={vehicle.auctionEnd} compact />
          </div>
        </div>
      </div>
    </div>
  );
};
