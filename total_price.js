const taxRate = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 9.99;
const spendingThreshold = 500;
const bankAccountBalance = 303.91;
let amount = 0;

function caculaTax(amount) {
  return amount * taxRate;
}

function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}

// keeps buying phone while you still have money
while (amount < bankAccountBalance) {
  // buy a new phone
  amount = amount + phonePrice;

  // can we afford the necessary

  if (amount < spendingThreshold) {
    amount = amount + accessoryPrice;
  }
}

amount = amount + caculaTax(amount);

console.log("Your purchase: " + formatAmount(amount));

// can you acttuatly afford this purchase
if (amount > bankAccountBalance) {
  console.log("You can't afford this purchase. :((");
}
