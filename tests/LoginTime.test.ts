import { test, expect } from '@playwright/test';
import { LoginTime } from '../pageobjects/LoginTime';

test('Login exitoso', async ({ page, baseURL }) => {
  const login = new LoginTime(page);

  await page.goto(`${baseURL}route=account/login`);

 
  await expect(login.userId).toBeVisible();
  await expect(login.password).toBeVisible();
  await expect(login.signInButton).toBeEnabled();


  await login.login('test@test.com', 'password123');

 
  await expect(page).toHaveTitle('My Account');
});