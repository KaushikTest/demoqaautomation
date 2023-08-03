// @ts-check
import { expect, test } from '@playwright/test';
import * as BrokenLinkCase from '../cases/broken-link-case';


test.use({
    viewport: { width: 1920, height: 1080 },
    headless: false
});

test('testValidLinkClick', async ({page}) => {
    await BrokenLinkCase.clickValidLink(page);
    expect(page.url()).toEqual('https://demoqa.com/');
    await page.close();
});

test('testBrokenLinkClick', async ({page}) => {
    await BrokenLinkCase.clickBrokenLink(page);
    expect(page.url()).toEqual('http://the-internet.herokuapp.com/status_codes/500');
    await page.close();
});