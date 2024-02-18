let str;
let currentNumber = "";
let result = 0;
let currentOperation = -1;

function writeNumber(number){
    document.getElementById("result").innerHTML += number; 
}


function operation(option){
    str = document.getElementById("result").innerHTML;
    if(str == "" || str.charAt(str.length - 1) == "+" || str.charAt(str.length - 1) == "-") 
        return;
    else if(option == 0) 
        document.getElementById("result").innerHTML += "+";
    else if(option == 1)
        document.getElementById("result").innerHTML += "-";
    else console.log("Error");
}

function clearResult(option){
    if(document.getElementById("result").innerHTML == "") console.log("empty");
    else if(option == 0){
        str = document.getElementById("result").innerHTML;
        document.getElementById("result").innerHTML = str.substring(0, str.length - 1);
    } 
    else document.getElementById("result").innerHTML = "";
}


function calculate(str){
    str += "+";
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == "+" || str.charAt(i) == "-"){
            switch(currentOperation){
                case 0:
                    result += parseInt(currentNumber);
                    break;
                case 1:
                    result -= parseInt(currentNumber);
                    break;
                default:
                    result = parseInt(currentNumber);
            }
            currentOperation = str.charAt(i) === "+" ? 0 : 1;
            currentNumber = ""; 
        }
        else{
            currentNumber += str.charAt(i);
        }
    }
    currentOperation = -1;
    return result;
}


function showResult(){
    str = document.getElementById("result").innerHTML;
    // If there are no operating signs, doesnt do anything
    if(str.search("\\+") == -1 && str.search("-") == -1) return;
    // If the last input was a operating sign, alerts an error
    else if (str.charAt(str.length - 1) == "+" || str.charAt(str.length - 1) == "-") 
        alert("Invalid input");
    else{
        calculate(str);
        document.getElementById("result").innerHTML = result;
    }
}