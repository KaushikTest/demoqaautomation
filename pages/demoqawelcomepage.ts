import {Page} from '@playwright/test';
import { ALERTS, BOOKSTORE, ELEMENTS, FORMS, INTERACTIONS, WIDGETS } from '../constants/demoqapageconstants';

export default class DemoQAWelcomePage{

    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public get Elements(){
        return this.page.locator(ELEMENTS);
    }

    public get elementForms(){
        return this.page.locator(FORMS);
    }

    public get elementAlerts(){
        return this.page.locator(ALERTS);
    }

    public get elementWidgets(){
        return this.page.locator(WIDGETS);
    }

    public get elementInteractions(){
        return this.page.locator(INTERACTIONS);
    }

    public get elmentBooks(){
        return this.page.locator(BOOKSTORE);
    }

    public async clickElements(){
        await this.Elements.click();
    }

    public async clickForms(){
        await this.elementForms.click();
    }

    public async clickAlerts(){
        await this.elementAlerts.click();
    }

    public async clickWidgets(){
        await this.elementWidgets.click();
    }

    public async clickInteractions(){
        await this.elementInteractions.click();
    }

    public async clickBooks(){
        await this.elmentBooks.click();
    }
}
