/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count = 0
    str = str.toLowerCase().split("")
    for(let i=0;i<str.length;i++){
        if(str[i]=="a" ||str[i]=="e" ||str[i]=="i" ||str[i]=="o" ||str[i]=="u")
            count++;
    }
    return count;
}

module.exports = countVowels;