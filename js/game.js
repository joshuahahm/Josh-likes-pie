var userChoice =prompt ("Do You Choose Rock, Paper, or Scissors?")
if (userChoice == "rock") {
  console.log(userChoice)
}
else if (userChoice == "paper") {
  console.log(userChoice);
}
else if (userChoice =="scissors") {
  console.log(userChoice);
}

else {
  userChoice = prompt("Do you choose Rock, Paper, or Scissors");
  console.log (userChoice)
}

if (userChoice == "rock" || userChoice="paper" || userChoice="scissors") {
  console.log(userChoice);
}
else {
  userChoice = prompt("Do you choose Rock, Paper, or Scissors");
  console.log (userChoice)
}


var computerChoice = Math.random();

if (computerChoice <0.34) {
  computerChoice = "rock";
}
else if(computerChoice <=0.67) {
  computerChoice = "paper";
}
else {
  computerChoice = "scissors";
}
console.log("Computer:" + computerChoice)

var compare = function (choice1 , choice2) {
  if(choice1 === choice2)
  return "The result is a tie!"
}
 else if (choice1 === "rock") {
   if(choice2 === "scissors") {
     return "rock wins";
   } else {
     return "paper wins";
   }else if (choice1 === "paper") {
     if(choice2 === "scissors") {
       return "scissors wins";
     } else {
       return "paper wins"
     }
   }else if (choice1 ==="scissors") {
     if (choice2 ==="paper") {
       return "scissors wins";
     } else {
       return "rock wins"
     }
   }else {
     return "Please don't add any unknown items";
   }
 }
 console.log (compare(userChoice,computerChoice));
