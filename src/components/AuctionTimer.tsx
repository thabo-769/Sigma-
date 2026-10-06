import React, { useState, useEffect } from 'react';

interface AuctionTimerProps {
  endTime: string;
  className?: string;
  compact?: boolean;
}

export const AuctionTimer: React.FC<AuctionTimerProps> = ({ endTime, className = '', compact = false }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEnded: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(endTime).getTime() - new Date().getTime();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isEnded: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isEnded: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  if (timeLeft.isEnded) {
    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-bold bg-red-950 text-red-400 border border-red-800 ${className}`}>
        AUCTION CLOSED
      </span>
    );
  }

  if (compact) {
    return (
      <div className={`font-mono font-bold text-[#FFC400] text-sm tracking-wide ${className}`}>
        {timeLeft.days > 0 ? `${timeLeft.days}d ` : ''}
        {String(timeLeft.hours).padStart(2, '0')}:
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex flex-col items-center bg-[#1A1A1A] border border-[#333] rounded px-2.5 py-1.5 min-w-[48px]">
        <span className="font-mono font-bold text-lg text-[#FFC400]">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="text-[10px] text-[#888] uppercase tracking-wider">Days</span>
      </div>
      <span className="text-[#FFC400] font-bold">:</span>
      <div className="flex flex-col items-center bg-[#1A1A1A] border border-[#333] rounded px-2.5 py-1.5 min-w-[48px]">
        <span className="font-mono font-bold text-lg text-[#FFC400]">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-[10px] text-[#888] uppercase tracking-wider">Hours</span>
      </div>
      <span className="text-[#FFC400] font-bold">:</span>
      <div className="flex flex-col items-center bg-[#1A1A1A] border border-[#333] rounded px-2.5 py-1.5 min-w-[48px]">
        <span className="font-mono font-bold text-lg text-[#FFC400]">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-[10px] text-[#888] uppercase tracking-wider">Mins</span>
      </div>
      <span className="text-[#FFC400] font-bold">:</span>
      <div className="flex flex-col items-center bg-[#1A1A1A] border border-[#333] rounded px-2.5 py-1.5 min-w-[48px]">
        <span className="font-mono font-bold text-lg text-[#FFC400]">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-[10px] text-[#888] uppercase tracking-wider">Secs</span>
      </div>
    </div>
  );
};
