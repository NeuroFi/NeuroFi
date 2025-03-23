import React from 'react';
import { FiX, FiInfo, FiAlertTriangle, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { useNotifications } from '@/contexts/NotificationsContext';

const NotificationToast: React.FC = () => {
  const { notifications, removeNotification } = useNotifications();

  if (notifications.length === 0) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <FiCheckCircle className="text-green-500" size={20} />;
      case 'error':
        return <FiAlertCircle className="text-red-500" size={20} />;
      case 'warning':
        return <FiAlertTriangle className="text-yellow-500" size={20} />;
      case 'info':
      default:
        return <FiInfo className="text-blue-500" size={20} />;
    }
  };

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700';
      case 'info':
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700';
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50 space-y-3">
      {notifications.map((notification) => (
        <div 
          key={notification.id}
          className={`p-4 rounded-lg shadow-md border flex items-start w-80 animate-fadeIn ${getBackgroundColor(notification.type)}`}
        >
          <div className="mr-3 pt-0.5">
            {getIcon(notification.type)}
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-800 dark:text-gray-200">
              {notification.message}
            </p>
          </div>
          <button 
            onClick={() => removeNotification(notification.id)}
            className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
          >
            <FiX size={18} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationToast; 