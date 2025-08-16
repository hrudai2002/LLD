import { Symbol } from "./enum";
import { Player } from "./models/Player";
import { TicTacToeSystem } from "./tic-tac-toe-system";

const system = TicTacToeSystem.getInstance(); 

const alice = new Player('Alice', Symbol.X);
const bob = new Player('Bob', Symbol.O);

console.log('Game 1 starts...');
system.createGame(alice, bob);
system.printBoard(); 

system.makeMove(alice, 0, 0);
system.makeMove(bob, 1, 0);
system.makeMove(alice, 0, 1);
system.makeMove(bob, 1, 1);
system.makeMove(alice, 0, 2); // Alice wins

console.log("----------------------------------------\n");


console.log('Game 2 starts...');
system.makeMove(alice, 0, 0);
system.makeMove(bob, 1, 0);
system.makeMove(alice, 0, 1);
system.makeMove(bob, 1, 1);
system.makeMove(alice, 2, 2);
system.makeMove(bob, 1, 2); // Bob wins
console.log("----------------------------------------\n");

system.printScoreBoard();