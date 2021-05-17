
// ZURI Frontend Algorithms Task (Frontend Task 4)

// QUESTION 1

// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

const convertFahrToCelsius = (fahrenheit) => {
  let parsedFahrenheit;

  if (!Array.isArray(fahrenheit)) {
    parsedFahrenheit = parseInt(fahrenheit);
  }
  if (isNaN(parsedFahrenheit)) {
    return `${JSON.stringify(fahrenheit)} is not a valid number but a/an ${
      Array.isArray(fahrenheit) ? "array" : typeof fahrenheit
    }`;
  }

  let celsius = ((fahrenheit - 32) * 5) / 9;
  let c = celsius.toFixed(4);
  console.log(`${c}\xB0C`);
  return `${c}\xB0C`;
};

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp: 0}));




// QUESTION 2

// 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces
//  multiples of 2, 3, and 5 with "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array.


const checkYuGiOh = (n) => {
  let parsedn;
  let arr = [];

  if (!Array.isArray(n)) {
    parsedn = parseInt(n);
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
  }

  if (isNaN(parsedn)) {
    return `invalid parameter: ${JSON.stringify(n)}`;
  }

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] % 2 == 0 && arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      arr[i] = "yu-gi-oh";
    } else if (arr[i] % 2 == 0 && arr[i] % 3 == 0) {
      arr[i] = "yu-gi";
    } else if (arr[i] % 2 == 0 && arr[i] % 5 == 0) {
      arr[i] = "yu-oh";
    } else if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      arr[i] == "gi-oh";
    } else if (arr[i] % 2 == 0) {
      arr[i] = "yu";
    } else if (arr[i] % 3 == 0) {
      arr[i] = "gi";
    } else if (arr[i] % 5 == 0) {
      arr[i] = "oh";
    }
  }

  console.log(arr);
  return arr;
};
console.log(checkYuGiOh(10));
console.log(checkYuGiOh(5));
console.log(checkYuGiOh("fizzbuzz is meh"));