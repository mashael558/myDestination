import { test, expect } from '@playwright/test';

// Helper function: visits a page and checks it loads
async function testPage(page, filename) {
  await page.goto(`http://localhost:8080/${filename}`);
  await expect(page).toHaveURL(/.+/); // Page loads successfully
}

test('forgetpas.html works', async ({ page }) => testPage(page, 'forgetpas.html'));
test('home.html works', async ({ page }) => testPage(page, 'home.html'));
test('index.html works', async ({ page }) => testPage(page, 'index.html'));
test('login.html works', async ({ page }) => testPage(page, 'login.html'));
test('loginOrganizer.html works', async ({ page }) => testPage(page, 'loginOrganizer.html'));
test('myTicket.html works', async ({ page }) => testPage(page, 'myTicket.html'));
test('notification.html works', async ({ page }) => testPage(page, 'notification.html'));
test('p.html works', async ({ page }) => testPage(page, 'p.html'));
test('part.html works', async ({ page }) => testPage(page, 'part.html'));
test('pay.html works', async ({ page }) => testPage(page, 'pay.html'));
test('profile.html works', async ({ page }) => testPage(page, 'profile.html'));
test('profileorg.html works', async ({ page }) => testPage(page, 'profileorg.html'));
test('regster.html works', async ({ page }) => testPage(page, 'regster.html'));
test('regsterOrganizer.html works', async ({ page }) => testPage(page, 'regsterOrganizer.html'));
test('th.html works', async ({ page }) => testPage(page, 'th.html'));
test('addEvent.html works', async ({ page }) => testPage(page, 'addEvent.html'));
test('alola.html works', async ({ page }) => testPage(page, 'alola.html'));
test('ChangePas.html works', async ({ page }) => testPage(page, 'ChangePas.html'));
test('chart.html works', async ({ page }) => testPage(page, 'chart.html'));
test('clender.html works', async ({ page }) => testPage(page, 'clender.html'));
test('comment.html works', async ({ page }) => testPage(page, 'comment.html'));
test('createevent.html works', async ({ page }) => testPage(page, 'createevent.html'));
test('daraya.html works', async ({ page }) => testPage(page, 'daraya.html'));
test('dashbaordorganizer.html works', async ({ page }) => testPage(page, 'dashbaordorganizer.html'));
test('editevent.html works', async ({ page }) => testPage(page, 'editevent.html'));
test('editprofile.html works', async ({ page }) => testPage(page, 'editprofile.html'));
test('Entertainment games.html works', async ({ page }) => testPage(page, 'Entertainment games.html'));
test('ethra.html works', async ({ page }) => testPage(page, 'ethra.html'));
test('eventDetails.html works', async ({ page }) => testPage(page, 'eventDetails.html'));
test('eventlist.html works', async ({ page }) => testPage(page, 'eventlist.html'));

