import { Page } from "@playwright/test";


export default class FormsPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public get PracticeForm(){
        return this.page.locator('text="Practice Form"');
    }

    public async clickPracticeForm(){
        await this.PracticeForm.click();
    }
}