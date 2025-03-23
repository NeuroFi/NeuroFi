import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getAccountBalance, getAccountTransactions } from '../api/blockchain';

// Define the wallet context type
interface WalletContextType {
  wallet: {
    connected: boolean;
    address: string | null;
    balance: number;
    transactions: any[];
  };
  connect: () => Promise<void>;
  disconnect: () => void;
  refreshBalance: () => Promise<void>;
  loading: boolean;
}

// Create the context with a default value
const WalletContext = createContext<WalletContextType>({
  wallet: {
    connected: false,
    address: null,
    balance: 0,
    transactions: [],
  },
  connect: async () => {},
  disconnect: () => {},
  refreshBalance: async () => {},
  loading: false,
});

// Hook to use the wallet context
export const useWallet = () => useContext(WalletContext);

// Wallet provider component
interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [wallet, setWallet] = useState({
    connected: false,
    address: null as string | null,
    balance: 0,
    transactions: [] as any[],
  });
  const [loading, setLoading] = useState(false);

  // Connect wallet (mock implementation)
  const connect = async () => {
    setLoading(true);
    try {
      // In a real implementation, this would interact with a wallet adapter
      // For demo purposes, we'll simulate a connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate a mock wallet address
      const mockAddress = '8xNnR7HAKhfJzGZwzGNuCiTGUULJjHNrZxYs9Pq4MxBk';
      
      // Get initial balance and transactions
      const balance = await getAccountBalance(mockAddress);
      const transactions = await getAccountTransactions(mockAddress);
      
      setWallet({
        connected: true,
        address: mockAddress,
        balance,
        transactions,
      });
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setLoading(false);
    }
  };

  // Disconnect wallet
  const disconnect = () => {
    setWallet({
      connected: false,
      address: null,
      balance: 0,
      transactions: [],
    });
  };

  // Refresh wallet balance
  const refreshBalance = async () => {
    if (!wallet.address) return;
    
    setLoading(true);
    try {
      const balance = await getAccountBalance(wallet.address);
      const transactions = await getAccountTransactions(wallet.address);
      
      setWallet(prev => ({
        ...prev,
        balance,
        transactions,
      }));
    } catch (error) {
      console.error('Error refreshing balance:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WalletContext.Provider
      value={{
        wallet,
        connect,
        disconnect,
        refreshBalance,
        loading,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}; 