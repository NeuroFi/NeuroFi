import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { FiChevronRight, FiBarChart2, FiShield, FiUsers } from 'react-icons/fi';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      
      {/* Roadmap Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Roadmap</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our development plan for bringing AI-powered DeFi to the mainstream
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 inset-y-0 w-0.5 bg-primary-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative pl-10">
                  <div className="flex items-center mb-4">
                    <div className="absolute left-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold">Phase 1: Q2-Q3 2025</h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Product Prototype and Internal Testing</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FiChevronRight className="mt-1 text-primary-500 mr-2 flex-shrink-0" />
                        <span>NeuroTrade automated trading robot launches for internal testing</span>
                      </li>
                      <li className="flex items-start">
                        <FiChevronRight className="mt-1 text-primary-500 mr-2 flex-shrink-0" />
                        <span>NeuroScan sentiment analysis system launches test version</span>
                      </li>
                      <li className="flex items-start">
                        <FiChevronRight className="mt-1 text-primary-500 mr-2 flex-shrink-0" />
                        <span>NeuroShield risk control system launches on testnet, onboarding test users</span>
                      </li>
                      <li className="flex items-start">
                        <FiChevronRight className="mt-1 text-primary-500 mr-2 flex-shrink-0" />
                        <span>Completion of $NRF smart contract deployment and pre-audit</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative pl-10">
                  <div className="flex items-center mb-4">
                    <div className="absolute left-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold">Phase 2: Q4 2025</h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Public Testing and IDO</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FiChevronRight className="mt-1 text-primary-500 mr-2 flex-shrink-0" />
                        <span>Official launch of Beta version products</span>
                      </li>
                      <li className="flex items-start">
                        <FiChevronRight className="mt-1 text-primary-500 mr-2 flex-shrink-0" />
                        <span>Initiate IDO, distribute community tokens</span>
                      </li>
                      <li className="flex items-start">
                        <FiChevronRight className="mt-1 text-primary-500 mr-2 flex-shrink-0" />
                        <span>Integration with mainstream Solana DEXs and lending protocols</span>
                      </li>
                      <li className="flex items-start">
                        <FiChevronRight className="mt-1 text-primary-500 mr-2 flex-shrink-0" />
                        <span>Launch first round of liquidity incentives and data mining activities</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative pl-10">
                  <div className="flex items-center mb-4">
                    <div className="absolute left-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold">Phase 3: 2026 onwards</h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Multi-chain and Ecosystem Expansion</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FiChevronRight className="mt-1 text-primary-500 mr-2 flex-shrink-0" />
                        <span>Launch NeuroDAO governance functionality</span>
                      </li>
                      <li className="flex items-start">
                        <FiChevronRight className="mt-1 text-primary-500 mr-2 flex-shrink-0" />
                        <span>Expand NFT/GameFi data analysis capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <FiChevronRight className="mt-1 text-primary-500 mr-2 flex-shrink-0" />
                        <span>Complete Ethereum L2, Cosmos cross-chain deployment</span>
                      </li>
                      <li className="flex items-start">
                        <FiChevronRight className="mt-1 text-primary-500 mr-2 flex-shrink-0" />
                        <span>Explore AI+DeFi insurance and data market models</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Cards */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our suite of AI-powered DeFi tools designed to optimize your experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* NeuroTrade Card */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-blue-500 h-3"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FiBarChart2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">NeuroTrade</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  AI-based fully automated trading system that provides real-time trading signals and automatic execution capabilities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <FiChevronRight className="mt-1 text-blue-500 mr-2 flex-shrink-0" />
                    <span>High-frequency AI trading</span>
                  </li>
                  <li className="flex items-start">
                    <FiChevronRight className="mt-1 text-blue-500 mr-2 flex-shrink-0" />
                    <span>Intelligent strategy optimization</span>
                  </li>
                  <li className="flex items-start">
                    <FiChevronRight className="mt-1 text-blue-500 mr-2 flex-shrink-0" />
                    <span>Smart stop-loss and take-profit</span>
                  </li>
                </ul>
                <Link href="/neurotrade" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                  Learn more <FiChevronRight className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* NeuroScan Card */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-purple-500 h-3"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FiBarChart2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">NeuroScan</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  AI-based multi-dimensional on-chain analysis and market prediction tools to help users seize investment opportunities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <FiChevronRight className="mt-1 text-purple-500 mr-2 flex-shrink-0" />
                    <span>Real-time on-chain big data analysis</span>
                  </li>
                  <li className="flex items-start">
                    <FiChevronRight className="mt-1 text-purple-500 mr-2 flex-shrink-0" />
                    <span>AI-driven price prediction</span>
                  </li>
                  <li className="flex items-start">
                    <FiChevronRight className="mt-1 text-purple-500 mr-2 flex-shrink-0" />
                    <span>Sentiment analysis from social media</span>
                  </li>
                </ul>
                <Link href="/neuroscan" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800">
                  Learn more <FiChevronRight className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* NeuroShield Card */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-green-500 h-3"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <FiShield className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">NeuroShield</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  On-chain lending and liquidation management system combined with AI risk control models for safer DeFi interactions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <FiChevronRight className="mt-1 text-green-500 mr-2 flex-shrink-0" />
                    <span>Intelligent credit scoring</span>
                  </li>
                  <li className="flex items-start">
                    <FiChevronRight className="mt-1 text-green-500 mr-2 flex-shrink-0" />
                    <span>Lending liquidation early warning</span>
                  </li>
                  <li className="flex items-start">
                    <FiChevronRight className="mt-1 text-green-500 mr-2 flex-shrink-0" />
                    <span>Protocol risk scanning</span>
                  </li>
                </ul>
                <Link href="/neuroshield" className="inline-flex items-center text-green-600 font-medium hover:text-green-800">
                  Learn more <FiChevronRight className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* NeuroDAO Preview */}
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <FiUsers className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">NeuroDAO</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Our decentralized governance system allows users to participate in the upgrade and governance of AI models and strategies.
                </p>
                <p className="text-gray-600 mb-4">
                  Through NeuroDAO, token holders can vote to determine the direction of AI model optimization, contribute data for training, and propose new strategies and features.
                </p>
                <Link href="/neurodao" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-800">
                  Coming soon <FiChevronRight className="ml-1" />
                </Link>
              </div>
              <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Token Distribution</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Ecosystem incentives</span>
                      <span className="font-medium">40%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Team and development</span>
                      <span className="font-medium">20%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-400 h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Early investors</span>
                      <span className="font-medium">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-400 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience AI-Powered DeFi?</h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the revolution of intelligent finance and maximize your potential in the DeFi ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/documentation" className="btn bg-white text-primary-500 hover:bg-gray-100">
              Read Documentation
            </Link>
            <Link href="/neurotrade" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-500">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 