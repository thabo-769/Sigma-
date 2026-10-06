import React, { useState } from 'react';
import { Vehicle, AuctionStatus, FuelType, TransmissionType, BodyType } from '../types';
import { X, Plus, Trash2, Edit, CheckCircle, ShieldCheck, Wrench, AlertCircle } from 'lucide-react';

interface AdminDashboardProps {
  vehicles: Vehicle[];
  onClose: () => void;
  onAddVehicle: (vehicle: Vehicle) => void;
  onDeleteVehicle: (id: string) => void;
  onUpdateStatus: (id: string, status: AuctionStatus) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  vehicles,
  onClose,
  onAddVehicle,
  onDeleteVehicle,
  onUpdateStatus,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // New vehicle form state
  const [newVehicle, setNewVehicle] = useState({
    make: 'Audi',
    model: 'RS6 Avant',
    year: 2022,
    mileage: '35,000 km',
    engine: '4.0L Twin-Turbo V8',
    transmission: 'Automatic' as TransmissionType,
    fuel: 'Petrol' as FuelType,
    bodyType: 'Station Wagon' as BodyType,
    colour: 'Nardo Grey',
    condition: 'Grade A+ - Showroom immaculate',
    regStatus: 'Fully Registered',
    startingBid: 65000,
    currentBid: 68000,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
    description: 'Breathtaking Audi RS6 Avant with ceramic brakes, RS dynamic package plus, and carbon styling. Verified pristine condition.',
    location: 'Sigma VIP Bay A',
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Vehicle = {
      id: `veh-${Date.now()}`,
      make: newVehicle.make,
      model: newVehicle.model,
      year: Number(newVehicle.year),
      mileage: newVehicle.mileage,
      engine: newVehicle.engine,
      transmission: newVehicle.transmission,
      fuel: newVehicle.fuel,
      bodyType: newVehicle.bodyType,
      colour: newVehicle.colour,
      condition: newVehicle.condition,
      regStatus: newVehicle.regStatus,
      currentBid: Number(newVehicle.currentBid),
      startingBid: Number(newVehicle.startingBid),
      bidCount: 1,
      status: 'live',
      auctionEnd: new Date(Date.now() + 48 * 3600 * 1000).toISOString(),
      images: [newVehicle.image],
      description: newVehicle.description,
      featured: true,
      location: newVehicle.location,
      bidHistory: [
        { id: `b-${Date.now()}`, userName: 'Sigma VIP Desk', amount: Number(newVehicle.currentBid), timestamp: 'Just now' }
      ]
    };

    onAddVehicle(created);
    setSuccessMsg('Vehicle successfully added to auction inventory!');
    setIsAdding(false);
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div className="bg-[#0f0f0f] border border-[#262626] rounded-2xl max-w-6xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#222] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 flex items-center justify-center text-[#FFC400]">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white font-['Manrope']">Sigma Admin Portal</h2>
              <p className="text-xs text-[#888]">Inventory & Auction Management Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAdding(!isAdding)}
              className="flex items-center gap-2 px-4 py-2 bg-[#FFC400] text-black font-bold rounded-xl text-xs hover:bg-[#e0ab00] transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>{isAdding ? 'Cancel' : 'Add Vehicle'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-[#1a1a1a] text-white hover:bg-[#262626] border border-[#333]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          {successMsg && (
            <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-sm flex items-center gap-3">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Add Form Modal view inside */}
          {isAdding && (
            <form onSubmit={handleCreate} className="bg-[#141414] border border-[#FFC400]/40 rounded-2xl p-6 space-y-6 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-white font-['Manrope']">Add New Vehicle Lot</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#888] mb-1.5 font-medium">Make</label>
                  <input
                    type="text"
                    required
                    value={newVehicle.make}
                    onChange={(e) => setNewVehicle({ ...newVehicle, make: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#888] mb-1.5 font-medium">Model</label>
                  <input
                    type="text"
                    required
                    value={newVehicle.model}
                    onChange={(e) => setNewVehicle({ ...newVehicle, model: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#888] mb-1.5 font-medium">Year</label>
                  <input
                    type="number"
                    required
                    value={newVehicle.year}
                    onChange={(e) => setNewVehicle({ ...newVehicle, year: Number(e.target.value) })}
                    className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#888] mb-1.5 font-medium">Starting Bid ($)</label>
                  <input
                    type="number"
                    required
                    value={newVehicle.startingBid}
                    onChange={(e) => setNewVehicle({ ...newVehicle, startingBid: Number(e.target.value) })}
                    className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#888] mb-1.5 font-medium">Current Bid ($)</label>
                  <input
                    type="number"
                    required
                    value={newVehicle.currentBid}
                    onChange={(e) => setNewVehicle({ ...newVehicle, currentBid: Number(e.target.value) })}
                    className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#888] mb-1.5 font-medium">Mileage</label>
                  <input
                    type="text"
                    required
                    value={newVehicle.mileage}
                    onChange={(e) => setNewVehicle({ ...newVehicle, mileage: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#888] mb-1.5 font-medium">Fuel Type</label>
                  <select
                    value={newVehicle.fuel}
                    onChange={(e) => setNewVehicle({ ...newVehicle, fuel: e.target.value as FuelType })}
                    className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-3 py-2 text-sm text-white"
                  >
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#888] mb-1.5 font-medium">Transmission</label>
                  <select
                    value={newVehicle.transmission}
                    onChange={(e) => setNewVehicle({ ...newVehicle, transmission: e.target.value as TransmissionType })}
                    className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-3 py-2 text-sm text-white"
                  >
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#888] mb-1.5 font-medium">Image URL</label>
                  <input
                    type="text"
                    required
                    value={newVehicle.image}
                    onChange={(e) => setNewVehicle({ ...newVehicle, image: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-3 py-2 text-sm text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#888] mb-1.5 font-medium">Description</label>
                <textarea
                  rows={3}
                  value={newVehicle.description}
                  onChange={(e) => setNewVehicle({ ...newVehicle, description: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg px-3 py-2 text-sm text-white"
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-5 py-2.5 bg-[#1A1A1A] text-white font-semibold rounded-lg text-xs border border-[#333]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#FFC400] text-black font-bold rounded-lg text-xs hover:bg-[#e0ab00]"
                >
                  Publish Auction Lot
                </button>
              </div>
            </form>
          )}

          {/* Vehicle inventory list */}
          <div className="bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden">
            <div className="p-4 bg-[#1a1a1a] border-b border-[#262626] flex items-center justify-between">
              <h3 className="font-bold text-white text-sm">Active Inventory Management ({vehicles.length} lots)</h3>
              <span className="text-xs text-[#888]">Live control panel</span>
            </div>

            <div className="divide-y divide-[#222]">
              {vehicles.map((v) => (
                <div key={v.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#181818] transition-colors">
                  <div className="flex items-center gap-4">
                    <img src={v.images[0]} alt="" className="w-16 h-12 object-cover rounded-lg border border-[#333]" />
                    <div>
                      <h4 className="font-bold text-white text-sm">{v.year} {v.make} {v.model}</h4>
                      <div className="flex items-center gap-3 text-xs text-[#888] mt-0.5">
                        <span>Current: <strong className="text-[#FFC400] font-mono">${v.currentBid.toLocaleString()}</strong></span>
                        <span>•</span>
                        <span>Bids: {v.bidCount}</span>
                        <span>•</span>
                        <span className="capitalize text-white font-medium bg-[#222] px-2 py-0.5 rounded">{v.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <select
                      value={v.status}
                      onChange={(e) => onUpdateStatus(v.id, e.target.value as AuctionStatus)}
                      className="bg-[#1A1A1A] border border-[#333] text-xs text-white rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#FFC400]"
                    >
                      <option value="live">Live</option>
                      <option value="upcoming">Upcoming</option>
                      <option value="ended">Ended</option>
                      <option value="sold">Sold</option>
                    </select>

                    <button
                      onClick={() => onDeleteVehicle(v.id)}
                      className="p-2 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-400 border border-red-900 transition-colors"
                      title="Delete vehicle lot"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
