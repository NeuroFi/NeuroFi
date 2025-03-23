import { 
  TradingStrategy,
  MarketData,
  UserProfile,
  TradingSignal,
  RiskAssessment,
  NewsItem,
  PriceDataPoint,
  AIModel
} from './types';

// Mock Trading Strategies
export const mockTradingStrategies: TradingStrategy[] = [
  {
    id: "strat-001",
    name: "AI Momentum Strategy",
    description: "Uses machine learning to identify price momentum patterns and execute trades at optimal entry and exit points.",
    riskLevel: "medium",
    expectedReturn: 12.5,
    timeFrame: "1-3 days",
    createdAt: "2025-01-15T10:30:00Z",
    updatedAt: "2025-02-10T14:45:00Z"
  },
  {
    id: "strat-002",
    name: "Neural Volatility Arbitrage",
    description: "Leverages neural networks to identify and exploit price discrepancies across multiple exchanges during high volatility periods.",
    riskLevel: "high",
    expectedReturn: 18.7,
    timeFrame: "1-4 hours",
    createdAt: "2025-01-18T09:15:00Z",
    updatedAt: "2025-02-12T11:20:00Z"
  },
  {
    id: "strat-003",
    name: "NeuroShield Conservative",
    description: "A risk-averse strategy that uses AI to identify stable yield opportunities with strong protection against market downturns.",
    riskLevel: "low",
    expectedReturn: 6.2,
    timeFrame: "7-14 days",
    createdAt: "2025-01-22T15:45:00Z",
    updatedAt: "2025-02-14T16:30:00Z"
  }
];

// Mock Market Data
export const mockMarketData: MarketData[] = [
  {
    symbol: "SOL",
    price: 124.85,
    change24h: 3.2,
    volume24h: 975000000,
    marketCap: 56750000000,
    lastUpdated: "2025-03-12T16:45:23Z"
  },
  {
    symbol: "ETH",
    price: 5824.32,
    change24h: -1.7,
    volume24h: 23450000000,
    marketCap: 698200000000,
    lastUpdated: "2025-03-12T16:45:23Z"
  },
  {
    symbol: "BTC",
    price: 78542.15,
    change24h: 0.8,
    volume24h: 42680000000,
    marketCap: 1485000000000,
    lastUpdated: "2025-03-12T16:45:23Z"
  },
  {
    symbol: "NRF",
    price: 3.47,
    change24h: 12.5,
    volume24h: 48500000,
    marketCap: 347000000,
    lastUpdated: "2025-03-12T16:45:23Z"
  }
];

// Mock User Profile
export const mockUserProfile: UserProfile = {
  id: "user-9876",
  address: "7XB3HLySrbJJdQNV4FhxYDf7vxgzgzQ82vM7cTN2sFvD",
  username: "neurotrade-pro",
  avatar: "/images/avatar-placeholder.png",
  joinedAt: "2025-02-01T10:00:00Z",
  tradingVolume: 125750.42,
  activeStrategies: 2
};

// Mock Trading Signals
export const mockTradingSignals: TradingSignal[] = [
  {
    id: "sig-001",
    symbol: "SOL",
    type: "buy",
    price: 123.50,
    confidence: 87.5,
    timeFrame: "4h",
    createdAt: "2025-03-12T14:30:00Z",
    expiresAt: "2025-03-12T18:30:00Z"
  },
  {
    id: "sig-002",
    symbol: "ETH",
    type: "sell",
    price: 5850.25,
    confidence: 76.2,
    timeFrame: "1d",
    createdAt: "2025-03-12T12:15:00Z",
    expiresAt: "2025-03-13T12:15:00Z"
  },
  {
    id: "sig-003",
    symbol: "BTC",
    type: "buy",
    price: 78100.00,
    confidence: 92.1,
    timeFrame: "1h",
    createdAt: "2025-03-12T16:00:00Z",
    expiresAt: "2025-03-12T17:00:00Z"
  }
];

