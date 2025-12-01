export interface AppConfig {
  apiBaseUrl: string;
  apiVersion?: string;
  appName?: string;
  environment?: string;
}

let appConfig: AppConfig | null = null;

/**
 * Validates the loaded configuration
 */
function validateConfig(config: unknown): config is AppConfig {
  if (!config || typeof config !== 'object') {
    return false;
  }
  const c = config as Record<string, unknown>;
  return typeof c.apiBaseUrl === 'string' && c.apiBaseUrl.length > 0;
}


/**
 * Loads the app configuration from app-config.json
 * This should be called once at application startup
 */
export async function loadAppConfig(): Promise<AppConfig> {
  if (appConfig) {
    return appConfig;
  }

    const response = await fetch('/app-config.json');
    if (!response.ok) {
      throw new Error(`Failed to load app-config.json: ${response.statusText}`);
    }
    
    const loadedConfig = await response.json();
    
    
    if (!validateConfig(loadedConfig)) 
      throw new Error("The AppConfig is not valid");
    
    return loadedConfig;
}

/**
 * Gets the current app configuration
 * Make sure to call loadAppConfig() first
 */
export function getAppConfig(): AppConfig {
  if (!appConfig) {
    throw new Error('App config not loaded. Call loadAppConfig() first.');
  }
  return appConfig;
}

