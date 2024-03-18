
const btn = document.querySelector(".btn-dark");


btn.addEventListener("click", function (){

    const svg = document.querySelector(".bi-brilliance");

    let rgb = "rgb(" + Math.floor( Math.random()*255) + "," + Math.floor( Math.random()*255) + "," + Math.floor( Math.random()*255) + ")"
       
        svg.style.color = rgb
       
        console.log(rgb)
        

})

