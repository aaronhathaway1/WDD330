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

