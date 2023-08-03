import { Page } from "@playwright/test";


export default class BrokenLinksPage{

    brokenImage: any;
    brokenLink: any;
    validLink: any;

    constructor(brokenImage: any, brokenLink: any, validLink: any){
        this.brokenImage=brokenImage;
        this.brokenLink=brokenLink;
        this.validLink=validLink;
    }

}

export class BrokenLinksPageBuilder{

    private page: Page;


    constructor(page: Page){
        this.page = page;
    }

    public get BrokenImage(){
        return this.page.hover('//*[@src="/images/Toolsqa_1.jpg"]');
    }

    public async hoverBrokenImage(){
        await this.BrokenImage;
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

    build(){
        return new BrokenLinksPage(this.BrokenImage, this.BrokenLink, this.ValidLink);
    }
}