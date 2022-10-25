// const reverseStringOrder = (str) =>{
//    var splitString = str.split("").reverse().join("")
//    return splitString
// }
// console.log(reverseStringOrder("jason")) //nosaj

// const jason = [1, 2, 3, 4];
// jason.splice(1, 0, 6, 5, "hi");
// console.log(jason);
// jason.splice(3, 2, 17);
// jason.slice(1, 3);
// console.log(jason.slice(1, 3));

// const rank = (a, b) => {
//   if (a > b) {
//     return [b, a];
//   } else {
//     return [a, b];
//   }
// };
// console.log(rank(9, 2)); //[2,9]

const rank3 = (a, b, c) => {
  if (a > b && a > c && b > c) {
    return [c, b, a];
  } else {
    if (b > a && b < c && a > c) {
      return [b, a, c];
    } else {
      if (c > a && c > b && a < b) {
        return [a, b, c];
      }
    }
    {
      if (a > c && b > c && b > a) {
        return [c, a, b];
      }
    }
    if (c > a && c > b && b < a) {
      return [b, a, c];
    }
    if (b < a && b < c && c < a) {
      return [b, c, a];
    }
    if (b > c && b > a && c > a) {
      return [a, c, b];
    }
  }
};
console.log(rank3(9, 5, 2)); //[2,5,9]
console.log(rank3(9, 2, 5)); //[2,5,9]
console.log(rank3(5, 9, 2)); //[2,5,9]
console.log(rank3(5, 2, 9)); //[2,5,9]
console.log(rank3(2, 9, 5)); //[2,5,9]
console.log(rank3(2, 5, 9)); //[2,5,9]

// console.log("Jason".charAt(0));

// const firstLetter = (arrOfStr) => {
//   let sum = 0;
//   for (i = 0; i < arrOfStr.length; i++) {
//     sum = sum + arrOfStr[i].charAt(0);
//   }
//   return sum;
// };
// console.log(firstLetter(["asd", "sdx", "wed"])); //asd
// console.log(firstLetter(["cas", "asdx", "bwe"])); //cab

// const eachOne = (str) => {
//   var splitString = str.split("");
//   return splitString;
// };
// console.log(eachOne("jason"));

// const eachCharactor = (str) => {
//   if (str.includes(1)) {
//     return ["num"];
//   }
// };
// console.log(eachCharactor("s13"));
