import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'NeuroTrade', href: '/neurotrade' },
  { name: 'NeuroScan', href: '/neuroscan' },
  { name: 'NeuroShield', href: '/neuroshield' },
  { name: 'NeuroDAO', href: '/neurodao' },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="h-10 w-10">
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
            </Link>
            <span className="ml-3 text-xl font-bold text-gray-900">NeuroFi</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-500 px-2 py-1 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <button className="btn btn-primary">
              Launch App
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-4 btn btn-primary">
              Launch App
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 