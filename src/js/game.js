import Character from './domain.js';

class Game {
  constructor() {
    this.one = 1;
  }

  start() {
    console.log(`game ${this.one} started`);
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

export default Game;
export { GameSavingData, readGameSaving, writeGameSaving };
