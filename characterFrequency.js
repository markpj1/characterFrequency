/*
 *  Write a function that takes as its input a string and returns an array of 
 *  arrays as shown below sorted in descending order by frequency and then by 
 *  ascending order by character.
 *  
 *  
 *       :: Example ::
 *  
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Gotcha ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *  
 */

var characterFrequency = function(inputStr) {
  var result = [],
      charCounts = {};

  for (var i=0; i<inputStr.length; i++) {
    charCounts[inputStr[i]] = charCounts[inputStr[i]] ? charCounts[inputStr[i]]+1 : 1;
  }
  console.log(charCounts);

  for (key in charCounts) {
    charPair = [];
    charPair[0] = key;
    charPair[1] = charCounts[key];
    result.push(charPair);
  }
  return result;
}