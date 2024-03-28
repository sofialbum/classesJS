class Player {
  static description = "Player in Our Game";
  #score = 0;
  numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be a positive!");
    }
    this.#score = newScore;
  }
  updateScore(newScore) {
    return (this.#score = newScore);
  }
  taunt() {
    console.log("BOOYAH");
  }
  loseLife() {
    this.numLives -= 1;
  }
}

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}

// instantiate a new AdminPlayer
const player1 = new AdminPlayer("admin", "mCadmin", ["delete","restore world"]);

// instantiate a new player
// const player1 = new Player("blue", "steele");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);
// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);
// console.log(player1.getScore());
// player1.updateScore(28);
// console.log(player1.getScore());
// console.log(player1);

// console.log(player1.fullName); // "blue steele"
// console.log(player1.score);
// player1.score = 43242;
// console.log(player1.score);

// const player2 = new Player("charlie", "brown");
// player2.taunt();
