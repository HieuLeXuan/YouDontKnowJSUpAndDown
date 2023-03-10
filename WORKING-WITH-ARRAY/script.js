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

const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = '';
  // .textContent = 0;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
      ${i + 1} ${type}</div>
      <div class="movements__value">${mov}???</div>
    </div> 
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calsPrintBalance = acc => {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}???`;
};

const calsDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}???`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${outcomes}???`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int > 0)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${parseFloat(interest).toFixed(2)}???`;
};

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

const updateUI = acc => {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calsPrintBalance(acc);
  // Display summary
  calsDisplaySummary(acc);
};

// Envent handler
let currentAccount;

btnLogin.addEventListener('click', e => {
  // prevent dorm from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  // prevent dorm from submitting
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = '';

  if (
    amount > 0 &&
    receiveAcc &&
    amount <= currentAccount.balance &&
    receiveAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add amount
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      account => account.username === currentAccount.username
    );
    // Delete acount
    accounts.splice(index, 1);
    // Update UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy ????")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far ????
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK ????
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
      console.log(`Dog number ${i + 1} is still a puppy ????`);
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
(you should already know from other challenges how we calculate averages ????)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK ????
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
GOOD LUCK ????
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

// TODO: some, every
// TODO: flat, flatMap
// TODO: sort
// sort ascending or descending
// ascending
movements.sort((a, b) => a - b);
// console.log(movements);

// descending
movements.sort((a, b) => b - a);
// console.log(movements);

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// 3.
const movs = accounts.flatMap(acc => acc.movements);
console.log(movs);

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
// console.log(deposits, withdrawals);

// 4.
const convertTitleCase = title => {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');

  return titleCase;
};

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, 
and this time they are studying if dogs are 
eating too much or too little.
Eating too much means the dog's current food portion 
is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion 
is within a range 10% above and 10% below the recommended 
portion (see hint).
1. Loop over the array containing dog objects, and for each dog, 
calculate the recommended food portion and add it to the object 
as a new property. Do NOT create a new array, simply loop over the array. 
Forumla: recommendedFood = weight ** 0.75 * 28. 
(The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's 
eating too much or too little. 
HINT: Some dogs have multiple owners, 
so you first need to find Sarah in the owners array, 
and so this one is a bit tricky (on purpose) ????
3. Create an array containing all owners of dogs who eat 
too much ('ownersEatTooMuch') and an array with all owners of 
dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., 
like this: "Matilda and Alice and Bob's dogs eat too much!" 
and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY 
the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY 
amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY 
amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by 
recommended food portion in an ascending order (keep in mind that 
  the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, 
you can use the summary lecture to choose between them ????
HINT 2: Being within a range 10% above and below the recommended 
portion means: current > (recommended * 0.90) && current < (recommended * 1.10). 
Basically, the current portion should be between 90% and 110% of the recommended portion.
TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK ????
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(
  dog => (dog.recFood = Math.trunc(Math.pow(dog.weight, 0.75) * 28))
);

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(`
//   Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
//   }
// `);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch, ownersEatTooLittle);

// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too littel`);

// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// console.log(dogs.filter(dog => dog.curFood === dog.recFood));

const sortDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(sortDogs);
