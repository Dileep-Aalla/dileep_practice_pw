import { test, expect } from "@playwright/test";

test.describe("Browser Actions", () => {
  test("launching browser", async ({ page }) => {
    await page.goto("https://www.google.com/");

    await page.waitForLoadState("networkidle");

    // Verify application launched by using title
    await expect(page).toHaveTitle("Google");

    // Locate Gmail button
    const gmailButton = page.locator('a[aria-label="Gmail "]');

    // Validate Gmail button visible
    await expect(gmailButton).toBeVisible();

    // Take full page screenshot
    await page.screenshot({
      path: "screenshots/gmail.png",
      fullPage: true,
    });
    //Launch a new application within the same tab or page by using the URL https://playwright.dev.
    await page.goto("https://playwright.dev");

    //Take the screenshot of the entire browser window.
    await page.screenshot({
      path: "screenshots/playwright.png",
      fullPage: true,
    });

    //Go back to the previous Google application.
    await page.goBack();

    //Move forward to the Playwright application.
    await page.goForward();

    //Move Reload to the Playwright application.
    await page.reload();
  });
});
