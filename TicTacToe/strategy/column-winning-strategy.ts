import { Board } from "../models/board";
import { Player } from "../models/Player";
import { WinnerStrategy } from "./winner-strategy";

export class ColWinningStrategy implements WinnerStrategy {
    checkWinner(board: Board, player: Player): boolean {
        for (let i = 0; i < board.getSize(); ++i) {
            let colWin: boolean = true;
            for (let j = 0; j < board.getSize(); ++j) {
                const cell = board.getCell(j, i);
                if (!cell || cell.getSymbol() !== player.getSymbol()) {
                    colWin = false;
                    break;
                }
            }
            if (colWin) return true;
        }
        return false;
    }
}