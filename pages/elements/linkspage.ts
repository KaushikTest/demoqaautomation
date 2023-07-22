import { Page } from "@playwright/test";

export default class LinksPage{

private page:Page;

    constructor(page:Page){
        this.page=page;
    }

    public get Home(){
        return this.page.locator('#simpleLink');
    }
    public async clickHome(){
        await this.Home.click();
    }

    public get Homer(){
        return this.page.locator('#dynamicLink');
    }

    public async clickHomer(){
        await this.Homer.click();
    }

    public get Created(){
        return this.page.locator('#created');
    }

    public async clickCreated(){
        await this.Created.click();
    }

    public get NoContent(){
        return this.page.locator('#no-content')
    }

    public async clickNoContent(){
        await this.NoContent.click();
    }

    public get Moved(){
        return this.page.locator('#moved');
    }

    public async clickMoved(){
        await this.Moved.click();
    }

    public get BadRequest(){
        return this.page.locator('#bad-request');
    }

    public async clickBadRequest(){
        await this.BadRequest.click();
    }

    public get Unauthorized(){
        return this.page.locator('#unauthorized');
    }

    public async clickUnauthorized(){
        await this.Unauthorized.click();
    }
    
    public get Forbidden(){
        return this.page.locator('#forbidden');
    }

    public async clickForbidden(){
        await this.Forbidden.click();
    }

    public get NotFound(){
        return this.page.locator('invalid-url');
    }

    public async clickNotFound(){
        await this.NotFound.click();
    }
}