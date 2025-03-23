import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { RiskAssessment } from '../utils/types';
import { mockRiskAssessments } from '../utils/mockData';

// Initialize Solana connection (using devnet for demo purposes)
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

// Get account balance
export const getAccountBalance = async (publicKey: string): Promise<number> => {
  try {
    const address = new PublicKey(publicKey);
    const balance = await connection.getBalance(address);
    return balance / (1_000_000_000); // Convert lamports to SOL
  } catch (error) {
    console.error('Error fetching balance:', error);
    return 0;
  }
};

// Get account transactions (mock implementation)
export const getAccountTransactions = async (publicKey: string): Promise<any[]> => {
  // In a real implementation, this would query transactions from the blockchain
  // For demo purposes, we'll return mock data
  await new Promise(resolve => setTimeout(resolve, 600));
  
  return [
    {
      signature: 'sign_' + Math.random().toString(36).substring(2, 10),
      blockTime: Date.now() / 1000 - Math.random() * 86400,
      amount: Math.random() * 10,
      type: Math.random() > 0.5 ? 'send' : 'receive',
    },
    {
      signature: 'sign_' + Math.random().toString(36).substring(2, 10),
      blockTime: Date.now() / 1000 - Math.random() * 86400 * 2,
      amount: Math.random() * 5,
      type: Math.random() > 0.5 ? 'send' : 'receive',
    },
    {
      signature: 'sign_' + Math.random().toString(36).substring(2, 10),
      blockTime: Date.now() / 1000 - Math.random() * 86400 * 3,
      amount: Math.random() * 20,
      type: Math.random() > 0.5 ? 'send' : 'receive',
    }
  ];
};

// Get protocol risk assessments
export const getProtocolRiskAssessments = async (protocol?: string): Promise<RiskAssessment[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (protocol) {
    return mockRiskAssessments.filter(assessment => assessment.protocol === protocol);
  }
  
  return mockRiskAssessments;
}; 