// Mock Risk Assessments
export const mockRiskAssessments: RiskAssessment[] = [
  {
    id: "risk-001",
    protocol: "SolendFinance",
    riskScore: 15,
    liquidity: 87.5,
    volatility: 12.3,
    securityRating: 92.0,
    lastUpdated: "2025-03-11T23:00:00Z"
  },
  {
    id: "risk-002",
    protocol: "MarinadeLending",
    riskScore: 28,
    liquidity: 75.2,
    volatility: 25.7,
    securityRating: 85.5,
    lastUpdated: "2025-03-11T23:00:00Z"
  },
  {
    id: "risk-003",
    protocol: "JupiterSwap",
    riskScore: 8,
    liquidity: 94.8,
    volatility: 8.2,
    securityRating: 96.3,
    lastUpdated: "2025-03-11T23:00:00Z"
  }
];

// Mock News Items
export const mockNewsItems: NewsItem[] = [
  {
    id: "news-001",
    title: "Solana TVL Surpasses $15 Billion As DeFi Activity Accelerates",
    summary: "The Solana blockchain has seen a significant increase in total value locked, reaching a new all-time high and demonstrating growing confidence in the ecosystem.",
    url: "https://example.com/solana-tvl-surge",
    source: "DeFi Insights",
    sentiment: "positive",
    publishedAt: "2025-03-12T10:15:00Z"
  },
  {
    id: "news-002",
    title: "New Regulatory Framework for AI Trading Bots Proposed",
    summary: "Financial authorities have proposed new guidelines for AI-based trading systems, focusing on transparency and risk management.",
    url: "https://example.com/ai-trading-regulations",
    source: "Crypto Regulatory News",
    sentiment: "neutral",
    publishedAt: "2025-03-11T14:30:00Z"
  },
  {
    id: "news-003",
    title: "Market Volatility Expected as Major Protocol Upgrade Approaches",
    summary: "Analysts predict increased market volatility in the coming weeks as a major blockchain protocol prepares for a significant upgrade.",
    url: "https://example.com/market-volatility-prediction",
    source: "CryptoAnalysis Daily",
    sentiment: "negative",
    publishedAt: "2025-03-12T08:45:00Z"
  }
];

// Mock Price Historical Data (7 days of hourly data)
export const generateMockPriceData = (basePrice: number, days: number = 7): PriceDataPoint[] => {
  const now = Date.now();
  const hourlyData: PriceDataPoint[] = [];
  
  for (let i = days * 24; i >= 0; i--) {
    const timestamp = now - (i * 60 * 60 * 1000);
    const randomChange = (Math.random() - 0.45) * 5; // Slightly upward biased
    const price = basePrice * (1 + (randomChange / 100));
    
    hourlyData.push({
      timestamp,
      price: parseFloat(price.toFixed(2)),
      volume: Math.floor(Math.random() * 10000000) + 5000000
    });
    
    basePrice = price; // Use this price as base for next iteration
  }
  
  return hourlyData;
};

export const mockSolanaHistoricalPrices = generateMockPriceData(125);
export const mockNeuroFiHistoricalPrices = generateMockPriceData(3.5);

// Mock AI Models
export const mockAIModels: AIModel[] = [
  {
    id: "model-001",
    name: "PriceProphet v2.3",
    description: "Advanced price prediction model using transformer architecture and on-chain data",
    accuracy: 87.2,
    lastTrained: "2025-03-01T00:00:00Z",
    category: "price",
    version: "2.3.1"
  },
  {
    id: "model-002",
    name: "SentimentAnalyzer v1.8",
    description: "NLP model for crypto news and social media sentiment analysis",
    accuracy: 92.5,
    lastTrained: "2025-02-28T00:00:00Z",
    category: "sentiment",
    version: "1.8.5"
  },
  {
    id: "model-003",
    name: "RiskDetector v3.0",
    description: "Protocol risk assessment model with multi-factor analysis",
    accuracy: 94.1,
    lastTrained: "2025-03-10T00:00:00Z",
    category: "risk",
    version: "3.0.2"
  },
  {
    id: "model-004",
    name: "TradeBot Alpha",
    description: "Reinforcement learning model for automated trading strategy optimization",
    accuracy: 83.7,
    lastTrained: "2025-03-05T00:00:00Z",
    category: "trading",
    version: "0.9.4"
  }
]; 