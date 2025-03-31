
const submit = document.querySelector("#submit");
const savePrint = document.querySelector("#print");
const final = document.querySelector("#final");
var input = document.querySelectorAll('input')
let dataNode = document.querySelectorAll(".data");
const dateOf = document.querySelector("#date");
const amtOf = document.querySelector("#number");
const titleOf = document.querySelector("#title");
const formData = [];

function pushArr(e) {

      e.preventDefault()

    for (var i = 0; i < input.length; i++) {

        var list =  document.createElement('li');
           list.textContent = input[i].value
           dataNode[i].appendChild(list);        
    }

    const dataEntered = { 
        title: input[0].value, 
        money: input[1].value, 
        date: input[2].value
    };

    formData.push(dataEntered)
    input.forEach(input => {input.value = '' });
    
}

function validateForm() {

        if (input[0].value == "" || input[1].value == "") {
            alert("Please fill out required form entries.")
            input[0].classList.add("error");
            input[1].classList.add("error");
          
        } else{
            input[0].classList.remove("error");
            input[1].classList.remove("error");
        }
       
}




submit.addEventListener('click', validateForm)
document.querySelector("form").addEventListener('submit', function (e) {

    e.preventDefault()
    console.log(e)
    
})

savePrint.addEventListener('click', function () {

    window.print()
    
})

/*


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
    
     
    var row = document.querySelectorAll('ul')

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

   
    
    var row = document.querySelectorAll('ul')

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
  