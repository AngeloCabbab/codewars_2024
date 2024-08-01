function points(games) {
let totalPoints = 0;
for (let i = 0; i < games.length; i++) {
const match = games[i].split(':');
const ourScore = parseInt(match[0]);
const opponentScore = parseInt(match[1]);
if (ourScore > opponentScore) {
totalPoints += 3; //win, 3 points
} else if (ourScore === opponentScore) {
totalPoints += 1; //tie, 1 point
}
//loss, 0 points for x < y
}
return totalPoints;
}