import React from 'react';
import Link from 'next/link';
import { FiTwitter, FiGithub, FiGlobe, FiMail } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
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
              <span className="ml-2 text-xl font-bold text-gray-900">NeuroFi</span>
            </div>
            <p className="text-gray-600">
              AI-Powered DeFi Smart Finance. Making DeFi intelligent, accessible, and secure with advanced AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/NeuroFi_" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-500">
                <FiTwitter size={20} />
              </a>
              <a href="https://github.com/NeuroFi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-500">
                <FiGithub size={20} />
              </a>
              <a href="https://www.neurofi.net" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-500">
                <FiGlobe size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/neurotrade" className="text-gray-600 hover:text-primary-500">
                  NeuroTrade
                </Link>
              </li>
              <li>
                <Link href="/neuroscan" className="text-gray-600 hover:text-primary-500">
                  NeuroScan
                </Link>
              </li>
              <li>
                <Link href="/neuroshield" className="text-gray-600 hover:text-primary-500">
                  NeuroShield
                </Link>
              </li>
              <li>
                <Link href="/neurodao" className="text-gray-600 hover:text-primary-500">
                  NeuroDAO
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/documentation" className="text-gray-600 hover:text-primary-500">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-gray-600 hover:text-primary-500">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/whitepaper" className="text-gray-600 hover:text-primary-500">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="/token" className="text-gray-600 hover:text-primary-500">
                  $NRF Token
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 hover:text-primary-500">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-primary-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} NeuroFi. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 