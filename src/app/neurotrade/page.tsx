import React from 'react';
import Layout from '@/components/Layout';
import { FiBarChart2, FiTrendingUp, FiPieChart, FiActivity } from 'react-icons/fi';

export default function NeuroTradePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
            <FiBarChart2 className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="heading-1 mb-6">NeuroTrade</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered trading system provides real-time signals and automated execution to optimize your trading strategy.
          </p>
        </div>

        <div className="text-center py-32">
          <h2 className="heading-2 mb-8">Coming Soon</h2>
          <p className="text-xl text-gray-600">
            We're currently working on this feature. Check back soon!
          </p>
        </div>
      </div>
    </Layout>
  );
} 