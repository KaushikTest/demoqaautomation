// @ts-check
import { expect, test } from '@playwright/test';
import * as RadioButtonCase from '../cases/radio-button-case';


test.use({
    viewport: { width: 1920, height: 1080 },
    headless: false
});

test('testRadioButtonYes', async ({page}) => {
    await RadioButtonCase.yesRadioButtonClick(page);
    expect(page.url()).toEqual('https://demoqa.com/radio-button');
    expect(page.locator('#yesRadio').isChecked()).toBeTruthy();
    const context=await page.textContent('.text-success');
    expect(context).toEqual('Yes');
    await page.close();
});

test('testRadioButtonImpressive', async ({page}) => {
    await RadioButtonCase.impressiveRadioButtonClick(page);
    expect(page.url()).toEqual('https://demoqa.com/radio-button');
    expect(page.locator('#impressiveRadio').isChecked()).toBeTruthy();
    const context=await page.textContent('.text-success');
    expect(context).toEqual('Impressive');
    await page.close();
});