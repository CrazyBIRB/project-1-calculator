const numbers = [];

function writeNumber(number){
    if(numbers.length <= 1){
        document.getElementById("result").innerHTML = number;
        numbers[0] = number;
    }
    else{
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + number;
        numbers[2] = number;
    }
    console.log(number);
    console.log(numbers);
}
