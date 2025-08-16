import { Board } from "../models/board";
import { Player } from "../models/Player";
import { WinnerStrategy } from "./winner-strategy";

export class DiagonalWinningStrategy implements WinnerStrategy {
    checkWinner(board: Board, player: Player): boolean {
        let i = 0, j = 0, n = board.getSize(); 
        let diagonalWin = true;
        while(i < n && j < n) {
            const cell = board.getCell(i, j);
            if (!cell || cell.getSymbol() !== player.getSymbol()) {
                diagonalWin = false;
                break;
            }
            i++, j++;
        }

        if(diagonalWin) return true;

        diagonalWin = true;
        i = 0, j = n - 1;
        while (i < n && j >= 0) {
            const cell = board.getCell(i, j);
            if (!cell || cell.getSymbol() !== player.getSymbol()) {
                diagonalWin = false;
                break;
            }
            i++, j--;
        }

        return diagonalWin;
    }
}