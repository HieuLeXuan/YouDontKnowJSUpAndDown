'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = movements => {
  containerMovements.innerHTML = '';
  // .textContent = 0;

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
      ${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div> 
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
console.log(containerMovements.innerHTML);

const calsPrintBalance = movements => {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}€`;
};
calsPrintBalance(account1.movements);

const calsDisplaySummary = movements => {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${outcomes}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(int => int > 0)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};
calsDisplaySummary(account1.movements);

const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

// Envent handler

///////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of 
them asked 5 dog owners about their dog's age,
and stored the data into an array (one array for each).
For now, they are just interested in knowing whether
a dog is an adult or a puppy. A dog is an adult if it 
is at least 3 years old, and it's a puppy if it's
less than 3 years old.
Create a function 'checkDogs',
which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), 
and does the following things:
1. Julia found out that the owners of the FIRST
and the LAST TWO dogs actually have cats, not dogs!
So create a shallow copy of Julia's array,
and remove the cat ages from that copied array
(because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

/*
function checkDogs(dogsJulia, dogsKate) {
  // coppy array
  // spread operator, slice
  // const dogsJuliaCorrected = [...dogsJulia];
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = [...dogsJuliaCorrected, ...dogsKate];

  dogs.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old"`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
}
const Julia1 = [3, 5, 2, 12, 7];
const Kate1 = [4, 1, 15, 8, 3];
const Julia2 = [9, 16, 6, 8, 3];
const Kate2 = [10, 5, 6, 1, 4];

checkDogs(Julia1, Kate1);
// checkDogs(Julia2, Kate2);
*/

const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
// console.log(movementsDescriptions);

// TODO: reduce
// console.log(movements);
// const balance = movements.reduce((acc, cur, i, arr) => {
//   console.log(`Iteration: ${i} ${acc}`);
//   return acc + cur;
// });
// console.log(balance);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. 
This time, they want to convert dog ages to human ages 
and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an 
arrays of dog's ages ('ages'), and does the following things 
in order:
1. Calculate the dog age in human years using the following 
formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old 
(which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs 
(you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const calcAverageHumanAge = ages => {
  const humanAge = ages.map(age => (age > 2 ? 16 + age * 4 : 2 * age));
  const adults = humanAge.filter(age => age >= 18);

  // console.log(humanAge);
  // console.log(adults);

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return average;
};
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from 
the previous challenge, but this time as an arrow function, 
and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const calcAverageHumanAge2 = ages => {
  ages
    // humanAge
    .map(age => (age > 2 ? 16 + age * 4 : 2 * age))
    //adult
    .filter(age => age > 18)
    // calc average age adult
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
};