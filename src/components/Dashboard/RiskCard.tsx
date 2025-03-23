import React from 'react';
import { RiskAssessment } from '@/utils/types';
import { FiShield, FiAlertTriangle, FiClock, FiDroplet } from 'react-icons/fi';

interface RiskCardProps {
  assessment: RiskAssessment;
  onClick?: () => void;
}

const RiskCard: React.FC<RiskCardProps> = ({ assessment, onClick }) => {
  // Get risk level text
  const getRiskLevelText = (riskScore: number) => {
    if (riskScore >= 8) return 'Very High';
    if (riskScore >= 6) return 'High';
    if (riskScore >= 4) return 'Medium';
    if (riskScore >= 2) return 'Low';
    return 'Very Low';
  };

  // Get risk color class
  const getRiskColorClass = (riskScore: number) => {
    if (riskScore >= 8) return 'text-red-600';
    if (riskScore >= 6) return 'text-orange-500';
    if (riskScore >= 4) return 'text-yellow-500';
    if (riskScore >= 2) return 'text-green-500';
    return 'text-green-600';
  };

  // Format timestamp
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer" 
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg">{assessment.protocol}</h3>
        </div>
        <div className="p-2 bg-gray-100 rounded-full">
          <FiShield size={18} className={getRiskColorClass(assessment.riskScore)} />
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Risk Rating:</span>
          <span className={`font-bold ${getRiskColorClass(assessment.riskScore)}`}>
            {getRiskLevelText(assessment.riskScore)} ({assessment.riskScore.toFixed(1)}/10)
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-gray-50 p-2 rounded-md">
          <span className="text-xs text-gray-500 block">Liquidity</span>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div 
              className="bg-blue-500 h-2 rounded-full" 
              style={{ width: `${assessment.liquidity * 10}%` }}
            ></div>
          </div>
        </div>
        <div className="bg-gray-50 p-2 rounded-md">
          <span className="text-xs text-gray-500 block">Volatility</span>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div 
              className="bg-purple-500 h-2 rounded-full" 
              style={{ width: `${assessment.volatility * 10}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-2 rounded-md mb-3">
        <span className="text-xs text-gray-500 block">Security Score</span>
        <div className="flex items-center mt-1">
          <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
            <div 
              className={`h-2 rounded-full ${assessment.securityRating > 7 ? 'bg-green-500' : assessment.securityRating > 4 ? 'bg-yellow-500' : 'bg-red-500'}`}
              style={{ width: `${assessment.securityRating * 10}%` }}
            ></div>
          </div>
          <span className="text-xs font-medium">{assessment.securityRating}/10</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center text-gray-500 text-sm mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center">
          <FiClock className="mr-1" size={14} />
          <span>Updated: {formatTimestamp(assessment.lastUpdated)}</span>
        </div>
        <div className="flex items-center">
          <FiAlertTriangle className="mr-1" size={14} />
          <span className={getRiskColorClass(assessment.riskScore)}>
            {assessment.riskScore >= 7 ? 'Caution' : 'Safe'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RiskCard; 