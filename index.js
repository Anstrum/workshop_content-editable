let editButton = document.getElementById("edit-button")
let editState = true

let editableElements = document.querySelectorAll(".editable")

editButton.addEventListener("click", () => {
    if(editState == true) {
        setTimeout(() => {
            editButton.src = "save.png"
        }, 125);
        makeFlip(editButton)
        editableElements.forEach( element => {
            element.classList.add("editable")
            element.setAttribute("contenteditable", "true")
        })
    } else {
        setTimeout(() => {
            editButton.src = "edit.png"
        }, 125);
        makeFlip(editButton)
        editableElements.forEach( element => {
            element.classList.remove("editable")
            element.setAttribute("contenteditable", "false")
        })
    }
    editState = !editState
})


let makeFlip = (element) => {
    element.animate([
        { transform: "scaleX(1)", offset: 0 },
        { transform: "scaleX(0)", offset: 0.5 },
        { transform: "scaleX(1)", offset:1 },
    ], {
        duration: 250,
        iterations: 1
    })
}