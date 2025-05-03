let imageListener = document.getElementById("txgioImgGall");
let imgModalView = document.getElementById("imgGallModalView");
// type="button" data-bs-toggle="modal" data-bs-target="#txgioImgGallModal" THIS IS IMPORTAN TTO PUT OVER EVER DIV WITH IMG
//let imageListener = document.getElementById("txgioImgGall");

imageListener.addEventListener("click", function(e) {
    
    if (e.target.matches("img.img")) {
                let img = e.target
                imgModalView.setAttribute("src", img.src)
                let nextImgSrc = img.closest('img.img')
                // either make a index that counts so you can do +1 or -1 to get next or fron a nother .furthest .js method
                console.log(nextImgSrc)
    
    }

    
});
