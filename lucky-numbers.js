// look back again 🌹🙌😁

function twoSum(array1, array2) {
  return Number(array1.join("")) + Number(array2.join(""));
}

// console.log(twoSum([1, 2, 3], [0, 7]));

///---///

function luckyNumber(value) {
  let str = String(value);
  return str === str.split("").reverse().join("") ? true : false;
}

// console.log(luckyNumber(1441));
// console.log(luckyNumber(123));

///---///

function errorMessage(input) {
  if (!input) {
    return "Required field";
  }
  return Number(input) ? "" : "Must be a number besides 0";
}

// console.log(errorMessage("123"));
// console.log(errorMessage(""));
// console.log(errorMessage("abc"));
