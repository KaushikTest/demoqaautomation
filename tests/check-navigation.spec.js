// @ts-check
import { expect, test } from '@playwright/test';
import * as DemoCases from '../cases/check-navigation';
import { ALERTSLINK, BOOKSTORELINK, ELEMENTSLINK, FORMSLINK, INTERACTIONSLINK, WIDGETSLINK } from '../constants/linkconstants.js';

test.use({
    viewport: { width: 1920, height: 1080 },
    headless: false
});

test('testNavigationToElements', async ({page}) => {
    await DemoCases.testElementsNavigation(page);
    expect(page.url()).toEqual(ELEMENTSLINK);
    await page.close();
});

test('testFormsNavigation', async ({page}) => {
    await DemoCases.testFormsNavigation(page);
    expect(page.url()).toEqual(FORMSLINK);
    await page.close();
});

test('testAlertsNavigation', async ({page}) => {
    await DemoCases.testAlertsNavigation(page);
    expect(page.url()).toEqual(ALERTSLINK);
    await page.close();
});


test('testWidgetsNavigation', async ({page}) => {
    await DemoCases.testWidgetsNavigation(page);
    expect(page.url()).toEqual(WIDGETSLINK);
    await page.close();
});

test('testInteractionsNavigation', async ({page}) => {
    await DemoCases.testInteractionsNavigation(page);
    expect(page.url()).toEqual(INTERACTIONSLINK);
    await page.close();
});

test('testBookStoreNavigation', async ({page}) => {
    await DemoCases.testBookStoreNavigation(page);
    expect(page.url()).toEqual(BOOKSTORELINK);
    await page.close();
});

