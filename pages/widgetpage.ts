import { Page } from "@playwright/test";

export default class WidgetsPage{

    private page:Page;
    constructor(page:Page){
        this.page=page;
    }

    public get Accordian(){
        return this.page.locator('text="Accordian"');
    }

    public async clickAccordian(){
        await this.Accordian.click();
    }

    public get AutoComplete(){
        return this.page.locator('text="Auto Complete"');
    }

    public async clickAutoComplete(){
        await this.AutoComplete.click();
    }

    public get DatePicker(){
        return this.page.locator('text="Date Picker"');
    }

    public async clickDatePicker(){
        await this.DatePicker.click();
    }

    public get Slider(){
        return this.page.locator('text="Slider"');
    }

    public async clickSlider(){
        await this.Slider.click();
    }

    public get ProgressBar(){
        return this.page.locator('text="Progress Bar"');
    }

    public async clickProgressBar(){
        await this.ProgressBar.click();
    }

    public get Tabs(){
        return this.page.locator('text="Tabs"');
    }

    public async clickTabs(){
        await this.Tabs.click();
    }

    public get ToolsTips(){
        return this.page.locator('text="Tools Tips"');
    }

    public async clickToolsTips(){
        await this.ToolsTips.click();
    }

    public get Menu(){
        return this.page.locator('text="Menu"');
    }

    public async clickMenu(){
        await this.Menu.click();
    }

    public get SelectMenu(){
        return this.page.locator('text="Select Menu"');
    }

    public async clickSelectMenu(){
        await this.SelectMenu.click();
    }
}