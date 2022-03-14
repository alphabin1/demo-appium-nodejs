const TabBar = require('../Pages/components/TabBar');
const NativeAlert = require('../Pages/components/NativeAlert');
const Picker = require('../Pages/components/Picker');
const FormsScreen = require('../Pages/FormsScreen');

describe('WebdriverIO and Appium, when interacting with form elements', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.goToForms();
        await FormsScreen.waitForIsShown();
    });

    it('should swipe down', async () => {
        const header = driver.getWindowSize();
        const anchorPercentage = 50;
        const startPointPercentage = 90;
        const endPointPercentage = 10;
        const headerHeight = (await header).height;

        const anchor = headerHeight * anchorPercentage / 100;
        const startPoint = headerHeight * startPointPercentage / 100;
        const endPoint = headerHeight * endPointPercentage / 100;

        await $('~Forms-screen').click();

        console.log(header);
        console.log(anchor);
        console.log(startPoint);
        console.log(endPoint);

        await driver.touchAction([
            { action: 'press', x: anchor, y: startPoint },
            { action: 'wait', ms: 1000 },
            { action: 'moveTo', x: anchor, y: endPoint },
            'release'
        ]);

        await driver.pause(5000);
    })

    // it('should be able to type in the input and validate the next', async () => {
    //     const text = 'Hello';

    //     await FormsScreen.input().addValue(text);
    //     await expect(FormsScreen.inputTextResult()).toHaveTextContaining(text);

    //     if(await driver.isKeyboardShown()){
    //         await FormsScreen.tapOnInputTextResult();
    //     }
    // });

    // it('should be able to turn on and off the switch', async () => {
    //     await expect(await FormsScreen.isSwitchActive()).toEqual(false);
    //     await FormsScreen.tapOnSwitch();
    //     await expect(await FormsScreen.isSwitchActive()).toEqual(true);
    //     await FormsScreen.tapOnSwitch();
    //     await expect(await FormsScreen.isSwitchActive()).toEqual(false);
    // });

    // it('should be able to select a value from the select element', async () => {
    //     const valueOne = 'This app is awesome';
    //     const valueTwo = 'webdriver.io is awesome';
    //     const valueThree = 'Appium is awesome';

    //     await FormsScreen.tapOnDropDown();
    //     await Picker.selectValue(valueOne);
    //     await expect(await FormsScreen.getDropDownText()).toContain(valueOne);
        
    //     await FormsScreen.tapOnDropDown();
    //     await Picker.selectValue(valueTwo);
    //     await expect(await FormsScreen.getDropDownText()).toContain(valueTwo);
        
    //     await FormsScreen.tapOnDropDown();
    //     await Picker.selectValue(valueThree);
    //     await expect(await FormsScreen.getDropDownText()).toContain(valueThree);
    // });

    // it('should be able to open the alert and close it with all 3 buttons', async () => {
    //     await FormsScreen.tapOnActiveButton();
    //     await NativeAlert.waitForIsShown();
    //     await expect(await NativeAlert.text()).toEqual('This button is\nThis button is active');

    //     await NativeAlert.tapOnButtonWithText('ASK ME LATER');
    //     await NativeAlert.waitForIsShown(false);
    //     await FormsScreen.tapOnActiveButton();
    //     await NativeAlert.waitForIsShown(true);
    //     await NativeAlert.tapOnButtonWithText('CANCEL');
    //     await NativeAlert.waitForIsShown(false);
    //     await FormsScreen.tapOnActiveButton();
    //     await NativeAlert.waitForIsShown(true);
    //     await NativeAlert.tapOnButtonWithText('OK');
    //     await NativeAlert.waitForIsShown(false);
    // });

    // it('should be able to determine that the inactive button is inactive', async () => {
    //     await NativeAlert.waitForIsShown(false);
    //     await FormsScreen.tapOnInActiveButton();
    //     await driver.pause(2000);
    //     await NativeAlert.waitForIsShown(false);
    // });
})