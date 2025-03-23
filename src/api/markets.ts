import axios from 'axios';
import { MarketData, TradingSignal } from '../utils/types';
import { mockMarketData, mockTradingSignals } from '../utils/mockData';

// In production, these would be actual API calls
// For now, we're using mock data

// Fetch market data with optional filter by symbol
export const getMarketData = async (symbol?: string): Promise<MarketData[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (symbol) {
    return mockMarketData.filter(market => market.symbol === symbol);
  }
  
  return mockMarketData;
};

// Fetch trading signals with optional filters
export const getTradingSignals = async (
  symbol?: string,
  type?: 'buy' | 'sell'
): Promise<TradingSignal[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 700));
  
  let filteredSignals = mockTradingSignals;
  
  if (symbol) {
    filteredSignals = filteredSignals.filter(signal => signal.symbol === symbol);
  }
  
  if (type) {
    filteredSignals = filteredSignals.filter(signal => signal.type === type);
  }
  
  return filteredSignals;
};

// Simulate sentiment analysis API
export const getSentimentAnalysis = async (symbol: string): Promise<{
  sentiment: 'positive' | 'neutral' | 'negative';
  score: number;
  sources: {
    source: string;
    count: number;
    sentiment: number;
  }[];
}> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Random sentiment based on symbol for demo purposes
  const sentimentScore = Math.random();
  let sentiment: 'positive' | 'neutral' | 'negative' = 'neutral';
  
  if (sentimentScore > 0.7) {
    sentiment = 'positive';
  } else if (sentimentScore < 0.3) {
    sentiment = 'negative';
  }
  
  return {
    sentiment,
    score: sentimentScore,
    sources: [
      { source: 'Twitter', count: Math.floor(Math.random() * 1000) + 100, sentiment: sentimentScore - 0.1 },
      { source: 'Reddit', count: Math.floor(Math.random() * 500) + 50, sentiment: sentimentScore + 0.05 },
      { source: 'News', count: Math.floor(Math.random() * 50) + 5, sentiment: sentimentScore + 0.1 }
    ]
  };
}; 