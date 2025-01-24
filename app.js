const max = prompt("Enter the max number");
const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Guess the random number");
while(true){
    if(guess == "quit"){
        console.log("User Quit");
        break;
    }
    if(guess == random){
        console.log("Congrats!! You guess is right. Random number was :", random);
        break;
    }else if(guess<random){
        guess = prompt("Hint: your guess is too small! Pls try again ");
    }else if(guess>random){
        guess = prompt("Hint: your guess is too large! Pls try again ");
    }
}