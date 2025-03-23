import { useState, useEffect, useCallback } from 'react';
import { TradingSignal } from '../utils/types';
import { getTradingSignals } from '../api/markets';

interface UseTradingSignalsOptions {
  symbol?: string;
  type?: 'buy' | 'sell';
  refreshInterval?: number;
  initialFetch?: boolean;
}

interface UseTradingSignalsReturn {
  signals: TradingSignal[];
  loading: boolean;
  error: Error | null;
  refresh: () => Promise<void>;
}

/**
 * Hook for fetching and managing trading signals
 * @param options Configuration options for the hook
 * @returns Trading signals, loading state, error, and refresh function
 */
export function useTradingSignals(options: UseTradingSignalsOptions = {}): UseTradingSignalsReturn {
  const { 
    symbol, 
    type,
    refreshInterval = 0, 
    initialFetch = true 
  } = options;
  
  const [signals, setSignals] = useState<TradingSignal[]>([]);
  const [loading, setLoading] = useState<boolean>(initialFetch);
  const [error, setError] = useState<Error | null>(null);

  const fetchSignals = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTradingSignals(symbol, type);
      setSignals(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred while fetching trading signals'));
      console.error('Error fetching trading signals:', err);
    } finally {
      setLoading(false);
    }
  }, [symbol, type]);

  // Initial fetch and interval setup
  useEffect(() => {
    if (initialFetch) {
      fetchSignals();
    }

    if (refreshInterval > 0) {
      const intervalId = setInterval(fetchSignals, refreshInterval);
      return () => clearInterval(intervalId);
    }
  }, [fetchSignals, refreshInterval, initialFetch]);

  return {
    signals,
    loading,
    error,
    refresh: fetchSignals
  };
} 