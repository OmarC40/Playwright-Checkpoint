import { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig={
  //testMatch:["tests/uploadDownload.test.ts"],
  use:{
    baseURL:"https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot:"on",
    video:"on",
    launchOptions:{
      slowMo:1000
    }
  },
  retries:0,
  reporter: [
    ["html", { open: "never" }],
    ["json", { outputFile: "jsonReports/jsonReport.json" }],
    ["dot"]
]
}

export default config;

