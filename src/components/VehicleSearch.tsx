import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface FilterState {
  searchQuery: string;
  make: string;
  status: string;
  maxPrice: number;
}

interface VehicleSearchProps {
  onFilterChange: (filters: FilterState) => void;
  availableMakes: string[];
}

export const VehicleSearch: React.FC<VehicleSearchProps> = ({ onFilterChange, availableMakes }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [make, setMake] = useState('all');

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    onFilterChange({ searchQuery: q, make, status: 'all', maxPrice: 60000 });
  };

  const handleMakeChange = (m: string) => {
    setMake(m);
    onFilterChange({ searchQuery, make: m, status: 'all', maxPrice: 60000 });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777]" />
        <input
          type="text"
          placeholder="Search vehicles by make or model..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full bg-[#141414] border border-[#262626] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-[#777] focus:outline-none focus:border-[#FFC400]"
        />
      </div>

      <div className="sm:w-48">
        <select
          value={make}
          onChange={(e) => handleMakeChange(e.target.value)}
          className="w-full bg-[#141414] border border-[#262626] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFC400]"
        >
          <option value="all">All Makes</option>
          {availableMakes.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
