/* For Image Gallery  */

let imageListener = document.getElementById("txgioImgGall");
let currImg = 1;
let nextButtonImg = document.getElementById("show-next-image");
let beforeButtonImg = document.getElementById("show-previous-image");
let imgModalView = document.getElementById("imgGallModalView");
let txgioImageGallery = document.querySelectorAll("#txgioImgGall img");

imageListener.addEventListener("click", function(e) {
    
    if (e.target.matches("img.img")) {
                let img = e.target
                imgModalView.setAttribute("src", img.src)
                let currImgSrc = img.closest('img.img')
                let firstImg = img.closest('div')
                currImg = parseInt(currImgSrc.getAttribute("data-bs-img-num"))

                if (firstImg.classList.contains("txgio-img-gallery-1")) {
                    beforeButtonImg.style.display = "none"
                }else{
                     beforeButtonImg.style.display = "block"
                }
                if (txgioImageGallery.length == currImg) {
                    nextButtonImg.style.display = "none"
                } else {
                    nextButtonImg.style.display = "block"
                }
           

    }    
});

beforeButtonImg.addEventListener("click", beforeImage)

function beforeImage() {
    let currImage = parseInt(imgModalView.getAttribute("data-bs-img-num")) - 1;
    let newBeforeImg =  txgioImageGallery[currImage]
    imgModalView.setAttribute("src", newBeforeImg.src)

}

nextButtonImg.addEventListener("click", nextImage)

function nextImage() {
console.log("next was clickedS")
    let newNextImg =  txgioImageGallery[currImg]
    imgModalView.setAttribute("src", newNextImg.src)
    currImg++
    console.log(newNextImg)
}