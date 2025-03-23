import React, { useState } from 'react';
import { DashboardLayout } from '@/components/Dashboard';
import { FiPieChart, FiTrendingUp, FiArrowUpRight, FiArrowDownRight, FiDollarSign, FiRefreshCw } from 'react-icons/fi';

// Mock data for portfolio
const mockPortfolio = [
  { id: 1, coin: 'Bitcoin', symbol: 'BTC', amount: 1.25, value: 62500, change24h: 2.3, color: 'text-yellow-500' },
  { id: 2, coin: 'Ethereum', symbol: 'ETH', amount: 15.5, value: 43400, change24h: -1.2, color: 'text-blue-500' },
  { id: 3, coin: 'Solana', symbol: 'SOL', amount: 250, value: 27500, change24h: 5.7, color: 'text-purple-500' },
  { id: 4, coin: 'Cardano', symbol: 'ADA', amount: 10000, value: 9800, change24h: 0.5, color: 'text-blue-400' },
  { id: 5, coin: 'Polkadot', symbol: 'DOT', amount: 750, value: 15000, change24h: -2.1, color: 'text-pink-500' },
];

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(mockPortfolio);
  const [isLoading, setIsLoading] = useState(false);

  // Calculate total portfolio value
  const totalValue = portfolio.reduce((total, coin) => total + coin.value, 0);
  
  // Calculate 24h change
  const weightedChange = portfolio.reduce((total, coin) => {
    return total + (coin.change24h * (coin.value / totalValue));
  }, 0);
  
  // Refresh portfolio data
  const refreshPortfolio = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      // Here you would fetch real portfolio data
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <DashboardLayout title="Portfolio">
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Value Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
          <div className="flex items-center mb-2">
            <FiDollarSign className="mr-2 text-green-500" size={20} />
            <h3 className="text-lg font-medium">Total Value</h3>
          </div>
          <p className="text-3xl font-bold">${totalValue.toLocaleString()}</p>
          <div className={`mt-2 flex items-center ${weightedChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {weightedChange >= 0 ? (
              <FiArrowUpRight className="mr-1" />
            ) : (
              <FiArrowDownRight className="mr-1" />
            )}
            <span>{Math.abs(weightedChange).toFixed(2)}% (24h)</span>
          </div>
        </div>
        
        {/* Portfolio Distribution */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FiPieChart className="mr-2 text-blue-500" size={20} />
              <h3 className="text-lg font-medium">Portfolio Distribution</h3>
            </div>
            <button 
              className="flex items-center text-sm p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={refreshPortfolio}
              disabled={isLoading}
            >
              <FiRefreshCw className={`mr-1 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-full flex space-x-1">
              {portfolio.map((coin) => (
                <div 
                  key={coin.id} 
                  className={`h-4 ${coin.color}`} 
                  style={{ 
                    backgroundColor: 'currentColor',
                    width: `${(coin.value / totalValue) * 100}%`,
                    minWidth: '4px'
                  }}
                  title={`${coin.coin}: ${((coin.value / totalValue) * 100).toFixed(1)}%`}
                />
              ))}
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-2">
            {portfolio.map((coin) => (
              <div key={coin.id} className="flex items-center text-sm">
                <div className={`w-3 h-3 rounded-full ${coin.color} mr-1`}></div>
                <span>{coin.symbol} ({((coin.value / totalValue) * 100).toFixed(1)}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Portfolio Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="flex items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <FiTrendingUp className="mr-2 text-purple-500" size={20} />
          <h3 className="text-lg font-medium">Your Assets</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Asset</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">24h</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Holdings</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((coin, index) => (
                <tr key={coin.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full ${coin.color} flex items-center justify-center mr-3`}>
                        <span className="text-white font-bold">{coin.symbol.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-medium">{coin.coin}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{coin.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    ${(coin.value / coin.amount).toFixed(2)}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-right text-sm ${coin.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <div className="flex items-center justify-end">
                      {coin.change24h >= 0 ? (
                        <FiArrowUpRight className="mr-1" />
                      ) : (
                        <FiArrowDownRight className="mr-1" />
                      )}
                      {Math.abs(coin.change24h).toFixed(2)}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <div>{coin.amount.toLocaleString()} {coin.symbol}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    ${coin.value.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-end space-x-3 mt-6">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Buy Crypto
        </button>
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">
          Export CSV
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Portfolio; 