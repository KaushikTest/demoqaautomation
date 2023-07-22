import { Page } from "@playwright/test";
import { BASELINK } from "../constants/linkconstants";
import DemoQAWelcomePage from "../pages/demoqawelcomepage";
import { TextBoxBuilder } from "../pages/elements/textboxpage";


export async function testTextBox(page: Page) {
    await page.goto(BASELINK);
    await new DemoQAWelcomePage(page).clickElements();
    await (await (await (await (await (await new TextBoxBuilder(page)
        .clickTextBoxTab())
        .enterFullName('somerandomname'))
        .enterEmail('somerandomemail@emailrandom.com'))
        .enterCurrentAddress('currentaddress'))
        .enterPermanentAddress('permanentaddress'))
        .clickSubmitButton();
        return page;
}