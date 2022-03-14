const SELECTORS = {
    ANDROID: {
        ALERT_TITLE: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]',
        ALERT_MESSAGE: '*//android.widget.TextView[@resource-id="android:id/message"]',
        ALERT_BUTTON: '*//android.widget.Button[@text="{BUTTON_TEXT}"]'
    },
    IOS:{
        ALERT: ''
    }
};

class NativeAlert{

    static async waitForIsShown(isShown = true){
        const selector = driver.isAndroid
        ? SELECTORS.ANDROID.ALERT_TITLE
        : SELECTORS.IOS.ALERT;

        return $(selector).waitForExist({
            timeout: 11000,
            reverse: !isShown
        });
    }

    static async text(){
        return `${await $(SELECTORS.ANDROID.ALERT_TITLE).getText()}\n${await $(SELECTORS.ANDROID.ALERT_MESSAGE).getText()}`;
    }

    static async tapOnButtonWithText(selector){
        const buttonSelector = driver.isAndroid
            ? SELECTORS.ANDROID.ALERT_BUTTON.replace(/{BUTTON_TEXT}/, selector)
            : `${selector}`;
        await $(buttonSelector).click();
    }
}

module.exports = NativeAlert;