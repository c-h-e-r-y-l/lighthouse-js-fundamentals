const packingList = ['bowls', 'plates', 'pots', 'pans', 'eating utensils', 'glasses', 'cups', 'cooking utensils'];

console.log(packingList);

//for loop to iterate over array packingList
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

//while loop to iterate over array packingList
console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}