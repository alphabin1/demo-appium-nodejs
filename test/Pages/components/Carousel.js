const SELECTORS = {
    CAROUSEL: '~Carousel',
    CARD: 'card',
    // CARD_TEXT: `//android.widget.TextView[@text='${CARD_TEXT}']`
}
class Carousel{

    static async waitForIsDisplayed(isShown = true){
        await $(SELECTORS.CAROUSEL).waitForDisplayed({
            reverse: !isShown
        });
    }

    static cards(){ return $$(SELECTORS.CARD); }

    static card(CARD_TEXT){
       return $(`//android.widget.TextView[@text='${CARD_TEXT}']`).getText();
    }

    static async swipeLeft(START_POINT, END_POINT, ANCHOR){
        await driver.touchAction([
            { action: 'press', x: START_POINT, y: ANCHOR },
            { action: 'wait', ms: 1000 },
            { action: 'moveTo', x: END_POINT, y: ANCHOR },
            'release',
        ]);
    }
    
    static async swipeDown(START_POINT, END_POINT, ANCHOR){
        await driver.touchAction([
            { action: 'press', x: ANCHOR, y: START_POINT },
            { action: 'wait', ms: 1000 },
            { action: 'moveTo', x: END_POINT, y: ANCHOR },
            'release',
        ]);
    }
}

module.exports = Carousel;