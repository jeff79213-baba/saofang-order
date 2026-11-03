import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:5173',
    ...devices['Pixel 5'],
  },
  webServer: {
    command: 'npm run dev',
    env: { VITE_USE_MOCK: 'true' },
    url: 'http://localhost:5173',
    reuseExistingServer: false,
    timeout: 120000,
  },
})
