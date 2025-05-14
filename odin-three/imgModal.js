/* For Image Gallery  */

let imageListener = document.getElementById("txgioImgGall");
let amountListener = document.querySelectorAll('[data-bs-img-num]')
let currImgCounter = 0;
let nextButtonImg = document.getElementById("show-next-image");
let beforeButtonImg = document.getElementById("show-previous-image");
let imgModalView = document.getElementById("imgGallModalView");
let txgioImageGallery = document.querySelectorAll("#txgioImgGall img");

nextButtonImg.addEventListener("click", nextImage)
beforeButtonImg.addEventListener("click", beforeImage)
imageListener.addEventListener("click", function(e) {

        validationButtons()
        

    if (e.target.matches("img.modal-img")) {
                let img = e.target
                console.log(img)
                imgModalView.setAttribute("src", img.src)
                let currImgSrc = img.closest('img')
                currImgCounter = parseInt(currImgSrc.getAttribute("data-bs-img-num"))
        
                return currImgCounter
    }    
});

function validationButtons() {
   console.log(currImgCounter)
    if (currImgCounter = 1) {
        beforeButtonImg.style.display = "block"
    }else{
         beforeButtonImg.style.display = "none"
    }
    if (txgioImageGallery.length = currImgCounter) {
        nextButtonImg.style.display = "block"
    } else {
        nextButtonImg.style.display = "none"
    }

    
}

function beforeImage(e) {

    validationButtons()
 
    let doMath = currImgCounter
    let newBeforeImg =  txgioImageGallery[doMath]
    imgModalView.setAttribute("src", newBeforeImg.src)
    currImgCounter = doMath
    return currImgCounter

}



function nextImage(e) {
    validationButtons()

    let doMath = currImgCounter
    let newNextImg = txgioImageGallery[doMath]
    imgModalView.setAttribute("src", newNextImg.src)
   currImgCounter = doMath
   return currImgCounter

}