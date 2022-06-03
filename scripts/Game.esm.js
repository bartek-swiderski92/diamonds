import { Common, VISIBLE_SCREEN } from "./Common.esm.js";
import { gameLevels } from './GameLevels.esm.js';
import { loader, DATALOADED_EVENT_NAME } from './Loader.esm.js';
import { canvas } from "./Canvas.esm.js";

const GameState = {
    pointsToWin: 7000,
    getPlayerPoints: () => 1000,
    getMovesLeft: () => 30,
}

class Game extends Common {
    constructor() {
        super();
    }

    playLevel(level) {
        window.removeEventListener(DATALOADED_EVENT_NAME, this.playLevel);
        const levelInfo = gameLevels[level - 1];
        this.changeScreenVisibility(canvas.element, VISIBLE_SCREEN)
        this.animate();
    }

    animate() {
        canvas.drawGameOnCanvas(GameState);
        this.animationFrame = window.requestAnimationFrame(() => this.animate());
    }
}

export const game = new Game();