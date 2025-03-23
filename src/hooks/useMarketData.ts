import { useState, useEffect } from 'react';
import { MarketData } from '../utils/types';
import { getMarketData } from '../api/markets';

interface UseMarketDataOptions {
  symbol?: string;
  refreshInterval?: number;
  initialFetch?: boolean;
}

interface UseMarketDataReturn {
  data: MarketData[];
  loading: boolean;
  error: Error | null;
  refresh: () => Promise<void>;
}

/**
 * Hook for fetching and managing market data
 * @param options Configuration options for the hook
 * @returns Market data, loading state, error, and refresh function
 */
export function useMarketData(options: UseMarketDataOptions = {}): UseMarketDataReturn {
  const { 
    symbol, 
    refreshInterval = 0, 
    initialFetch = true 
  } = options;
  
  const [data, setData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState<boolean>(initialFetch);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const marketData = await getMarketData(symbol);
      setData(marketData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred while fetching market data'));
      console.error('Error fetching market data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch and interval setup
  useEffect(() => {
    if (initialFetch) {
      fetchData();
    }

    if (refreshInterval > 0) {
      const intervalId = setInterval(fetchData, refreshInterval);
      return () => clearInterval(intervalId);
    }
  }, [symbol, refreshInterval]);

  return {
    data,
    loading,
    error,
    refresh: fetchData
  };
} 