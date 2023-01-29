// TODO: su khac biet giua slice, splice, split

// cat bo mot phan cua array,
// lay phan cat tao ra mot mang moi
// array.slice(from, until); (thuc chat cat tu from toi until - 1)

// co the them hoac xoa doi tuong trong mang
// cos the thay doi truc tiep tren doi tuong goi den no
// array.splice(index, number or element)

// split -> lam viec voi chuoi string thanh cac substring
// return mot array
// "How are you doing today?".split(" ", 3)
// -> (3) ["How", "are", "you"]

// TODO: map, filter, reduce
// TODO: find
const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

// console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

const result = inventory.find(({ quantity }) => quantity === 2);
// console.log(result);
