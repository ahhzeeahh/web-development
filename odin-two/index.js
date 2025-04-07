let tableEl = document.getElementById("output-data");
let formEl = document.getElementById("my-form");
let submitBtn = document.getElementById("submit");
const savePrint = document.getElementById("print");
const final = document.getElementById("final");
let rowEl = document.getElementById("body");
const formData = [];

function pushArr() {

    const dataEntered = { 
        title: formEl[0].value, 
        money: formEl[1].value, 
        date: formEl[2].value,
        del: "Delete"

    };
    formData.push(dataEntered)
    
  
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
            pushArr()           
        }
}

function addToTable(e) {


   e.preventDefault()
   console.log(formData)
   document.querySelectorAll("#my-form input").forEach(input => {input.value = '' });
}
function changeListner() {
    

formData.forEach((entry) =>
console.log(entry[1].value)
)
}

formEl.addEventListener('submit', addToTable)
formData.addEventListener('change', changeListner)
submitBtn.addEventListener('click', validateForm)
savePrint.addEventListener('click', function () {window.print()})
let allButtons = document.querySelectorAll("td > button")
allButtons.forEach(btn => {
    
        btn.addEventListener("click", function () {

            let thatBtnRow= btn.closest('tr')
            let amtToDelete = thatBtnRow.children[1].textContent
            let savedInt = Number(amtToDelete)

            thatBtnRow.remove()

            })

    });
/*


notes: on change



function getValues(titleOf, amtOf, dateOf) {
    
}

/*
function validateForm() {



    if (titleOf == "" || amtOf == "") {
        alert("Please fill out form")
        input[0].classList.add("error");
        input[1].classList.add("error");
    } else{
        input[0].classList.remove("error");
        input[1].classList.remove("error");
    }
    alert("youclicked")
     titleOf = ""
     amtOf = "" 
     dateOf = ""
}




function test() {
    
     
    var row = document.document.getElementByIdAll('ul')

        if (input1 == "" || input2 == "" ) {
            alert("Please fill out required fields!")
            input[1].classList.add("error")
            input[0].classList.add("error")
        } else {
            input[1].classList.remove("error")
            input[0].classList.remove("error")
        }
        for (var i = 0; i < input.length; i++) {

            var list =  document.createElement('li');
               list.textContent = input[i].value
               row[i].appendChild(list);        
        }

        amount +=  parseFloat(input[1].value)
        input[1].value = amount;
        final.textContent = "$" + amount;

        
        const newObject = { 
            title: input[0].value, 
            money: input[1].value, 
            date: input[2].value,

        };

        formData.push(newObject)

        input[0].value = "";
        input[1].value = "";
        input[2].value = "";
}





submit.addEventListener('click', function() { 

   
    
    var row = document.document.getElementByIdAll('ul')

        if (input1 == "" || input2 == "" ) {
            alert("Please fill out required fields!")
            input[1].classList.add("error")
            input[0].classList.add("error")
        } else {
            input[1].classList.remove("error")
            input[0].classList.remove("error")
        }
        for (var i = 0; i < input.length; i++) {

            var list =  document.createElement('li');
               list.textContent = input[i].value
               row[i].appendChild(list);        
        }

        amount +=  parseFloat(input[1].value)
        input[1].value = amount;
        final.textContent = "$" + amount;

        
        const newObject = { 
            title: input[0].value, 
            money: input[1].value, 
            date: input[2].value,
            test: function() {
                console.dir(this)

            }

        };

        formData.push(newObject)

        input[0].value = "";
        input[1].value = "";
        input[2].value = "";
});

*/
  
