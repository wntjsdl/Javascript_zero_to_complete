/*
let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $funtion = 27;

let person = 'jonas'
let PI = 3.14515;

let myFirstJob = 'Corder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);
*/

/*
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/

/* Coding Challenge #1
function calculateBMI(mass, height) {
    let bmi = mass / height ** 2;
    console.log(bmi);¡
};

const marksWeight1 = 78;
const marksHeight1 = 1.69;
calculateBMI(marksWeight1, marksHeight1);
const johnWeight1 = 92;
const johnHeight1 = 1.95;
calculateBMI(johnWeight1, johnHeight1);
const marksWeight2 = 95;
const marksHeight2 = 1.88;
calculateBMI(marksWeight2, marksHeight2);
const johnWeight2 = 85;
const johnHeight2 = 1.76;
calculateBMI(johnWeight2, johnHeight2);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\multiple \n\lines');

console.log(`String
multiple
lines`);
*/

/*
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/* Coding Challenge #2
const marksBMI = 21
const johnsBMI = 22
if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`)
} else if (marksBMI < johnsBMI) {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`)
} else {
    console.log(`Mark's BMI (${marksBMI}) is the same as John's (${johnsBMI})!`)
}
*/

/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1
console.log(n);
*/

/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 100;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED')
}
*/

/*
const age = '18';
if (age === 18) console.log('You just became an adult :D (stric)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("Whats's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 23 === 23
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}

if (favourite !== 23) console.log('Why not 23?');
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else shold drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else shold drive...');
}
*/

/* Coding Challenge #2
const DolphinsScore1 = (96 + 108 + 89) / 3;
const KoalasScore1 = (88 + 91 + 110) / 3;
console.log(DolphinsScore1, KoalasScore1);

if (DolphinsScore1 > KoalasScore1) {
    console.log("Win Dolphin's Team");
} else if (KoalasScore1 > DolphinsScore1) {
    console.log("Win Koalas's Team");
} else {
    console.log("Draw!");
}

const DolphinsScoreBonus1 = (97 + 112 + 101) / 3
const KoalasScoreBonus1 = (109 + 95 + 123) / 3

if (DolphinsScoreBonus1 > KoalasScoreBonus1 && DolphinsScoreBonus1 >= 100) {
    console.log("Win Dolphin's Team")
} else if (KoalasScoreBonus1 > DolphinsScoreBonus1 && KoalasScoreBonus1 >= 100) {
    console.log("Win Koalas's Team")
} else if (KoalasScoreBonus1 == DolphinsScoreBonus1 && KoalasScoreBonus1 >= 100) {
    console.log("Draw!")
} else {
    console.log("Against the rule.")
}

const DolphinsScoreBonus2 = (97 + 112 + 101) / 3
const KoalasScoreBonus2 = (109 + 95 + 106) / 3

if (DolphinsScoreBonus2 > KoalasScoreBonus2 && DolphinsScoreBonus2 >= 100) {
    console.log("Win Dolphin's Team")
} else if (KoalasScoreBonus2 > DolphinsScoreBonus2 && KoalasScoreBonus2 >= 100) {
    console.log("Win Koalas's Team")
} else if (KoalasScoreBonus2 == DolphinsScoreBonus2 && KoalasScoreBonus2 >= 100 && DolphinsScoreBonus2 >= 100) {
    console.log("Draw!")
} else {
    console.log("Against the rule.")
}
*/

/*
const day = 'friday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples')
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D')
        break;
    default:
        console.log('Not a valid day!')
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples')
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D')
} else {
    console.log('Not a valid day!');
}
*/

/*
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}.`)
*/

/*
const age = 15;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`)
*/

/* Coding Challenge #4
const bill1 = 275
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2
console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1}`)

const bill2 = 40
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`)

const bill3 = 430
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${bill3 + tip3}`)
*/

