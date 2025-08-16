import { Game } from "./game";
import { Player } from "./models/Player";

export class TicTacToeSystem {
    private static instance: TicTacToeSystem | null = null; 
    private game: Game | null = null; 
    private readonly scoreboard: Scoreboard; 

    private constructor() {
        this.scoreboard = new Scoreboard();
    }

    public static getInstance(): TicTacToeSystem {
        if(!TicTacToeSystem.instance) {
            TicTacToeSystem.instance = new TicTacToeSystem();
        }
        return TicTacToeSystem.instance;
    }

    public createGame(player1: Player, player2: Player): void {
        this.game = new Game(player1, player2); 

        // Register the scoreboard as observer
        this.game.addObserver(this.scoreboard);

        console.log(
            `Game started between ${player1.getName()} (X) and ${player2.getName()} (O).`
        );
    }

    public makeMove(player: Player, row: number, col: number): void {
        if(!this.game) {
            console.log('No game is in progress, Please create a game first');
            return;
        }

        try {
            console.log(`${player.getName()} plays at (${row}, ${col})`); 
            this.game.makeMove(player, row, col);
            this.printBoard();
            console.log("Game Status: " + this.game.getStatus());

            if (this.game.getWinner()) {
                console.log("Winner: " + this.game.getWinner()!.name);
            }
        } catch (error) {
            console.log("Error: " + error);
        }
    }

    public printBoard(): void {
        if (this.game) {
            this.game.getBoard().printBoard();
        }
    }

    public printScoreBoard(): void {
        this.scoreboard.printScores();
    }
}