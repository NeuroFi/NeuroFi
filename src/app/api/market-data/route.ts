import { NextResponse } from 'next/server';
import { mockMarketData } from '@/utils/mockData';

// API route to fetch market data
export async function GET(request: Request) {
  // Get the URL from the request
  const { searchParams } = new URL(request.url);
  
  // Get the symbol parameter, if it exists
  const symbol = searchParams.get('symbol');
  
  // Filter data by symbol if provided
  let data = mockMarketData;
  if (symbol) {
    data = mockMarketData.filter(market => market.symbol === symbol);
  }
  
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Return the data as JSON
  return NextResponse.json({ 
    success: true, 
    data,
    timestamp: new Date().toISOString()
  });
} 