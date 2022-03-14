const TabBar = require('../Pages/components/TabBar');
const SwipeScreen = require('../Pages/SwipeScreen');

describe('WebdriverIO and Appium, when using swiping', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.goToSwipe();
        await SwipeScreen.waitForIsShown(true);
    });

    it('should be able to swipe horizontal by swiping the carousel from left to righ', async () => {
        const WINDOW_SCREEN_SIZE = driver.getWindowSize();
        const WINDOW_SCREEN_HEIGHT = (await WINDOW_SCREEN_SIZE).height;
        const WINDOW_SCREEN_WIDTH = (await WINDOW_SCREEN_SIZE).width;
        const START_POINT_PERCENTAGE = 90;
        const END_POINT_PERCENTAGE = 10;
        const ANCHOR_PERCENTAGE = 50;

        const ANCHOR = WINDOW_SCREEN_HEIGHT * ANCHOR_PERCENTAGE / 100;
        const START_POINT1 = WINDOW_SCREEN_HEIGHT * START_POINT_PERCENTAGE / 100;
        const START_POINT2 = WINDOW_SCREEN_WIDTH * START_POINT_PERCENTAGE / 100;
        const END_POINT = WINDOW_SCREEN_HEIGHT * END_POINT_PERCENTAGE / 100;

        await $('~Swipe-screen').click();

        await driver.touchAction([
            { action: 'press', x: 600, y: 1040 },
            { action: 'wait', ms: 1000 },
            { action: 'moveTo', x: 300, y: 1040 },
            'release',
        ]);

        await driver.pause(5000);
    });
});