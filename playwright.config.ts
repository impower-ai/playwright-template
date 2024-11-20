import { defineConfig, devices } from "@playwright/test";

export default defineConfig({

	// Playwright behavior configuration

	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,

	// Report configuration

	reporter: [
		["list"],
		["monocart-reporter", {
			name: "Monocart Report",
			outputFile: "./test-results/report.html"
		}]
	],

	// Global project configuration

	globalSetup: "./src/hooks/global.setup.ts",
	globalTeardown: "./src/hooks/global.teardown.ts",

	use: {
		trace: 'on-first-retry',
		...devices['Desktop Chrome'],
		viewport: {
			width: 1920,
			height: 1080
		}
	},

	// Test matching and project configuration

	testDir: './tests',
	testMatch: "*.spec.ts",

	projects: [
		{
			name: 'e2e',
			testDir: "./tests/e2e"
		},
		{
			name: 'component',
			testDir: "./tests/component"
		},
		{
			name: 'integration',
			testDir: "./tests/integration"
		},
	]
});
