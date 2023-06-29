// i. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const palindromeChecker = (word) => {
    //Check if the word is a string.
    if (typeof word === 'string') {
        //Create a new word, without spaces, from the initial string(word) and convert to lowercase. Remove all spaces.
        const WordWithoutSpace = word.toLowerCase().replaceAll(" ", "");
        //Generate the reverse of the word.
        const reverseWord = WordWithoutSpace.split('').reverse().join('');
        //Checks if "word" is the same as when it reads backward.
        if (WordWithoutSpace === reverseWord) {
            return `"${word}" is a palindrome.`;
        } else {
            return `"${word}" is not a palindrome.`;
        }
        //Alert that "word" is not a string.
    } else {
        return `"${word}" is not a string!`;
    }
}

console.log(palindromeChecker("rotator"));



// ii. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

const countWordVowels = (word) => {
    //checks if the word is a string.
    if (typeof word === "string") {
        //Create an array consisting of all possible lowercase vowels.
        const vowels = ["a", "e", "i", "o", "u"];
        //Convert the word into lowercase (so as to match elements of the vowel array) and turn into an array.
        characterArray = word.toLowerCase().split("")
        //Create a count variable to store the total number of counts of the vowels in the word.
        let count = 0;
        //Loop through the characterArray to access each character(element).
        for (let i = 0; i < characterArray.length; i++) {
            const character = characterArray[i];
            //Count the character(element) of the characterArray that is included in the vowel array.
            if (vowels.includes(character)) {
                count++
            }
        }
        //Return the total number of counts
        return `"${word}" contains ${count} vowels.`;
        //For words that are not strings, alert.
    } else {
        return `${word} is not a string!`
    }

}

console.log(countWordVowels("The quick brown fox"));



// iii. Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

const checkDataType = (value) => {
    //Check the datatype of the value;
    const result = typeof value;
    //Return the result;
    return `"${value}" is a/an ${result}`;
}

console.log(checkDataType('good'));



// iv. Write a JavaScript function to get the number of occurrences of each letter in a specified string.

const getCharacterCount = (word) => {
    //Check if the word is a string
    if (typeof word === "string") {
        //Convert the word into lowercase, then into an array.
        const wordArray = word.toLowerCase().split("");
        //Create an empty object to store each character count.
        const result = {};
        //Loop through the wordArray to access each element. 
        for (let i = 0; i < wordArray.length; i++) {
            const character = wordArray[i]
            //If the character in the wordArray already exists in the result object, increment by 1.
            if (result.hasOwnProperty(character)) {
                result[character]++;
                //Else, add the character to the result object with a value of 1
            } else {
                result[character] = 1;
            }

        }
        //Return the final result object.
        return result;
    //Alert that word is not a string.
    } else {
        return `${word} is not a string!`
    }

}

console.log(getCharacterCount("Mississippi"));


