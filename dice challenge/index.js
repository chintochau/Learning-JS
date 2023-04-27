var dice1 = document.querySelector(".img1")
var dice2 = document.querySelector(".img2")

var dices = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png",
]

var number1 = Math.floor(Math.random() * 6)
var number2 = Math.floor(Math.random() * 6)


dice1.setAttribute("src", dices[number1])
dice2.setAttribute("src", dices[number2])

var resultText = document.querySelector("h1")

if (number1 > number2) {
    resultText.innerText = "😼Player 1 Wins!"
} else if (number1 < number2) {
    resultText.innerText = "Player 2 Wins!😼"

} else {
    resultText.innerText = "Draw"

}