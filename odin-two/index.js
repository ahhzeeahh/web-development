
const submit = document.querySelector("#submit");
const final = document.querySelector("#final");
var input = document.querySelectorAll('input')
var amount = 0;
const formData = [];



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
*/



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


function pushArr() {

    const dataEntered = { 
        title: input[0].value, 
        money: input[1].value, 
        date: input[2].value
    };

    formData.push(dataEntered)
    console.log(formData)
    
    input.forEach(input => input.value = '');
    
}
submit.addEventListener('click', pushArr)







/*
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
  