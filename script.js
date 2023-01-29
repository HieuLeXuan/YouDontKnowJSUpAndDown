// strict mode
// 'use strict';

// 5 falsy values: 0, '', undefined, null, NaN

// switch statement
/* const day = "monday";
switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}*/

/*
    Steven wants to build a very simple tip calculator
    for whenever he goes eating in a restaurant. In his 
    country, it's usual to tip 15% if the bill value is
    between 50 and 300. If the value is different, the
    tip is 20%.

    1. Your task is to calculate the tip, depending on
    the bill value. Create a variable called 'tip' for
    this. It's not allowed to use an if/else statement
    (If it's easier for you, you can start with an if/
    else statement, and then try to convert it to a
    ternary operator!) 
    2. Print a string to the console containing the bill
    value, the tip, and the final value (bill + tip).
    Example: 'The bill was 275, the tip was 41.25, and
    the total value 316.25'

    TEST DATA: Test for bill values 275, 40 and 430

function calculateTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill + (bill * 15) / 100;
  } else {
    return bill + (bill * 20) / 100;
  }
}
function calculateTip2(bill) {
  return bill >= 50 && bill <= 300
    ? bill + (bill * 15) / 100
    : bill + (bill * 20) / 100;
}
console.log(calculateTip(275));
console.log(calculateTip2(275));
console.log(calculateTip(40));
console.log(calculateTip2(40));
console.log(calculateTip(430));
console.log(calculateTip2(430));*/

//TODO: FUNDAMENTALS UNIT
/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");*/

// Challenge #1
/*
Back to the two gymnastics teams (doi the duc), the Dolphins and
the Koalas! There is a new gymnastics discripline,
which works defferently.
Each team compeles 3 times, and then the average of
the 3 scores is calculated (so one average scope per
team).
A team ONLY wins if it has at least DOUBLE the
average score of the other team. Otherwise, no team
wins!

1. Create an arrw function 'calcAverage' to calculate the average of 3 score
2. Use the function to calculate the average for both
teams
3. Create a function 'checkWinner' that takes the 
average score of each team as paramaters
('avgDolphins' and 'avgKoalas'), and then logs the
winner to the console, together with the victory
points, according to the rule above. Example: 'Koalas
win (30 vs 13)'.
4. Use the 'checkWinner' function to determine the
winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas
score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas
score 23, 34 and 27

const calcAverage = (a, b, c) => (a + b + c) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return "No team wins...";
  }
};
// Test 1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(avgDolphins, avgKoalas));

// Test 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
console.log(checkWinner(avgDolphins2, avgKoalas2));*/

// FUNDAMENTALS UNIT.ARRAY
// basic array operations

/* const friends = ["Hieu", "Nghia", "Thao"];
// add member last array
const newLength = friends.push("Ly");
console.log(friends.toString());

// add memeber first array
friends.unshift("Nguyen")
console.log(friends.toString());

// pop -> delete last
// shft -> delete first
// indexOf -> if find member return index, or not found reutrn -1
// includes -> true/false, find member have in array */

// Challenge #2
/* 
Steven is still building his tip calculator, using
the same rules as before: Tip 15% of the bill if the
bill value is between 50 and 300, and if the value is
different, the tip is 20%

1. Write a function 'calcTip' that takes any bill
value as an input and returns the corresponding (tuong ung) tip,
calculated based on the rules above (you can check
out the code from first tip calculator challenge if
you need to). Use the function type you like the
most. Test the function using a bill value of 100.

2. And now let's use arrays! So create an array
'bills' containing the test data below.

3. Create an array 'tips' containning the tip value
for each bill, calculated from the function you 
created before.

4. BONUS: Create an array 'total' containing the
total values, so the bill + tip.

TEST DATA: 125, 555 and 44


const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
let tips = [];
let totals = [];

bills.forEach((bill) => {
  let tipForEachBill = calcTip(bill);
  tips.push(tipForEachBill);
  totals.push(bill + tipForEachBill);
});

console.log(bills.toString());
console.log(tips.toString());
console.log(totals.toString());*/

//TODO: FUNDAMENTALS UNIT.OBJECT
// dot or bracket
/* const hieus = {
  firstName: "Hieu",
  lastName: "Le Xuan",
  age: 2023 - 1997,
  job: "IT",
  friends: ["Tu", "Hung", "Tai"],
};

console.log(hieus);
console.log(hieus.lastName);
console.log(hieus["lastName"]);

const nameKey = "Name";
console.log(hieus["first" + nameKey]);
console.log(hieus["last" + nameKey]);

// console.log(hieus."first" + nameKey)

const interestedIn = prompt(`What do you want to know
about hieus? Choose between firstName, lastName, age,
job and friends`);
console.log(hieus[interestedIn]);*/

