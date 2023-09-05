import { Cross } from '../engine/object/cross.js'
import { RaceLine } from './object/raceline.js'
import { vec2 } from '../engine/vec2.js'
import { FPSCounter } from '../engine/object/fpsCounter.js';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');

context.clearRect(0, 0, canvas.width, canvas.height);

const cross = new Cross(new vec2(50, 150), 25, 2, "darkcyan")
const line = new RaceLine(new vec2(50, 150), new vec2(300, 150), 2, "black")
const fpsCounter = new FPSCounter(new vec2(50, 50), 12)

const eventLoop = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    fpsCounter.redraw(context)
    line.redraw(context)
    cross.redraw(context)

    requestAnimationFrame(eventLoop)

}

requestAnimationFrame(eventLoop)
