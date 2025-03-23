import React from 'react';
import { TradingSignal } from '@/utils/types';
import { FiArrowUp, FiArrowDown, FiClock, FiBarChart2 } from 'react-icons/fi';

interface TradingSignalCardProps {
  signal: TradingSignal;
}

const TradingSignalCard: React.FC<TradingSignalCardProps> = ({ signal }) => {
  // Format date for better readability
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  // Get confidence level text
  const getConfidenceText = (confidence: number) => {
    if (confidence >= 0.8) return 'Very High';
    if (confidence >= 0.6) return 'High';
    if (confidence >= 0.4) return 'Medium';
    if (confidence >= 0.2) return 'Low';
    return 'Very Low';
  };

  // Get color based on signal type
  const getSignalTypeColor = (type: 'buy' | 'sell') => {
    return type === 'buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  // Get confidence color
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-green-600';
    if (confidence >= 0.6) return 'text-green-500';
    if (confidence >= 0.4) return 'text-yellow-500';
    if (confidence >= 0.2) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg">{signal.symbol}</h3>
          <span className="text-sm text-gray-500">{signal.timeFrame} Timeframe</span>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getSignalTypeColor(signal.type)}`}>
          {signal.type === 'buy' ? (
            <span className="flex items-center"><FiArrowUp className="mr-1" /> Buy</span>
          ) : (
            <span className="flex items-center"><FiArrowDown className="mr-1" /> Sell</span>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-gray-50 p-2 rounded-md">
          <span className="text-xs text-gray-500 block">Price</span>
          <span className="font-semibold">${signal.price.toLocaleString()}</span>
        </div>
        <div className="bg-gray-50 p-2 rounded-md">
          <span className="text-xs text-gray-500 block">Confidence</span>
          <span className={`font-semibold ${getConfidenceColor(signal.confidence)}`}>
            {getConfidenceText(signal.confidence)}
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-center text-gray-500 text-sm mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center">
          <FiClock className="mr-1" size={14} />
          <span>Created: {formatDate(signal.createdAt)}</span>
        </div>
        <div className="flex items-center">
          <FiBarChart2 className="mr-1" size={14} />
          <span>{Math.round(signal.confidence * 100)}%</span>
        </div>
      </div>
    </div>
  );
};

export default TradingSignalCard; 