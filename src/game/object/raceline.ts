import { Line } from '../../engine/object/line.js'
import { vec2 } from '../../engine/vec2.js'

export class RaceLine extends Line {
    animationProgresss: number = 0

    writeLineAnimation(context: CanvasRenderingContext2D): void {
        const progressedTo = new vec2(
            this.from.x + (this.to.x - this.from.x) * this.animationProgresss,
            this.from.y + (this.to.y - this.from.y) * this.animationProgresss,
        )

        traceLine(this.from, progressedTo, this.width, this.color, context)
    }

    redraw(context: CanvasRenderingContext2D): void {
        if (this.animationProgresss <= 1) {
            this.animationProgresss += 0.02 //TODO: Do not based animation progress on refresh, higher framerate, faster animation
            this.writeLineAnimation(context)
        } else {
            traceLine(this.from, this.to, this.width, this.color, context)
        }
    }
}

function traceLine(from: vec2, to: vec2, width: number, color: string, context: CanvasRenderingContext2D) {
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.lineWidth = width;
    context.strokeStyle = color;
    context.stroke();
}
