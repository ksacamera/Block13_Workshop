// Is Truthy
alert(`Hit OK to find out if "I am a string" is actually a string`);
let inputValue1 = "I am a string";
inputValue1 = true;
console.log(inputValue1); // leaving in console log in for the sake of this assignment
if (inputValue1 === true) {
  // it is expected that this will read true
  alert(`You betchya that's true`);
}

alert(`Hit OK to find out if "false" is false`);
const inputValue2 = false; //
console.log(inputValue2); // leaving in console log in for the sake of this assignment
if (inputValue2 === true) {
  // it is expected that this will read false
  alert(`The boolean value false is truthy`);
} else {
  alert(`The boolean value false is falsey`);
}

alert(`Hit OK to find out if "null" is truthy or falsey`);
const inputValue3 = null;
console.log(inputValue3); // leaving in console log in for the sake of this assignment
if (inputValue3 === true) {
  // it is expected that this will read false
  alert(`The null value is truthy`);
} else {
  alert(`The null value is falsy`);
}

alert(`Hit OK to find out if "undefined" is truthy or falsey`);
const inputValue4 = undefined;
console.log(inputValue4); // leaving in console log in for the sake of this assignment
if (inputValue4 === true) {
  // it is expected that this will read false
  alert(`undefined is truthy`);
} else {
  alert(`undefined is falsy`);
}

alert(`Hit OK to find out if "0" is truthy or falsey`);
const inputValue5 = 0;
console.log(inputValue5); // leaving in console log in for the sake of this assignment
if (inputValue5 === true) {
  // it is expected that this will read false
  alert(`The number 0 is truey (the only truthy number)`);
} else {
  alert(`The number 0 is falsy (the only falsy number)`);
}

alert(`Hit OK to find out if the empty string "" is truthy or falsey`);
const inputValue6 = "";
console.log(inputValue6); // leaving in console log in for the sake of this assignment
if (inputValue6 === true) {
  // it is expected that this will read false
  alert(`The empty string is truey (the only truthy string)`);
} else {
  alert(`The empty string is falsy (the only falsy string)`);
}

// Number Line
alert(`Hit OK to find out if the sum of 50 plus 51 is greater than 100.`);
const num1a = 50;
const num1b = 51;
const sum1 = num1a + num1b;
console.log(`The sum of ` + num1a + ` and ` + num1b + ` is: ` + sum1); // leaving in console log in for the sake of this assignment
if (sum1 > 100);
{
  // it is expected that this will read "101 is greater than 100"
  alert(`101 is greater than 100`);
}

alert(`Hit OK to find out if the sum of 99 minus 2 is greater than 0.`);
const num2a = 99;
const num2b = -2;
const sum2 = num2a + num2b;
console.log(`The sum of ` + num2a + ` and ` + num2b + ` is: ` + sum2); // leaving in console log in for the sake of this assignment
if (sum2 > 0);
{
  // it is expected that this will read "97 is greater than 0"
  alert(`97 is greater than 0`);
}

alert(`Hit OK to find out if the sum of 0 plus 101 is greater than 100.`);
const num3a = 0;
const num3b = 101;
const sum3 = num3a + num3b;
console.log(`The sum of ` + num3a + ` and ` + num3b + ` is: ` + sum3); // leaving in console log in for the sake of this assignment
if (sum3 > 100);
{
  // it is expected that this will read "101 is greater than 100"
  alert(`101 is greater than 100`);
}

alert(`Hit OK to find out if the sum of 500 minus 500 is equal to zero.`);
const num4a = 500;
const num4b = 500;
const sum4 = num4a - num4b;
console.log(`The sum of ` + num4a + ` and ` + num4b + ` is: ` + sum4); // leaving in console log in for the sake of this assignment
if (sum4 === 0);
{
  // it is expected that this will read "0 is equal to 0"
  alert(`0 is equal to 0`);
}

alert(`Hit OK to find out if the sum of -1000 plus 0 is a negative number.`);
const num5a = -1000;
const num5b = 0;
const sum5 = num5a + num5b;
console.log(`The sum of ` + num5a + ` and ` + num5b + ` is: ` + sum5); // leaving in console log in for the sake of this assignment
if (sum5 > 100);
{
  // it is expected that this will read "-1000 is a negative number"
  alert(`-1000 is a negative number`);
}

alert(`Hit OK to find out if the sum of -5 plus 0 is a negative number.`);
const num6a = -5;
const num6b = 0;
const sum6 = num6a + num6b;
console.log(`The sum of ` + num6a + ` and ` + num6b + ` is: ` + sum6); // leaving in console log in for the sake of this assignment
if (sum6 > 100);
{
  // it is expected that this will read "-5 is a negative number"
  alert(`-5 is a negative number`);
}

// Greater than or Equal to 5
alert(`Hit OK to find out if 5 and 6 are both greater than or equal to 5.`);
const number1a = 5;
const number1b = 6;
console.log(`5 and 6 are both greater than or equal to 5`);
if (number1a + number1b >= 5);
{
  // it is expected that this will read "true"
  alert(`True`);
}

