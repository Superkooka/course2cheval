import { OnClick } from '../../engine/object/event/onClick.js';
import { Object2D } from '../../engine/object/object2D.js'
import { vec2 } from '../../engine/vec2.js';

export class StartButton extends Object2D implements OnClick {

    path: vec2[] = [new vec2(200, 25), new vec2(300, 25), new vec2(300, 50), new vec2(200, 50), new vec2(200, 25)]

    onClick(): void {
        alert("Clicked")
    }

    clickableBox(): vec2[] {
        return this.path
    }

    redraw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.moveTo(this.path[0].x, this.path[0].y);
        this.path.forEach((vec2) => context.lineTo(vec2.x, vec2.y))
        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.stroke();

        context.fillText("Start", 225, 45)
    }
}