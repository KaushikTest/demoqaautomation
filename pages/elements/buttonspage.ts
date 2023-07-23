import { Page } from "@playwright/test";

export default class ButtonsPage{

    doubleClickMe: any;
    rightClickMe: any;
    clickMe: any;

    constructor(doubleClickMe:any,rightClickMe:any,clickMe:any){
        this.doubleClickMe=doubleClickMe;
        this.rightClickMe=rightClickMe;
        this.clickMe=clickMe;
    }

}

export class ButtonsPageBuilder{


    private page:Page;
    constructor(page:Page){
        this.page=page;
    }

    public get DoubleClickMe(){
        return this.page.locator('#doubleClickBtn');
    }

    public async clickDoubleCLick(){
        await this.DoubleClickMe.dblclick();
    }

    public get RightClickMe(){
        return this.page.locator('#rightClickBtn');
    }

    public async clickRightClick(){
        await this.RightClickMe.click({button:'right'});
    }

    public get ClickMe(){
        return this.page.locator('text="Click Me"');
    }

    public async clickClickMe(){
        await this.ClickMe.click();
    }

    build(){
        return new ButtonsPage(this.DoubleClickMe,this.RightClickMe,this.ClickMe);
    }
}