//Week 2 Notes 

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





