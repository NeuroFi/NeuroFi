/**
 * Trading strategy type
 */
export type TradingStrategy = {
  id: string;
  name: string;
  description: string;
  riskLevel: 'low' | 'medium' | 'high';
  expectedReturn: number;
  timeFrame: string;
  createdAt: string;
  updatedAt: string;
};

/**
 * Market data type
 */
export type MarketData = {
  symbol: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  lastUpdated: string;
};

/**
 * User profile type
 */
export type UserProfile = {
  id: string;
  address: string;
  username?: string;
  avatar?: string;
  joinedAt: string;
  tradingVolume: number;
  activeStrategies: number;
};

/**
 * Trading signal type
 */
export type TradingSignal = {
  id: string;
  symbol: string;
  type: 'buy' | 'sell';
  price: number;
  confidence: number;
  timeFrame: string;
  createdAt: string;
  expiresAt: string;
};

/**
 * Risk assessment type
 */
export type RiskAssessment = {
  id: string;
  protocol: string;
  riskScore: number;
  liquidity: number;
  volatility: number;
  securityRating: number;
  lastUpdated: string;
};

/**
 * News item type
 */
export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  url: string;
  source: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  publishedAt: string;
};

/**
 * Historical price data point
 */
export type PriceDataPoint = {
  timestamp: number;
  price: number;
  volume?: number;
};

/**
 * AI model type
 */
export type AIModel = {
  id: string;
  name: string;
  description: string;
  accuracy: number;
  lastTrained: string;
  category: 'price' | 'sentiment' | 'risk' | 'trading';
  version: string;
};

/**
 * Trade history item type
 */
export type Trade = {
  id: string;
  pair: string;
  side: 'buy' | 'sell';
  price: number;
  amount: number;
  total: number;
  baseAsset: string;
  quoteAsset: string;
  timestamp: string;
  fee?: number;
  feeCurrency?: string;
  status: 'completed' | 'pending' | 'canceled' | 'failed';
  orderId: string;
}; 