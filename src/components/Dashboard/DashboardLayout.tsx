import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useWallet } from '@/contexts/WalletContext';
import { FiHome, FiTrendingUp, FiShield, FiUsers, FiSettings, FiCreditCard, FiPieChart, FiDollarSign } from 'react-icons/fi';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title = 'Dashboard' }) => {
  const { wallet, connect, disconnect, loading } = useWallet();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: FiHome },
    { name: 'Portfolio', href: '/dashboard/portfolio', icon: FiPieChart },
    { name: 'Trading', href: '/dashboard/trading', icon: FiDollarSign },
    { name: 'NeuroTrade', href: '/dashboard/neurotrade', icon: FiTrendingUp },
    { name: 'NeuroScan', href: '/dashboard/neuroscan', icon: FiTrendingUp },
    { name: 'NeuroShield', href: '/dashboard/neuroshield', icon: FiShield },
    { name: 'NeuroDAO', href: '/dashboard/neurodao', icon: FiUsers },
    { name: 'Settings', href: '/dashboard/settings', icon: FiSettings },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-gray-800">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
              <div className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="h-full w-full">
                  <circle cx="250" cy="250" r="200" fill="#e2d9d1" />
                  <g strokeWidth="4" strokeLinecap="round">
                    <line x1="150" y1="180" x2="250" y2="140" stroke="#a89e94" />
                    <line x1="150" y1="180" x2="250" y2="250" stroke="#a89e94" />
                    <line x1="150" y1="180" x2="250" y2="360" stroke="#a89e94" />
                    
                    <line x1="150" y1="320" x2="250" y2="140" stroke="#a89e94" />
                    <line x1="150" y1="320" x2="250" y2="250" stroke="#a89e94" />
                    <line x1="150" y1="320" x2="250" y2="360" stroke="#a89e94" />
                    
                    <line x1="250" y1="140" x2="350" y2="200" stroke="#7d92a3" />
                    <line x1="250" y1="250" x2="350" y2="200" stroke="#7d92a3" />
                    <line x1="250" y1="360" x2="350" y2="200" stroke="#7d92a3" />
                    
                    <line x1="250" y1="140" x2="350" y2="300" stroke="#7d92a3" />
                    <line x1="250" y1="250" x2="350" y2="300" stroke="#7d92a3" />
                    <line x1="250" y1="360" x2="350" y2="300" stroke="#7d92a3" />
                    
                    <circle cx="150" cy="180" r="15" fill="#b5aebd" />
                    <circle cx="150" cy="320" r="15" fill="#b5aebd" />
                    
                    <circle cx="250" cy="140" r="15" fill="#8db0a7" />
                    <circle cx="250" cy="250" r="15" fill="#8db0a7" />
                    <circle cx="250" cy="360" r="15" fill="#8db0a7" />
                    
                    <circle cx="350" cy="200" r="15" fill="#d1a298" />
                    <circle cx="350" cy="300" r="15" fill="#d1a298" />
                  </g>
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold text-white">NeuroFi</span>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                      <item.icon className="mr-3 h-5 w-5" aria-hidden="true" />
                      {item.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="p-4 border-t border-gray-700">
              {wallet.connected ? (
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FiCreditCard className="text-gray-400 mr-2" size={18} />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Connected Wallet</span>
                      <span className="text-sm text-gray-300 truncate w-48">
                        {wallet.address?.substring(0, 8)}...{wallet.address?.substring(wallet.address.length - 4)}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm">
                    <span className="text-xs text-gray-500 block">Balance</span>
                    <span>{wallet.balance.toFixed(4)} SOL</span>
                  </div>
                  <button
                    onClick={disconnect}
                    className="mt-2 w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button
                  onClick={connect}
                  disabled={loading}
                  className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                >
                  {loading ? 'Connecting...' : 'Connect Wallet'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex items-center">
              <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              {/* Mobile wallet connect button */}
              <div className="md:hidden">
                {wallet.connected ? (
                  <button
                    onClick={disconnect}
                    className="px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                  >
                    Disconnect
                  </button>
                ) : (
                  <button
                    onClick={connect}
                    disabled={loading}
                    className="px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                  >
                    {loading ? 'Connecting...' : 'Connect Wallet'}
                  </button>
                )}
              </div>
              
              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
                      <FiSettings size={18} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 