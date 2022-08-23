import { Page } from "@playwright/test";

export default class TextBoxPage{

    private page:Page;
    constructor(page:Page){
        this.page=page;
    }

    public get FullNameTextBox(){
        return this.page.locator('#userName');
    }

    public async enterFullName(fullName:string){
        await this.FullNameTextBox.type(fullName);
    }

    public get EmailTextBox(){
        return this.page.locator('#userEmail');
    }

    public async enterEmail(email:string){
        await this.EmailTextBox.type(email);
    }

    public get CurrentAddressTextBox(){
        return this.page.locator('#currentAddress');
    }

    public async enterCurrentAddress(currentAddress:string){
        await this.CurrentAddressTextBox.type(currentAddress);
    }

    public get PermanentAddressTextBox(){
        return this.page.locator('#permanentAddress');
    }
    
    public async enterPermanentAddress(permanentAddress:string){
        await this.PermanentAddressTextBox.type(permanentAddress);
    }

    public get TextSubmitButton(){
        return this.page.locator('#submit');
    }

    public async clickSubmitButton(){
        await this.TextSubmitButton.click();
    }

   
}
