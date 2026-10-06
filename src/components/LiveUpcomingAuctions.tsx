import React, { useState } from 'react';
import { Vehicle } from '../types';
import { VehicleCard } from './VehicleCard';
import { VehicleSearch } from './VehicleSearch';
import { Zap } from 'lucide-react';

interface LiveUpcomingAuctionsProps {
  vehicles: Vehicle[];
  onSelectVehicle: (vehicle: Vehicle) => void;
  watchlistIds: string[];
  onToggleWatchlist: (id: string) => void;
}

export const LiveUpcomingAuctions: React.FC<LiveUpcomingAuctionsProps> = ({
  vehicles,
  onSelectVehicle,
  watchlistIds,
  onToggleWatchlist,
}) => {
  const [filterState, setFilterState] = useState({
    searchQuery: '',
    make: 'all',
    status: 'all',
    maxPrice: 60000,
  });

  const availableMakes = Array.from(new Set(vehicles.map((v) => v.make)));

  const filteredVehicles = vehicles.filter((v) => {
    if (filterState.searchQuery) {
      const q = filterState.searchQuery.toLowerCase();
      const text = `${v.make} ${v.model} ${v.year}`.toLowerCase();
      if (!text.includes(q)) return false;
    }
    if (filterState.make !== 'all' && v.make !== filterState.make) return false;
    if (filterState.status !== 'all' && v.status !== filterState.status) return false;
    if (v.currentBid > filterState.maxPrice) return false;
    return true;
  });

  return (
    <section id="auctions" className="py-16 bg-[#0A0A0A] border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFC400] uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Catalog</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white font-['Manrope']">
              UPCOMING & LIVE AUCTIONS
            </h2>
          </div>
          <span className="text-xs text-[#888] mt-2 sm:mt-0 font-mono">
            Showing {filteredVehicles.length} vehicles
          </span>
        </div>

        <VehicleSearch
          availableMakes={availableMakes}
          onFilterChange={(fs) => setFilterState(fs)}
        />

        {filteredVehicles.length === 0 ? (
          <div className="text-center py-16 bg-[#141414] border border-[#262626] rounded-2xl">
            <p className="text-sm text-[#888]">No vehicles found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onSelectVehicle={onSelectVehicle}
                isWatchlisted={watchlistIds.includes(vehicle.id)}
                onToggleWatchlist={onToggleWatchlist}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
