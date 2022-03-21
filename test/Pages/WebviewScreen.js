const WebView = require('../Pages/components/WebView');

class WebviewScreen{    
    static waitForWebViewDisplayed(isShown = true){
        const selector = browser.isAndroid ? '*//android.webkit.WebView' : '*//XCUIElementTypeWebView';

        return $(selector).waitForDisplayed({
            timeout:45000,
            reverse: !isShown
        });
    }    

    static async waitForWebsiteLoaded(){
        await WebView.waitForWebViewContextLoaded();
        await WebView.swichToContext('webview');
        await WebView.waitForDocumentFullyLoaded();
        await WebView.swichToContext('native');
    }

    static searchBar(){
        return $('.DocSearch').click();
    }

    static searchBarInput(){
        return $('.DocSearch-Input');
    }

    static searchResult(){
        return $('#docsearch-item-0 a') .click();
    }
}

module.exports = WebviewScreen;