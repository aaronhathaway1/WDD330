/* function declaration */
// function toggleMenu(){

// }

/* function expression */
//const toggleMenu = function() {

//}
/*arrow syntax*/
const toggleMenu = () => {
    document.querySelector('#navigation').classList.toggle('show');
    
}

document.querySelector('#menu').addEventListener('click', toggleMenu);
