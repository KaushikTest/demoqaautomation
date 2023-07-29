import { Page } from "@playwright/test";
import { BASELINK } from "../constants/linkconstants";
import { LinksPageBuilder } from "../pages/elements/linkspage";
import { ElementsPageBuilder } from "../pages/elements/elementspage";
import DemoQAWelcomePage from "../pages/demoqawelcomepage";

export async function clickHome(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickLinks();
    await new LinksPageBuilder(page).clickHome();
    return page;
}

export async function clickHomeDynamicLink(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickLinks();
    await new LinksPageBuilder(page).clickHomeDynamic();
    return page;
}

export async function clickCreated(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickLinks();
    await new LinksPageBuilder(page).clickCreated();
    return page;
}

export async function clickNoContent(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickLinks();
    await new LinksPageBuilder(page).clickNoContent();
    return page;
}

export async function clickMoved(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickLinks();
    await new LinksPageBuilder(page).clickMoved();
    return page;
}

export async function clickBadRequest(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickLinks();
    await new LinksPageBuilder(page).clickBadRequest();
    return page;
}

export async function clickUnauthorized(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickLinks();
    await new LinksPageBuilder(page).clickUnauthorized();
    return page;
}

export async function clickForbidden(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickLinks();
    await new LinksPageBuilder(page).clickForbidden();
    return page;
}

export async function clickNotFound(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickLinks();
    await new LinksPageBuilder(page).clickNotFound();
    return page;
}