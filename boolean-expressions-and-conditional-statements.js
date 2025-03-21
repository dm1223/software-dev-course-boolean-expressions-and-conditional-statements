/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the desert, the other to the town market.");
const choice = readline.question("Do you go to the 'Desert' or the 'Town Market'?");

if (choice === "Desert" && hasTorch) {
    console.log("You safely navigate through the desert, bypassing enemies.");
  } else if (choice === "Tower of The Hidden Knights" && !hasTorch) {
    console.log("You grab your sword and prepare for battle.");
  } else if (choice === "Market" || hasMap) {
    console.log("You find your way to the market.");
  } else {
    console.log("You acquire potions and herbs.");
  }


}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
