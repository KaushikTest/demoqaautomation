// @ts-check
import { expect, test } from '@playwright/test';
import * as DemoCases from '../cases/check-navigation';
import { ALERTSLINK, BOOKSTORELINK, ELEMENTSLINK, FORMSLINK, INTERACTIONSLINK, WIDGETSLINK } from '../constants/linkconstants.js';

test.use({
    viewport: { width: 1920, height: 1080 },
});

test('testNavigationToElements', async () => {
    const page = await DemoCases.testElementsNavigation();
    expect(page.url()).toEqual(ELEMENTSLINK);
    await page.close();
});

test('testFormsNavigation', async () => {
    const page = await DemoCases.testFormsNavigation();
    expect(page.url()).toEqual(FORMSLINK);
    await page.close();
});

test('testAlertsNavigation', async () => {
    const page = await DemoCases.testAlertsNavigation();
    expect(page.url()).toEqual(ALERTSLINK);
    await page.close();
});


test('testWidgetsNavigation', async () => {
    const page = await DemoCases.testWidgetsNavigation();
    expect(page.url()).toEqual(WIDGETSLINK);
    await page.close();
});

test('testInteractionsNavigation', async () => {
    const page = await DemoCases.testInteractionsNavigation();
    expect(page.url()).toEqual(INTERACTIONSLINK);
    await page.close();
});

test('testBookStoreNavigation', async () => {
    const page = await DemoCases.testBookStoreNavigation();
    expect(page.url()).toEqual(BOOKSTORELINK);
    await page.close();
});

