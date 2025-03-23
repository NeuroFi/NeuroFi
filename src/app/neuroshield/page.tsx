import React from 'react';
import Layout from '@/components/Layout';
import { FiShield, FiAlertTriangle, FiLock } from 'react-icons/fi';

export default function NeuroShieldPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-lg mb-4">
            <FiShield className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="heading-1 mb-6">NeuroShield</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our on-chain lending and liquidation management system with AI risk control models for safer DeFi interactions.
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