import { RectReturn } from '@wdio/protocols/build/types';
import { interfaces } from 'mocha';

let SCREEN_SIZE;
const XY = {
    x,
    y
}

XY.x

const SWIPE_DIRECTION = {
    down: {
        start: { x: 50, y: 15 },
        end: { x: 50, y: 85 },
    },
    left: {
        start: { x: 95, y: 50 },
        end: { x: 5, y: 50 },
    },
    right: {
        start: { x: 5, y: 50 },
        end: { x: 95, y: 50 },
    },
    up: {
        start: { x: 50, y: 85 },
        end: { x: 50, y: 15 },
    },
}

class Gestures{
    
    static async checkIfDisplayedWithSwipe(element, maxSCrolls, amount = 0){

    }

    static async swipeUp(percentage = 1){
        await this.swipeOnPercentage(
            this
        )
    }

    // static async getDeviceScreenCoordinates(screenSize, coordinates){
    //     return{
    //         x: Math.round(screenSize.width)
    //     }
    // }
}