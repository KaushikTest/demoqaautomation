

export async function DemoWelcomePageClickElements(page,element){
    await page.locator(element).click();
    return page;
}