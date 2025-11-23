import { test, expect } from '@playwright/test';

// List all your HTML pages
const pages = [
  'addEvent.html',
  'alola.html',
  'ChangePas.html',
  'chart.html',
  'clender.html',
  'comment.html',
  'createevent.html',
  'daraya.html',
  'dashbaordorganizer.html',
  'editevent.html',
  'editprofile.html',
  'Entertainment games.html',
  'ethra.html',
  'eventDetails.html',
  'eventlist.html',
  'forgetpas.html',
  'home.html',
  'index.html',
  'login.html',
  'loginOrganizer.html',
  'myTicket.html',
  'notification.html',
  'p.html',
  'part.html',
  'pay.html',
  'profile.html',
  'profileorg.html',
  'regster.html',
  'regsterOrganizer.html'
];

const BASE_URL = 'https://mashael558.github.io/myDestination/';

for (const pageFile of pages) {
  test(`Test ${pageFile}`, async ({ page }) => {
    await page.goto(`${BASE_URL}${encodeURI(pageFile)}`);
    await expect(page).toHaveTitle(/./); // checks page loads
  });
}
