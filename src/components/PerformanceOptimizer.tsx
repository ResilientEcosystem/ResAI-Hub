import { useState, useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function PerformanceOptimizer({ children, fallback }: PerformanceOptimizerProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check device performance capabilities
    const checkPerformance = () => {
      const hardwareConcurrency = navigator.hardwareConcurrency || 1;
      const memory = (navigator as any).deviceMemory || 4; // GB
      const connection = (navigator as any).connection;
      
      // Consider device low performance if:
      // - Less than 4 CPU cores
      // - Less than 4GB RAM
      // - Slow connection (2G or slow 3G)
      const isLowPerf = hardwareConcurrency < 4 || 
                       memory < 4 || 
                       (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g'));
      
      setIsLowPerformance(isLowPerf);
      setShouldRender(true);
    };

    // Small delay to ensure smooth initial load
    const timer = setTimeout(checkPerformance, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) {
    return null; // Don't render anything until we've checked performance
  }

  if (isLowPerformance && fallback) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

// Hook to check if animations should be disabled
export function usePerformanceMode() {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    const hardwareConcurrency = navigator.hardwareConcurrency || 1;
    const memory = (navigator as any).deviceMemory || 4;
    const connection = (navigator as any).connection;
    
    const isLowPerf = hardwareConcurrency < 4 || 
                     memory < 4 || 
                     (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g'));
    
    setIsLowPerformance(isLowPerf);
  }, []);

  return isLowPerformance;
} 