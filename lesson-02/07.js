let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
function clone(obj) {
    let clonedObj = {}

    for (i in obj) clonedObj[i] = typeof obj[i] == "object" ? clone(obj[i]) : obj[i];

    return clonedObj
}

let passportMarried2 = clone(passportMarried);

passportMarried2.married = true;
console.log(passportMarried);
console.log(passportMarried2);
