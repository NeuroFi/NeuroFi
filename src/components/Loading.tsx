import React from 'react';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'white';
  fullScreen?: boolean;
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'medium', 
  color = 'primary',
  fullScreen = false,
  message
}) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'w-5 h-5 border-2';
      case 'large':
        return 'w-12 h-12 border-4';
      case 'medium':
      default:
        return 'w-8 h-8 border-3';
    }
  };

  const getColorClass = () => {
    switch (color) {
      case 'secondary':
        return 'border-purple-500 border-t-transparent';
      case 'white':
        return 'border-white border-t-transparent';
      case 'primary':
      default:
        return 'border-blue-500 border-t-transparent';
    }
  };

  const spinner = (
    <div className={`animate-spin rounded-full ${getSizeClass()} ${getColorClass()}`}></div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 z-50">
        {spinner}
        {message && (
          <p className="mt-4 text-gray-700 dark:text-gray-300">{message}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {spinner}
      {message && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{message}</p>
      )}
    </div>
  );
};

export default Loading; 