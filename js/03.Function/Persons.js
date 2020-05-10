// How to create the functions

let name = "KhudaBakhsh";
let age = 27;
let birth_date = 1993;
let idNum = 23367;
let gender = "male";
let = true;

// console.log("Name: " + name + ", " + "Age: " + age + ", " + "Date of birth: " + birth_date + ", " +
//     "ID Number: " + idNum + ", " + "Gender: " + gender);

document.body.innerHTML = "Name: " + name + "<br> " + "Date of birth: " + birth_date + ", " +
    "<br>" + "Age: " + age + "<br>" +
    "ID Number: " + idNum + "<br>" + "Gender: " + gender;




/*-----------------FUNCATIONS-----------------*/



function calculateAge(name, birthYears) {
    let date = new Date();
    let currentYear = date.getFullYear();
    let age = currentYear - birthYears;
    let dispaly = name + " is " + +age + " Years old";
    return dispaly;
}

// let myAge = calculateAge("Age ", 1993);
// console.log(myAge);

console.log(calculateAge("Khuda Baksh", 1983));