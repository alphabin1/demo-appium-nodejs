const TabBar = require('../Pages/components/TabBar');
const HomeScreen = require('../Pages/HomeScreen');
const WebviewScreen = require('../Pages/WebviewScreen');
const LoginScreen = require('../Pages/LoginScreen');
const FormsScreen = require('../Pages/FormsScreen');
const SwipeScreen = require('../Pages/SwipeScreen');
const DragScreen = require('../Pages/DragScreen');

describe('WebdriverIO and Appium, when using navigation through the tab bar', () => {
    beforeEach(async () =>{
        await TabBar.waitForTabBarShown();
    });

    it('should be able to open the webview screen', async () => {
        await TabBar.goToWebView();
    });

    it('should be able to open the login screen', async () => {
        await TabBar.goToLogin();
        await LoginScreen.waitForIsShown();
    });
    
    it('should be able to open the forms screen', async () => {
        await TabBar.goToForms();
        await FormsScreen.waitForIsShown();
    });

    it('should be able to open the swipe screen', async () => {
        await TabBar.goToSwipe();
        await SwipeScreen.waitForIsShown();
    });

    it('should be able to open the drag screen', async () => {
        await TabBar.goToDrag();
        await DragScreen.waitForIsShown();
    });

    it('should be able to open the home screen', async () => {
        await TabBar.goToHome();
        await HomeScreen.waitForIsShown();
    });
});