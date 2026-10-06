import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 36 }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div 
        className="relative flex items-center justify-center rounded-xl bg-[#141414] border border-[#FFC400]/40 overflow-hidden"
        style={{ width: size, height: size }}
      >
        <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 5H8L4 12L8 19H19" stroke="#FFC400" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 12H16" stroke="#FFC400" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-wider text-white leading-none">
          SIGMA
        </span>
        <span className="text-[10px] tracking-[0.2em] text-[#FFC400] font-semibold uppercase mt-0.5">
          AUCTIONEER
        </span>
      </div>
    </div>
  );
};
