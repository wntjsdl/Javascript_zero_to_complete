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

/*
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
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangesPieces = cutFruitPieces(oranges)

    const juice = `Juice with ${apples} piece of apples and ${oranges} piece of oranges.`
    return juice
}

console.log(fruitProcessor(2, 3))
*/

/*
const calcAge = function (birthYeah) {
    return 2037 - birthYeah
}

const yearUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah)
    const retirement = 65 - age

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`)
        return retirement
    } else {
        console.log(`${firstName} has already retired 🎉`)
        return -1
    }

    // return `${firstName} retires in ${retirement} years.`
}
console.log(yearUntilRetirement(1991, 'Jonas'))
console.log(yearUntilRetirement(1950, 'Mike'))
*/

/* Coding Challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas > avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('Draw this game.')
    }
}

const data1_Dolphins = calcAverage(44, 22, 71)
const data1_Koalas = calcAverage(65, 54, 49)
checkWinner(data1_Dolphins, data1_Koalas)

const data2_Dolphins = calcAverage(85, 54, 41)
const data2_Koalas = calcAverage(23, 34, 27)
checkWinner(data2_Dolphins, data2_Koalas)
*/

/*
const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

const y = new Array(1991, 1984, 2008, 2020)

console.log(friends[0])
console.log(friends[2])

console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)
// friends = ['Bob', 'Alice'] // error

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]
console.log(jonas)
console.log(jonas.length)

// Exercise
const calcAge = function (birthYeah) {
    return 2037 - birthYeah
}
const years = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)
*/

/*
const friends = ['Micael', 'Steven', 'Peter']

// Add elements
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)

friends.unshift('John')
console.log(friends)

// Remove elements
friends.pop() // Last
const popped = friends.pop() // Popped element
console.log(popped)
console.log(friends)

friends.shift() // First
console.log(friends)

console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))

friends.push(23)
console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))
console.log(friends.includes(23))

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven')
}
*/

/* Coding Challenge #2

const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

const bill1 = 125
const tip1 = calcTip(bill1)
const bill2 = 555
const tip2 = calcTip(bill2)
const bill3 = 44
const tip3 = calcTip(bill3)

const tips = [tip1, tip2, tip3]
console.log(tips)
const totals = [bill1 + tip1, bill2 + tip2, bill3 + tip3]
console.log(totals)
*/
