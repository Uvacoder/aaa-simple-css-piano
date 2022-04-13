const muteIcon = document.querySelector("#mute")
const notesIcon = document.querySelector("#notes")
const keys = document.querySelectorAll(".key-selector")

let globalMute = false
const keyCodeArray = ["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","KeyW","KeyE","KeyT","KeyY","KeyU","KeyO","KeyP",]

muteIcon.addEventListener("click", () => {
    muteIcon.classList.toggle("disabled")
    globalMute = !globalMute     
})

notesIcon.addEventListener("click", () => {
    notesIcon.classList.toggle("disabled")
    keys.forEach((key)=>{
        key.classList.toggle("hide-notes")
    })  
})

keys.forEach((key) => {
    key.addEventListener("mousedown", () => {
        const audio = new Audio(`/sounds/${key.id}.ogg`)
        audio.muted = globalMute
        audio.play()
    })
})

window.addEventListener("keydown", (e) => {
    keyCodeArray.map((code, i) => {
        if (code == e.code && !e.repeat) {
            keys[i].setAttribute("tabindex","0")
            keys[i].focus()
            const audio = new Audio(`/sounds/${keys[i].id}.ogg`)
            audio.muted = globalMute
            audio.play()
        }
    })
})

window.addEventListener("keyup", () => {
    document.activeElement.blur()
})

window.addEventListener("mouseup", () => {
    document.activeElement.blur()
})