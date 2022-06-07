import { canvas } from "./Canvas.js";
import { SCALE_PROPERTY } from "./MainMenu.js";

class MouseController {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.state = 0;
        this.clicked = false;

        canvas.element.addEventListener('mousedown', event => this.mouseDown(event));
    }

    mouseDown(event) {
        event.preventDefault();

        const offset = canvas.element.getBoundingClientRect();
        const scale = Number(document.documentElement.style.getPropertyValue(SCALE_PROPERTY));

        this.x = (event.clientX - offset.left) / scale;
        this.y = (event.clientU - offset.top) / scale;
        this.clicked = true;
    }

}
export const mouseController = new MouseController();