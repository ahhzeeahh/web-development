//alert("Hello and welcome to my Web Devlopment Journey, this is still apart of azizaobryant.com")
    
let btnGet = document.querySelector(".btn-dark")

btnGet.addEventListener("click", colorChanger);

function colorChanger() {
    let randomNumber = Math.floor( Math.random()*100)
    console.log(randomNumber)
    
}