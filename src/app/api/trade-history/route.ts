import { NextResponse } from 'next/server';
import { Trade } from '@/utils/types';

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
  },
  {
    id: 'trade-5',
    pair: 'ETH/BTC',
    side: 'buy',
    price: 0.0542,
    amount: 2.0,
    total: 0.1084,
    baseAsset: 'ETH',
    quoteAsset: 'BTC',
    timestamp: new Date(Date.now() - 259200000).toISOString(),
    fee: 0.001084,
    feeCurrency: 'BTC',
    status: 'completed',
    orderId: 'order-5'
  },
  {
    id: 'trade-6',
    pair: 'AVAX/USDT',
    side: 'buy',
    price: 32.18,
    amount: 15,
    total: 482.7,
    baseAsset: 'AVAX',
    quoteAsset: 'USDT',
    timestamp: new Date(Date.now() - 345600000).toISOString(),
    fee: 0.48,
    feeCurrency: 'USDT',
    status: 'completed',
    orderId: 'order-6'
  }
];

export async function GET(request: Request) {
  // Get URL parameters
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit') as string) : 10;
  
  // Simulate a delay like a real API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return mock data with requested limit
  return NextResponse.json(mockTrades.slice(0, limit));
} 