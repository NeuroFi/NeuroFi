import React from 'react';
import { FiBarChart2, FiMaximize2, FiSettings } from 'react-icons/fi';

interface PriceChartProps {
  symbol: string;
  timeframe?: '1m' | '5m' | '15m' | '1h' | '4h' | '1d' | '1w';
  height?: string | number;
  showControls?: boolean;
}

const PriceChart: React.FC<PriceChartProps> = ({
  symbol,
  timeframe = '1h',
  height = 400,
  showControls = true
}) => {
  // In a real app, this would integrate with a charting library like TradingView, Chart.js, etc.
  // Here we're creating a placeholder with a mock design

  const timeframeOptions = ['1m', '5m', '15m', '1h', '4h', '1d', '1w'];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {showControls && (
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center">
            <FiBarChart2 className="mr-2 text-blue-500" size={20} />
            <h3 className="text-lg font-medium">{symbol} Chart</h3>
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{timeframe}</span>
          </div>
          <div className="flex space-x-2">
            <div className="flex bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
              {timeframeOptions.map((option) => (
                <button
                  key={option}
                  className={`px-2 py-1 text-xs ${
                    timeframe === option 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button className="p-1 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
              <FiSettings size={16} />
            </button>
            <button className="p-1 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
              <FiMaximize2 size={16} />
            </button>
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-center w-full" style={{ height: height }}>
        <div className="text-center text-gray-400">
          <FiBarChart2 size={48} className="mx-auto mb-2" />
          <p>Chart would render here using a library like TradingView</p>
          <p className="text-sm">{symbol} {timeframe} Chart</p>
        </div>
      </div>
    </div>
  );
};

export default PriceChart; 