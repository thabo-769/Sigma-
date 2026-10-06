export type AuctionStatus = 'live' | 'upcoming' | 'ended' | 'sold';

export type FuelType = 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
export type TransmissionType = 'Automatic' | 'Manual';
export type BodyType = 'SUV' | 'Sedan' | 'Hatchback' | 'Coupe' | 'Truck' | 'Van';

export interface BidHistory {
  id: string;
  userName: string;
  amount: number;
  timestamp: string;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  mileage: string; // e.g., "82,000 km"
  engine: string; // e.g., "3.0L V6 TwinTurbo"
  transmission: TransmissionType;
  fuel: FuelType;
  bodyType: BodyType;
  colour: string;
  condition: string; // e.g., "Excellent - Grade 4.5"
  regStatus: string; // e.g., "Registered & Inspected"
  currentBid: number;
  startingBid: number;
  bidCount: number;
  status: AuctionStatus;
  auctionEnd: string; // ISO date string
  auctionStart?: string;
  images: string[];
  description: string;
  featured: boolean;
  location: string;
  bidHistory: BidHistory[];
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  isRegisteredBidder: boolean;
  bidderNumber?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  vehicleOfInterest: string;
  message: string;
}
