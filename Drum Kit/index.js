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


// buttons.forEach((button, index) => {
//     button.addEventListener("click", (e) => {
//         sounds[index].play().then(
//             e.target.style.color = "red"
//         )
//         e.target.style.color = "white"
//     })
// })


buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
        sounds[index].play().then(
            this.style.color = "red"
        )
    })
})


document.addEventListener("keydown", (e) => {
    switch (e.key) {
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
        case "j":
            sounds[5].play()
        case "l":
            sounds[6].play()
        default:
            break
    }
})
