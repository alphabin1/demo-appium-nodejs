class HomeScreen{

    static async waitForIsShown(){
        await $('~Home-screen').waitForDisplayed();
    }

}

module.exports = HomeScreen;