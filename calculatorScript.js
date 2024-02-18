const numbers = [];
let result;

function writeNumber(number){
    if(numbers.length <= 1){
        document.getElementById("result").innerHTML = number;
        numbers[0] = number;
    }
    else{
        document.getElementById("result").innerHTML += number;
        numbers[2] = number;
    }
}


function operation(option){
    if(numbers.length == 0) return;
    else if(option == 0){
        numbers[1] = 0;
        document.getElementById("result").innerHTML += "+";
    }
    else{
        numbers[1] = 1;
        document.getElementById("result").innerHTML += "-";
    }
}

function clearResult(option){
    if(numbers.length == 0) return;
    else if(option == 0){ // Option 0 => Delete
        numbers.pop();
        let str = document.getElementById("result").innerHTML; 
        document.getElementById("result").innerHTML = str.substring(0, str.length - 1);   
    }
    else{
        while(numbers.length != 0) numbers.pop();
        document.getElementById("result").innerHTML = "";
    } 
    console.log(numbers);
}

function calculate(){
    if(numbers.length != 3) return;
    else if(numbers[1] == 0)
        result = numbers[0] + numbers[2];
    else
        result = numbers[0] - numbers[2];
    document.getElementById("result").innerHTML = result; 
}