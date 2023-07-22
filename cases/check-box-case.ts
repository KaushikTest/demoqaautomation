import { Page } from "@playwright/test";
import { BASELINK } from "../constants/linkconstants";
import { CheckBoxBuilder } from "../pages/elements/checkbox";
import DemoQAWelcomePage from "../pages/demoqawelcomepage";


export async function testTextBox(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await (await new CheckBoxBuilder(page).clickCheckBoxTab())
        .clickHomeCheckBox();
        await page.waitForTimeout(10000);
        return page;
}