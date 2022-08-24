// @ts-check

import { Page } from '@playwright/test';
import { BASELINK } from '../constants/linkconstants';
import DemoQAWelcomePage from '../pages/demoqawelcomepage';

export async function testElementsNavigation(page: Page){
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    return page;
}
 
export async function testFormsNavigation(page: Page){
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickForms();
    return page;
}
 
export async function testAlertsNavigation(page: Page){

    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickAlerts();
    return page;
}
 
export async function testWidgetsNavigation(page: Page){

    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickWidgets();
    return page;
}
 
export async function testInteractionsNavigation(page: Page){

    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickInteractions();
    return page;
}

export async function testBookStoreNavigation(page: Page){

    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickBooks();
    return page;
}

