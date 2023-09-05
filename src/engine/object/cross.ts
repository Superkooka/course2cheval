import { Object2D } from './object2D.js'
import { vec2 } from '../vec2.js'
import { Line } from './line.js'

export class Cross extends Object2D {
    from: vec2

    width: number
    len: number
    color: string

    constructor (from: vec2, width: number, len: number, color: string) {
        super()

        this.from = from;
        this.width = width;
        this.len = len;
        this.color = color;
    }

    redraw(context: CanvasRenderingContext2D): void {
        const lineA = new Line(this.from, new vec2(this.from.x + this.len, this.from.y + this.len), this.width, this.color)
        const lineB = new Line(new vec2(this.from.x, this.from.y + this.len), new vec2(this.from.x + this.len, this.from.y), this.width, this.color)

        lineA.redraw(context)
        lineB.redraw(context)
    }
}