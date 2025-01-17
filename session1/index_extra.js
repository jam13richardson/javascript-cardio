
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str
  .split('')
  .reverse()
  .join('');
  }



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const reverseString = str.split('').reverse().join('');
  return reverseString === str;
}


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split('').reverse()
  .join('');  

}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str.toLowerCase()
  .split(' ')
  .map(function(word) {
    return word[0].toUppercase() + word.substr(1);
  }) 
  .join(' '); 
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
const charMap = {};
const maxNum = 0;
const maxChar = '';

str.split('').forEach(function(char) {
  if(charMap[char]) {
    charMap[char]++;
  } else {
    charMap[char] =1;
  }
  });

  for(let char in charMap) {
    //debugger
    if(charMap[char] > maxNum) {
      maxNum =charMap
    }
  }


}

//Solution by Naomi Sharp
//Fixes bug in above solution for which the string "socks" would not work. This is because
//the char "s" is the last one in the array sortedStr so the code to store maxChar does not run.

function maxCharacter(str) {
  const sortedStr = str.split('').sort();
  const maxChar = {char: '', count: 0};
  const currentChar = {char: '', count: 0};
  
  sortedStr.forEach(char => {
    if(currentChar.char === char){
      currentChar.count++;
      if(maxChar.count < currentChar.count){
        maxChar.char = currentChar.char;
        maxChar.count = currentChar.count;
      }
      currentChar.char = char;
      currentChar.count = 0;
    } else {
      currentChar.char = char;
      currentChar.count = 1;
    }
  });
  
  return maxChar;
  }

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
 for(let i = 1; i <= 100, i++ ) {
  if(i % 3 === 0) {
    console.log('Fizz');
  } else if(i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
  }
 }
