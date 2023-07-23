import { Page } from "@playwright/test";
import { BASELINK } from "../constants/linkconstants";
import { ButtonsPageBuilder } from "../pages/elements/buttonspage";
import { ElementsPageBuilder } from "../pages/elements/elementspage";
import DemoQAWelcomePage from "../pages/demoqawelcomepage";

export async function clickMeClick(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickButtons();
    await new ButtonsPageBuilder(page).clickClickMe();
    return page;
}

export async function doubleClickMeClick(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickButtons();
    await new ButtonsPageBuilder(page).clickDoubleCLick();
    return page;
}

export async function rightClickMeClick(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickButtons();
    await new ButtonsPageBuilder(page).clickRightClick();
    return page;
}