import { NextResponse } from 'next/server';
import { mockTradingSignals } from '@/utils/mockData';

// API route to fetch trading signals
export async function GET(request: Request) {
  // Get the URL from the request
  const { searchParams } = new URL(request.url);
  
  // Get the symbol and type parameters, if they exist
  const symbol = searchParams.get('symbol');
  const type = searchParams.get('type') as 'buy' | 'sell' | null;
  
  // Filter data by parameters if provided
  let data = mockTradingSignals;
  
  if (symbol) {
    data = data.filter(signal => signal.symbol === symbol);
  }
  
  if (type && (type === 'buy' || type === 'sell')) {
    data = data.filter(signal => signal.type === type);
  }
  
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 400));
  
  // Return the data as JSON
  return NextResponse.json({ 
    success: true, 
    data,
    timestamp: new Date().toISOString()
  });
} 