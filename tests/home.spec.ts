import { test, expect } from '@playwright/test';

test('home page loads', async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);
  await expect(page.locator('body')).toBeVisible();
});

test('footer, sticky nav, and manifesto refinements hold', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  await expect(page.getByText('Who we work with')).toBeVisible();
  await expect(page.getByText('Fine chocolate brands')).toBeVisible();
  await expect(page.getByText('Craft chocolate makers')).toBeVisible();
  await expect(page.getByText('Importers and traders')).toBeVisible();
  await expect(page.getByText('Proposal build, sample data throughout.')).toHaveCount(0);
  await expect(page.locator('footer .legal')).toHaveText(/© \d{4} Tierra Viva Cacao Co\./);

  const navAtTop = await page.locator('.nav-links').boundingBox();
  await page.evaluate(() => window.scrollTo(0, 1100));
  await expect(page.locator('[data-nav]')).not.toHaveAttribute('data-top', '');
  const navSticky = await page.locator('.nav-links').boundingBox();
  expect(Math.abs((navAtTop?.x ?? 0) - (navSticky?.x ?? 0))).toBeLessThan(0.5);

  const firstLetter = page.locator('[data-letter]').first();
  await firstLetter.hover();
  await expect(firstLetter).toHaveClass(/is-active/);
  await expect(firstLetter.locator('.glyph')).toHaveCSS('opacity', '0');
});

test('mobile hero and manifesto do not overflow', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');

  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.body.scrollWidth,
    stripBackdrop: getComputedStyle(document.querySelector('.strip')!).backdropFilter,
    trailWidth: document.querySelector('[data-trail]')!.getBoundingClientRect().width,
  }));

  expect(metrics.scrollWidth).toBe(metrics.clientWidth);
  expect(metrics.stripBackdrop).toContain('blur(18px)');
  expect(metrics.trailWidth).toBeLessThanOrEqual(metrics.clientWidth);
});

test('lazy images reveal after entering the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');

  const media = page.locator('.media[data-img-reveal]');
  const count = await media.count();

  for (let i = 0; i < count; i += 1) {
    await page.evaluate((index) => {
      document.querySelectorAll<HTMLElement>('.media[data-img-reveal]')[index]?.scrollIntoView({
        block: 'center',
      });
    }, i);
    await page.waitForTimeout(300);
    await expect(media.nth(i)).toHaveClass(/is-in/);
    await expect(media.nth(i)).not.toHaveCSS('opacity', '0');
  }
});

test('Spanish route renders localized content and language state', async ({ page }) => {
  const response = await page.goto('/es/');
  expect(response?.status()).toBe(200);
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page).toHaveTitle(/Cacao regenerativo desde el origen/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Cacao regenerativo desde el origen');
  await expect(page.getByRole('navigation', { name: 'Navegación principal' })).toContainText('Trazabilidad');
  await expect(page.locator('.nav-language a[lang="es"]')).toHaveAttribute('aria-current', 'page');

  await page.getByText('Especificación completa', { exact: true }).click();
  await expect(page.getByText('Cultivo y poscosecha', { exact: true })).toBeVisible();

  const requestButton = page.getByRole('button', { name: 'Solicitar muestras' }).first();
  await expect(requestButton).toBeVisible();
  await requestButton.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Cuéntanos qué necesitas comprar' })).toBeVisible();
  await page.getByRole('button', { name: 'Enviar consulta' }).click();
  await expect(page.getByText('Este campo es obligatorio.').first()).toBeVisible();
});

test('mobile drawer opens and closes with an interruptible transition', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/es/');

  const toggle = page.locator('[data-nav-toggle]');
  const drawer = page.locator('[data-nav-drawer]');

  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(drawer).toHaveAttribute('data-open', '');
  await expect(drawer).toBeVisible();
  await expect(drawer.getByRole('link', { name: 'Origen' })).toBeVisible();

  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(drawer).not.toHaveAttribute('data-open', '');
  expect(await drawer.getAttribute('hidden')).toBeNull();
  await expect(drawer).toHaveAttribute('hidden', '', { timeout: 1000 });
});
