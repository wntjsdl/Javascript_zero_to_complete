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

/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas)

console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name'
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

// console.log(jonas.'last' + nameKey)

const intertestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends')

if (jonas[intertestedIn]) {
    console.log(jonas[intertestedIn])
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}

jonas.location = 'Portugal'
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas)

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    
    // calcAge: function (birthYeah) {
        //     return 2037 - birthYeah
        // }
        
    // calcAge: function () {
        //     // console.log(this)
        //     return 2037 - this.birthYeah
        // }
        
        calcAge: function () {
            this.age = 2037 - this.birthYeah
            return this.age
        },
        makeSummary: function () {
            this.summary = `${this.firstName} is a ${this.calcAge()}-year old teacher, `
            if (this.hasDriversLicense) {
                this.summary += `and he has a driver's license`
            } else {
                this.summary += `and he has no a driver's license`
            }
            return this.summary
        }
    }
    
    console.log(jonas.calcAge())
    
    console.log(jonas.age)
    console.log(jonas.age)
    console.log(jonas.age)
    
    // Challenge
    // "Jonas is a 46-year old teacher, and he has a driver's license"
    
    console.log(jonas.makeSummary())
    console.log(jonas.summary)

*/

/* Coding Challenge #3
const marks = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
    }
}

marks.calcBMI()
john.calcBMI()
if (marks.bmi > john.bmi) {
    console.log(`John's BMI (${marks.bmi}) is higher than Mark's (${john.bmi})!`)
} else if (john.bmi > marks.bmi) {
    console.log(`Mark's BMI (${john.bmi}) is higher than John's (${marks.bmi})!`)
} else {
    console.log('Same BMI')
}
*/

/*
// console.log('Lifting weights repetition 1 🏋️‍♀️')
// console.log('Lifting weights repetition 2 🏋️‍♀️')
// console.log('Lifting weights repetition 3 🏋️‍♀️')
// console.log('Lifting weights repetition 4 🏋️‍♀️')
// console.log('Lifting weights repetition 5 🏋️‍♀️')
// console.log('Lifting weights repetition 6 🏋️‍♀️')
// console.log('Lifting weights repetition 7 🏋️‍♀️')
// console.log('Lifting weights repetition 8 🏋️‍♀️')
// console.log('Lifting weights repetition 9 🏋️‍♀️')
// console.log('Lifting weights repetition 10 🏋️‍♀️')

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
}
*/

/* Looping Arrays, Breaking and Continuing
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]
const types = []

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonas array
    console.log(jonasArray[i], typeof jonasArray[i])

    // Filling types array
    // types[i] = typeof jonasArray[i]
    types.push(typeof jonasArray[i])
}

console.log(types)

const years = [1991, 2007, 1969, 2020]
const ages = []

for (let i = 0; i < years.length; i++) {
    const age = 2037 - years[i];
    ages.push(age)
}
console.log(ages)

// continue and break
console.log('--- ONLY STRING ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue

    console.log(jonasArray[i], typeof jonasArray[i])
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break

    console.log(jonasArray[i], typeof jonasArray[i])
}
*/

/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------- Starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`)
    }
}
*/

/*
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
}

let rep = 1
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetitions ${rep} 🏋️‍♀️`)
    rep++
}

let diceCount = 0
let dice = Math.trunc(Math.random() * 6) + 1
console.log(`You rolled ${dice}`)

while (dice !== 6) {
    console.log(`You rolled ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    diceCount++
    if (dice === 6) console.log(`Loop is about to end... count is ${diceCount + 2}`)
}
*/

let tips = []
let totals = []
let sum = 0

const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

function calcAverage(arr) {
    for (let i = 0; i < arr.length; i++) {
        tips.push(calcTip(arr[i]))
    }
    for (let i = 0; i < arr.length; i++) {
        totals.push(bills[i] + tips[i])
    }
    for (let i = 0; i < arr.length; i++) {
        sum += totals[i]
    }

    console.log(tips)
    console.log(totals)
    console.log(sum)
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
calcAverage(bills)