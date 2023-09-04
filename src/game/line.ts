import { Object2D } from '../engine/object2D.js'
import { vec2 } from '../engine/vec2.js'

export class Line extends Object2D {
    from: vec2
    to: vec2

    width: number
    color: string

    constructor (from: vec2, to: vec2, width: number, color: string) {
        super()

        this.from = from;
        this.to = to;
        this.width = width;
        this.color = color;
    }

    draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.moveTo(this.from.x, this.from.y);
        context.lineTo(this.to.x, this.to.y);
        context.lineWidth = this.width;
        context.strokeStyle = this.color;
        context.stroke();
    }
}