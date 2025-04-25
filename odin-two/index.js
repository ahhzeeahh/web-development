
const formEl = document.getElementById("my-form");
const submitBtn = document.getElementById("submit");
const savePrint = document.getElementById("print");
let rowEl = document.getElementById("body");
let finalNum = document.getElementById("final")
let formData = [];


function masterFunction(e) {
    e.preventDefault()

    //step 1
    validateForm()
    // step 2
    createObj()
    //step 3
    addToTable()
     

    let savedInt = Number(formEl[1].value)
    doMath(savedInt, finalNum)
    formEl.reset()
}

function validateForm() {
   //read MND dock to replace this checkValidity
    if (formEl[0].value == "" || formEl[1].value == "") {
            alert("Please fill out required form entries.")
            formEl[0].classList.add("error");
            formEl[1].classList.add("error");  
        } else{

            formEl[0].classList.remove("error");
            formEl[1].classList.remove("error");           
        }     
      
}
function createObj() {

   const dataEntered = { 
    title: formEl[0].value, 
    money: formEl[1].value, 
    date: formEl[2].value
    };

    formData.push(dataEntered)
    console.log(formData)
    
}

function addToTable() {
   let indexArr = formData.length - 1
   let newRow = rowEl.insertRow(-1)
   let cell1 = newRow.insertCell(0);    
   let cell2 = newRow.insertCell(1);    
   let cell3 = newRow.insertCell(2);  
   let cell4 = newRow.insertCell(3);  
     
   cell1.textContent = formData[indexArr].title
   cell2.textContent = formData[indexArr].money
   cell3.textContent = formData[indexArr].date
   cell4.innerHTML = "<button>Delete?</button>";


}

function doMath(savedInt, finalNum) {
    
   let newNum = Number(finalNum.textContent) + savedInt;  
   finalNum.textContent = newNum
    
}

 formEl.addEventListener('submit', masterFunction)
savePrint.addEventListener('click', function () {
    window.print()
    JSON.stringify(dataEntered)
})



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
