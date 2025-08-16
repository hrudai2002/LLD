import { Symbol } from "../enum";

export class Player {
    private name: string; 
    private symbol: Symbol;

    constructor(name: string, symbol: Symbol) {
        this.name = name; 
        this.symbol = symbol;
    }

    public getName(): string {
        return this.name;
    }

    public getSymbol(): Symbol {
        return this.symbol;
    }
}