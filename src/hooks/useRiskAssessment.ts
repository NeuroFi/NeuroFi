import { useState, useEffect, useCallback } from 'react';
import { RiskAssessment } from '../utils/types';
import { getProtocolRiskAssessments } from '../api/blockchain';

interface UseRiskAssessmentOptions {
  protocol?: string;
  refreshInterval?: number;
  initialFetch?: boolean;
}

interface UseRiskAssessmentReturn {
  assessments: RiskAssessment[];
  loading: boolean;
  error: Error | null;
  refresh: () => Promise<void>;
}

/**
 * Hook for fetching and managing protocol risk assessments
 * @param options Configuration options for the hook
 * @returns Risk assessments, loading state, error, and refresh function
 */
export function useRiskAssessment(options: UseRiskAssessmentOptions = {}): UseRiskAssessmentReturn {
  const { 
    protocol, 
    refreshInterval = 0, 
    initialFetch = true 
  } = options;
  
  const [assessments, setAssessments] = useState<RiskAssessment[]>([]);
  const [loading, setLoading] = useState<boolean>(initialFetch);
  const [error, setError] = useState<Error | null>(null);

  const fetchAssessments = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProtocolRiskAssessments(protocol);
      setAssessments(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred while fetching risk assessments'));
      console.error('Error fetching risk assessments:', err);
    } finally {
      setLoading(false);
    }
  }, [protocol]);

  // Initial fetch and interval setup
  useEffect(() => {
    if (initialFetch) {
      fetchAssessments();
    }

    if (refreshInterval > 0) {
      const intervalId = setInterval(fetchAssessments, refreshInterval);
      return () => clearInterval(intervalId);
    }
  }, [fetchAssessments, refreshInterval, initialFetch]);

  // Calculate overall risk score across all protocols
  const getOverallRiskScore = (): number => {
    if (assessments.length === 0) return 0;
    
    const sum = assessments.reduce((acc: number, assessment: RiskAssessment) => acc + assessment.riskScore, 0);
    return sum / assessments.length;
  };

  return {
    assessments,
    loading,
    error,
    refresh: fetchAssessments
  };
} 