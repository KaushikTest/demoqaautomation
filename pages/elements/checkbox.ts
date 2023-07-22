import { Page } from "@playwright/test";

export default class CheckBoxPage {
    checkBoxTab: any;
    home: any;
    desktop: any;
    notes: any;
    commands: any;
    documents: any;
    workspace: any;
    react: any;
    angular: any;
    veu: any;
    office: any;
    public: any;
    private: any;
    classified: any;
    general: any;
    downloads: any;
    word: any;
    excel: any;

    constructor(checkBoxTab:any,home:any,desktop:any,notes:any,commands:any,documents:any,workspace:any,react:any,angular:any,veu:any,office:any,Public:any,Private:any,classified:any,general:any,downloads:any,word:any,excel:any){
        this.checkBoxTab=checkBoxTab;
        this.home=home;
        this.desktop=desktop;
        this.notes=notes;
        this.commands=commands;
        this.documents=documents;
        this.workspace=workspace;
        this.react=react;
        this.angular=angular;
        this.veu=veu;
        this.office=office;
        this.public=Public;
        this.private=Private;
        this.classified=classified;
        this.general=general;
        this.downloads=downloads;
        this.word=word;
        this.excel=excel;
    }

}

export class CheckBoxBuilder{

    private page: Page;
    constructor(page:Page){
        this.page=page;
        return this;
    }

    public get CheckBoxTab(){
        return this.page.locator('text="Check Box"');
    }

    public async clickCheckBoxTab(){
        await this.CheckBoxTab.click();
        return this;
    }

    public get HomeCheckBox() {
        return this.page.locator('text="Home"');
    }

    public async clickHomeCheckBox(){
        this.HomeCheckBox.click();
    }

    public get DesktopCheckBox() {
        return this.page.locator('text="Desktop"');
    }

    public async clickDesktopCheckBox(){
        this.DesktopCheckBox.click();
    }

    public get NotesCheckBox() {
        return this.page.locator('text="Notes"');
    }

    public async clickNotesCheckBox(){
        this.NotesCheckBox.click();
    }

    public get CommandsCheckBox() {
        return this.page.locator('text="Commands"');
    }

    public async clickCommandsCheckBox(){
        this.CommandsCheckBox.click();
    }

    public get DocumentsCheckBox() {
        return this.page.locator('text="Documents"');
    }
    
    public async clickDocumentsCheckBox(){
        this.DocumentsCheckBox.click();
    }

    public get WorkSpaceCheckBox() {
        return this.page.locator('text="WorkSpace"');
    }

    public async clickWorkSpaceCheckBox(){
        this.WorkSpaceCheckBox.click();
    }

    public get ReactCheckBox() {
        return this.page.locator('text="React"');
    }

    public async clickReactCheckBox(){
        this.ReactCheckBox.click();
    }

    public get AngularCheckBox() {
        return this.page.locator('text="Angular"');
    }

    public async clickAngularCheckBox(){
        this.AngularCheckBox.click();
    }

    public get VeuCheckBox() {
        return this.page.locator('text="Veu"');
    }

    public async clickVeuCheckBox(){
        this.VeuCheckBox.click();
    }

    public get OfficeCheckBox() {
        return this.page.locator('text="Office"');
    }

    public async clickOfficeCheckBox(){
        this.OfficeCheckBox.click();
    }


    public get PublicCheckBox() {
        return this.page.locator('text="Public"');
    }

    public async clickPublicCheckBox(){
        this.PublicCheckBox.click();
    }


    public get PrivateCheckBox() {
        return this.page.locator('text="Private"');
    }

    public async clickPrivateCheckBox(){
        this.PrivateCheckBox.click();
    }


    public get ClassifiedCheckBox() {
        return this.page.locator('text="Classified"');
    }

    public async clickClassifiedCheckBox(){
        this.ClassifiedCheckBox.click();
    }


    public get GeneralCheckBox() {
        return this.page.locator('text="General"');
    }

    public async clickGeneralCheckBox(){
        this.GeneralCheckBox.click();
    }

    public get DownloadsCheckBox() {
        return this.page.locator('text="Downloads"');
    }

    public async clickDownloadsCheckBox(){
        this.DownloadsCheckBox.click();
    }

    public get WordFilesCheckBox() {
        return this.page.locator('text="Word File.doc"');
    }

    public async clickWordFilesCheckBox(){
        this.WordFilesCheckBox.click();
    }

    public get ExcelFilesCheckBox() {
        return this.page.locator('text="Excel File.doc"');
    }

    public async clickExcelFilesCheckBox(){
        this.ExcelFilesCheckBox.click();
    }

    build(){
        return new CheckBoxPage(this.clickCheckBoxTab,this.clickHomeCheckBox,this.clickDesktopCheckBox,this.clickNotesCheckBox,this.clickCommandsCheckBox,this.clickDocumentsCheckBox,this.clickWorkSpaceCheckBox,this.clickReactCheckBox,this.clickAngularCheckBox,this.clickVeuCheckBox,this.clickOfficeCheckBox,this.clickPublicCheckBox,this.clickPrivateCheckBox,this.clickClassifiedCheckBox,this.clickGeneralCheckBox,this.clickDownloadsCheckBox,this.clickWordFilesCheckBox,this.clickExcelFilesCheckBox);
    }

}