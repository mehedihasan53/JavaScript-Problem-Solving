// Problem 1: Reverse a String

function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    return result;
}
// console.log(reverseString("hello"));


// Problem 2: Count Vowels in a String

function countVowels(str) {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
// console.log(countVowels("Programming"));

// Problem 3: Check for Palindrome

function palindromeCheck(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    if (str === result) {
        return true;
    } else {
        return false;
    }
}
// console.log(palindromeCheck("madam"));
// console.log(palindromeCheck("hello"));


