//Week 2 Notes 

//CHAPTER 2 Notes
let x;

console.log(x); //should be undefined

//prompt("Enter passcode");


//An example of a while loop
// let result = 1;
// let counter = 0;
// while (counter < 69) {
//   result = result * 2;
//   counter = counter + 1;
//   console.log(result);
// }


//EXAMPLE 1 Looping a triangle
let hash = '#';
for(let i = 0; i < 7; i++){
    console.log(hash)
    hash += '#';
}

//EXAMPLE 2 FizzBuzz
for(let i = 1; i <= 100; i++){
    if((i % 3 == 0) && (i % 5 != 0))
        console.log('Fizz');
    else if((i % 5 == 0) && (i % 3 != 0))
        console.log('Buzz');
    else if((i % 3 == 0) && (i % 5 == 0))
         console.log('FizzBuzz');
    else console.log(i);
} 

//EXAMPLE 3 Chessboard
let size = 8 ;
let chessboard = '';
for(let j = 0; j < size; j++){
    for(i = 0; i < size; i++){
        if((i + j) % 2 == 0)
        chessboard += ' ';
        else chessboard += '#';
    }
    chessboard += '\n';
}
console.log(chessboard);

//CHAPTER 3 Notes

// The following causes an error, "maximum call stack size exceeded"
// function chicken() {
//     return egg();
//   }
//   function egg() {
//     return chicken();
//   }
//   console.log(chicken() + " came first.");

//Making a math.min function
// let a = prompt("Enter a number.");
// let b = prompt("Enter another number.");
// minimum(a, b);
// function minimum(a, b) {
//     if(a < b){
//         console.log(a);
//     }
//     else console.log(b);
// }

//Making an isEven function

// determineEveness(someNumber);
function determineEveness(){
    let someNumber = prompt("Enter a number whose even-ness you wish to determine");

    function find(current){
        current = Math.abs(current);
        if (current == 0){
            console.log('The number you entered is even.');
            // console.log('Made it into the true evaluation');
        } else if (current == 1){
            console.log('The number you entered is odd');
            // console.log('Made it into the false evaluation');
        } else {
            // console.log('Made it into the subtraction function');
            return find(current - 2);
        }
    }
    // console.log('Made it into the determine evenness function');
    return find(someNumber);
}

function countBs(){
    let words = prompt("Enter a string from which to count all the 'Bs'")
    let counter = 0;
    for ( let i = 0; i < words.length - 1 ; i++){
        if( words.charAt(i) == 'B'){
            counter++;
        }
    } 
    console.log(counter);   
}

function countChar(){
    let letter = prompt('Enter the character you wish to count');
    let words = prompt("Enter a string from which to count the specified character");
    let counter = 0;
    for ( let i = 0; i < words.length - 1 ; i++){
        if( words.charAt(i) == letter){
            counter++;
        }
    } 
    console.log(counter);   
}


//CHAPTER 4 Notes

//Me creating my first object in JS
myObject = {
    squirrel : false,
    events: ["work", "touched tree", "pizza", "running"]
};

//Me checking that everything is accessible the way I think it is
console.log(myObject);
console.log(myObject.squirrel);
console.log(myObject.events.length);

//Me creating a function to execute a for loop to display the array in my object
function displayMyObjects(){
    for(let i = 0; i < myObject.events.length; i++){
        console.log(myObject.events[i]);
    };
}
//Calling aforementioned function
displayMyObjects();

//Finding out what properties my objecy has
console.log(Object.keys(myObject));

//Copying my object in your object
let yourObject = {};
Object.assign(yourObject, myObject);
console.log(yourObject);

//Mutability of Objects
// const score = {visitors: 0, home: 0};
// This is okay
// score.visitors = 1;
// This isn't allowed
// score = {visitors: 1, home: 1};
// console.log(Object.keys(Math));



function countRange(){
    let firstNum = prompt('Enter the first number of the array');
    let lastNum = prompt('Enter the final letter of the array');
    let myArray = [];
    for(let i = firstNum; i <= lastNum; i++){
        myArray.push(i);
        console.log(i);
    }
}

function sumRange(){
    let firstNum = parseInt(prompt('Enter the first number of the array'));
    let lastNum = parseInt(prompt('Enter the final letter of the array'));
    let myArray = [];
    let count = 0;
    for(let i = firstNum; i <= lastNum; i++){
        myArray.push(i);
        count += i;
        console.log(count);
    }
}

//Haven't quite figured out how to reverse an array
function reverseArray(){

   let startingArray = prompt('Enter the array with a space between the numbers.').split(' ')
   let newArray = [];
    for (i = startingArray.length -1; i >= 0; i--){
        newArray.push(startingArray[i]);
    }
    console.log(newArray);
}

function reverseArrayInPlace(){

    let startingArray = prompt('Enter the array with a space between the numbers.').split(' ')
    for(
        
    )
}
