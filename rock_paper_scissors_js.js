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
console.log("Computer: " + computerChoice);
var compare = function(choice1, choice2) {
if(choice1 === choice2) {
    return "The result is a tie!";
} else if (choice1 === "rock") {
    if (choice2 === "scissors")
        return "rock wins";
    }
    else {
        return "paper wins";
    }
};
