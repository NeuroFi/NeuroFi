import React from 'react';
import { FiArrowUp, FiArrowDown, FiClock, FiDollarSign } from 'react-icons/fi';
import { Trade } from '@/utils/types';

interface TradeHistoryTableProps {
  trades: Trade[];
  isLoading?: boolean;
}

const TradeHistoryTable: React.FC<TradeHistoryTableProps> = ({ trades = [], isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="p-4 text-center text-gray-500">
        <div className="animate-spin w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
        <p>Loading trade history...</p>
      </div>
    );
  }

  if (trades.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <FiClock className="mx-auto mb-2" size={24} />
        <p>No trade history yet</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const formatAmount = (amount: number, symbol: string) => {
    return `${amount.toLocaleString(undefined, { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 6 
    })} ${symbol}`;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Time</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Pair</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
            <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Price</th>
            <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Amount</th>
            <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Total</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {trades.map((trade) => (
            <tr key={trade.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {formatDate(trade.timestamp)}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                {trade.pair}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  trade.side === 'buy' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' : 
                  'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                }`}>
                  {trade.side === 'buy' ? <FiArrowUp className="mr-1" /> : <FiArrowDown className="mr-1" />}
                  {trade.side.toUpperCase()}
                </span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-mono">
                {trade.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 })}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-mono">
                {formatAmount(trade.amount, trade.baseAsset)}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-mono">
                {formatAmount(trade.total, trade.quoteAsset)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistoryTable; 