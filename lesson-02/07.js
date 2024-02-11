let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarriedCopy = JSON.parse(JSON.stringify(passportMarried))
let passportEntries = Object.entries(passportMarriedCopy);
let newEntries = [
    ...passportEntries.slice(0, 2), ["married", true],
    ...passportEntries.slice(2)
];
let passportMarried2 = Object.fromEntries(newEntries);

console.log(passportMarried)
console.log(passportMarried2)