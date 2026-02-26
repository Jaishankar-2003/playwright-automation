import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// test('Homepage should not have accessibility violations', async ({ page }) => {

//   await page.goto('https://www.amazon.in/');

//   const results = await new AxeBuilder({ page }).analyze();

//   console.log(results.violations);

//   expect(results.violations).toEqual([]);
// });


test('Navigation should be accessible', async ({ page }) => {

  await page.goto('https://www.amazon.in/');

 // await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();

  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).waitFor();

  const results = await new AxeBuilder({ page })
      .include('#twotabsearchtextbox')
      .analyze();

  expect(results.violations).toEqual([]);
});