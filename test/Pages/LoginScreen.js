class LoginScreen{

    static async waitForIsShown(){
        await $('~Login-screen').waitForDisplayed();
    }

    static loginContainerButton(){ return $('~button-login-container'); }
    static signUpContainerButton(){ return $('~button-sign-up-container'); }
    static loginButton(){ return $('~button-LOGIN'); }
    static signUpButton(){ return $('~button-SIGN UP'); }
    static email(){ return $('~input-email'); }
    static password(){ return $('~input-password'); }
    static repeatPassword(){ return $('~input-repeat-password'); }
    static biometricButton(){ return $('~button-biometric'); }

    static async isBiometricButtonDisplayed(){
        await this.biometricButton().isDisplayed();
    }
    
    static async tapOnLoginContainerButton(){
        await this.loginContainerButton().click();
    }

    static async tapOnSignUpContainerButton(){
        await this.signUpContainerButton().click();
    }

    static async tapOnBiometricButton(){
        await this.biometricButton().click();
    }

    static async submitLoginForm(username, password){
        await this.email().addValue(username); 
        await this.password().addValue(password);
        // If keyboard is shown then simply click outside of the keyboard.
        if(await driver.isKeyboardShown()){
            await (await $('~Login-screen')).click();
        }
        await this.loginButton().click();
    }
    
    static async submitSignUpForm(username, password){
        await this.email().addValue(username); 
        await this.password().addValue(password);
        await this.repeatPassword().addValue(password);
        // If keyboard is shown then simply click outside of the keyboard.
        if(await driver.isKeyboardShown()){
            await (await $('~Login-screen')).click();
        }
        await this.signUpButton().click();
    }
}

module.exports = LoginScreen;