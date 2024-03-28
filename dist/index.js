class Player {
  #score = 0;
  numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last
  }
  getScore() {
    return this.#score;
  }
  updateScore(newScore) {
    return this.#score = newScore;
  }
  taunt() {
    console.log("BOOYAH");
  }
  loseLife () {
    this.numLives -= 1;
  }
}
// instantiate a new player
const player1 = new Player("blue", "steele");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);
// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);
console.log(player1.getScore());
player1.updateScore(28);
console.log(player1.getScore());
console.log(player1);



// const player2 = new Player("charlie", "brown");
// player2.taunt();