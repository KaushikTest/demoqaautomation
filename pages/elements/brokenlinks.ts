import { Page } from "@playwright/test";


export default class BrokenLinksPage{

    private page: Page;


    constructor(page: Page){
        this.page = page;
    }

    public get ValidLink(){
        return this.page.getByText('Click Here for Valid Link');
    }

    public async clickValidLink(){
        await this.ValidLink.click();
    }

    public get BrokenLink(){
        return this.page.getByText('Click Here for Broken Link');
    }

    public async clickInvalidLink(){
        await this.BrokenLink.click();
    }
}