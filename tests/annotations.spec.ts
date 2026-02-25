import { test, expect, Locator } from '@playwright/test';
import { assert } from 'node:console';



test('normal test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
});


test.fixme('Fixme example test @fixme', async ({ page }) => {
  await page.goto('https://example.com');
});

test.fail('Fail example test @fail', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

    const expected : Locator = page.getByRole('heading', { name: /Automation Testing Practice/i });

    const expec = await expected.innerText();

    console.log(expec);

    const string = "Automation Testing Practice";

    expect(expec).toBe("utomation Testing Practice");


});


test('Slow test example @slow', async ({ page }) => {
 test.slow();

  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForTimeout(3000);
});



/* ---------------------------------------------------
   7️⃣  Grouping Tests with describe
--------------------------------------------------- */

test.describe('Grouped Tests @group', {
  tag: '@report',
  annotation: { type: 'category', description: 'Grouped test examples' },
}, () => {

  test.beforeAll(async () => {
    console.log('Runs before all tests in group');
  });

  test.afterAll(async () => {
    console.log('Runs after all tests in group');
  });

  test('Grouped test 1 @fast', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page.locator('h1:visible')).toBeVisible();
  });

  test('Grouped test 2 with multiple tags', {
    tag: ['@slow', '@vrt'],
    annotation: [
      { type: 'issue', description: 'https://github.com/microsoft/playwright/issues/23180' },
      { type: 'performance', description: 'Very slow test' },
    ],
  }, async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);
  });
});


test.describe('Chromium Only Group @groupskip', () => {

  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');

  test('@Test1', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle("Automation Testing Practice");
    console.log("This test runs only in Chromium");
  });

  test('@Test2', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle("Automation Testing Practice");
    console.log("This test runs only in Chromium");
  });

});


test('Login with known issue', {
  annotation: {
    type: 'issue',
    description: 'BUG-101: Login failing in staging',
  },
}, async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

});