// FUNDAMENTALS UNIT.OBJECT.Methods
/*const hieus = {
  firstName: "Hieu",
  lastName: "Le Xuan",
  birthYeah: 1997,
  job: "IT",
  friends: ["Tu", "Hung", "Tai"],
  calcAge: function () {
    this.age = 2023 - this.birthYeah;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${2023 - this.birthYeah}-year old ${
      this.job
    }, and he hes a driver's license`;
  },
};
// Challenge
// "hieus is a 26-year old it, and he hes a
// driver's license"
console.log(hieus);
console.log(hieus.calcAge());
console.log(hieus.getSummary());*/

//////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the
calculation! Remember: BMI = mass / height ** 2 = 
mass / (height * height). (mass is kg and height in
meter)

1. For each of time, create an object with properties
for their full name, mass, and height (Mark Miller
and John Smith)

2. Create a 'calcBMI' method on each object to
calculate the BMI (the same method on both objects).
Store the BMI value to a property, and also return it
from the method.

3. Log to the console who has the higher BMI,
together with the full name and the respective BMI.
Example: "John's BMI (28.3) is higher than Mark's (23.
9)"

TEST DATA: Mark's weights 78 kg and is 1.69 m tall,
John weights 92 kg and is 1.95 m tall.
*/

/*
const marks = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / Math.pow(this.height, 2);
    return this.bmi;
  },
};

const johns = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / Math.pow(this.height, 2);
    return this.bmi;
  },
};

marks.calcBMI();
johns.calcBMI();

if (johns.bmi > marks.bmi) {
  console.log(`John's BMI ${johns.bmi} is higher than Mark's ${marks.bmi}`);
} else if (marks.bmi > johns.bmi) {
  console.log(`Mark's BMI ${marks.bmi} is higher than John's ${johns.bmi}`);
}
*/

// Coding Challenge #3

/*
Let's improve Steven's tip calculator even more, this
time using loops!

1. Create an array 'bills' containing all 10 test
bill values
2. Create empty arrays for the tips and the totals
('tips' and 'totals')
3. Use the 'calcTip' function we wrote before(no 
need to repeat) to calculate tips and totals values
(bill + tip) for every bill value in the bills array.
Use a for loop to perform the 10 calculation!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86
and 52

HINT: Call calcTip in the loop and use the push
method to add values to the tips and totals arrays

4. BONUS: Write a function 'calcAverage' which takes
an array called 'arr' as an argument. This function
calculates the average of all numbers in the given
array. This is a DIFFICULT challenge (we haven't done
this before)! Here is how to solve it:
    4.1 First, you will need to add up all values in
    the array. To do the addition, start by creating a
    variable 'sum' that starts at 0. Then loop over the
    array using a for loop. In each iteration, add the
    current value to the 'sum' variable. This way, by
    the end of the loop, you have all values added
    together
    4.2 To calculate the average, divide the sum you
    calculated before by the length of the array
    (because that's the number of elements)
    4.3 Call the function with the 'totals' array
*/

/*const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

bills.forEach((bill) => {
  let tipForEachBill = calcTip(bill);
  tips.push(tipForEachBill);
  totals.push(bill + tipForEachBill);
});

console.log(bills);
console.log(tips);
console.log(totals);*/

//TODO: DEVELOPER SKILS AND EDITTOR SETUP

/*
Given an array of forecasted (du bao) maximun temperatures
the thermometer (nhiet ke) displays a string with these 
temperatures.

Example: [17, 21, 23] will print "... 17C in 1 days 
... 21c in 2 days ... 23C in 3 days ..."

Create a function 'printForecast' which takes in an
array 'arr' and logs a string like the above to the
console.

Use the problem-solving framework: Understand the
problem and break it up into sub-problem!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*const temperatures1 = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];
const printForecast = arr => {
  for (let i = 0; i < arr.length; i++) {
    return `... ${arr[0]}C in ${i + 1} days 
    ... ${arr[1]}C in ${i + 2} days ... ${arr[2]}C in ${i + 3} days ...`;
  }
};

console.log(printForecast(temperatures1));*/

// TODO: Destructuring arrays

// const arr = [1, 2, 3];
// const [a, , c] = arr;
// console.log(a, c);

// const [a, b, c] = [1, 2, 3, 4, 5];
// console.log(a, b, c);

// const arr = [1, 2, 3];
// const [a, b, ...c] = [1, 2, 3, 4, 5];
// console.log(a, b, c);

