let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum =  Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let tries = 0;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;

    tries++;

    if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess!");
    } else  {
    guess = prompt("Too low! Enter a new guess!");
    }
}

if (guess === 'q'){
    console.log("YOU QUIT! WHY SO WEAK");
}
else console.log(`YOU GOT IT WITH ${tries} GUESSES`);

