// ITERATION 1 : Names and Inputs
console.log(`\n\--------\nIteration 1: Names and Inputs \n`);

// define driver's name
const hacker1 = "Johan";
console.log(`The driver's name is ${hacker1}.`);

// define navigator's name
const hacker2 = "Erik";
console.log(`The navigator's name is ${hacker2}.`);

// ITERATION 2 : Conditionals
console.log(`\n\--------\nIteration 2: Conditionals\n`);

// determine the longest name
let driverLength = hacker1.length; 
let navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
 console.log(`The driver has the longest name, it has ${driverLength} characters.`)
} else if (navigatorLength > driverLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`)
} else {
 console.log(`Wow, you both have equally long names, ${driverLength} characters!`)
}

// ITERATION 3 : Loops
console.log(`\n\--------\nIteration 3: Loops\n`);

// spell the driver's name in all caps
for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
}

// spell the navigator's name backwards
for (let j = navigatorLength - 1 ; j >= 0 ; j--) {
    console.log(hacker2[j]);
}

// check whose name goes first alphabetically
const driverFirst = hacker1.localeCompare(hacker2) < 0;
const navigatorFirst = hacker1.localeCompare(hacker2) > 0;

if (driverFirst) {
    console.log(`The driver's name goes first.`);
} else if (navigatorFirst) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {    
    console.log(`What?! You both have the same name?`);
}


// BONUS 1
console.log(`\n\--------\nBonus 1: Lorem Ipsum \n`);

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus risus, imperdiet et ligula sed, auctor pretium eros. Vivamus eget iaculis leo. Sed in est tempor neque lacinia ullamcorper. Vivamus et libero odio. Integer pharetra ex sem, vel bibendum libero pretium ac. Aliquam sed fermentum felis, ac iaculis lacus. Nunc nec mauris id tortor egestas interdum vel a ex. Aenean tempor convallis justo, in rutrum ipsum mollis et. Aenean sed enim id metus sollicitudin faucibus. Morbi viverra fermentum vulputate. Pellentesque sagittis tempor justo, a condimentum turpis cursus quis. Quisque quis gravida nibh. Duis viverra tristique massa, vitae viverra lacus sagittis tempor.
Duis nec neque purus. Aliquam eu purus sit amet est dignissim scelerisque sed a mauris. Donec maximus egestas nibh quis maximus. Nunc ut tincidunt est. Vestibulum tempus purus interdum nibh dictum, ac semper orci luctus. Vivamus aliquet, nisl id commodo scelerisque, nulla nunc vestibulum enim, id pulvinar magna lacus nec est. Duis vitae justo libero. Donec nec tellus a ante vulputate bibendum. Suspendisse ut fringilla massa. Aliquam vehicula, sapien maximus porta scelerisque, ipsum nulla scelerisque erat, eu fringilla felis sapien a orci. Nunc vehicula purus augue, ac sollicitudin est ullamcorper vitae. Ut egestas turpis accumsan aliquet cursus. Sed vel risus nec sem viverra tincidunt eu id mauris. Ut consequat faucibus sapien, pellentesque sollicitudin orci finibus nec. Vivamus mattis, leo fermentum vehicula accumsan, lorem odio volutpat neque, at elementum velit nibh vitae odio. Phasellus porttitor tristique eros, at consectetur nulla volutpat ac.
Quisque non congue leo. Nam tristique nulla sem, vel pulvinar magna porttitor nec. Vestibulum ac velit vel tortor suscipit varius eget id tortor. Aenean eget porttitor leo. Aliquam tellus turpis, porta non feugiat vel, pretium eu nisl. Aenean vel semper nibh, a mattis elit. Nulla facilisi. Morbi pulvinar, risus eu tincidunt tincidunt, massa augue maximus leo, et aliquet quam nibh sed libero. Mauris nec sodales nulla, at congue arcu. Nam pretium, ipsum condimentum facilisis egestas, enim quam faucibus nunc, nec interdum dolor magna sed tellus. Mauris commodo ultrices massa non hendrerit. Proin id aliquam magna.`;

// number of words
let wordsArr = loremIpsum.split(" ");
const sumWords = wordsArr.length;

console.log(`The paragraph contains ${sumWords} words.`);

// occurences of "et"
let etOccurences = 0;

for(let i = 0 ; i < sumWords ; i++) {

    if(wordsArr[i] === 'et') {
        etOccurences++;
    }

}

console.log(`The paragraph contains ${etOccurences} occurences of "et".`);


// BONUS 2
console.log(`\n\--------\nBonus 2: Palindrome \n`);

let phraseToCheck = "No 'x' in Nixon";
let palindrome = true;

// remove spaces (replaceAll) and punctuation (splice)
phraseToCheckArr = phraseToCheck.replaceAll(' ', '').split('');

for (let i = 0 ; i < phraseToCheckArr.length ; i++) {
    if (phraseToCheckArr[i].toLowerCase() === phraseToCheckArr[i].toUpperCase()) {
        phraseToCheckArr.splice(i, 1);
    }
}

// check from both ends at the same time 
for (let k = 0 ; k < phraseToCheckArr.length ; k++) {

    const fromStart = phraseToCheckArr[k].toLowerCase();
    const fromEnd = phraseToCheckArr[phraseToCheckArr.length - 1 - k].toLowerCase();

    if (fromStart !== fromEnd) {
        palindrome = false;
        break;
    }

}

console.log('First method:');

if(palindrome) {
    console.log(`"${phraseToCheck}" is a palindrome!`);
} else {
    console.log(`"${phraseToCheck}" is definitely NOT a palindrome.`);
}


// John's idea

let phraseToCheck2 = "step on no pets";
let palindrome2 = false;

// remove spaces (replaceAll) and punctuation (splice)
phraseToCheck2Arr = phraseToCheck2.replaceAll(' ', '').toLowerCase().split('');

for (let i = 0 ; i < phraseToCheck2Arr.length ; i++) {
    if (phraseToCheck2Arr[i].toLowerCase() === phraseToCheck2Arr[i].toUpperCase()) {
        phraseToCheck2Arr.splice(i, 1);
    }
}

let partOne;
let partTwo;

//split in two parts
if (phraseToCheck2Arr.length % 2 === 0) { // even number of letters

    partOne = phraseToCheck2Arr.slice(0, phraseToCheck2Arr.length/2);
    partTwo = phraseToCheck2Arr.slice(phraseToCheck2Arr.length/2, phraseToCheck2Arr.length).reverse();

} else {

    partOne = phraseToCheck2Arr.slice(0, Math.floor(phraseToCheck2Arr.length/2)); // plus petite partie
    partTwo = phraseToCheck2Arr.slice(Math.floor(phraseToCheck2Arr.length/2+1), phraseToCheck2Arr.length).reverse();

}

if (partOne.join('') === partTwo.join('')) {
    palindrome2 = true;
}

console.log('\nSecond method:'); 

if(palindrome2) {
    console.log(`"${phraseToCheck2}" is a palindrome!`);
} else {
    console.log(`"${phraseToCheck2}" is definitely NOT a palindrome.`);
}
