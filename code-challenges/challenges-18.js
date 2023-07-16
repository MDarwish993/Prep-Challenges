'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    str = str.trim();
  let words = str.split(/\s+/);
  let middleWord = Math.floor(words.length / 2);
  
    return words[middleWord].length;
 
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    function getCharacterFrequencyMap(str) {
        const frequencyMap = {};
        for (const char of str) {
          if (char.match(/[a-zA-Z]/)) {
            frequencyMap[char.toLowerCase()] = (frequencyMap[char.toLowerCase()] || 0) + 1;
          }
        }
        return frequencyMap;
      }
      

    str1 = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
    str2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();
  

    const frequencyMap1 = getCharacterFrequencyMap(str1);
    const frequencyMap2 = getCharacterFrequencyMap(str2);

    if (Object.keys(frequencyMap1).length !== Object.keys(frequencyMap2).length) {
      return false;
    }
  
    for (const char in frequencyMap1) {
      if (frequencyMap1[char] !== frequencyMap2[char]) {
        return false;
      }
    }
  
    return true;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };