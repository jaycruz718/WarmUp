// Working with Obejcts and Loops!!!

//✅ Goal 1: Loop through the following array and calculate the total score.
//✅ Follow Up: Print your result to the console using string interpolation for clarity.
const games = [
   { name: "Game 1", score: 5 },
   { name: "Game 2", score: 8 },
   { name: "Game 3", score: 2 },
   { name: "Game 4", score: 10 }
];
// console.log(games);

let totalScore = 0;
 
for (let i = 0; i < games.length; i++) {
    totalScore += games[i].score
 }
 console.log(`Total Score is ${totalScore}`);

//✅ Goal 2: Create another loop that only calculates total of scores greater than 5
//✅ Follow Up: Print your result to the console using string interpolation for clarity.
let scoreOver5 = 0;
games.forEach(el => {
    if (el.score > 5) {
        scoreOver5 = scoreOver5 + el.score;
    }
});

console.log(`Total of scores over 5: ${scoreOver5}`)
// const scores = [5, 8, 2, 10];
// let totalScores = 0;

// for (let i = 0; i < scores.length; i++) {
 // if (scores[i] > 5) {
   // totalScores += scores[i];
  // }
// }

// console.log("Total of scores greater than 5:", totalScores);

// ✅ Goal 3: Find the game with the highest score.
let topGame;
let highestScore = 0; 

for (let game of games) {
    if(game.score > highestScore);
        highestScore = game.score;
        topGame = game;
}

console.log(`${topGame.name} has the highest score of ${highestScore}`)

//✅ Follow Up: Print your result to the console using string interpolation for clarity.

// 🌟🌟 Bonus: Print out EACH game that scored above 'average'