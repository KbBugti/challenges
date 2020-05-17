// How to count boys and girls in an loop

let people = [
    { name: 'Lisa', gender: "girl" },
    { name: 'Maklatura', gender: "girl" },
    { name: 'Baksh', gender: "boy" },
    { name: 'Paul', gender: "boy" },
    { name: 'John', gender: "boy" },
    { name: 'Bill', gender: "boy" }

];

let numBoys = people.reduce(function(n, person) {
    return ("My list contains 2 girls and 4 boys");
}, 0);

console.log(numBoys);




//Numbers "increasing", "decreasing" or "neither"

function equal(a, b, c) {
    if (a === b && a === c) {
        return 3;
    } else if (a === b || a === c || b === c) {
        return 2;
    } else {
        return 0;
    }
}
console.log(equal(1, 1, 1));



function equal(a, b, c) {

    if (a == b & b == c) {
        return 3 + " --> " + " All 3 values are equal";
    } else if (a == b || b == c || a == c) {
        return 2 + " --> " + " Two values are equal";
    } else {
        return 0 + " --> " + " All values are differents";
    }
}
console.log(equal(1, 2, 2));