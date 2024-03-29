// Implement a function repeat that repeats an input 
// string a given number of times, as shown in the example 
// below; without using the pre-defined string method String
// .prototype.repeat().

// repeat(3, 'ha'); // 'hahaha'

function repeat(count, string) {
  repeatedString = '';
  for (let i = 0; i < count; i += 1) {
    repeatedString += string;
  }
  return repeatedString;
}