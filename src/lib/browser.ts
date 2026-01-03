/**
 * Browser detection utilities
 */

/**
 * Check if the current browser is Firefox
 * @returns boolean indicating if the browser is Firefox
 */
export const isFirefox = (): boolean => {
  // Check if window is defined (client-side)
  if (typeof window === "undefined") {
    return false;
  }

  // Check user agent for Firefox
  const userAgent = window.navigator.userAgent.toLowerCase();
  return userAgent.includes("firefox") && !userAgent.includes("seamonkey");
};

/**
 * Check if the current browser is Safari
 * @returns boolean indicating if the browser is Safari
 */
export const isSafari = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  return /^((?!chrome|android|crios|fxios).)*safari/.test(userAgent);
};

/**
 * Check if the current browser is Chrome/Chromium
 * @returns boolean indicating if the browser is Chrome/Chromium
 */
export const isChrome = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  return userAgent.includes("chrome") && !userAgent.includes("chromium");
};

/**
 * Check if the current browser is Edge
 * @returns boolean indicating if the browser is Edge
 */
export const isEdge = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  return userAgent.includes("edg");
};
