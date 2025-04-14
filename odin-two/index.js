
const formEl = document.getElementById("my-form");
const submitBtn = document.getElementById("submit");
const savePrint = document.getElementById("print");
let rowEl = document.getElementById("body");
let finalNum = document.getElementById("final")

let formData = [];

function validateForm() {
    //its better to use individual form ID's instead of input if you are gonna use array method
        if (formEl[0].value == "" || formEl[1].value == "") {
            alert("Please fill out required form entries.")
            formEl[0].classList.add("error");
            formEl[1].classList.add("error");  
        } else{

            formEl[0].classList.remove("error");
            formEl[1].classList.remove("error");           
        }
      
}

function addToTable(e) {

   e.preventDefault()

   //create a arsonal of data, potential turn it into JSON for fun idkkkkk
   const dataEntered = { 
    title: formEl[0].value, 
    money: formEl[1].value, 
    date: formEl[2].value
    };

    formData.push(dataEntered)

    //doing this to practice with table methods and get way from innerHTML its still pretty longwinded
   let newRow = rowEl.insertRow(-1)
   let cell1 = newRow.insertCell(0);    cell1.textContent = dataEntered.title
   let cell2 = newRow.insertCell(1);    cell2.textContent = dataEntered.money
   let cell3 = newRow.insertCell(2);    cell3.textContent = dataEntered.date
   let cell4 = newRow.insertCell(3);    cell4.innerHTML = "<button>Delete?</button>";


    var savedInt = Number(dataEntered.money)

    //this stuff needs to be updated after every entry
   document.querySelectorAll("#my-form input").forEach(input => {input.value = '' });

   doMath(savedInt)


}

function doMath(savedInt) {

//let allNumbers = document.querySelectorAll("#output-data tr td:nth-child(2)")
console.log(savedInt + " is the number to be added/ delted bases on its positie or negitive status")
console.log(Number(finalNum.textContent) + " + " + savedInt)
   let newNum = Number(finalNum.textContent) + savedInt;
   
   finalNum.textContent = newNum


    
}


submitBtn.addEventListener('click', validateForm)
formEl.addEventListener('submit', addToTable)
savePrint.addEventListener('click', function () {
    window.print()
    JSON.stringify(dataEntered)

})
rowEl.addEventListener("click", function(e) {
    if (e.target.matches("td > button")) {
                let btn = e.target
                let thatBtnRow= btn.closest('tr')
                let amtToDelete = thatBtnRow.children[1].textContent
                let savedInt = Number(amtToDelete) * -1
                doMath(savedInt)
                thatBtnRow.remove(btn)
    }
});

/*
function updateButtonListeners() {
    //im unsure if below is the best way to get ALL the numbers dynamically each time theres a change in the DOM 
    let allNumbers = document.querySelectorAll("#output-data tr td:nth-child(2)")
    let allButtons = document.querySelectorAll("td > button")
    allButtons.forEach(btn => {
        
            btn.addEventListener("click", function () {
    
    
                })
    
        });
    
    }
*/
