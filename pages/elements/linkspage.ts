import { Page } from "@playwright/test";

export default class LinksPage{


    home: any;
    homer: any;
    created: any;
    noContent: any;
    moved: any;
    badRequest: any;
    unauthorized: any;
    forbidden: any;
    notFound: any;


    constructor(home: any, homer: any, created: any, noContent: any, moved: any, badRequest: any, unauthorized: any, forbidden: any, notFound: any){
        this.home=home;
        this.homer=homer;
        this.created=created;
        this.noContent=noContent;
        this.moved=moved;
        this.badRequest=badRequest;
        this.unauthorized=unauthorized;
        this.forbidden=forbidden;
        this.notFound=notFound;
    }
}

export class LinksPageBuilder{

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

    public get HomeDynamic(){
        return this.page.locator('#dynamicLink');
    }

    public async clickHomeDynamic(){
        await this.HomeDynamic.click();
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
        return this.page.locator('#invalid-url');
    }

    public async clickNotFound(){
        await this.NotFound.click();
    }

    build(){
        return new LinksPage(this.Home, this.HomeDynamic, this.Created, this.NoContent, this.Moved, this.BadRequest, this.Unauthorized, this.Forbidden, this.NotFound);
    }
}