let imageListener = document.getElementById(txgioImgGall);


rowEl.addEventListener("click", function(e) {

    
    if (e.target.matches("td > button")) {
                let btn = e.target
                let thatBtnRow = btn.closest('tr')
                let i =  Number(thatBtnRow.rowIndex) - 1
                let amtToDelete = thatBtnRow.children[1].textContent
                let savedInt = Number(amtToDelete) * -1


                doMath(savedInt, finalNum)
                formData.splice(i, 1)
                thatBtnRow.remove(btn)

    }



    
});
