
    
    let cards = [] //array

    let sum = 0

    // difine the chack variables

    let hasBlackJack = undefined
    let isAlive = false

    let message = ""

   // get the ellements

    let message_el = document.getElementById("message-el")
    let sum_el = document.getElementById("sum-el")
    //let card_el = document.getElementById("card-el")
    let card_el = document.querySelector("#card-el")    
    let new_game = document.getElementById("new-btn")
    let start_game = document.getElementById("start-btn")
    togle_buttons()

function startGame(){
    //togle_buttons()
    let first_card = get_random_card()
    let seccond_card = get_random_card()

    cards.push(first_card)
    cards.push(seccond_card)

    sum = first_card + seccond_card
    isAlive = true

    console.log("start Game")
     renderGame()
}

function renderGame() {
    

    //logic of the game

    if (sum <= 20){
        message = "Do you want to draw a new card?"
        hasBlackJack = false 
        isAlive = true
        togle_buttons()
    }else if (sum ===21){
        message ="You've got Blackjack!"
        hasBlackJack = true
        isAlive = true
        togle_buttons()
    }else{
        message = "You're out of the game!"
        hasBlackJack = false 
        isAlive = false
        togle_buttons()
    }

    if(isAlive === false){
        cards = []
        console.log("cards")
        card_el.textContent = "Cards: "
        sum_el.textContent = "sum: "
        massage = "pls start a new game"
    }else{
    sum_el.textContent = "sum: " + sum
    
        card_el.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        card_el.textContent += cards[i] + " | "
    }
}
//cash out

message_el.textContent = message
console.log("code runs normal you don't need to look at here ;)")
}

function get_random_card() {

let random_card = Math.floor( Math.random() * 13)+1

 if(random_card === 1){
    console.log(random_card)
    return  11
 }else if (random_card === 11 || random_card === 12 || random_card === 13){
    console.log(random_card)
    return 10
 }else{
    console.log(random_card)
    return random_card
 }

}
 

function newGame() {
    
    console.log("Drawing a new card from the deck!")
    let card = get_random_card()
    sum += card
    cards.push(card)
    renderGame()
   console.log("new Game")
   message_el.textContent = message
}

function togle_buttons(){

 if(isAlive === false){
    start_game.style.visibility = "visible"
    new_game.style.visibility  = "hidden"

 }else{
    start_game.style.visibility = "hidden"
    new_game.style.visibility  = "visible"
 }
}
