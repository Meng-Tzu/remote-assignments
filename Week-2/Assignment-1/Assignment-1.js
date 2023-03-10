// Find the max value of an array of numbers.
function max(numbers) {
  let maximum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    }
  }
  return maximum;
}

// Find the first position of the target number inside an array of numbers.
function findPosition(numbers, target) {
  let position = -1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == target) {
      position = i;
      break; //一找到target，就不用再繼續往下看
    }
  }
  return position;
}

// Exercise
console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7

console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1
