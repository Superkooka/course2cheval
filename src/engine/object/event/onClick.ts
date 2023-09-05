import { vec2 } from "../../vec2.js";

export interface OnClick {
    clickableBox(): vec2[]

    onClick(): void;
}