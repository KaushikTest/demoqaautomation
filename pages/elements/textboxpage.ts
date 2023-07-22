import { Page } from "@playwright/test";

export default class TextBoxPage{

    fullNameTextBox: any;
    emailTextBox: any;
    currentAddressTextBox: any;
    permanentAddressTextBox: any;
    submit: any;
    textBoxTab: any;
    constructor(textBoxTab:any,fullNameTextBox:any,emailTextBox:any,currentAddressTextBox:any,permanentAddressTextBox:any,submit:any){
        this.textBoxTab=textBoxTab;
        this.fullNameTextBox=fullNameTextBox;
        this.emailTextBox=emailTextBox;
        this.currentAddressTextBox=currentAddressTextBox;
        this.permanentAddressTextBox=permanentAddressTextBox;
        this.submit=submit;
    }
}

export class TextBoxBuilder{
    private page: Page;
    constructor(page:Page){
        this.page=page;
        return this;
    }

    public get TextBoxTab(){
        return this.page.locator('text="Text Box"');
    }

    public async clickTextBoxTab(){
        await this.TextBoxTab.click();
        return this;
    }

    public get FullNameTextBox(){
        return this.page.locator('#userName');
    }

    public async enterFullName(fullName:string){
        await this.FullNameTextBox.type(fullName);
        return this;
    }

    public get EmailTextBox(){
        return this.page.locator('#userEmail');
    }

    public async enterEmail(email:string){
        await this.EmailTextBox.type(email);
        return this;
    }

    public get CurrentAddressTextBox(){
        return this.page.locator('#currentAddress');
    }

    public async enterCurrentAddress(currentAddress:string){
        await this.CurrentAddressTextBox.type(currentAddress);
        return this;
    }

    public get PermanentAddressTextBox(){
        return this.page.locator('#permanentAddress');
    }
    
    public async enterPermanentAddress(permanentAddress:string){
        await this.PermanentAddressTextBox.type(permanentAddress);
        return this;
    }

    public get TextSubmitButton(){
        return this.page.locator('#submit');
    }

    public async clickSubmitButton(){
        await this.TextSubmitButton.click();
        return this;
    }

    public get printedName(){
        return this.page.locator('#name');
    }

    public async getNameText(){
        return this.printedName.allInnerTexts();
    }

    public get printedEmail(){
        return this.page.locator('#email');
    }

    public async getEmailText(){
        return this.printedEmail.allInnerTexts();
    }

    public get printedCurrentAddress(){
        return this.page.locator("//*[@id='output']//div//p[@id='currentAddress']");
    }

    public async getCurrentAddressText(){
        return this.printedCurrentAddress.allInnerTexts();
    }

    public get printedPermanentAdderss(){
        return this.page.locator("//*[@id='output']//div//p[@id='permanentAddress']");
    }

    public async getPermanentAddressText(){
        return this.printedPermanentAdderss.allInnerTexts();
    }
    
    build(){
        return new TextBoxPage(this.clickTextBoxTab,this.enterFullName,this.enterEmail,this.enterCurrentAddress,this.enterPermanentAddress,this.clickSubmitButton);
    }

}