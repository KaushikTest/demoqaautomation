import { Page } from "@playwright/test";

export default class DynamicProp{

    enable: any;
    colorChange: any;
    visibleAfter: any;

    constructor(enable,colorChange,visibleAfter){
        this.enable=enable;
        this.colorChange=colorChange;
        this.visibleAfter=visibleAfter;
    }
}

export class DynamicPropBuilder{

    private page:Page;

    constructor(page:Page){
        this.page=page;
    }

    public get Enable(){
        return this.page.locator('#enableAfter');
    }

    public async enableVisible(){
        await this.Enable.isVisible();
    }

    public get ColorChange(){
        return this.page.locator('#colorChange');
    }

    public async colorChangeVisible(){
        await this.ColorChange.isVisible();
    }

    public get VisibleAfter(){
        return this.page.waitForSelector('#visibleAfter');
    }

    public async visibleAfter(){
        await (await this.VisibleAfter).isVisible();
    }

    build(){
        return new DynamicProp(this.Enable,this.ColorChange,this.VisibleAfter);
    }

}

