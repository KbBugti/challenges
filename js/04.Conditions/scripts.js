// JavaScript Conditions

//Number Less than or Equal, return "True" or "False"

function lessOrEqual(num) {
    if (num > 5) {
        return "True";
    }
    return "False";
}
console.log(lessOrEqual(num = 3)); // "Not equal"
console.log(lessOrEqual(num = 10));
console.log(lessOrEqual(num - 4));


// let num = 2;

// if (num = 5) {
//     console.log("false");
// }

// let num2 = 10;

// if (num2 > 5) {
//     console.log("True");
// }



// The Number Even or Odd

function oddOrEven(x) {
    return (x & 1) ? "odd" : "even";
}

function checkNumber(Number) {
    document.body.innerHTML = "Number " + Number + " is " + oddOrEven(Number);
}

checkNumber(4);