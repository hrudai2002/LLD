import { Symbol } from "../enum";
import { Cell } from "./cell";
export class Board {
    private board: Cell[][];
    private size: number; 
    private movesCount: number; 


    constructor(size: number) {
        this.size = 0;
        this.movesCount = 0; 
        this.board = Array.from({ length: size }, () =>
            Array.from({ length: size }, () => new Cell())
        );
    }

    public placeSymbol(row: number, col: number, symbol: Symbol): boolean {
        if(row < 0 || row >= this.size || col < 0 || col >= this.size) {
            throw new Error('Invalid position: Out of bounds');
        }

        if (this.board[row][col].getSymbol() !== Symbol.EMPTY) {
            throw new Error("Invalid position: cell is already occupied.");
        }

        this.board[row][col].setSymbol(symbol); 
        this.movesCount++; 
        return true;
    }

    public getCell(row: number, col: number): Cell | null {
        if (row < 0 || row >= this.size || col < 0 || col >= this.size) {
            return null;
        }
        return this.board[row][col];
    }

    public isFull(): boolean {
        return this.movesCount === this.size * this.size;
    }

    public printBoard(): void {
        console.log("-------------");
        for (let i = 0; i < this.size; i++) {
            let rowStr = "| ";
            for (let j = 0; j < this.size; j++) {
                const symbol = this.board[i][j].getSymbol();
                rowStr += symbol + " | ";
            }
            console.log(rowStr);
            console.log("-------------");
        }
    }

    public getSize(): number {
        return this.size;
    }
}