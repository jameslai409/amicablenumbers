
window.onload = function() {
    var form = document.getElementById("form");
    form.enter.addEventListener("click", calculate);

    //testing isFactor function
    // alert(isFactor(10, 2));
    // alert(isFactor(10, 3));
    // alert(isFactor(13, 13));
    // alert(isFactor(100, 25));

    //testing showArray function
    // var array = [6, 5, 2, 3];
    // showArray(array);

    //testing addArray function
    // var array = [6, 5, 2, 3];
    // var array = [1, 2, 3, 4];
    // var array = [1, 2];
    // alert(addArray(array));

    //testing getFactors function
    // showArray(getFactors(75));
    // showArray(getFactors(10));
    // showArray(getFactors(13));
    // showArray(getFactors(210));

}

function calculate() {
    var displayBox = document.getElementById("display");

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    displayBox.innerHTML = "<h1>You entered " + num1 + " and " + num2 + "</h1>";

    let num1total = addArray(getFactors(num1));
    let num2total = addArray(getFactors(num2));

    var result = document.getElementById("result");
    if (num1total == num2 && num2total == num1) {
        result.innerHTML = "<h1>Amicable!</h1>";
    }
    else {
        result.innerHTML = "<h1>Not Amicable!</h1>";
    }

}

function isFactor(number, factor) {
    if (number % factor == 0) {
        return true;
    }
    else {
        return false;
    }
}

function showArray(array) {
    var displayBox = document.getElementById("display");
    
    // displayBox.appendChild(document.createTextNode(""));
    let s = "";
    for (let i = 0; i < array.length; i = i + 1) {
        s = s + array[i] + " ";
    }
    
    displayBox.innerHTML = s;
}

function addArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i = i + 1) {
        sum = sum + array[i];
    }
    return sum;
}

function getFactors(num) {
    arr = [];
    for (let i = 0; i < num; i = i + 1) {
        if (isFactor(num, i)) {
            arr.push(i);
        }
    }
    return arr;
}