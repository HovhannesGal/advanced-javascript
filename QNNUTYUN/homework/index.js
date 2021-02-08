let arr = ["artur", "vazgen", "hovo"];
let dzayn = ["a", "e", "I", "o", "u", "y"];
let arr2 = [];
let z;
let arr3 = [];

for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    for (let k = 0; k < word.length; k++) {
        if (dzayn.includes(word[k].toLowerCase())) {
            arr3.push(word);
            break;
        }
    }
}
console.log(arr3);

///////////////////////////////////////////////////////////////

function filterVowel(words) {
    const vowels = ["a", "e", "u", "y", "i", "o"];

    const filtersWords = words.filter((word) => [...word].some((latter) => vowels.includes(latter.toLowerCase)));

    return filtersWords;
}

let words = ["arthur", "karen"];

filterVowel(words);