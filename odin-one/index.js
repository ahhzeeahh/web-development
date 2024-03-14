  
let btnGet = document.querySelector(".btn-dark")

btnGet.addEventListener("click", colorChanger);

function colorChanger() {
    let randomNumber = Math.floor( Math.random()*100)
    console.log(randomNumber)
    
}

