export default class Collection {

    /*******************************************************************************************
     * 
     * 
     *******************************************************************************************/
    constructor(collectionName, collectionId, cards) {

        //Need to account for null entries, the following doesnt NOT work!!
        if(collectionName == null){
            return;
        }
        else {
            this.name = collectionName;}

        if (collectionId) {
            this.id = collectionId;

        } else {
            this.id = Date.now();
        }

        if (cards) {
            this.cards = cards
        } else {
            this.cards = [];
        }
    }

    /*******************************************************************************************
     * 
     * 
     *******************************************************************************************/
    createCard(side1, side2) {
        let card = new Card(side1, side2);
        this.cards.push(card);
    }

    /*******************************************************************************************
     * 
     * 
     *******************************************************************************************/
    removeCard(id) {
        let index = this.cards.findIndex(card => card.id == id);
        console.log(index);
        this.cards.splice(index, 1);
    }

    /*******************************************************************************************
     * Creates and inserts HTML into the code based on what target(collectionID) event was click
     * 
     *******************************************************************************************/
    buildCollectionList() {
        let allCards = document.createElement('ul');
        for (let i = 0; i < this.cards.length; i++) {
            let card = document.createElement('li')
            let side1 = document.createElement('div');
            let side2 = document.createElement('div');
            let delBtn = document.createElement('button');

            side1.textContent = this.cards[i].side1;
            side2.textContent = this.cards[i].side2;

            delBtn.textContent = 'X';
            delBtn.dataset.id = this.cards[i].id;    //this saves the card id to the button when created
            delBtn.dataset.colid = this.id;          //this saves the collection id to the button too
            delBtn.classList.add('delBtn');          //this adds a 'delBtn' class to the button 

            card.appendChild(side1);
            card.appendChild(side2);
            card.appendChild(delBtn);

            document.getElementById('cards').appendChild(card);
            allCards.appendChild(card);
        }
        return allCards;
    }
}



class Card {

    constructor(side1, side2, id) {
        this.side1 = side1;
        this.side2 = side2;
        if (id) {
            this.id = id;
        } else {
            this.id = Date.now();
        }
    }
}