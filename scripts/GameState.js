import { Diamond } from "./Diamond.js";

export class GameState {
    constructor(level, movesLeft, pointsToWin, diamonds, diamondsSpriteImage) {
        this._level = level;
        let _movesLeft = movesLeft;
        this._pointsToWin = pointsToWin;
        let _gameBoard = diamonds.map(({ x, y, row, column, kind }) => new Diamond(x, y, row, column, kind, diamondsSpriteImage));
        let _playerScore = 0;
        let _isSwapping = false;
        let _isMoving = false;

        this.getMovesLeft = () => _movesLeft;
        this.decreaseMoves = () => _movesLeft--;
        this.increaseMoves = () => _movesLeft++;
        this.getPlayerPoints = () => _playerScore;
        this.increasePlayerPoints = points => _playerScore += points;
        this.getIsSwapping = () => _isSwapping;
        this.setIsSwapping = value => _isSwapping = value;
        this.getIsMoving = () => _isMoving;
        this.setIsMoving = value => _isMoving = value;

        this.didPlayerWin = () => _playerScore >= this._pointsToWin;
        this.getGameBoard = () => _gameBoard
    }

    get level() {
        return this.level
    }

    get pointsToWin() {
        return this._pointsToWin;
    }
}