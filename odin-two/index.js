
const formEl = document.getElementById("my-form");
const submitBtn = document.getElementById("submit");
const savePrint = document.getElementById("print");
let rowEl = document.getElementById("body");
let finalNum = document.getElementById("final")
let formData = [];


function masterFunction() {
    return Math.random()
    
}

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
function createObj() {
    
   //create a arsonal of data, potential turn it into JSON for fun idkkkkk
   const dataEntered = { 
    title: formEl[0].value, 
    money: formEl[1].value, 
    date: formEl[2].value
    };

    formData.push(dataEntered)
    
}

function addToTable(e) {

   e.preventDefault()

    //doing this to practice with table methods and get way from innerHTML its still pretty longwinded
   let newRow = rowEl.insertRow(-1)
   let cell1 = newRow.insertCell(0);    
   let cell4 = newRow.insertCell(3);  
   let cell2 = newRow.insertCell(1);    
   let cell3 = newRow.insertCell(2);    
   cell1.textContent = dataEntered.title
   cell2.textContent = dataEntered.money 
   cell3.textContent = dataEntered.date  
   cell4.innerHTML = "<button>Delete?</button>";


}

function doMath(savedInt, finalNum) {
// turn this into a 2 pram fuction with finial num and saved int take out DOM stuff... makbe make nef fucnigion to update total pass the reutned val from here

var savedInt = Number(dataEntered.money)


//let allNumbers = document.querySelectorAll("#output-data tr td:nth-child(2)")
console.log(savedInt + " is the number to be added/ delted bases on its positie or negitive status")
console.log(Number(finalNum.textContent) + " + " + savedInt)
   let newNum = Number(finalNum.textContent) + savedInt;
   
   finalNum.textContent = newNum


    
}

// THIS NEEDS WORK... MAYBE only 1 submit event... 

submitBtn.addEventListener('click', validateForm)
//make a suunmit event that diviys up what to do from there aka call pther things
//formEl.addEventListener('submit', addToTable)
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
