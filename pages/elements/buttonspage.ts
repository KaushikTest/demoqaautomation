import { Page } from "@playwright/test";

export default class ButtonsPage{


    private page:Page;
    constructor(page:Page){
        this.page=page;
    }

    public get DoubleClickMe(){
        return this.page.locator('#doubleClickBtn');
    }

    public async clickDoubleCLick(){
        await this.DoubleClickMe.click();
    }

    public get RightClickMe(){
        return this.page.locator('#rightClickBtn');
    }

    public async clickRightClick(){
        await this.RightClickMe.click();
    }

    public get ClickMe(){
        return this.page.locator('#ZjrUk');
    }

    public async clickClickMe(){
        await this.ClickMe.click();
    }
}