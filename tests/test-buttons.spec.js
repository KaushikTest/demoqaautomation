// @ts-check
import { expect, test } from '@playwright/test';
import * as ButtonCase from '../cases/buttons-case';


test.use({
    viewport: { width: 1920, height: 1080 },
    headless: false
});

test('testClickMeButton', async ({page}) => {
    await ButtonCase.clickMeClick(page);
    expect(page.url()).toEqual('https://demoqa.com/buttons');
    const context=await page.textContent('#dynamicClickMessage');
    expect(context).toEqual('You have done a dynamic click');
    await page.close();
});

test('testDoubleClickMeButton', async ({page}) => {
    await ButtonCase.doubleClickMeClick(page);
    expect(page.url()).toEqual('https://demoqa.com/buttons');
    const context=await page.textContent('#doubleClickMessage');
    expect(context).toEqual('You have done a double click');
    await page.close();
});

test('testRightClickMeButton', async ({page}) => {
    await ButtonCase.rightClickMeClick(page);
    expect(page.url()).toEqual('https://demoqa.com/buttons');
    const context=await page.textContent('#rightClickMessage');
    expect(context).toEqual('You have done a right click');
    await page.close();
});