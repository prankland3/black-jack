let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard + 5
let hasBlackJack = undefined
let isAlive = undefined

let message = ""

if (sum <= 20){
    message = "Do you want to draw a new card? 🙂"

    hasBlackJack = false 
    isAlive = true
}else if (sum ===21){
    message ="Wohoo! You've got Blackjack! 🥳"
   
    hasBlackJack = true
    isAlive = true
}else{
     message = "You're out of the game! 😭"
    hasBlackJack = false 
    isAlive = false
}

//cash out

console.log(message)