const TabBar = require('../Pages/components/TabBar');
const WebView = require('../Pages/components/WebView');
const WebViewScreen = require('../Pages/WebviewScreen');

const CONTEXT_REF = {
    NATIVE: 'native',
    WEBVIEW: 'webview'
};

describe('WebdriverIO and Appium, when interaction with a WebView', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.goToWebView();
        await WebViewScreen.waitForWebsiteLoaded();
    });

    it('should be able search for the url method and opoen it', async () => {
        await WebView.swichToContext(CONTEXT_REF.WEBVIEW);
        await WebViewScreen.searchBar();
        await WebViewScreen.searchBarInput().setValue('url');
        await driver.waitUntil(async ()=>
            await (await $$('.DocSearch-Hit-source'))[0].getText() === 'browser'
        );
        await WebViewScreen.searchResult();
        await (await $('h1')).waitForDisplayed();
        await expect(await driver.getTitle()).toEqual('url | WebdriverIO');
        await WebView.swichToContext(CONTEXT_REF.NATIVE);
    });

    it('should be able to switch between webview, native and webview', async () => {
        await WebView.swichToContext(CONTEXT_REF.WEBVIEW);
        await WebViewScreen.searchBar();
        await (await WebViewScreen.searchBarInput()).waitForDisplayed();
        if(await driver.isKeyboardShown()){
            await (await $('.DocSearch-Footer')).click();
        }
        await (await WebViewScreen.searchBarInput()).setValue('ocr service for appium native apps');
        await driver.waitUntil(async ()=>
            await (await $$('.DocSearch-Hit-source'))[0].getText() === 'Services'
        );
        await WebViewScreen.searchResult();
        await (await $('h1')).waitForDisplayed();
        await expect(await driver.getTitle()).toEqual('OCR service for Appium Native Apps Service | WebdriverIO');
    });
});