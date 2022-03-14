const SELECTORS = {
    ANDROID_LISTVIEW: '//android.widget.ListView',
    IOS_PICKERWHEEL: '',
    DONE: ''
};

class Picker{

    static async waitForIsShown(isShown = true){
        const selector = driver.isAndroid ? SELECTORS.ANDROID_LISTVIEW : SELECTORS.IOS_PICKERWHEEL;
        await $(selector).waitForExist({
            timeout: 11000,
            reverse: !isShown
        });
    }

    static async setAndroidValue(value){
        await $(`${SELECTORS.ANDROID_LISTVIEW}/*[@text='${value}']`).click();
    }

    static async setIOSValue(value){
        await $(SELECTORS.IOS_PICKERWHEEL).addValue(value);
        await $(SELECTORS.DONE).click();
    }
    
    static async selectValue(value){
        await this.waitForIsShown(true);
        if(driver.isAndroid){
            await this.setAndroidValue(value);
        }else{
            await this.setIOSValue(value);
        }
        await this.waitForIsShown(false);
    }
}

module.exports = Picker;