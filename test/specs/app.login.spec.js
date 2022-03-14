const TabBar = require('../Pages/components/TabBar');
const NativeAlert = require('../Pages/components/NativeAlert');
const LoginScreen = require('../Pages/LoginScreen');

describe('WebdriverIO and Appium, when interacting with a login form', () => {
    const username = 'test@test.com';
    const password = 'test12345';

    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.goToLogin();
        await LoginScreen.waitForIsShown();
    });

    it('should be able to login successfully', async () => {
        await LoginScreen.tapOnLoginContainerButton();
        await LoginScreen.submitLoginForm(username, password);
  
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual('Success\nYou are logged in!');

        await NativeAlert.tapOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });
    
    it('should be able to sign up successfully', async () => {
        await LoginScreen.tapOnSignUpContainerButton();
        await LoginScreen.submitSignUpForm(username, password);
    
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual('Signed Up!\nYou successfully signed up!');
    
        await NativeAlert.tapOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });
});