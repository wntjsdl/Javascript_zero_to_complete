'use strict'

/*
let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio'
// const private = 543
// const if = 'if'
*/

/*
function logger() {
    console.log('My name is Jonas')
}

// calling / running / invoking function
logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrageJuice = fruitProcessor(2, 4)
console.log(appleOrageJuice)

const num = Number('23');
console.log(num)
*/

/*
function calcAge1(birthYeah) {
    return 2037 - birthYeah
}

const age1 = calcAge1(1991)
console.log(age1)

// Function expresstion
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah
}
const age2 = calcAge2(1991);

console.log(age1, age2)
*/

// Arrow function
const calcAge3 = birthYeah => 2037 - birthYeah
const age3 = calcAge3(1991)
console.log(age3)

const yearUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearUntilRetirement(1991, 'Jonas'))
console.log(yearUntilRetirement(1980, 'Bob'))
