// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.


function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    return result;
}
// console.log(reverseString("hello"));


// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.


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
// Write a function that checks if a string is a palindrome (reads the same forward and backward).


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

// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.
function findMaxNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
// console.log(findMaxNumber([5, 1, 9, 3]));


// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4,]));


// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

function num(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
// console.log(num([1, 2, 3, 4]));

// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

function evenNumber(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
    }
    return even;
}
// console.log(evenNumber([1, 2, 3, 4, 5, 6]));

// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

function capitalizeWords(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
console.log(capitalizeWords("hello world from javascript"));
