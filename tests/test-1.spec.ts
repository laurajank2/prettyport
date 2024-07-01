import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://laura-jankowski.netlify.app/');

  await page.getByRole('link', { name: 'About' }).nth(1).click();
  await page.getByRole('link', { name: 'Projects' }).nth(1).click();
  await page.getByRole('link', { name: 'Engagement' }).nth(1).click();
  await page.getByRole('link', { name: 'Contact Me' }).nth(1).click();
  await page.getByRole('link', { name: 'Laura Jankowski' }).click();

  await expect(page.getByRole('link', { name: 'About' }).nth(1)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Engagement' })).toBeHidden();

  
});
