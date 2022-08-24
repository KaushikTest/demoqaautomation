// @ts-check
import { expect, test } from '@playwright/test';
import * as TextBoxCase from '../cases/text-box-case';

test.use({
    viewport: { width: 1920, height: 1080 },
    headless: false
});

test('testNavigationToElements', async ({page}) => {
    await TextBoxCase.testTextBox(page);
    expect(page.url()).toEqual('https://demoqa.com/text-box');
    await page.close();
});