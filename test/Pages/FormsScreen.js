class FormsScreen{

    static async waitForIsShown(){
        await $('~Forms-screen').waitForDisplayed();
    }

    static input(){ return $('~text-input'); }
    static inputTextResult(){ return $('~input-text-result'); }
    static switch(){ return $('~switch'); }
    static switchText(){ return $('~switch-text'); }
    static dropDown(){ return $('~Dropdown'); }
    static activeButton(){ return $('~button-Active'); }
    static inActiveButton(){ return $('~button-Inactive'); }

    static async tapOnInputTextResult(){
        await this.inputTextResult().click();
    }

    static async tapOnSwitch(){
        await this.switch().click();
    }

    static async tapOnDropDown(){
        await this.dropDown().click();
    }

    static async tapOnActiveButton(){
        await this.activeButton().click();
    }

    static async tapOnInActiveButton(){
        await this.inActiveButton().click();
    }

    static async isSwitchActive(){
        const active = driver.isAndroid ? 'ON' : '1';
        return (await this.switch().getText()).includes(active);
    }

    static async getDropDownText(){
        let selector;

        if(driver.isAndroid){
            selector = '//*[@content-desc="Dropdown"]/*/android.widget.EditText';
        }else{
            selector = '';
        }
        return $(selector).getText();
    }
}

module.exports = FormsScreen;