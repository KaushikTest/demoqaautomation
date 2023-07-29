// @ts-check
import { expect, test } from '@playwright/test';
import * as LinksCase from '../cases/links-case';
import { BASELINK } from '../constants/linkconstants';


test.use({
    viewport: { width: 1920, height: 1080 },
    headless: false
});

async function waitForNewPage(page,doaction){
    const pagePromise = page.context().waitForEvent('page');
    await doaction;
    await page.getByText('open new tab').click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    return newPage;
}

test('testClickHome', async ({ page }) => {
    const newPage=await waitForNewPage(page,LinksCase.clickHome(page));
    expect(newPage.url()).toEqual(BASELINK+'/');
    await page.close();
});

test('testClickHomeNexlm', async ({ page }) => {
    const newPage=await waitForNewPage(page,LinksCase.clickHomeDynamicLink(page));
    expect(newPage.url()).toEqual(BASELINK+'/');
    await page.close();
});

test('testClickCreated', async ({ page }) => {
    await LinksCase.clickCreated(page);
    expect(page.url()).toEqual('https://demoqa.com/links');
    const context = await page.textContent('#linkResponse');
    expect(context).toEqual('Link has responded with staus 201 and status text Created');
    await page.close();
});


test('testClickNoContent', async ({ page }) => {
    await LinksCase.clickNoContent(page);
    expect(page.url()).toEqual('https://demoqa.com/links');
    const context = await page.textContent('#linkResponse');
    expect(context).toEqual('Link has responded with staus 204 and status text No Content');
    await page.close();
});


test('testClickMoved', async ({ page }) => {
    await LinksCase.clickMoved(page);
    expect(page.url()).toEqual('https://demoqa.com/links');
    const context = await page.textContent('#linkResponse');
    expect(context).toEqual('Link has responded with staus 301 and status text Moved Permanently');
    await page.close();
});


test('testClickBadRequest', async ({ page }) => {
    await LinksCase.clickBadRequest(page);
    expect(page.url()).toEqual('https://demoqa.com/links');
    const context = await page.textContent('#linkResponse');
    expect(context).toEqual('Link has responded with staus 400 and status text Bad Request');
    await page.close();
});


test('testClickUnauthorized', async ({ page }) => {
    await LinksCase.clickUnauthorized(page);
    expect(page.url()).toEqual('https://demoqa.com/links');
    const context = await page.textContent('#linkResponse');
    expect(context).toEqual('Link has responded with staus 401 and status text Unauthorized');
    await page.close();
});


test('testClickForbidden', async ({ page }) => {
    await LinksCase.clickForbidden(page);
    expect(page.url()).toEqual('https://demoqa.com/links');
    const context = await page.textContent('#linkResponse');
    expect(context).toEqual('Link has responded with staus 403 and status text Forbidden');
    await page.close();
});

test('testClickNotFound', async ({ page }) => {
    await LinksCase.clickNotFound(page);
    expect(page.url()).toEqual('https://demoqa.com/links');
    const context = await page.textContent('#linkResponse');
    expect(context).toEqual('Link has responded with staus 404 and status text Not Found');
    await page.close();
});