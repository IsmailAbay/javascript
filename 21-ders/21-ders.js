let greeting = document.querySelector("#greeting")
greeting.addEventListener("click",domClick)

function domClick() {
    console.log("tiklandi")
    console.log(this.innerHTML)
}
    
