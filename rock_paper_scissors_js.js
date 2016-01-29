var userChoice;
userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice;
computerChoice = Math.random();
console.log (computerChoice)
if (computerChoice <= 0.33){
computerChoice = "ROCK";
}
else if (computerChoice <= 0.66){
computerChoice = "PAPER";
}
else {
computerChoice = "SCISSORS";
};
