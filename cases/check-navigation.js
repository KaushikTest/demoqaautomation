// @ts-check
import { ALERTS, BOOKSTORE, ELEMENTS, FORMS, INTERACTIONS, WIDGETS } from '../constants/demoqapageconstants';
import { BASELINK } from '../constants/linkconstants';
import { DemoWelcomePageClickElements } from '../pages/demoqawelcomepage';
import { getPage } from '../pages/common';

export async function testElementsNavigation(){
    const page = await getPage();
    await page.goto(BASELINK);
    await DemoWelcomePageClickElements(page,ELEMENTS);
    return page;
}
 
export async function testFormsNavigation(){
    const page = await getPage();
    await page.goto(BASELINK);
    await DemoWelcomePageClickElements(page,FORMS);
    return page;
}
 
export async function testAlertsNavigation(){
    const page = await getPage();
    await page.goto(BASELINK);
    await DemoWelcomePageClickElements(page,ALERTS);
    return page;
}
 
export async function testWidgetsNavigation(){
    const page = await getPage();
    await page.goto(BASELINK);
    await DemoWelcomePageClickElements(page,WIDGETS);
    return page;
}
 
export async function testInteractionsNavigation(){
    const page = await getPage();
    await page.goto(BASELINK);
    await DemoWelcomePageClickElements(page,INTERACTIONS);
    return page;
}

export async function testBookStoreNavigation(){
    const page = await getPage();
    await page.goto(BASELINK);
    await DemoWelcomePageClickElements(page,BOOKSTORE);
    return page;
}

