const InvalidInputs = [

  // Strings
  "foo",
  "a",
  "z",

  // String Types
  "NaN",
  "string",
  "object",
  "null",
  "undefined",
  "function",
  "true",
  "false",

  // Types
  undefined,
  null,
  {},
  [],
  [NaN],
  () => {},
  true,
  false,
  Infinity,
  -Infinity,

  // Whitespace
  "",
  " ",
  "  ",
  "\t",
  "\n",
  "\r",
  "\u00A0",

  // Emoji
  "😀",
  "😎",
  "🤖",

  // CSS
  "12px",
  "100%",
  '0xFF', // 55

  // Dates
  "2016-12-31",
  "3-4",
  "1/12",

  // Other
  "1.2.3",
  ".12",
  "..12",
  "...12",

  // Decimals
  ".12",
  "0.12",
  "12.",
  "12.0",
  "-1.",
  "-0.1",
  "1290000981231123.1",
  0.1,

  // Negative
  -1,
  -0,
  -99,

  // False
  0,
  "0",
  "00",

  // Scientific notation
  "1e10",
  "4e2",
  '123e-5',
  'Infinity',

];

const ValidInputs = [1, 22, 1000000, "1", "22", "100000"];

// Integer is valid Number or String greater than zero
function isPositiveInteger(v) {
  var i;
  return v && (i = parseInt(v)) && i > 0 && (i === v || ''+i === v);
}

// New ES6 version: doesn't work on string input
// function isPositiveInteger(x) {
//     return Number.isInteger(x) && x > 0
// }

InvalidInputs.forEach(v => {
  if(isPositiveInteger(v)) {
    console.log("INVALID FAIL:", v);
  }

  // if(Number.isInteger(v)) {
  //   console.log('Number.isInteger FAIL:', v);
  // }
});

console.log('');

ValidInputs.forEach(v => {
  if(!isPositiveInteger(v)) {
    console.log("VALID FAIL:", v)
  }

  // if(!Number.isInteger(v)) {
  //   console.log('Number.isInteger FAIL:', v);
  // }
});
