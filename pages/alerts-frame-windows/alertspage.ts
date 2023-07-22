import { Page } from "@playwright/test";


export default class AlertsPage{

    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public get BrowserWindows(){
        return this.page.locator('text="Browser Windows"');
    }

    public get Alerts(){
        return this.page.locator('text="Alerts"');
    }

    public get Frames(){
        return this.page.locator('text="Frames"');
    }

    public get NestedFrames(){
        return this.page.locator('text="Nested Frames"');
    }

    public get ModalDialogs(){
        return this.page.locator('text="Modal Dialogs"');
    }

    public async clickBrowserWindows(){
        await this.BrowserWindows.click();
    }

    public async clickAlerts(){
        await this.Alerts.click();
    }

    public async clickFrames(){
        await this.Frames.click();
    }

    public async clickNestedFrames(){
        await this.NestedFrames.click();
    }

    public async clickModalDialogs(){
        await this.ModalDialogs.click();
    }
}