// TODO: Rest paramater
// console.log(...arr);

// TODO: Variable assignment
// const res = [1, 2, 3, 4]; // rest.response();
// const [a, b, c] = res;
// console.log(a, b, c);

// TODO: Swapping
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a, b);

// TODO: Ignoring values
// const res = () => [1, 2, 3];
// const [a, , b] = res();
// console.log(a, b);

// TODO: Assignment to new variables
// const res = { blog: 'blog1', type: 'type1' };
// const { blog: newBlog, type: newType } = res;
// console.log(newBlog, newType);

// TODO: Nested object and destructuring
// const blogs = {
//   anonystick: [
//     {
//       pageFacebook: 'Tip javascript Viet Nam',
//       likes: 1234,
//       daily: 1323,
//     },
//     {
//       pageFacebook: 'Tip javascript Viet Nam 1',
//       likes: 1234,
//       daily: 1323,
//     },
//     {
//       pageFacebook: 'Tip javascript Viet Nam 2',
//       likes: 1234,
//       daily: 1323,
//     },
//   ],
// };

// // console.log(blogs.anonystick[0].pageFacebook);
// // console.log(blogs.anonystick[0].likes);
// // console.log(blogs.anonystick[0].daily);

// const {
//   anonystick: [{ pageFacebook: namePage, likes: numLikes, daily: numDaily }],
// } = blogs;

// const { anonystick: newAnonystick } = blogs;

// const {
//   anonystick: [, , object3],
// } = blogs;

// console.log(namePage, numLikes, numDaily);
// console.log(newAnonystick);

// console.log(object3);

// TODO: Spead and rest paramater

// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// const [a, b, ...c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);

// const add = function (...numbers) {
//   console.log(...numbers);
// };
// add(1);
// add(1, 2);
// add(1, 2, 3);

// TODO: Coding Challenge
/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below).
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' 
and 'players2')
2. The first player in any player array is the goalkeeper and 
the others are field players. For Bayern Munich (team 1) create 
one variable ('gk') with the goalkeeper's name, and one array 
('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams 
(22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. 
So create a new array ('players1Final') containing all the original 
team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd 
(called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary 
number of player names (NOT an array) and prints each of them 
to the console, along with the number of goals that were scored 
in total (number of player names passed in)
7. The team with the lower odd is more likely to win. 
Print to the console which team is more likely to win, WITHOUT using 
an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' 
and 'Kimmich'. Then, call the function again with players from game.scored
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const {
//   odds: { team1: team1, x: draw, team2: team2 },
// } = game;

// printGoals(...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// TODO: Section 9: Data structures, Modern Operators and String
// TODO: 103. Destructuring Arrays
// strict mode
'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [2, 3, 4];

// khai bao bien moi
// const [x, y, z] = arr;
// console.log(x, y, z, arr);
// const [first, second] = restaurant.categories;
// console.log(first, second);

// loai bo phan tu khong mong muon trong mang
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log('starter, mainCourse: ', starter, mainCourse);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p, q, r = 1] = [8, 9];
// console.log(p, q, r);

// TODO: Destructuring Object

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Default values
// const { menu = [], starterMenu = [] } = restaurant;
// console.log(menu, starterMenu);

// TODO: Coding Challenge #2

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// 1.
// console.log(game.scored.entries());
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// 2.
// const odds = Object.values(game.odds);
// console.log(odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }

// average /= odds.length;
// console.log(average);

// 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// BONUS
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// TODO: Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
// console.log(question);

// Convert object to map
// console.log(Object.entries(restaurant.openingHours));
// const hourMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hourMap);

// Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get('correct') === answer);

// Convert mapp to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// TODO: Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// for (const [key, value] of gameEvents) {
//   const half = key <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${key}: ${value}`);
// }

// TODO: Function acepting callback function
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// console.log(upperFirstWord('hello word'));

// // Higher-order function
// const transform = function(str, fn) {

// }

// TODO: call, apply, bind
// TODO: call
// call function with call
// function a() {
//   console.log('example func');
// }
// a();
// a.call();

// const teacher = {
//   firstName: 'Minh',
//   lastName: 'Ha',
// };

// const me = {
//   firstName: 'Hieu',
//   lastName: 'Le',
//   showFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// bind + call
// bind -> bind after that call new function
// me.showFullName.call(me);

// function Animal(name, weight) {
//   this.name = name;
//   this.weight = weight;
// }

// function Chicken(name, weight, legs) {
//   Animal.call(this, name, weight);
//   this.legs = legs;
// }

// const hieuLe = new Chicken('Hieu', 58, 2);
// console.log(hieuLe);
