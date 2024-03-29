import { chromium, firefox } from "@playwright/test";

export async function getPage() {
    const browser = await firefox.launch({
        headless: false
    });
    const context = await browser.newContext();
    return context.newPage();
}

export async function hover(page, element) {
    await page.hover(element);
}

