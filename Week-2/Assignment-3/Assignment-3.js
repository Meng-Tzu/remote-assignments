function count(input) {
  let dict = {};
  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    if (letter in dict) {
      dict[letter] += 1;
    } else {
      dict[letter] = 1;
    }
  }
  let str = "{";
  for (let letter in dict) {
    str = str + letter + ":" + dict[letter] + ", ";
  }
  str = str.slice(0, -2) + "}";
  return str;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  let dict = {};
  for (let i = 0; i < input.length; i++) {
    let key = input[i].key;
    let value = input[i].value;
    if (key in dict) {
      dict[key] += value;
    } else {
      dict[key] = value;
    }
  }
  let str = "{";
  for (let letter in dict) {
    str = str + letter + ":" + dict[letter] + ", ";
  }
  str = str.slice(0, -2) + "}";
  return str;
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
