import { Board } from "../models/board";
import { Player } from "../models/Player";
import { WinnerStrategy } from "./winner-strategy";

export class RowWinningStrategy implements WinnerStrategy {
    checkWinner(board: Board, player: Player): boolean {
        for(let i = 0; i < board.getSize(); ++i) {
            let rowWin: boolean = true;
            for(let j = 0; j < board.getSize(); ++j) {
                const cell = board.getCell(i, j);
                if (!cell || cell.getSymbol() !== player.getSymbol()) {
                    rowWin = false;
                    break;
                }
            }
            if(rowWin) return true;
        }
        return false;
    }
}