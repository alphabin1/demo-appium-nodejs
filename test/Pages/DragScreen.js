class DragScreen{

    static async waitForIsShown(){
        await $('~Drag-drop-screen').waitForDisplayed();
    }

    static dragL1(){ return $('~drag-l1'); }
    static dragC1(){ return $('~drag-c1'); }
    static dragR1(){ return $('~drag-r1'); }
    static dragL2(){ return $('~drag-l2'); }
    static dragC2(){ return $('~drag-c2'); }
    static dragR2(){ return $('~drag-r2'); }
    static dragL3(){ return $('~drag-l3'); }
    static dragC3(){ return $('~drag-c3'); }
    static dragR3(){ return $('~drag-r3'); }

    static dropL1(){ return $('~drop-l1'); }
    static dropC1(){ return $('~drop-c1'); }
    static dropR1(){ return $('~drop-r1'); }
    static dropL2(){ return $('~drop-l2'); }
    static dropC2(){ return $('~drop-c2'); }
    static dropR2(){ return $('~drop-r2'); }
    static dropL3(){ return $('~drop-l3'); }
    static dropC3(){ return $('~drop-c3'); }
    static dropR3(){ return $('~drop-r3'); }

    static renew(){ return $('~renew'); }
    static retry(){ return $('~button-Retry'); }

    static async waitForRetryButton(){
        return this.retry().waitForDisplayed();
    }

    static async tapOnRetryButton(){
        return this.retry().click();
    }

    static async watiForRenewButton(){
        return this.renew().waitForDisplayed();
    }

    static async tapOnRenewButton(){
        return this.renew().click();
    }

    static async dragAndDropPuzzle(DRAG_X, DRAG_Y, DROP_Y, DROP_X){
        await driver.touchAction([
            { action: 'press', x: DRAG_X+64, y: DRAG_Y+64 },
            { action: 'moveTo', x: DROP_Y+64, y: DROP_X+64 },
            'release'
        ]);
    }
}

module.exports = DragScreen;