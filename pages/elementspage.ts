import { Page } from '@playwright/test';

export default class ElementsPage{

    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public get TextBox(){
        return this.page.locator('text="Text Box"');
    }

    public async clickTextBox(){
        await this.TextBox.click();
    }

    public get CheckBox(){
        return this.page.locator('text="Check Box"');
    }

    public async clickCheckBox(){
        await this.CheckBox.click();
    }

    public get RadioButton(){
        return this.page.locator('text="Radio Button"');
    }

    public async clickRadioButton(){
        await this.RadioButton.click();
    }

    public get WebTables(){
        return this.page.locator('text="Web Tables"');
    }

    public async clickWebTables(){
        await this.WebTables.click();
    }

    public get Buttons(){
        return this.page.locator('text="Buttons"');
    }

    public async clickButtons(){
        await this.Buttons.click();
    }

    public get Links(){
        return this.page.locator('text="Links"');
    }

    public async clickLinks(){
        await this.Links.click();
    }

    public get BrokenLinks(){
        return this.page.locator('text="Broken Links - Images"');
    }

    public async clickBrokenLinks(){
        await this.BrokenLinks.click();
    }

    public get Upload(){
        return this.page.locator('text="Upload and Download"');
    }

    public async clickUpload(){
        await this.Upload.click();
    }

    public get DynamicProperties(){
        return this.page.locator('text="Dynamic Properties"');
    }

    public async clickDynamicProperties(){
        await this.DynamicProperties.click();
    }
}