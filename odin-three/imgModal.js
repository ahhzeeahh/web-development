let imageListener = document.getElementById("txgioImgGall");
let amountListener = document.querySelectorAll("[data-bs-img-num]");
let currImgCounter = 0;
let nextButtonImg = document.getElementById("show-next-image");
let beforeButtonImg = document.getElementById("show-previous-image");
let imgModalView = document.getElementById("imgGallModalView");
let txgioImageGallery = document.querySelectorAll("#txgioImgGall img");

function clickerBtns(e) {
    let x = e.target;
    let test = x.closest("button");

    if (test.matches("#show-next-image")) {
        currImgCounter++;
        if (currImgCounter == txgioImageGallery.length - 1) {
            currImgCounter = 0;
            console.log(currImgCounter);
        }
    } else if (test.matches("#show-previous-image")) {
        console.log(currImgCounter);
        currImgCounter--;
        if (currImgCounter == -1) {
            currImgCounter = txgioImageGallery.length - 1;
        }
    }

    let newNextImg = txgioImageGallery[currImgCounter];
    imgModalView.setAttribute("src", newNextImg.src);
}
nextButtonImg.addEventListener("click", clickerBtns);
beforeButtonImg.addEventListener("click", clickerBtns);
imageListener.addEventListener("click", function (e) {
    if (e.target.matches("img.rounded")) {
        let img = e.target;
        currImgCounter = parseInt(img.getAttribute("data-bs-img-num")) - 1;
        imgModalView.setAttribute("src", img.src);
        return currImgCounter;
    }
});
document.getElementById("txgioImgGallModal").addEventListener('hide.bs.modal', () => {
    if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
    }
});