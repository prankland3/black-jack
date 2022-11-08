
    let firstCard = 10
    let secondCard = 7

    let cards = [
        firstCard, 
        secondCard
    ] //array

    let sum = firstCard + secondCard +4

    // difine the chack variables

    let hasBlackJack = undefined
    let isAlive = undefined

    let message = ""

   // get the ellements

    let message_el = document.getElementById("message-el")
    let sum_el = document.getElementById("sum-el")
    //let card_el = document.getElementById("card-el")
    let card_el = document.querySelector("#card-el")

function startGame(){
    console.log("start Game")
     renderGame()
}

function renderGame() {
    sum_el.textContent = "sum: " + sum
    let card_el = document.getElementById("card-el")
        card_el.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        card_el.textContent += cards[i] + " "
    }

    //logic of the game

    if (sum <= 20){
        message = "Do you want to draw a new card?"
        hasBlackJack = false 
        isAlive = true
    }else if (sum ===21){
        message ="You've got Blackjack!"
        hasBlackJack = true
        isAlive = true
    }else{
        message = "You're out of the game!"
        hasBlackJack = false 
        isAlive = false
    }

//cash out

message_el.textContent = message
console.log("code runs normal you don't need to look at here ;)")
}


function newGame() {
    console.log("Drawing a new card from the deck!")
    let card = 2

    sum += card
    cards.push(card)
   

    
        renderGame()


   console.log("new Game")
   console.log(cards)
   message_el.textContent = message
}
