const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    ezra: 93,
    yuna: 70,
    jamie: 79
}

//FOR var IN object
for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}


//FOR var OF iterateableThings
let total = 0;
let scores =  Object.values(testScores);
for (let score of scores) { //from object becomes array
    total += score;
}

console.log(total / scores.length);