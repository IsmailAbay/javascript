let formDOM = document.querySelector("#userForm")
formDOM.addEventListener("sumbit",formSumbit)


function formSumbit(event) {
    event.preventDefault()
    console.log("islem gerçeklesti")
    let scoreInputDOM = document.querySelector("#score")
    console.log(scoreInputDOM.value)
}