alert(`Hit OK to find out if 10 and 11 are both greater than or equal to 5.`);
const number2a = 10;
const number2b = 11;
console.log(`10 and 11 are both greater than or equal to 5`);
if (number2a + number2b >= 5);
{
  // it is expected that this will read "true"
  alert(`True`);
}

alert(`Hit OK to find out if 0 and 0 are both greater than or equal to 5.`);
const number3a = 0;
const number3b = 0;
console.log(`0 and 0 are both not greater than or equal to 5`);
if (number3a + number3b >= 5);
{
  // it is expected that this will read "false"
  alert(`False`);
}

alert(
  `Hit OK to find out if 1000 and -1000 are both greater than or equal to 5.`
);
const number4a = 1000;
const number4b = -1000;
console.log(`1000 and -1000 are both not greater than or equal to 5`);
if (number4a + number4b >= 5);
{
  // it is expected that this will read "false"
  alert(`False`);
}

alert(`Hit OK to find out if 6 and 4 are both greater than or equal to 5.`);
const number5a = 6;
const number5b = 4;
console.log(`6 and 4 are both not greater than or equal to 5`);
if (number5a + number5b >= 5);
{
  // it is expected that this will read "false"
  alert(`False`);
}

alert(`Hit OK to find out if 5 and 5 are both greater than or equal to 5.`);
const number6a = 5;
const number6b = 5;
console.log(`5 and 5 are both greater than or equal to 5`);
if (number6a + number6b >= 5);
{
  // it is expected that this will read "true"
  alert(`True`);
}

// Pair and Compare
alert(
    `Hit OK to find out if at least one of the pairs is truthy: \n"cat", "cat", 6, "6".`
  );
  const param1A = "cat";
  const param1B = "cat";
  const param1Aa = 6;
  const param1Ba = "6";
  console.log(`"cat" and "cat" are pairs. They are truthy.`); // leaving in console log in for the sake of this assignment.
  if (param1A === param1B) {
    // it is expected that this will be truthy because of "cat" and "cat".
    alert(`Yes, "cat" and "cat" are pairs. \nThey are truthy.`);
  }
  
  alert(
    `Hit OK to find out if at least one of the pairs is truthy: \n"five", 5, "dog", "dawg".`
  );
  const param2A = "five";
  const param2B = 5;
  const param2Aa = "dog";
  const param2Ba = "dawg";
  console.log(`None of these are pairs. They are falsy.`); // leaving in console log in for the sake of this assignment.
  if (((param2A !== param2B) !== param2Aa) !== param2Ba) {
    // it is expected that this will be falsy.
    alert(`No, none of these are pairs. \nThey are falsy.`);
  }
  
  alert(
    `Hit OK to find out if at least one of the pairs is truthy: \n0, false, "horse", "horse".`
  );
  const param3A = "0";
  const param3B = false;
  const param3Aa = "horse";
  const param3Ba = "horse";
  console.log(`"horse" and "horse" are pairs. They are truthy.`); // leaving in console log in for the sake of this assignment.
  if (param3Aa === param3Ba) {
    // it is expected that this will be truthy because of "horse" and "horse".
    alert(`Yes, "horse" and "horse" are pairs. \nThey are truthy.`);
  }
  
  alert(
    `Hit OK to find out if at least one of the pairs is truthy: \n"eight", "eight", "ate", "ate".`
  );
  const param4A = "eight";
  const param4B = "eight";
  const param4Aa = "ate";
  const param4Ba = "ate";
  console.log(
    `"eight" and "eight" are pairs as well as "ate" and "ate". They are both truthy.`
  ); // leaving in console log in for the sake of this assignment.
  if (param4Aa === param4Ba) {
    // it is expected that this will be truthy because of "eight" and "eight" as well as "ate" and "ate".
    alert(
      `Yes, "eight" and "eight" are pairs as well as "ate" and "ate". \nThey are both truthy.`
    );
  }
  
  alert(
    `Hit OK to find out if at least one of the pairs is truthy: \n11, "eleven", "four", "for".`
  );
  const param5A = 11;
  const param5B = "eleven";
  const param5Aa = "four";
  const param5Ba = "for";
  console.log(`None of these are pairs. They are falsy.`); // leaving in console log in for the sake of this assignment.
  if (param5A !== param5B) {
    // it is expected that this will be falsy.
    alert(`No, none of these are pairs. \nThey are falsy.`);
  }
  
  alert(
    `Hit OK to find out if at least one of the pairs is truthy: \n"cake", "cake", "pie", "pie".`
  );
  const param6A = "cake";
  const param6B = "cake";
  const param6Aa = "pie";
  const param6Ba = "pie";
  console.log(
    `"cake" and "cake" are pairs as well as "pie" and "pie". They are both truthy.`
  ); // leaving in console log in for the sake of this assignment.
  if (param6Aa === param6Ba) {
    // it is expected that this will be truthy because of "cake" and "cake" as well as "pie" and "pie".
    alert(
      `Yes, "cake" and "cake" are pairs as well as "pie" and "pie". \nThey are both truthy.`
    );
  }
  