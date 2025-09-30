let imageListener = document.getElementById("litebox");
let imgModalView = document.getElementById("imgGallModalView");
let modalContent = document.getElementById("getMapContent");
imageListener.addEventListener("click", function(e) {
    modalContent.innerHTML= ""
    let div = e.target.closest(".litebox-img")
    let imageInject =  div.querySelector('.maps-thumbnail')
    let dnone = div.querySelector(".d-none")
    let hiddenContent = dnone.cloneNode(true)
    imgModalView.setAttribute("src", imageInject.src)
    modalContent.append(hiddenContent)

})