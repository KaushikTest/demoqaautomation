import { Page } from "@playwright/test";
import { BASELINK } from "../constants/linkconstants";
import { RadioButtonPageBuilder } from "../pages/elements/radiobuttonpage";
import { ElementsPageBuilder } from "../pages/elements/elementspage";
import DemoQAWelcomePage from "../pages/demoqawelcomepage";


export async function yesRadioButtonClick(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickRadioButton();
    await new RadioButtonPageBuilder(page).clickYesRadioButton();
    return page;
}

export async function impressiveRadioButtonClick(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await new ElementsPageBuilder(page).clickRadioButton();
    await new RadioButtonPageBuilder(page).clickImpressiveRadioButton();
    return page;
}