import React, { useState } from 'react';
import { Vehicle, UserProfile, AuctionStatus } from './types';
import { INITIAL_VEHICLES } from './data/mockVehicles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveUpcomingAuctions } from './components/LiveUpcomingAuctions';
import { VehicleDetailModal } from './components/VehicleDetailModal';
import { HowItWorks } from './components/HowItWorks';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { AdminDashboard } from './components/AdminDashboard';
import { AuthModal } from './components/AuthModal';
import { WatchlistDrawer } from './components/WatchlistDrawer';
import { PlaceBidModal } from './components/PlaceBidModal';
import { Footer } from './components/Footer';

export default function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(INITIAL_VEHICLES);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [watchlistIds, setWatchlistIds] = useState<string[]>(['veh-1', 'veh-3']);
  const [user, setUser] = useState<UserProfile | null>({
    name: 'Alexander Sterling',
    email: 'alexander@sigma-auctioneer.com',
    phone: '+1 (555) 744-2026',
    isRegisteredBidder: true,
    bidderNumber: 'SIGMA-884920'
  });

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showWatchlistDrawer, setShowWatchlistDrawer] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [biddingVehicle, setBiddingVehicle] = useState<Vehicle | null>(null);

  const handleToggleWatchlist = (vehicleId: string) => {
    if (watchlistIds.includes(vehicleId)) {
      setWatchlistIds(watchlistIds.filter(id => id !== vehicleId));
    } else {
      setWatchlistIds([...watchlistIds, vehicleId]);
    }
  };

  const handleConfirmBid = (vehicleId: string, newBidAmount: number, userName: string) => {
    setVehicles(prev => prev.map(v => {
      if (v.id === vehicleId) {
        const updatedBidHistory = [
          { id: `b-${Date.now()}`, userName, amount: newBidAmount, timestamp: 'Just now' },
          ...v.bidHistory
        ];
        return {
          ...v,
          currentBid: newBidAmount,
          bidCount: v.bidCount + 1,
          bidHistory: updatedBidHistory
        };
      }
      return v;
    }));

    if (selectedVehicle && selectedVehicle.id === vehicleId) {
      setSelectedVehicle(prev => prev ? {
        ...prev,
        currentBid: newBidAmount,
        bidCount: prev.bidCount + 1,
        bidHistory: [
          { id: `b-${Date.now()}`, userName, amount: newBidAmount, timestamp: 'Just now' },
          ...prev.bidHistory
        ]
      } : null);
    }
  };

  const handleAddVehicle = (newVeh: Vehicle) => {
    setVehicles(prev => [newVeh, ...prev]);
  };

  const handleDeleteVehicle = (id: string) => {
    setVehicles(prev => prev.filter(v => v.id !== id));
  };

  const handleUpdateStatus = (id: string, status: AuctionStatus) => {
    setVehicles(prev => prev.map(v => v.id === id ? { ...v, status } : v));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] flex flex-col selection:bg-[#FFC400] selection:text-black">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        watchlistCount={watchlistIds.length}
        onOpenWatchlist={() => setShowWatchlistDrawer(true)}
        user={user}
        onOpenAuth={() => setShowAuthModal(true)}
        onOpenAdmin={() => setShowAdminModal(true)}
      />

      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero
              onViewVehicles={() => {
                setActiveTab('vehicles');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onHowItWorks={() => {
                setActiveTab('how-it-works');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <LiveUpcomingAuctions
              vehicles={vehicles}
              onSelectVehicle={setSelectedVehicle}
              watchlistIds={watchlistIds}
              onToggleWatchlist={handleToggleWatchlist}
            />
            <HowItWorks />
            <AboutUs />
            <ContactSection />
          </>
        )}

        {activeTab === 'vehicles' && (
          <div className="py-4">
            <LiveUpcomingAuctions
              vehicles={vehicles}
              onSelectVehicle={setSelectedVehicle}
              watchlistIds={watchlistIds}
              onToggleWatchlist={handleToggleWatchlist}
            />
          </div>
        )}

        {activeTab === 'how-it-works' && (
          <div className="py-4">
            <HowItWorks />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="py-4">
            <AboutUs />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="py-4">
            <ContactSection />
          </div>
        )}
      </main>

      <Footer setActiveTab={setActiveTab} />

      {selectedVehicle && (
        <VehicleDetailModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          isWatchlisted={watchlistIds.includes(selectedVehicle.id)}
          onToggleWatchlist={handleToggleWatchlist}
          onOpenBidModal={(v) => setBiddingVehicle(v)}
          onOpenAuth={() => setShowAuthModal(true)}
          user={user}
          onContactClick={() => {
            setSelectedVehicle(null);
            setActiveTab('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onLogin={(u) => setUser(u)}
        />
      )}

      {showWatchlistDrawer && (
        <WatchlistDrawer
          watchlistIds={watchlistIds}
          vehicles={vehicles}
          onClose={() => setShowWatchlistDrawer(false)}
          onSelectVehicle={setSelectedVehicle}
          onRemoveWatchlist={handleToggleWatchlist}
        />
      )}

      {showAdminModal && (
        <AdminDashboard
          vehicles={vehicles}
          onClose={() => setShowAdminModal(false)}
          onAddVehicle={handleAddVehicle}
          onDeleteVehicle={handleDeleteVehicle}
          onUpdateStatus={handleUpdateStatus}
        />
      )}

      {biddingVehicle && user && (
        <PlaceBidModal
          vehicle={biddingVehicle}
          user={user}
          onClose={() => setBiddingVehicle(null)}
          onConfirmBid={handleConfirmBid}
        />
      )}
    </div>
  );
}
