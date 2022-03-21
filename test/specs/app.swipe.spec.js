const TabBar = require('../Pages/components/TabBar');
const SwipeScreen = require('../Pages/SwipeScreen');
const Carousel = require('../Pages/components/Carousel');

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
        const START_POINT_PERCENTAGE = 82;
        const END_POINT_PERCENTAGE = 18;
        const ANCHOR_PERCENTAGE = 50;

        const ANCHOR = WINDOW_SCREEN_HEIGHT * ANCHOR_PERCENTAGE / 100;
        const START_POINT1 = WINDOW_SCREEN_HEIGHT * START_POINT_PERCENTAGE / 100;
        const START_POINT2 = WINDOW_SCREEN_WIDTH * START_POINT_PERCENTAGE / 100;
        const END_POINT = WINDOW_SCREEN_HEIGHT * END_POINT_PERCENTAGE / 100;

        console.log(ANCHOR);
        console.log(START_POINT1);
        console.log(START_POINT2);
        console.log(END_POINT);

        const CARD1_TEXT = 'FULLY OPEN SOURCE';
        const CARD2_TEXT = 'GREAT COMMUNITY';
        const CARD3_TEXT = 'JS.FOUNDATION';
        const CARD4_TEXT = 'SUPPORT VIDEOS';
        const CARD5_TEXT = 'EXTENDABLE';
        const CARD6_TEXT = 'COMPATIBLE';
        // const text = await Carousel.card(CARD_TEXT1);

        expect(await (await Carousel.card(CARD1_TEXT))).toEqual(CARD1_TEXT);

        await Carousel.swipeLeft(START_POINT2, END_POINT, ANCHOR);
        expect(await (await Carousel.card(CARD2_TEXT))).toEqual(CARD2_TEXT);
        
        await Carousel.swipeLeft(START_POINT2, END_POINT, ANCHOR);
        expect(await (await Carousel.card(CARD3_TEXT))).toEqual(CARD3_TEXT);
        
        await Carousel.swipeLeft(START_POINT2, END_POINT, ANCHOR);
        expect(await (await Carousel.card(CARD4_TEXT))).toEqual(CARD4_TEXT);
        
        await Carousel.swipeLeft(START_POINT2, END_POINT, ANCHOR);
        expect(await (await Carousel.card(CARD5_TEXT))).toEqual(CARD5_TEXT);
        
        await Carousel.swipeLeft(START_POINT2, END_POINT, ANCHOR);
        expect(await (await Carousel.card(CARD6_TEXT))).toEqual(CARD6_TEXT);

        
        // await driver.touchAction([
        //     { action: 'press', x: ANCHOR, y: START_POINT1 },
        //     { action: 'wait', ms: 1000 },
        //     { action: 'moveTo', x: END_POINT, y: ANCHOR },
        //     'release',
        // ]);
        

        // await Carousel.swipeDown(START_POINT1, END_POINT, ANCHOR);

        await driver.pause(5000);
    });
});