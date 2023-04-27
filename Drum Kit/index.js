let buttons = document.querySelectorAll(".drum");

let sounds = [
    new Audio("./sounds/crash.mp3"),
    new Audio("./sounds/kick-bass.mp3"),
    new Audio("./sounds/snare.mp3"),
    new Audio("./sounds/tom-1.mp3"),
    new Audio("./sounds/tom-2.mp3"),
    new Audio("./sounds/tom-3.mp3"),
    new Audio("./sounds/tom-4.mp3"),
]


buttons.forEach((button, index) => {
    button.addEventListener("click", function (e) {
        makeSound(e.target.textContent)
        e.target.classList.add("pressed")

        setTimeout(() => {
            e.target.classList.remove("pressed")
        },200)
    })
})


document.addEventListener("keydown", (e) => {
    makeSound(e.key)
    var button = document.querySelector(`.${e.key}`)
    button.classList.add("pressed")

    setTimeout(() => {
        button.classList.remove("pressed")
    },200)

})


function makeSound(key) {

    switch (key) {
        case "w":
            sounds[0].play()
        case "a":
            sounds[1].play()
        case "s":
            sounds[2].play()
        case "d":
            sounds[3].play()
        case "j":
            sounds[4].play()
        case "k":
            sounds[5].play()
        case "l":
            sounds[6].play()
        default:
            break
    }

}

function buttonAnimation(key){
    document
}