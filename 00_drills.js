// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--)
  {
    reversed += str[i];
  }

  return reversed;
}

// TODO - write a function which returns the factorial of a positive integer
const factorial = (num) => {
  let total = 1;
  while (num > 0)
  {
    total *= num;
    num--;
  }
  return total;
}

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
  const merged = [];
  if (arr1.length === arr2.length)
  {
    for (let i = 0; i < arr1.length; i++)
    {
      merged.push([arr1[i], arr2[i]]);
    }
    return merged;
  }
  return -1;
}

// TODO - Write a function which does the opposite of `zip()`
const unzip = (arr) => {
  const unzipped = [];
  for (let i = 0; i < arr[0].length; i++)
  {
    const element = [];
    for (let j = 0; j < arr.length; j++)
    {
      element.push(arr[j][i]);
    }
    unzipped.push(element);
  }
  return unzipped;
}

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftRight("Hello", 3) === "lloHe"
const shiftRight = (str, num) => {
  let shift = num % str.length;
  return str.substring(str.length - shift) + str.substring(0, str.length - shift);
}

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
const announceDate = () => {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const timeOfDay = date.getHours() < 12 ? "morning" : "afternoon"; 
  return `Today's date is ${month} ${date.getDate()}st, ${date.getFullYear()}. It is ${date.getHours()}:${date.getMinutes()} in the ${timeOfDay}.`;
}

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
