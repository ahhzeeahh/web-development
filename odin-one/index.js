
const button = document.querySelector("#change");
const icon = document.querySelector(".bi-brilliance");


button.addEventListener("click", function() {

   let rgb = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
   console.log(rgb)

      icon.style.color = rgb

  });

