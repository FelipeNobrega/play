// @ts-check
const { test, expect } = require('@playwright/test');


test.beforeEach( async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')
});

test('Login com sucesso @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')
  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded()
  const button = await page.getByRole('button', { name: 'Send Mail' })
  await button.scrollIntoViewIfNeeded()
  await button.click()
  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('teste@gmail.com')
  await page.locator('#password').click()
  await page.locator('#password').fill('123456')
  await page.locator('#password').screenshot({ path: 'prints/elementosenha.png'});
  await page.screenshot({ path: 'prints/screenshot.png'});
  await page.getByRole('button', { name: 'login' }).click()
  await page.getByRole('button', { name: 'OK' }).click()
});

test('Login com sucesso 2', async ({ page }) => {
  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded()
  const button = await page.getByRole('button', { name: 'Send Mail' })
  await button.scrollIntoViewIfNeeded()
  await button.click()
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'prints/elementosenha.png'});
  await page.screenshot({ path: 'prints/screenshot.png'});
  await page.getByRole('button', { name: 'login' }).click()
  await page.getByRole('button', { name: 'OK' }).click()
});

test('Login com sucesso 3', async ({ page }) => {
  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded()
  const button = await page.getByRole('button', { name: 'Send Mail' })
  await button.scrollIntoViewIfNeeded()
  await button.click()
  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('teste@gmail.com')
  await page.locator('#password').click()
  await page.locator('#password').fill('123456')
  await page.locator('#password').screenshot({ path: 'prints/elementosenha.png'});
  await page.screenshot({ path: 'prints/screenshot.png'});
  await page.getByRole('button', { name: 'login' }).click()
  await page.getByRole('button', { name: 'OK' }).click()
});
