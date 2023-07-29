import { Page } from "@playwright/test";
import { BASELINK } from "../constants/linkconstants";
import { DynamicPropBuilder } from "../pages/elements/dynamicproperties";
import { ElementsPageBuilder } from "../pages/elements/elementspage";
import DemoQAWelcomePage from "../pages/demoqawelcomepage";

export async function waitForVisibleElenent(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickDynamicProperties();
    await new DynamicPropBuilder(page).visibleAfter();
    return page;
}