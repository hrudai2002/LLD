import { GameStatus } from "./enum";
import { Board } from "./models/board";
import { Player } from "./models/Player";
import { WinnerStrategy } from "./strategy/winner-strategy";

export class Game {
    private board: Board; 
    private player1: Player; 
    private player2: Player; 
    private currentPlayer: Player; 
    private winner: Player | null = null;
    private status: GameStatus; 
    private state: GameState; 
    private winnerStrategies: WinnerStrategy[]

    constructor(player1: Player, player2: Player) {
        this.board = new Board(3); 
        this.player1 = player1;
        this.player2 = player2; 
        this.currentPlayer = player1; 
        this.status = GameStatus.IN_PROGRESS; 
        
    }
}