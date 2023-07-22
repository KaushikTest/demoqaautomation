import { Page } from "@playwright/test";


export default class RadioButtonPage{

    yesRadioButton: any;
    impressiveRadioButton: any;
    noRadioButton: any;

    constructor(yesRadioButton:any,impressiveRadioButton:any,noRadioButton:any){
        this.yesRadioButton=yesRadioButton;
        this.impressiveRadioButton=impressiveRadioButton;
        this.noRadioButton=noRadioButton;
    }
}


export  class RadioButtonPageBuilder{

    private page:Page;
    constructor(page:Page){
        this.page=page;
    }

    public get YesRadioButton(){
        return this.page.locator('text="Yes"');
    }

    public async clickYesRadioButton(){
        await this.YesRadioButton.check();
    }

    public get ImpressiveRadioButton(){
        return this.page.locator('text="Impressive"');
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

    build(){
        return new RadioButtonPage(this.YesRadioButton,this.ImpressiveRadioButton,this.NoRadioButton);
    }
}