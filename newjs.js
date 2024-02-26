let firstCard=getRandomCard();
let secondCard =getRandomCard();
//create a new array, cards that contains first and second card
let cards=[firstCard, secondCard]
let sum=firstCard + secondCard
let hasBlackJack = false
let isAlive= true
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let chipEl=document.getElementById("chip-el")

let player={
name:"Per",
chips: 200,
hello: function(){
    alert("Hello! welcome to the game")
}
}

let stake={
    amount:function(){
       prompt("input any amount for this round")
    
    }
}

function stakeMessage(){
    alert(`you have staked $ ${stake.amount()}`)
}


let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + ": $" + player.chips


function getRandomCard(){
    let randomCard = Math.floor(Math.random()*8)+1;
    return randomCard    
}
function startGame(){
    player.hello();
    stake.amount();
    if(0<stake.amount()&&stake.amount<=player.chips){
        stakeMessage();
        player.El.textContent=player.name+ ": $"+ player.chips-stake.amount()
        chipEl.textContent="Chips: $"+stake.amount();
       renderGame();
    }
    else{
        alert("invalid amount!\n input new chip value")
        return startGame();
    }
}

function renderGame(){
    //refer to the card array when rendering out the cards.
    cardsEl.textContent ="Cards: "
    
    for(let i=0;i<cards.length;i++){ 
        cardsEl.textContent+= cards[i] + " ";
    }
    sumEl.textContent="Sum: "+ sum
    if(sum<=20){
        message="Do you want to draw a new card!"
    }else if(sum===21){
        message="you've got Blackjack"
        hasBlackJack=true
    }else{
        message="you are out of the game!"
        isAlive=false   
    }
    messageEl.textContent=message
}

function newCard(){
    while(cards.length>=3){
    if(isAlive===true && hasBlackJack===false){
    let card= getRandomCard()
    sum+=card
    cards.push(card)
    console.log(card)
    renderGame()
    }
} 
    if(cards.length<3) {
        return null;
    } 
}
