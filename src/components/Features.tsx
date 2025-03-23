import React from 'react';
import Link from 'next/link';
import { 
  FiBarChart2, 
  FiShield, 
  FiZap, 
  FiUsers, 
  FiTrendingUp, 
  FiSearch, 
  FiActivity, 
  FiLock 
} from 'react-icons/fi';

const features = [
  {
    name: 'NeuroTrade',
    description: 'AI-powered trading robot that analyzes markets and executes high-frequency arbitrage and trend strategies.',
    icon: FiTrendingUp,
    href: '/neurotrade',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'NeuroScan',
    description: 'Multi-dimensional on-chain analysis and market prediction tools to help users seize investment opportunities.',
    icon: FiSearch,
    href: '/neuroscan',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    name: 'NeuroShield',
    description: 'Lending and liquidation management system with AI risk control models for safer DeFi interactions.',
    icon: FiShield,
    href: '/neuroshield',
    color: 'bg-green-100 text-green-600',
  },
  {
    name: 'NeuroDAO',
    description: 'Decentralized governance system allowing users to participate in the upgrade and governance of AI models.',
    icon: FiUsers,
    href: '/neurodao',
    color: 'bg-orange-100 text-orange-600',
  },
];

const detailedFeatures = [
  {
    title: 'High-Frequency AI Trading',
    description: 'Analyze markets and execute high-frequency arbitrage and trend strategies based on our deep learning models.',
    icon: FiZap,
  },
  {
    title: 'Real-time On-chain Analysis',
    description: 'Monitor wallet activities, liquidity pool changes, and whale movements through our sophisticated data analytics.',
    icon: FiBarChart2,
  },
  {
    title: 'Intelligent Credit Scoring',
    description: 'Analyze historical interaction behaviors, asset volatility, and on-chain activity to calculate personalized credit ratings.',
    icon: FiActivity,
  },
  {
    title: 'Secure Protocol Risk Scanning',
    description: 'Identify risk exposures in DeFi lending protocols, such as liquidity depletion and potential liquidation chain reactions.',
    icon: FiLock,
  },
];

const Features: React.FC = () => {
  return (
    <div className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">AI-Enhanced DeFi Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides intelligent tools powered by AI to optimize your DeFi experience and maximize returns.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Link key={feature.name} href={feature.href} className="group">
              <div className="h-full p-6 bg-white rounded-xl shadow-md transition duration-300 hover:shadow-lg">
                <div className={`${feature.color} p-3 rounded-lg inline-block mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">Powered by Advanced AI Technology</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform leverages cutting-edge artificial intelligence and machine learning algorithms to analyze vast amounts of on-chain and market data, providing you with actionable insights and automated trading strategies.
              </p>
              
              <div className="space-y-6">
                {detailedFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-primary-100 p-2 rounded-md">
                        <feature.icon className="h-5 w-5 text-primary-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-100 to-primary-200 rounded-xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">AI Model Performance</h3>
                  <p className="text-gray-600">Continuously improving through machine learning</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Price Prediction</span>
                      <span className="font-semibold">87.2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87.2%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Sentiment Analysis</span>
                      <span className="font-semibold">92.5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '92.5%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Risk Assessment</span>
                      <span className="font-semibold">94.1%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '94.1%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Trading Strategy</span>
                      <span className="font-semibold">83.7%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '83.7%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between text-sm text-gray-500">
                    <div>Last trained: March 10, 2025</div>
                    <div>Models: 4 active</div>
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

export default Features; 