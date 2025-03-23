import { NextResponse } from 'next/server';
import { mockRiskAssessments } from '@/utils/mockData';

// API route to fetch risk assessments
export async function GET(request: Request) {
  // Get the URL from the request
  const { searchParams } = new URL(request.url);
  
  // Get the protocol parameter, if it exists
  const protocol = searchParams.get('protocol');
  
  // Filter data by protocol if provided
  let data = mockRiskAssessments;
  if (protocol) {
    data = mockRiskAssessments.filter(assessment => assessment.protocol === protocol);
  }
  
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 350));
  
  // Return the data as JSON
  return NextResponse.json({ 
    success: true, 
    data,
    timestamp: new Date().toISOString()
  });
} 