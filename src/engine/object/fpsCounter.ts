import { Object2D } from './object2D.js'
import { vec2 } from '../vec2.js'

export class FPSCounter extends Object2D {
    coordinate: vec2

    width: number

    refreshFrameTimes: number[] = []

    constructor (coordinate: vec2, width: number) {
        super()

        this.coordinate = coordinate;
        this.width = width;
    }

    redraw(context: CanvasRenderingContext2D): void {
        this.refreshFrameTimes.push(performance.now())
        this.refreshFrameTimes = this.refreshFrameTimes.filter((value) => performance.now() - value <= 1000)

        context.font = "normal 16pt Arial";
        context.fillText(`FPS: ${this.refreshFrameTimes.length}`, 50, 50)
    }
}