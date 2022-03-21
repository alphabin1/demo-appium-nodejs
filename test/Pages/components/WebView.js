const CONTEXT_REF = {
    NATIVE: 'native',
    WEBVIEW: 'webview'
};

const DOCUMENT_READY_STATE = {
    COMPLETE: 'complete',
    INTERACTIVE: 'interactive',
    LOADING: 'loading'
}

class WebView{    
    static async waitForWebViewContextLoaded(){
        await driver.waitUntil(
            async () => {
                const currentContexts = await this.getCurrentContexts();

                return currentContexts.length > 1 && currentContexts.find(context => context.toLowerCase().includes(CONTEXT_REF.WEBVIEW)) !== 'undefined';
            },
            {
                timeout: 60000,
                timeoutMsg: 'Webview context not loaded',
                interval: 100
            }
        );
    }

    static async swichToContext(context){
        await driver.switchContext((await this.getCurrentContexts())[context === CONTEXT_REF.NATIVE ? 0 : 1]);
    }

    static async getCurrentContexts(){
        return driver.getContexts();
    }

    static async waitForDocumentFullyLoaded(){
        await driver.waitUntil(
            async () => (await driver.execute(() => document.readyState)) === DOCUMENT_READY_STATE.COMPLETE,
            {
                timeout: 45000,
                timeoutMsg: 'Website not loaded',
                interval: 100
            }
        );
    }
}

module.exports = WebView;