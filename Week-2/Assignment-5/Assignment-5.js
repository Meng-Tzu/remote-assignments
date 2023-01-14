function binarySearchPosition(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    // 將array切成兩半
    let middle = Math.floor((start + end) / 2);

    if (numbers[middle] === target) {
      // 找到target，return後會自動跳出while loop
      return middle;
    } else if (target > numbers[middle]) {
      // 繼續搜尋array的右半邊
      start = middle + 1;
    } else {
      // 亦即target < numbers[middle]，繼續搜尋array的左半邊
      end = middle - 1;
    }
  }

  // 當不再符合while loop的條件，表示找不到target，會自動跳出loop
  return -1;
}

// Exercise
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
