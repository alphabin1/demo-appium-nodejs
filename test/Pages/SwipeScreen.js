class SwipeScreen{

    static async waitForIsShown(){
        await $('~Swipe-screen').waitForDisplayed();
    }

    static logo() { $('~WebdriverIO logo'); }

    // static async swipeH

}

module.exports = SwipeScreen;