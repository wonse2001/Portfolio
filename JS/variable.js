'use strict'

// 2. Variable, rw(read / write)  Mutable
// let (added in ES6)
let globalName = 'global name';
{
    let name = "wonse";
    console.log(name);
    name = "hello";
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever user this)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
    age = 4;
    var age;  
}
console.log(age);

// 3. Constans, r(read only) Immutable
// favor immutable data type always for a few reasons;
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const Maxnumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undifined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size} , type : ${typeof size}`);

// bigInt
const bigInt = 123123123123123123123123123123123123123123n; // n
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value : ${greeting}, type ${typeof greeting}`);
const helloBob = `hi ${brendan}`; //template literals (string)
console.log(`value : ${helloBob}, type ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

// null
let nothing = null;
console.log(`value : ${nothing} type : ${typeof nothing}`);

// undefined
let x;
console.log(`value : ${x} type : ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);

// object, real-life object, data structure
const wonse = {name: 'wonse', age: 20};
wonse.age = 21;
console.log(`name : ${wonse.name}, age : ${wonse.age}`);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = 7 + '5';
console.log(`value : ${text}, type : ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`);
// console.log(text.charAt(0)); error