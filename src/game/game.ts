import { Cross } from '../engine/object/cross.js'
import { RaceLine } from './object/raceline.js'
import { vec2 } from '../engine/vec2.js'
import { FPSCounter } from '../engine/object/fpsCounter.js';
import { Object2D } from '../engine/object/object2D.js';
import { StartButton } from './object/startButton.js';
import { OnClick } from '../engine/object/event/onClick.js';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');

const cross = new Cross(new vec2(50, 150), 25, 2, "darkcyan")
const raceLine = new RaceLine(new vec2(50, 150), new vec2(300, 150), 2, "black")
const fpsCounter = new FPSCounter(new vec2(50, 50), 12)
const startButton = new StartButton()

// Register objects

const objects: Object2D[] = [
    cross,
    raceLine,
    fpsCounter,
    startButton,
]

// Register onClick Listener

const onClickListener: OnClick[] = [
    startButton,
]

onClickListener.forEach((object) => {
    document.addEventListener("click", (e) => {
        const canvasBox = canvas.getBoundingClientRect()
        const eventCoordinate = new vec2(e.clientX - canvasBox.left, e.clientY - canvasBox.top)

        const clickableBox = object.clickableBox()
        const clickablePath = new Path2D()
        clickablePath.moveTo(clickableBox[0].x, clickableBox[0].y)
        clickableBox.forEach((vec2) => clickablePath.lineTo(vec2.x, vec2.y))

        if (context.isPointInPath(clickablePath, eventCoordinate.x, eventCoordinate.y)) {
            object.onClick()
        }
    })
})

const eventLoop = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    objects.forEach((object) => object.redraw(context))

    requestAnimationFrame(eventLoop)

}

eventLoop()