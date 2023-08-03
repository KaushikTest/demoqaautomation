import { Page } from "@playwright/test";
import { BASELINK } from "../constants/linkconstants";
import { BrokenLinksPageBuilder } from "../pages/elements/brokenlinks";
import { ElementsPageBuilder } from "../pages/elements/elementspage";
import DemoQAWelcomePage from "../pages/demoqawelcomepage";

export async function clickValidLink(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickBrokenLinks();
    await new BrokenLinksPageBuilder(page).clickValidLink();
    return page;
}

export async function clickBrokenLink(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickBrokenLinks();
    await new BrokenLinksPageBuilder(page).clickInvalidLink();
    return page;
}