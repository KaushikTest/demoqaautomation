import { Page } from '@playwright/test';

export default class Elements {

    textBox: any;
    checkBox: any;
    radioButton: any;
    webTables: any;
    buttons: any;
    links: any;
    brokenLinks: any;
    upload: any;
    dynamicProperties: any;

    constructor(textBox: any, checkBox: any, radioButton: any, webTables: any, buttons: any, links: any, brokenLinks: any, upload: any, dynamicProperties: any) {
        this.textBox = textBox;
        this.checkBox = checkBox;
        this.radioButton = radioButton;
        this.webTables = webTables;
        this.buttons = buttons;
        this.links = links;
        this.brokenLinks = brokenLinks;
        this.upload = upload;
        this.dynamicProperties = dynamicProperties;
    }

}

export class ElementsPageBuilder {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public get TextBox() {
        return this.page.locator('text="Text Box"');
    }

    public async clickTextBox() {
        await this.TextBox.click();
    }

    public get CheckBox() {
        return this.page.locator('text="Check Box"');
    }

    public async clickCheckBox() {
        await this.CheckBox.click();
    }

    public get RadioButton() {
        return this.page.locator('text="Radio Button"');
    }

    public async clickRadioButton() {
        await this.RadioButton.click();
    }

    public get WebTables() {
        return this.page.locator('text="Web Tables"');
    }

    public async clickWebTables() {
        await this.WebTables.click();
    }

    public get Buttons() {
        return this.page.locator('text="Buttons"');
    }

    public async clickButtons() {
        await this.Buttons.click();
    }

    public get Links() {
        return this.page.locator('text="Links"');
    }

    public async clickLinks() {
        await this.Links.click();
    }

    public get BrokenLinks() {
        return this.page.locator('text="Broken Links - Images"');
    }

    public async clickBrokenLinks() {
        await this.BrokenLinks.click();
    }

    public get Upload() {
        return this.page.locator('text="Upload and Download"');
    }

    public async clickUpload() {
        await this.Upload.click();
    }

    public get DynamicProperties() {
        return this.page.locator('text="Dynamic Properties"');
    }

    public async clickDynamicProperties() {
        await this.DynamicProperties.click();
    }

    build() {
        return new Elements(this.TextBox, this.CheckBox, this.RadioButton, this.WebTables, this.Buttons, this.Links, this.BrokenLinks, this.Upload, this.DynamicProperties);
    }
}