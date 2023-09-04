import { Cross } from './cross.js'
import { Line } from './line.js'
import { vec2 } from '../engine/vec2.js'

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');

context.clearRect(0, 0, canvas.width, canvas.height);

const cross = new Cross(new vec2(50, 50), 25, 2, "darkcyan")
const line = new Line(new vec2(50, 50), new vec2(300, 50), 2, "black")

line.draw(context)
cross.draw(context)
