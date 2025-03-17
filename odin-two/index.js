
const submit = document.querySelector("#submit");
const final = document.querySelector("#final");
var input = document.querySelectorAll('input')
var amount = 0;


submit.addEventListener('click', function() { 


    
    var row = document.querySelectorAll('ul')

        if (input[0].value == "" || input[1].value == "" ) {
            alert("Please fill out required fields!")
            input[1].classList.add("error")
            input[0].classList.add("error")
        } else {
            console.warn("Submitted: " + input[0].value  + " for $" + input[1].value  + " on " + input[2].value  + " ")
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

        input[0].value = "";
        input[1].value = "";
        input[2].value = "";
});
