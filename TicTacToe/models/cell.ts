import { Symbol } from "../enum";

export class Cell {
    private symbol: Symbol;
    constructor() {
        this.symbol = Symbol.EMPTY;
    }

    public getSymbol(): Symbol {
        return this.symbol;
    }

    public setSymbol(symbol: Symbol): void {
        this.symbol = symbol;
    }
}