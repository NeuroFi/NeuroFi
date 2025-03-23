import { useState, useEffect, useCallback } from 'react';
import { Trade } from '@/utils/types';

interface UseTradeHistoryOptions {
  limit?: number;
  refreshInterval?: number;
  initialFetch?: boolean;
}

interface UseTradeHistoryReturn {
  trades: Trade[];
  loading: boolean;
  error: Error | null;
  refresh: () => Promise<void>;
}

// Mock trade history data
const mockTrades: Trade[] = [
  {
    id: 'trade-1',
    pair: 'BTC/USDT',
    side: 'buy',
    price: 50123.45,
    amount: 0.25,
    total: 12530.86,
    baseAsset: 'BTC',
    quoteAsset: 'USDT',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    fee: 12.53,
    feeCurrency: 'USDT',
    status: 'completed',
    orderId: 'order-1'
  },
  {
    id: 'trade-2',
    pair: 'ETH/USDT',
    side: 'sell',
    price: 2710.89,
    amount: 1.5,
    total: 4066.34,
    baseAsset: 'ETH',
    quoteAsset: 'USDT',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    fee: 4.07,
    feeCurrency: 'USDT',
    status: 'completed',
    orderId: 'order-2'
  },
  {
    id: 'trade-3',
    pair: 'SOL/USDT',
    side: 'buy',
    price: 125.34,
    amount: 10,
    total: 1253.40,
    baseAsset: 'SOL',
    quoteAsset: 'USDT',
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    fee: 1.25,
    feeCurrency: 'USDT',
    status: 'completed',
    orderId: 'order-3'
  },
  {
    id: 'trade-4',
    pair: 'BTC/USDT',
    side: 'sell',
    price: 49875.12,
    amount: 0.15,
    total: 7481.27,
    baseAsset: 'BTC',
    quoteAsset: 'USDT',
    timestamp: new Date(Date.now() - 172800000).toISOString(),
    fee: 7.48,
    feeCurrency: 'USDT',
    status: 'completed',
    orderId: 'order-4'
  }
];

// This would be fetched from an API in a real application
const fetchTradeHistory = async (limit: number = 10): Promise<Trade[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Return mock data
  return mockTrades.slice(0, limit);
};

export function useTradeHistory({
  limit = 10,
  refreshInterval = 0,
  initialFetch = true
}: UseTradeHistoryOptions = {}): UseTradeHistoryReturn {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState<boolean>(initialFetch);
  const [error, setError] = useState<Error | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchTradeHistory(limit);
      setTrades(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch trade history'));
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    if (initialFetch) {
      refresh();
    }
    
    if (refreshInterval > 0) {
      const intervalId = setInterval(refresh, refreshInterval);
      return () => clearInterval(intervalId);
    }
  }, [refresh, initialFetch, refreshInterval]);

  return { trades, loading, error, refresh };
} 