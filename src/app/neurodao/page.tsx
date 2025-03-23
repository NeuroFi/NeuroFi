import React from 'react';
import Layout from '@/components/Layout';
import { FiUsers, FiVote, FiTarget } from 'react-icons/fi';

export default function NeuroDAOPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-lg mb-4">
            <FiUsers className="h-10 w-10 text-orange-600" />
          </div>
          <h1 className="heading-1 mb-6">NeuroDAO</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our decentralized governance system allows users to participate in the upgrade and governance of AI models and strategies.
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