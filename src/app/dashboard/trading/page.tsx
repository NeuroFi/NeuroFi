import React, { useState } from 'react';
import { DashboardLayout } from '@/components/Dashboard';
import { FiBarChart2, FiDollarSign, FiTrendingUp, FiTrendingDown, FiArrowRight } from 'react-icons/fi';

// Mock trading pairs data
const tradingPairs = [
  { id: 1, base: 'BTC', quote: 'USDT', price: 50000.25, change24h: 2.5, volume: 1_250_000 },
  { id: 2, base: 'ETH', quote: 'USDT', price: 2800.75, change24h: -1.2, volume: 750_000 },
  { id: 3, base: 'SOL', quote: 'USDT', price: 110.50, change24h: 5.3, volume: 500_000 },
  { id: 4, base: 'BNB', quote: 'USDT', price: 450.80, change24h: 0.8, volume: 450_000 },
  { id: 5, base: 'ADA', quote: 'USDT', price: 0.98, change24h: -2.1, volume: 320_000 },
];

const Trading = () => {
  // State for selected trading pair
  const [selectedPair, setSelectedPair] = useState(tradingPairs[0]);
  
  // State for order form
  const [orderType, setOrderType] = useState('limit');
  const [side, setSide] = useState('buy');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  
  // Calculate total
  const total = amount && price ? parseFloat(amount) * parseFloat(price) : 0;
  
  // Handle order submission
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', {
      pair: `${selectedPair.base}/${selectedPair.quote}`,
      type: orderType,
      side,
      amount,
      price: orderType === 'market' ? 'Market' : price,
      total: orderType === 'market' ? 'Market' : total
    });
    // Here you would send the order to your backend
  };
  
  return (
    <DashboardLayout title="Trading">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Market Pairs List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
            <FiBarChart2 className="mr-2 text-blue-500" size={20} />
            <h3 className="text-lg font-medium">Market Pairs</h3>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: '600px' }}>
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Pair</th>
                  <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Price</th>
                  <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Change</th>
                </tr>
              </thead>
              <tbody>
                {tradingPairs.map((pair) => (
                  <tr 
                    key={pair.id} 
                    className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer ${selectedPair.id === pair.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                    onClick={() => setSelectedPair(pair)}
                  >
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">{pair.base}</span>
                        <span className="text-gray-500 dark:text-gray-400 ml-1">/{pair.quote}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-right">
                      {pair.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td className={`px-4 py-3 whitespace-nowrap text-right ${pair.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {pair.change24h >= 0 ? '+' : ''}{pair.change24h}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Chart and Order Book Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Price Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div className="flex items-center">
                <FiTrendingUp className={`mr-2 ${selectedPair.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`} size={20} />
                <h3 className="text-lg font-medium">{selectedPair.base}/{selectedPair.quote}</h3>
              </div>
              <div className="flex items-center">
                <span className={`font-bold mr-2 ${selectedPair.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {selectedPair.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className={`text-sm ${selectedPair.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {selectedPair.change24h >= 0 ? '+' : ''}{selectedPair.change24h}%
                </span>
              </div>
            </div>
            <div className="p-4 h-64 flex items-center justify-center text-gray-400">
              {/* Chart would go here - simplified for this example */}
              <div className="text-center">
                <FiBarChart2 size={48} className="mx-auto mb-2" />
                <p>Price chart would render here</p>
                <p className="text-sm">Using TradingView or another chart library</p>
              </div>
            </div>
          </div>
          
          {/* Order Form and Book */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Order Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium">Place Order</h3>
              </div>
              <div className="p-4">
                <div className="flex border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden mb-4">
                  <button
                    className={`flex-1 py-2 text-center ${orderType === 'limit' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
                    onClick={() => setOrderType('limit')}
                  >
                    Limit
                  </button>
                  <button
                    className={`flex-1 py-2 text-center ${orderType === 'market' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
                    onClick={() => setOrderType('market')}
                  >
                    Market
                  </button>
                </div>
                
                <div className="flex border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden mb-4">
                  <button
                    className={`flex-1 py-2 text-center ${side === 'buy' ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
                    onClick={() => setSide('buy')}
                  >
                    Buy
                  </button>
                  <button
                    className={`flex-1 py-2 text-center ${side === 'sell' ? 'bg-red-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
                    onClick={() => setSide('sell')}
                  >
                    Sell
                  </button>
                </div>
                
                <form onSubmit={handleSubmitOrder}>
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Amount ({selectedPair.base})</label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                      placeholder={`Amount in ${selectedPair.base}`}
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      step="0.0001"
                      min="0"
                      required
                    />
                  </div>
                  
                  {orderType === 'limit' && (
                    <div className="mb-3">
                      <label className="block text-sm font-medium mb-1">Price ({selectedPair.quote})</label>
                      <input
                        type="number"
                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                        placeholder={`Price in ${selectedPair.quote}`}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        step="0.01"
                        min="0"
                        required
                      />
                    </div>
                  )}
                  
                  {orderType === 'limit' && amount && price && (
                    <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-md flex justify-between">
                      <span className="text-sm">Total:</span>
                      <span className="font-medium">{total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {selectedPair.quote}</span>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className={`w-full py-3 rounded-md flex items-center justify-center ${
                      side === 'buy' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                    } text-white font-medium`}
                  >
                    {side === 'buy' ? 'Buy' : 'Sell'} {selectedPair.base}
                    <FiArrowRight className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
            
            {/* Order Book */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium">Order Book</h3>
              </div>
              <div className="p-4 space-y-4">
                {/* Sell Orders */}
                <div>
                  <h4 className="text-sm font-medium mb-2 text-red-500">Sell Orders</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>50123.50</span>
                      <span>0.245 BTC</span>
                      <div className="w-1/3 bg-red-100 h-2 rounded-sm" style={{ width: '60%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>50125.00</span>
                      <span>0.188 BTC</span>
                      <div className="w-1/3 bg-red-100 h-2 rounded-sm" style={{ width: '45%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>50128.25</span>
                      <span>0.122 BTC</span>
                      <div className="w-1/3 bg-red-100 h-2 rounded-sm" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
                
                {/* Current Price */}
                <div className="py-2 border-y border-gray-200 dark:border-gray-700 text-center">
                  <span className="font-bold text-lg">
                    {selectedPair.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                
                {/* Buy Orders */}
                <div>
                  <h4 className="text-sm font-medium mb-2 text-green-500">Buy Orders</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>49995.75</span>
                      <span>0.312 BTC</span>
                      <div className="w-1/3 bg-green-100 h-2 rounded-sm" style={{ width: '80%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>49990.50</span>
                      <span>0.255 BTC</span>
                      <div className="w-1/3 bg-green-100 h-2 rounded-sm" style={{ width: '65%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>49985.00</span>
                      <span>0.178 BTC</span>
                      <div className="w-1/3 bg-green-100 h-2 rounded-sm" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Trading; 