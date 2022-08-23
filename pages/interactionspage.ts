import { Page } from "@playwright/test";


export default class InteractionsPage{

    private page:Page;
    constructor(page:Page){
        this.page=page;
    }

    public get Sortable(){
        return this.page.locator('text="Sortable"');
    }

    public async clickSortable(){
        await this.Sortable.click();
    }

    public get Selectable(){
        return this.page.locator('text="Selectable"');
    }

    public async clickSelectable(){
        await this.Selectable.click();
    }

    public get Resizable(){
        return this.page.locator('text="Resizable"');
    }

    public async clickResizable(){
        await this.Resizable.click();
    }

    public get Droppable(){
        return this.page.locator('text="Droppable"');
    }

    public async clickDroppable(){
        await this.Droppable.click();
    }

    public get Dragabble(){
        return this.page.locator('text="Dragabble"');
    }

    public async clickDragabble(){
        await this.Dragabble.click();
    }
    

    
}