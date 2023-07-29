// @ts-check
import { expect, test } from '@playwright/test';
import * as DynamicPropCase from '../cases/dynamic-properties-case';

test.use({
    viewport: { width: 1920, height: 1080 },
    headless: false
});

test('testWaitForVisibleElement', async ({page}) => {
    await DynamicPropCase.waitForVisibleElenent(page);
    expect(page.url()).toEqual('https://demoqa.com/dynamic-properties');
    const context=await page.textContent('#visibleAfter');
    expect(context).toEqual('Visible After 5 Seconds');
    await page.close();
});