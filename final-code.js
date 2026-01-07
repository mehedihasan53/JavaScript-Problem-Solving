// Problem 1: Reverse a String

function reverseString(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    return result;
}

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

// Problem 4: Find the Maximum Number

function findMaxNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Problem 5: Remove Duplicates from an Array

function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}


// Problem 6: Sum of All Numbers in an Array

function num(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

// Problem 7: Find Even Numbers in an Array

function evenNumber(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
    }
    return even;
}

// Problem 8: Capitalize First Letter of Each Word

function capitalizeWords(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
