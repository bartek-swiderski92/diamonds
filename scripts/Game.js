import { Common, VISIBLE_SCREEN } from "./Common.js";
import { gameLevels } from './GameLevels.js';
import { loader, DATALOADED_EVENT_NAME } from './Loader.js';
import { canvas } from "./Canvas.js";
import { Diamond } from "./Diamond.js";
import { media } from "./Media.js";

export const GAME_BOARD_X_OFFSET = 40;
export const GAME_BOARD_Y_OFFSET = -5;

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
        this.changeScreenVisibility(canvas.element, VISIBLE_SCREEN);
        this.diamond = new Diamond(50, 50, 1, 1, 2, media.diamondsSprite)
        this.animate();
    }

    animate() {
        canvas.drawGameOnCanvas(GameState);
        this.diamond.draw();
        this.animationFrame = window.requestAnimationFrame(() => this.animate());
    }
}

export const game = new Game();