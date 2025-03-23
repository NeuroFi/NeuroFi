/**
 * Format number with commas
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

/**
 * Format address for display
 */
export const formatAddress = (address: string): string => {
  if (!address) return "";
  const start = address.slice(0, 6);
  const end = address.slice(-4);
  return `${start}...${end}`;
};

/**
 * Get random item from array
 */
export const getRandomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Delay execution (sleep)
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Generate a random number between min and max
 */
export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Check if window object is available (client-side)
 */
export const isClient = (): boolean => {
  return typeof window !== "undefined";
};

/**
 * Get current date in YYYY-MM-DD format
 */
export const getCurrentDate = (): string => {
  const date = new Date();
  return date.toISOString().split("T")[0];
};

/**
 * Calculate percentage change
 */
export const calculatePercentageChange = (oldValue: number, newValue: number): number => {
  return ((newValue - oldValue) / oldValue) * 100;
}; 