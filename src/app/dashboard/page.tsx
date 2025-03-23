'use client';

import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { TradingSignalCard, MarketCard, RiskCard } from '@/components/Dashboard';
import { useMarketData } from '@/hooks/useMarketData';
import { useTradingSignals } from '@/hooks/useTradingSignals';
import { useRiskAssessment } from '@/hooks/useRiskAssessment';
import { FiRefreshCw, FiTrendingUp, FiShield, FiActivity } from 'react-icons/fi';

export default function Dashboard() {
  const { data: marketData, loading: marketLoading, refresh: refreshMarkets } = useMarketData();
  const { signals, loading: signalsLoading, refresh: refreshSignals } = useTradingSignals();
  const { assessments, loading: assessmentsLoading, refresh: refreshAssessments } = useRiskAssessment();
  
  const refreshAll = () => {
    refreshMarkets();
    refreshSignals();
    refreshAssessments();
  };
  
  // Stats data
  const stats = [
    { name: 'Total Markets', value: marketData.length, icon: FiActivity, color: 'bg-blue-500' },
    { name: 'Trading Signals', value: signals.length, icon: FiTrendingUp, color: 'bg-green-500' },
    { name: 'Protocols Analyzed', value: assessments.length, icon: FiShield, color: 'bg-purple-500' },
  ];

  return (
    <DashboardLayout title="Dashboard">
      {/* Stats Overview */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
          <button 
            onClick={refreshAll}
            className="flex items-center text-primary-600 hover:text-primary-800"
          >
            <FiRefreshCw className="mr-1" />
            <span>Refresh</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg shadow-md p-4 flex items-center">
              <div className={`p-3 rounded-full ${stat.color} text-white mr-4`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recent Trading Signals */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Trading Signals</h2>
        {signalsLoading ? (
          <div className="text-center p-4">Loading signals...</div>
        ) : signals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {signals.slice(0, 3).map((signal) => (
              <TradingSignalCard key={signal.id} signal={signal} />
            ))}
          </div>
        ) : (
          <div className="text-center p-4 bg-white rounded-lg shadow-md">No trading signals available</div>
        )}
      </div>
      
      {/* Top Markets */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Markets</h2>
        {marketLoading ? (
          <div className="text-center p-4">Loading markets...</div>
        ) : marketData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {marketData.slice(0, 3).map((market) => (
              <MarketCard key={market.symbol} market={market} />
            ))}
          </div>
        ) : (
          <div className="text-center p-4 bg-white rounded-lg shadow-md">No market data available</div>
        )}
      </div>
      
      {/* Risk Assessments */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Protocol Risk Assessments</h2>
        {assessmentsLoading ? (
          <div className="text-center p-4">Loading risk assessments...</div>
        ) : assessments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assessments.slice(0, 3).map((assessment) => (
              <RiskCard key={assessment.id} assessment={assessment} />
            ))}
          </div>
        ) : (
          <div className="text-center p-4 bg-white rounded-lg shadow-md">No risk assessments available</div>
        )}
      </div>
    </DashboardLayout>
  );
} 