import React from 'react';
import { Vehicle } from '../types';
import { VehicleCard } from './VehicleCard';
import { Award } from 'lucide-react';

interface FeaturedVehiclesProps {
  vehicles: Vehicle[];
  onSelectVehicle: (vehicle: Vehicle) => void;
  watchlistIds: string[];
  onToggleWatchlist: (id: string) => void;
  onViewAll: () => void;
}

export const FeaturedVehicles: React.FC<FeaturedVehiclesProps> = ({
  vehicles,
  onSelectVehicle,
  watchlistIds,
  onToggleWatchlist,
  onViewAll,
}) => {
  const featured = vehicles.filter((v) => v.featured).slice(0, 4);

  return (
    <section className="py-20 bg-[#0A0A0A] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFC400] uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>Handpicked Inventory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Manrope']">
              FEATURED VEHICLES
            </h2>
          </div>
          <button
            onClick={onViewAll}
            className="mt-4 sm:mt-0 text-sm font-bold text-[#FFC400] hover:underline flex items-center gap-1"
          >
            Browse All Inventory →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelectVehicle={onSelectVehicle}
              isWatchlisted={watchlistIds.includes(vehicle.id)}
              onToggleWatchlist={onToggleWatchlist}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
