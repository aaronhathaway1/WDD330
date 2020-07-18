import Collection from "./collection.js";

let library = fillLibrary();
console.log(library);
buildLibraryList();

/*******************************************************************************************
 * Building and displaying the Library as a whole
 * 
 *******************************************************************************************/
function fillLibrary() {
    if (localStorage.getItem("library") == null) {
        let emptyLibrary = [];
        return emptyLibrary;
    } else {
        let local = JSON.parse(localStorage.getItem("library"));
        let tempLibrary = [];
        local.forEach(collection => {
            tempLibrary.push(new Collection(collection.name, collection.id, collection.cards));
        });
        return tempLibrary;
    }

}
/*Links the libraries and their IDs to li's in the HTML*/
function buildLibraryList() {
    let collections = document.getElementById("library")
    collections.innerHTML = '';
    library.forEach(element => {
        let collectionName = document.createElement('li');
        collectionName.textContent = element.name;
        collectionName.dataset.id = element.id;
        collections.appendChild(collectionName);
        collectionName.addEventListener("click", buildCards);
    });
}

/*Linking the button in the HTML to the function to create new collections*/
let createCollectionButton = document.getElementById("createCollection");
let removeCollectionButton = document.getElementById("removeCollection");

/*******************************************************************************************
 * Creating, removing, reviewing and displaying individual collections
 * 
 *******************************************************************************************/

/*Writing the functions that creates the new collections*/
createCollectionButton.addEventListener("click", () => {
    let collectionName = prompt("What do you want to name your new collection?");
    if(collectionName == ""){
        alert("You must enter a collection name.");
        return;
    }
    let collection = new Collection(collectionName);
    library.push(collection);
    localStorage.setItem("library", JSON.stringify(library));
    // let createCardButton = document.getElementById
    buildLibraryList(); //rebuilds library to display new collection
})

removeCollectionButton.addEventListener("click", () => {
    
    let collectionName = prompt("Which collection do you want to remove?");
    let colID;
    library.forEach(element => {
        if (element.name == collectionName){
            colID = element.id;
        }
    });

    let index = library.findIndex(collection => collection.id == colID);
    library.splice(index, 1);
    // Also the change is not permanent because upon reload, the information
    // is read again and a new array is created. The information is not perma deleted
    localStorage.setItem("library", JSON.stringify(library));
    buildLibraryList();

} )

function reviewCollection(){

}






/*******************************************************************************************
 * Creating, deleting, and displaying individual cards
 * 
 *******************************************************************************************/

/*HAVEN'T FINISHED!! Writitng the function that displays cards from a library
  need to finish create card function
*/
function buildCards(event) {
    console.log("The event has been triggered.");
    let colID = event.target.dataset.id;
   
    //find index in library
    let index = library.findIndex(collection => collection.id == colID);

    console.log(library[index]);
    let ul = library[index].buildCollectionList();
    document.getElementById("cards").innerHTML = '';
    document.getElementById("cards").appendChild(ul);

    let btn = document.createElement('button');
    btn.textContent = "Add a card";
    btn.dataset.id = colID;
    btn.addEventListener("click", createCard);
    document.getElementById("cards").appendChild(btn);
}

function createCard(event) {
    let colID = event.target.dataset.id;
    let side1 = prompt("Please enter side 1 of your card."); 
    let side2 = prompt("Please enter side 2 of your card."); 
    let index = library.findIndex(collection => collection.id == colID);

    library[index].createCard(side1, side2);                    
    localStorage.setItem("library", JSON.stringify(library));

}

/*******************************************************************************************
 * 
 * 
 *******************************************************************************************/








 

 