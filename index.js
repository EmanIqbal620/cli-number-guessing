#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will genetate a random number - Done.
// 2) User input fir gussing number - Done
// 3) computer user input with computer genetated number and show result
const randonNumber = Math.floor(Math.random() * 10 + 1);
console.log(randonNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 - 10",
    },
]);
if (answers.userGuessNumber === randonNumber) {
    console.log("congtratulation! you gussed right number.");
}
else {
    console.log("you guess wrong number");
}
;
