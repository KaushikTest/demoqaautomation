// @ts-check
import { ALERTS, BOOKSTORE, ELEMENTS, FORMS, INTERACTIONS, WIDGETS } from '../constants/demoqapageconstants';
import { BASELINK } from '../constants/linkconstants';
import { DemoWelcomePageClickElements } from '../pages/demoqawelcomepage';


export async function testElementsNavigation(page){
    await page.goto(BASELINK);
    await DemoWelcomePageClickElements(page,ELEMENTS);
    return page;
}
 

export async function testFormsNavigation(page){
    await page.goto(BASELINK);
    await DemoWelcomePageClickElements(page,FORMS);
    return page;
}
 

export async function testAlertsNavigation(page){

    await page.goto(BASELINK);
    await DemoWelcomePageClickElements(page,ALERTS);
    return page;
}
 

export async function testWidgetsNavigation(page){

    await page.goto(BASELINK);
    await DemoWelcomePageClickElements(page,WIDGETS);
    return page;
}
 

export async function testInteractionsNavigation(page){

    await page.goto(BASELINK);
    await DemoWelcomePageClickElements(page,INTERACTIONS);
    return page;
}


export async function testBookStoreNavigation(page){

    await page.goto(BASELINK);
    await DemoWelcomePageClickElements(page,BOOKSTORE);
    return page;
}

