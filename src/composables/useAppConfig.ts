import { computed } from 'vue';
import { getAppConfig, type AppConfig } from '@/AppConfig';

let cachedConfig: AppConfig | null = null;

/**
 * Composable for accessing app configuration
 * Make sure loadAppConfig() is called in main.ts before using this
 * 
 * @example
 * ```vue
 * <script setup>
 * const { apiBaseUrl, appName } = useAppConfig();
 * </script>
 * ```
 */
export function useAppConfig() {
  if (!cachedConfig) {
    cachedConfig = getAppConfig();
  }

  // Use computed for reactive access, but since config is static after load,
  // we can return direct values for better performance
  return {
    config: computed(() => cachedConfig!),
    apiBaseUrl: computed(() => cachedConfig!.apiBaseUrl),
    apiVersion: computed(() => cachedConfig!.apiVersion),
    appName: computed(() => cachedConfig!.appName),
    environment: computed(() => cachedConfig!.environment),
  };
}

