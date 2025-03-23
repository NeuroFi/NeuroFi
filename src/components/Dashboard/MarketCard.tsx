import React from 'react';
import { MarketData } from '@/utils/types';
import { FiArrowUp, FiArrowDown, FiActivity, FiClock } from 'react-icons/fi';

interface MarketCardProps {
  market: MarketData;
  onClick?: () => void;
}

const MarketCard: React.FC<MarketCardProps> = ({ market, onClick }) => {
  // Format currency 
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  // Format large numbers with K, M, B suffixes
  const formatLargeNumber = (value: number) => {
    if (value >= 1e9) {
      return (value / 1e9).toFixed(2) + 'B';
    } else if (value >= 1e6) {
      return (value / 1e6).toFixed(2) + 'M';
    } else if (value >= 1e3) {
      return (value / 1e3).toFixed(2) + 'K';
    }
    return value.toString();
  };

  // Format timestamp
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer" 
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg">{market.symbol}</h3>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${market.change24h >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {market.change24h >= 0 ? (
            <span className="flex items-center"><FiArrowUp className="mr-1" /> {market.change24h.toFixed(2)}%</span>
          ) : (
            <span className="flex items-center"><FiArrowDown className="mr-1" /> {Math.abs(market.change24h).toFixed(2)}%</span>
          )}
        </div>
      </div>
      
      <div className="mb-3">
        <span className="text-2xl font-bold">{formatCurrency(market.price)}</span>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-gray-50 p-2 rounded-md">
          <span className="text-xs text-gray-500 block">Volume 24h</span>
          <span className="font-semibold">{formatLargeNumber(market.volume24h)}</span>
        </div>
        <div className="bg-gray-50 p-2 rounded-md">
          <span className="text-xs text-gray-500 block">Market Cap</span>
          <span className="font-semibold">{formatLargeNumber(market.marketCap)}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center text-gray-500 text-sm mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center">
          <FiClock className="mr-1" size={14} />
          <span>Updated: {formatTimestamp(market.lastUpdated)}</span>
        </div>
        <div className="flex items-center">
          <FiActivity className="mr-1" size={14} />
          {market.change24h >= 0 ? (
            <span className="text-green-600">Bullish</span>
          ) : (
            <span className="text-red-600">Bearish</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketCard; 