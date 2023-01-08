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
/* strict mode
"use strict";

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
