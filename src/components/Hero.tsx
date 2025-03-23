import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-8">
            <h1 className="heading-1 mb-6">
              <span className="gradient-text">AI-Powered</span> DeFi<br />
              Smart Finance
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              NeuroFi combines artificial intelligence with decentralized finance to provide intelligent investment tools, market analysis, automated trading, and risk management.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/neurotrade" className="btn btn-primary">
                Explore NeuroTrade
              </Link>
              <Link href="/documentation" className="btn btn-secondary flex items-center justify-center">
                Documentation <FiArrowRight className="ml-2" />
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">$125M+</div>
                <div className="text-sm text-gray-500">Trading Volume</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">15,000+</div>
                <div className="text-sm text-gray-500">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">92%</div>
                <div className="text-sm text-gray-500">Prediction Accuracy</div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-xl p-2 bg-gradient-to-br from-primary-100 to-primary-200">
            <div className="rounded-lg overflow-hidden bg-white p-6 shadow-lg">
              <div className="relative h-48 rounded-lg overflow-hidden bg-primary-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="absolute inset-0 h-full w-full p-8 opacity-20">
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
                
                {/* Trading chart visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-32 w-full px-4 flex items-end space-x-1">
                    {[35, 42, 38, 45, 40, 48, 51, 53, 57, 62, 58, 65, 60, 67, 64, 70, 73, 75, 72, 78].map((height, index) => (
                      <div 
                        key={index} 
                        className="h-full flex-1 rounded-sm" 
                        style={{ 
                          height: `${height}%`, 
                          backgroundColor: index % 2 === 0 ? '#8db0a7' : '#d1a298',
                          maxWidth: '8px'
                        }} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Trading Signals</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="font-medium">SOL</span>
                    </div>
                    <div className="text-green-600 font-semibold">BUY @ $123.50</div>
                    <div className="text-gray-500 text-sm">87.5% confidence</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      <span className="font-medium">ETH</span>
                    </div>
                    <div className="text-red-600 font-semibold">SELL @ $5,850.25</div>
                    <div className="text-gray-500 text-sm">76.2% confidence</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="font-medium">BTC</span>
                    </div>
                    <div className="text-green-600 font-semibold">BUY @ $78,100.00</div>
                    <div className="text-gray-500 text-sm">92.1% confidence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 