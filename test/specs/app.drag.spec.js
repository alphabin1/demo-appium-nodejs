const TabBar = require('../Pages/components/TabBar');
const DragScreen = require('../Pages/DragScreen');

describe('WebdriverIO and Appium, when using drag and drop', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.goToDrag();
        await DragScreen.waitForIsShown(true);
    })

    it('should be able to solve the puzzle by dragging the pieces into the puzzle', async () => {
        const DRAG_L1_X = (await (await DragScreen.dragL1()).getLocation()).x;
        const DRAG_L1_Y = (await (await DragScreen.dragL1()).getLocation()).y;
        const DROP_L1_Y = (await (await DragScreen.dropL1()).getLocation()).x;
        const DROP_L1_X = (await (await DragScreen.dropL1()).getLocation()).y;
    
        const DRAG_C1_X = (await (await DragScreen.dragC1()).getLocation()).x;
        const DRAG_C1_Y = (await (await DragScreen.dragC1()).getLocation()).y;
        const DROP_C1_Y = (await (await DragScreen.dropC1()).getLocation()).x;
        const DROP_C1_X = (await (await DragScreen.dropC1()).getLocation()).y;
        
        const DRAG_R1_X = (await (await DragScreen.dragR1()).getLocation()).x;
        const DRAG_R1_Y = (await (await DragScreen.dragR1()).getLocation()).y;
        const DROP_R1_Y = (await (await DragScreen.dropR1()).getLocation()).x;
        const DROP_R1_X = (await (await DragScreen.dropR1()).getLocation()).y;

        const DRAG_L2_X = (await (await DragScreen.dragL2()).getLocation()).x;
        const DRAG_L2_Y = (await (await DragScreen.dragL2()).getLocation()).y;
        const DROP_L2_Y = (await (await DragScreen.dropL2()).getLocation()).x;
        const DROP_L2_X = (await (await DragScreen.dropL2()).getLocation()).y;

        const DRAG_C2_X = (await (await DragScreen.dragC2()).getLocation()).x;
        const DRAG_C2_Y = (await (await DragScreen.dragC2()).getLocation()).y;
        const DROP_C2_Y = (await (await DragScreen.dropC2()).getLocation()).x;
        const DROP_C2_X = (await (await DragScreen.dropC2()).getLocation()).y;

        const DRAG_R2_X = (await (await DragScreen.dragR2()).getLocation()).x;
        const DRAG_R2_Y = (await (await DragScreen.dragR2()).getLocation()).y;
        const DROP_R2_Y = (await (await DragScreen.dropR2()).getLocation()).x;
        const DROP_R2_X = (await (await DragScreen.dropR2()).getLocation()).y;

        const DRAG_L3_X = (await (await DragScreen.dragL3()).getLocation()).x;
        const DRAG_L3_Y = (await (await DragScreen.dragL3()).getLocation()).y;
        const DROP_L3_Y = (await (await DragScreen.dropL3()).getLocation()).x;
        const DROP_L3_X = (await (await DragScreen.dropL3()).getLocation()).y;

        const DRAG_C3_X = (await (await DragScreen.dragC3()).getLocation()).x;
        const DRAG_C3_Y = (await (await DragScreen.dragC3()).getLocation()).y;
        const DROP_C3_Y = (await (await DragScreen.dropC3()).getLocation()).x;
        const DROP_C3_X = (await (await DragScreen.dropC3()).getLocation()).y;

        const DRAG_R3_X = (await (await DragScreen.dragR3()).getLocation()).x;
        const DRAG_R3_Y = (await (await DragScreen.dragR3()).getLocation()).y;
        const DROP_R3_Y = (await (await DragScreen.dropR3()).getLocation()).x;
        const DROP_R3_X = (await (await DragScreen.dropR3()).getLocation()).y;

        await DragScreen.dragAndDropPuzzle(DRAG_L1_X, DRAG_L1_Y, DROP_L1_Y, DROP_L1_X);
        await DragScreen.dragAndDropPuzzle(DRAG_C1_X, DRAG_C1_Y, DROP_C1_Y, DROP_C1_X);
        await DragScreen.dragAndDropPuzzle(DRAG_R1_X, DRAG_R1_Y, DROP_R1_Y, DROP_R1_X);
        await DragScreen.dragAndDropPuzzle(DRAG_L2_X, DRAG_L2_Y, DROP_L2_Y, DROP_L2_X);
        await DragScreen.dragAndDropPuzzle(DRAG_C2_X, DRAG_C2_Y, DROP_C2_Y, DROP_C2_X);
        await DragScreen.dragAndDropPuzzle(DRAG_R2_X, DRAG_R2_Y, DROP_R2_Y, DROP_R2_X);
        await DragScreen.dragAndDropPuzzle(DRAG_L3_X, DRAG_L3_Y, DROP_L3_Y, DROP_L3_X);
        await DragScreen.dragAndDropPuzzle(DRAG_C3_X, DRAG_C3_Y, DROP_C3_Y, DROP_C3_X);
        await DragScreen.dragAndDropPuzzle(DRAG_R3_X, DRAG_R3_Y, DROP_R3_Y, DROP_R3_X);

        await driver.pause(2000);

        await DragScreen.waitForRetryButton();
        await DragScreen.tapOnRetryButton();
        await DragScreen.watiForRenewButton();
    });
});