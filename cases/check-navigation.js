// @ts-check
import { BASELINK } from '../constants/linkconstants';
import DemoQAWelcomePage from '../pages/demoqawelcomepage';

export async function testElementsNavigation(page){
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    return page;
}
 
export async function testFormsNavigation(page){
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickForms();
    return page;
}
 
export async function testAlertsNavigation(page){

    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickAlerts();
    return page;
}
 
export async function testWidgetsNavigation(page){

    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickWidgets();
    return page;
}
 
export async function testInteractionsNavigation(page){

    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickInteractions();
    return page;
}

export async function testBookStoreNavigation(page){

    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickBooks();
    return page;
}

