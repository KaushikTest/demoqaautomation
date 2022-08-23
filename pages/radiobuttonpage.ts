import { Page } from "@playwright/test";

export default class RadioButtonPage{

    private page:Page;
    constructor(page:Page){
        this.page=page;
    }

    public get YesRadioButton(){
        return this.page.locator('#yesRadio');
    }

    public async clickYesRadioButton(){
        await this.YesRadioButton.click();
    }

    public get ImpressiveRadioButton(){
        return this.page.locator('#impressiveRadio');
    }
    
    public async clickImpressiveRadioButton(){
        await this.ImpressiveRadioButton.click();
    }

    public get NoRadioButton(){
        return this.page.locator('noRadio')
    }

    public async clickNoRadioButton(){
        await this.NoRadioButton.click();
    }
}