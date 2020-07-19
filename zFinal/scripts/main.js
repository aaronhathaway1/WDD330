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
        collectionName.classList.add("collectionLi");
        collections.appendChild(collectionName);
        collectionName.addEventListener("click", buildCards);
        // console.log("this is the event I'm looking for");
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
    if (collectionName == "") {
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
        if (element.name == collectionName) {
            colID = element.id;
        }
    });

    let index = library.findIndex(collection => collection.id == colID);
    library.splice(index, 1);
    // Also the change is not permanent because upon reload, the information
    // is read again and a new array is created. The information is not perma deleted
    localStorage.setItem("library", JSON.stringify(library));
    buildLibraryList();

})

function reviewCollection() {

}


/*******************************************************************************************
 * Creating, deleting, and displaying individual cards
 * 
 *******************************************************************************************/
/*Takes the data from localStorage and creates the cards from it*/
function buildCards(event) {
    // console.log("The event has been triggered.");
    let colID = event.target.dataset.id;
    let colName = event.target.dataset.name;

    //find index in library
    let index = library.findIndex(collection => collection.id == colID);

    console.log(library[index]);
    let ul = library[index].buildCollectionList(); //Builds individual cards
    document.getElementById("cards").innerHTML = '';
    document.getElementById("cards").appendChild(ul);

    let btn = document.createElement('button');
    btn.textContent = "Add a card";
    btn.dataset.id = colID;
    btn.dataset.name = colName;
    btn.addEventListener("click", createCard);
    document.getElementById("cards").appendChild(btn);
    addDeleteBtnEventListeners();

    hideOtherCollections(colID);
    buildHomeBtn();

}

    
function hideOtherCollections(selectedCollectionId){
    document.querySelectorAll(".collectionLi").forEach(element => {
        if(element.dataset.id != selectedCollectionId){
            element.classList.add("hidden");
        } else {
            element.classList.remove("hidden");
        }
    });
}

function buildHomeBtn(){
    // insert into html a btn with an event listener before ul li
    let homeBtn = document.createElement('li');
    homeBtn.textContent = "Home";
    let libraryUl = document.getElementById("library");
    console.log(libraryUl.firstChild);
    libraryUl.insertBefore(homeBtn, libraryUl.firstChild);

    homeBtn.addEventListener("click", () => {
        buildLibraryList();
        document.getElementById('cards').innerHTML = "";
    });
}

function returnToLibrary(){
    let colID = event.target.dataset.id;
    let colName = event.target.dataset.name;

    //find index in library
    let index = library.findIndex(collection => collection.id == colID);

    console.log(library[index]);
    let ul = library[index].buildCollectionList(); //Builds individual cards
    document.getElementById("cards").innerHTML = '';
    document.getElementById("cards").appendChild(ul);

    let btn = document.createElement('button');
    btn.textContent = "Add a card";
    btn.dataset.id = colID;
    btn.dataset.name = colName;
    btn.addEventListener("click", createCard);
    document.getElementById("cards").appendChild(btn);
    addDeleteBtnEventListeners();
}


function createCard(event) {
    let colID = event.target.dataset.id;
    let side1 = prompt("Please enter side 1 of your card.");
    if (side1 == "") {
        alert("You must enter a word or phrase.");
        return;
    }
    let side2 = prompt("Please enter side 2 of your card.");
    if (side1 == "") {
        alert("You must enter a word or phrase.");
        return;
    }
    let index = library.findIndex(collection => collection.id == colID);

    library[index].createCard(side1, side2);
    localStorage.setItem("library", JSON.stringify(library));

    let ul = library[index].buildCollectionList(); //Builds individual cards
    document.getElementById("cards").innerHTML = '';
    document.getElementById("cards").appendChild(ul);

    let btn = document.createElement('button');
    btn.textContent = "Add a card";
    btn.dataset.id = colID;
    btn.addEventListener("click", createCard);
    document.getElementById("cards").appendChild(btn);

    addDeleteBtnEventListeners();
}

function addDeleteBtnEventListeners() {
    let delBtns = document.querySelectorAll('.delBtn');
    delBtns.forEach(element => {
        element.addEventListener("click", () => {
            let cardID = event.target.dataset.id;
            let colID = event.target.dataset.colid;

            console.log("The event listener has been triggered");
             //finds index(collection) in library
            let index = library.findIndex(collection => collection.id == colID); //findIndex is essentially a forEach that returns an index
            console.log(cardID);
            console.log(library[index].cards.findIndex(card => card.id == cardID));
            library[index].removeCard(cardID);

            // let cardIndex = library[index].cards.findIndex(card => card.id == cardID);
            // library[index].cards.splice(cardIndex, 1);

            localStorage.setItem("library", JSON.stringify(library));
            buildLibraryList();

           
            console.log(library[index]);
            let ul = library[index].buildCollectionList(); //Builds individual cards
            document.getElementById("cards").innerHTML = '';
            document.getElementById("cards").appendChild(ul);

            let btn = document.createElement('button');
            btn.textContent = "Add a card";
            btn.dataset.id = colID;
            btn.addEventListener("click", createCard);
            document.getElementById("cards").appendChild(btn);
            addDeleteBtnEventListeners();
        })
    });
}

/*******************************************************************************************
 * 
 * 
 *******************************************************************************************/