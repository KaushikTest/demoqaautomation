import { Page } from "@playwright/test";


export default class PracticeFormPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    public get FirstName(){
        return this.page.locator('#firstName');
    }

    public async enterFirstName(firstName: string){
        await this.FirstName.type(firstName);
    }

    public get LastName(){
        return this.page.locator('#lastName');
    }

    public async enterLastName(lastName: string){
        await this.LastName.type(lastName);
    }

    public get Email(){
        return this.page.locator('#userEmail');
    }

    public async enterEmail(email: string){
        await this.Email.type(email);
    }

    public get GenderMale(){
        return this.page.locator('#gender-radio-1');
    }

    public async clickGenderMale(){
        await this.GenderMale.click();
    }

    public get GenderFemale(){
        return this.page.locator('#gender-radio-2');
    }

    public async clickGenderFemale(){
        await this.GenderFemale.click();
    }

    public get GenderOthers(){
        return this.page.locator('#gender-radio-3');
    }

    public async clickGenderOthers(){
        await this.GenderOthers.click();
    }

    public get Mobile(){
        return this.page.locator('#userNumber');
    }

    public async enterMobile(mobile: string){
        await this.Mobile.type(mobile);
    }

    public get DateOfBirth(){
        return this.page.locator('#dateOfBirthInput');
    }

    public async enterDateOfBirth(dateOfBirth: string){
    }

}