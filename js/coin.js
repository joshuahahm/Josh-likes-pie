var userChoice =prompt ("Do You Choose Heads or Tails?")
if (userChoice == "Heads") {
  console.log(userChoice)
}
else if (userChoice == "Tails") {
  console.log(userChoice);
}


else {
  userChoice = prompt("Do you choose Heads or Tails");
  console.log (userChoice)
}

if (userChoice == "heads" || userChoice="tails" {
  console.log(userChoice);
}
else {
  userChoice = prompt("Do you choose Heads or Tails");
  console.log (userChoice)
}


var computerChoice = Math.random();

if (computerChoice <0.50) {
  computerChoice = "Heads";
}

else {
  computerChoice = "Tails";
}
console.log("Computer:" + computerChoice)

var compare = function (choice1 , choice2) {
  if(choice1 === choice2)
  return "You're Correct!"
}
else if (choice1 === "Heads") {
   if(choice2 === "Tails") {
     return "It landed on tails";
   }
else if (choice1 === "Tails") {
     if(choice2 === "Heads") {
       return "It landed on Heads";
 }

   }else {
     return "Please don't add any unknown items";
   }
 }
 console.log (compare(userChoice,computerChoice));
