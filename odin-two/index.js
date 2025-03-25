
const submit = document.querySelector("#submit");
const final = document.querySelector("#final");
var input = document.querySelectorAll('input')
let dataNode = document.querySelectorAll(".data");
const dateOf = document.querySelector("#date");
const amtOf = document.querySelector("#number");
const titleOf = document.querySelector("#title");
const formData = [];

input[0].classList.remove("error");
input[1].classList.remove("error");

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

    if (input[0] == "" || input[1] == "") {
        console.log("its blank")
    } else {
        input[0].classList.toggle("error");
        input[1].classList.toggle("error"); 
    }
    input.forEach(input => {input.value = '' });
    
}

function validateForm(e) {
   
    e.preventDefault()
        if (input[0].value != "" || input[1].value != "") {
            alert("Please fill out form")
            input[0].classList.toggle("error");
            input[1].classList.toggle("error");

        }
       
}


submit.addEventListener('click', validateForm)
submit.addEventListener('submit', pushArr)







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
  