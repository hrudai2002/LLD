import { Board } from "../models/board";
import { Player } from "../models/Player";

export interface WinnerStrategy {
    checkWinner(board: Board, player: Player): boolean;
}