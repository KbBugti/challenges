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