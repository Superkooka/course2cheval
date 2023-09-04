import { Object2D } from '../engine/object2D.js'
import { vec2 } from '../engine/vec2.js'

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

    draw(context: CanvasRenderingContext2D): void {
        context.beginPath();

        context.moveTo(this.from.x, this.from.y);
        context.lineTo(this.from.x + this.len, this.from.y + this.len);
        context.moveTo(this.from.x, this.from.y + this.len);
        context.lineTo(this.from.x + this.len, this.from.y);

        context.lineWidth = this.width;
        context.strokeStyle = this.color;
        context.stroke();
    }
}