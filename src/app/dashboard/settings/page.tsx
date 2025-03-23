import React, { useState } from 'react';
import { DashboardLayout } from '@/components/Dashboard';
import { FiSave, FiRefreshCw, FiKey, FiShield, FiTrendingUp, FiBell } from 'react-icons/fi';

const Settings = () => {
  // State for form values
  const [apiKeys, setApiKeys] = useState({
    binance: '',
    coinbase: '',
    kucoin: ''
  });
  
  const [tradingPreferences, setTradingPreferences] = useState({
    autoTrade: false,
    riskLevel: 'medium',
    maxDailyTrades: 5
  });
  
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false
  });
  
  // Handle form submissions
  const handleApiKeysSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving API keys:', apiKeys);
    // Here you would save to backend/local storage
  };
  
  const handleTradingPreferencesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving trading preferences:', tradingPreferences);
    // Here you would save to backend/local storage
  };
  
  const handleNotificationsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving notification settings:', notifications);
    // Here you would save to backend/local storage
  };
  
  return (
    <DashboardLayout title="Settings">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* API Keys Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FiKey className="mr-2 text-blue-500" size={20} />
            <h2 className="text-xl font-semibold">API Keys</h2>
          </div>
          <form onSubmit={handleApiKeysSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Binance API Key</label>
              <input
                type="password"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                value={apiKeys.binance}
                onChange={(e) => setApiKeys({...apiKeys, binance: e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Coinbase API Key</label>
              <input
                type="password"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                value={apiKeys.coinbase}
                onChange={(e) => setApiKeys({...apiKeys, coinbase: e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">KuCoin API Key</label>
              <input
                type="password"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                value={apiKeys.kucoin}
                onChange={(e) => setApiKeys({...apiKeys, kucoin: e.target.value})}
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              <FiSave className="mr-2" /> Save API Keys
            </button>
          </form>
        </div>
        
        {/* Trading Preferences Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FiTrendingUp className="mr-2 text-green-500" size={20} />
            <h2 className="text-xl font-semibold">Trading Preferences</h2>
          </div>
          <form onSubmit={handleTradingPreferencesSubmit}>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={tradingPreferences.autoTrade}
                  onChange={(e) => setTradingPreferences({
                    ...tradingPreferences,
                    autoTrade: e.target.checked
                  })}
                />
                <span>Enable Automated Trading</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Risk Level</label>
              <select
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                value={tradingPreferences.riskLevel}
                onChange={(e) => setTradingPreferences({
                  ...tradingPreferences,
                  riskLevel: e.target.value
                })}
              >
                <option value="low">Low Risk</option>
                <option value="medium">Medium Risk</option>
                <option value="high">High Risk</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Max Daily Trades</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                value={tradingPreferences.maxDailyTrades}
                onChange={(e) => setTradingPreferences({
                  ...tradingPreferences,
                  maxDailyTrades: parseInt(e.target.value) || 0
                })}
                min="0"
                max="100"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              <FiSave className="mr-2" /> Save Preferences
            </button>
          </form>
        </div>
        
        {/* Notifications Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FiBell className="mr-2 text-purple-500" size={20} />
            <h2 className="text-xl font-semibold">Notification Settings</h2>
          </div>
          <form onSubmit={handleNotificationsSubmit}>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={notifications.email}
                  onChange={(e) => setNotifications({
                    ...notifications,
                    email: e.target.checked
                  })}
                />
                <span>Email Notifications</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={notifications.push}
                  onChange={(e) => setNotifications({
                    ...notifications,
                    push: e.target.checked
                  })}
                />
                <span>Push Notifications</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={notifications.sms}
                  onChange={(e) => setNotifications({
                    ...notifications,
                    sms: e.target.checked
                  })}
                />
                <span>SMS Notifications</span>
              </label>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              <FiSave className="mr-2" /> Save Notification Settings
            </button>
          </form>
        </div>
        
        {/* Security Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FiShield className="mr-2 text-red-500" size={20} />
            <h2 className="text-xl font-semibold">Security</h2>
          </div>
          <div className="mb-4">
            <button
              className="flex items-center justify-center w-full p-2 mb-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Change Password
            </button>
            <button
              className="flex items-center justify-center w-full p-2 mb-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Enable Two-Factor Authentication
            </button>
            <button
              className="flex items-center justify-center w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <FiRefreshCw className="mr-2" /> Reset API Keys
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings; 