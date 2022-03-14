class TabBar{
    static async goToHome(){
        await $('~Home').click();
    }

    static async goToWebView(){
        await $('~Webview').click();
    }

    static async goToLogin(){
        await $('~Login').click();
    }

    static async goToForms(){
        await $('~Forms').click();
    }

    static async goToSwipe(){
        await $('~Swipe').click();
    }

    static async goToDrag(){
        await $('~Drag').click();
    }

    static async waitForTabBarShown(){
        return $('~Home').waitForDisplayed({
            timeout: 20000,
        })
    }
}

module.exports = TabBar;