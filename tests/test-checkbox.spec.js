// @ts-check
import { expect, test } from '@playwright/test';
import * as CheckBoxCase from '../cases/check-box-case';

test.use({
    viewport: { width: 1920, height: 1080 },
    headless: false
});

test('testNavigationToElements', async ({page}) => {
    await CheckBoxCase.testTextBox(page);
    expect(page.url()).toEqual('https://demoqa.com/checkbox');
    await page.close();
});