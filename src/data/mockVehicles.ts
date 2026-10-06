import { Vehicle } from '../types';

// Future auction end times relative to now
const now = new Date();
const getFutureDate = (hours: number) => {
  const d = new Date(now.getTime() + hours * 3600 * 1000);
  return d.toISOString();
};

export const INITIAL_VEHICLES: Vehicle[] = [
  {
    id: 'veh-1',
    make: 'Toyota',
    model: 'Hilux Invincible',
    year: 2021,
    mileage: '82,000 km',
    engine: '2.8L 4-Cylinder Diesel',
    transmission: 'Automatic',
    fuel: 'Diesel',
    bodyType: 'Truck',
    colour: 'Attitude Black Metallic',
    condition: 'Grade A - Pristine condition, full service history',
    regStatus: 'Fully Registered (2026 Tax Paid)',
    currentBid: 28500,
    startingBid: 22000,
    bidCount: 14,
    status: 'live',
    auctionEnd: getFutureDate(24),
    images: [
      'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The unstoppable Toyota Hilux Invincible. Equipped with heavy-duty alloy wheels, leather interior, satellite navigation, and robust 4WD capability. Fully inspected by Sigma certified technicians.',
    featured: true,
    location: 'Sigma Main Hub - Bay A',
    bidHistory: [
      { id: 'b-1', userName: 'Michael S.', amount: 28500, timestamp: '10 mins ago' },
      { id: 'b-2', userName: 'David K.', amount: 27500, timestamp: '1 hour ago' },
      { id: 'b-3', userName: 'Robert T.', amount: 26000, timestamp: '3 hours ago' }
    ]
  },
  {
    id: 'veh-2',
    make: 'Mercedes-Benz',
    model: 'C200 AMG Line',
    year: 2020,
    mileage: '78,000 km',
    engine: '1.5L Turbo Petrol + EQ Boost',
    transmission: 'Automatic',
    fuel: 'Hybrid',
    bodyType: 'Sedan',
    colour: 'Polar White',
    condition: 'Grade A - Single owner, immaculate interior',
    regStatus: 'Fully Registered',
    currentBid: 24200,
    startingBid: 19000,
    bidCount: 9,
    status: 'live',
    auctionEnd: getFutureDate(36),
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Exquisite Mercedes-Benz C200 AMG Line with panoramic sunroof, Burmester surround sound, ambient lighting, and AMG styling package. Verified mileage and clean title.',
    featured: true,
    location: 'Sigma Logistics Center - Bay B',
    bidHistory: [
      { id: 'b-4', userName: 'Jessica W.', amount: 24200, timestamp: '25 mins ago' },
      { id: 'b-5', userName: 'Andrew P.', amount: 23000, timestamp: '2 hours ago' }
    ]
  },
  {
    id: 'veh-3',
    make: 'BMW',
    model: '320i M-Sport',
    year: 2020,
    mileage: '65,400 km',
    engine: '2.0L TwinPower Turbo 4-Cylinder',
    transmission: 'Automatic',
    fuel: 'Petrol',
    bodyType: 'Sedan',
    colour: 'Portimao Blue Metallic',
    condition: 'Grade A+ - Dealer maintained, pristine condition',
    regStatus: 'Fully Registered',
    currentBid: 26800,
    startingBid: 21000,
    bidCount: 18,
    status: 'live',
    auctionEnd: getFutureDate(12),
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Dynamic BMW 320i M-Sport featuring adaptive LED headlights, Live Cockpit Professional, Vernasca leather seats, and M Sport suspension. An absolute driver’s delight.',
    featured: true,
    location: 'Sigma Main Hub - Bay C',
    bidHistory: [
      { id: 'b-6', userName: 'Chris L.', amount: 26800, timestamp: '5 mins ago' },
      { id: 'b-7', userName: 'Sarah M.', amount: 25500, timestamp: '1 hour ago' }
    ]
  },
  {
    id: 'veh-4',
    make: 'Audi',
    model: 'Q5 S-Line Quattro',
    year: 2021,
    mileage: '54,000 km',
    engine: '2.0L TDI Quattro Diesel',
    transmission: 'Automatic',
    fuel: 'Diesel',
    bodyType: 'SUV',
    colour: 'Daytona Grey Pearl',
    condition: 'Grade A - Family owned, immaculate service records',
    regStatus: 'Fully Registered',
    currentBid: 32000,
    startingBid: 27000,
    bidCount: 12,
    status: 'live',
    auctionEnd: getFutureDate(48),
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541348263662-e052662afda3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The benchmark luxury family SUV. Audi Q5 S-Line Quattro with Virtual Cockpit, panoramic glass roof, 20-inch alloy wheels, and legendary quattro all-wheel drive.',
    featured: true,
    location: 'Sigma East Terminal',
    bidHistory: [
      { id: 'b-8', userName: 'Kevin H.', amount: 32000, timestamp: '45 mins ago' }
    ]
  },
  {
    id: 'veh-5',
    make: 'Porsche',
    model: 'Macan S',
    year: 2019,
    mileage: '91,000 km',
    engine: '3.0L V6 Turbocharged',
    transmission: 'Automatic',
    fuel: 'Petrol',
    bodyType: 'SUV',
    colour: 'Jet Black Metallic',
    condition: 'Grade A - Porsche Specialist Maintained',
    regStatus: 'Fully Registered',
    currentBid: 39500,
    startingBid: 34000,
    bidCount: 22,
    status: 'live',
    auctionEnd: getFutureDate(18),
    images: [
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'High-performance Porsche Macan S delivering breathtaking dynamics and luxurious comfort. Bose surround sound, sport chrono package, and 21-inch 911 Turbo design wheels.',
    featured: true,
    location: 'Sigma Main Hub - VIP Bay',
    bidHistory: [
      { id: 'b-9', userName: 'Alexander B.', amount: 39500, timestamp: '12 mins ago' }
    ]
  },
  {
    id: 'veh-6',
    make: 'Land Rover',
    model: 'Range Rover Sport HSE',
    year: 2019,
    mileage: '105,000 km',
    engine: '3.0L SDV6 Diesel',
    transmission: 'Automatic',
    fuel: 'Diesel',
    bodyType: 'SUV',
    colour: 'Santorini Black',
    condition: 'Grade B+ - Comprehensive maintenance completed',
    regStatus: 'Fully Registered',
    currentBid: 41000,
    startingBid: 36000,
    bidCount: 16,
    status: 'upcoming',
    auctionEnd: getFutureDate(72),
    images: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Iconic luxury and uncompromised off-road capability. Range Rover Sport HSE featuring Meridian sound system, air suspension, sliding panoramic roof, and Windsor leather seats.',
    featured: false,
    location: 'Sigma North Facility',
    bidHistory: []
  },
  {
    id: 'veh-7',
    make: 'Ford',
    model: 'Ranger Wildtrak',
    year: 2022,
    mileage: '42,000 km',
    engine: '2.0L Bi-Turbo Diesel',
    transmission: 'Automatic',
    fuel: 'Diesel',
    bodyType: 'Truck',
    colour: 'Absolute Black',
    condition: 'Grade A+ - Like new condition',
    regStatus: 'Fully Registered',
    currentBid: 31500,
    startingBid: 26000,
    bidCount: 11,
    status: 'live',
    auctionEnd: getFutureDate(8),
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Rugged yet refined Ford Ranger Wildtrak. SYNC 4 infotainment with 12-inch touchscreen, roller shutter, leather accented interior, and robust towing capacity.',
    featured: false,
    location: 'Sigma Main Hub',
    bidHistory: []
  },
  {
    id: 'veh-8',
    make: 'Volkswagen',
    model: 'Golf GTI MK8',
    year: 2021,
    mileage: '49,000 km',
    engine: '2.0L TSI Turbo Petrol',
    transmission: 'Automatic',
    fuel: 'Petrol',
    bodyType: 'Hatchback',
    colour: 'Kings Red Metallic',
    condition: 'Grade A - Enthusiast owned, stock condition',
    regStatus: 'Fully Registered',
    currentBid: 23900,
    startingBid: 19500,
    bidCount: 20,
    status: 'upcoming',
    auctionEnd: getFutureDate(96),
    images: [
      'https://images.unsplash.com/photo-1541348263662-e052662afda3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The legendary hot hatch. VW Golf GTI MK8 featuring iconic tartan seats, Digital Cockpit Pro, DCC adaptive chassis control, and exhilarating 245PS performance.',
    featured: false,
    location: 'Sigma South Terminal',
    bidHistory: []
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Jonathan Vance',
    role: 'Verified Buyer',
    comment: 'Buying my Mercedes through Sigma Auctioneer was seamless. The inspection report was 100% accurate, and saving over $6,000 compared to dealer retail was incredible.',
    rating: 5,
    vehicle: '2020 Mercedes-Benz C200'
  },
  {
    id: 't-2',
    name: 'Marcus Sterling',
    role: 'Commercial Fleet Owner',
    comment: 'We have sourced three Toyota Hilux trucks for our construction business via Sigma. Transparent bidding, zero hidden fees, and lightning-fast paperwork collection.',
    rating: 5,
    vehicle: '2021 Toyota Hilux Invincible'
  },
  {
    id: 't-3',
    name: 'Elena Rostova',
    role: 'Automotive Enthusiast',
    comment: 'The live countdown and real-time bid updates created genuine excitement. Sigma is setting the absolute gold standard for car auctions.',
    rating: 5,
    vehicle: '2020 BMW 320i M-Sport'
  }
];

export const FAQS = [
  {
    question: 'How do I register to bid on vehicles?',
    answer: 'Creating an account is free and takes under 2 minutes. Once registered, you can verify your phone number and place refundable security deposits to unlock live bidding privileges.'
  },
  {
    question: 'Are the vehicles inspected before auction?',
    answer: 'Yes! Every vehicle listed on Sigma Auctioneer undergoes a rigorous 150-point inspection by certified automotive engineers. Detailed inspection sheets and high-res photo galleries are available on every vehicle page.'
  },
  {
    question: 'What fees are associated with winning an auction?',
    answer: 'Winning bidders pay the final hammer price plus a transparent buyer fee (typically 4% or $500 minimum) which covers title transfer assistance, auction administration, and secure storage prior to collection.'
  },
  {
    question: 'Can I inspect the car in person before bidding?',
    answer: 'Absolutely. You are welcome to inspect vehicles in person at our Sigma Main Hubs during viewing hours (Monday–Saturday, 9:00 AM – 5:00 PM).'
  },
  {
    question: 'How does vehicle collection or delivery work?',
    answer: 'Once payment is confirmed following auction close, you can collect your vehicle directly from our facility within 48 hours or request professional insured delivery to your doorstep.'
  }
];
