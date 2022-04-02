//assignment operator =
let devname='arunprasath'
let devcountry='India'

console.log(`data value assigned to variable devname: ${devname}\n and data value assigned to variable devcountry : ${devcountry}`)

//comparison operator
/*
== / === / != / > / < / >= / <=
*/
console.log('3 > 2 :',3 > 2)              // true, because 3 is greater than 2
console.log('3 >= 2:',3 >= 2)             // true, because 3 is greater than 2
console.log('3 < 2:',3 < 2)              // false,  because 3 is greater than 2
console.log('2 < 3',2 < 3)              // true, because 2 is less than 3
console.log('2 <= 3',2 <= 3)             // true, because 2 is less than 3
console.log('3 == 2',3 == 2)             // false, because 3 is not equal to 2
console.log('3 != 2',3 != 2)             // true, because 3 is not equal to 2
console.log("3 == '3':",3 == '3')           // true, compare only value
console.log("3 === '3':",3 === '3')          // false, compare both value and data type
console.log("3 !== '3':",3 !== '3')          // true, compare both value and data type
console.log("3 != 3:",3 != 3)             // false, compare only value
console.log('3 !== 3:',3 !== 3)            // false, compare both value and data type
console.log('0 == false:',0 == false)         // true, equivalent
console.log('0 === false:',0 === false)        // false, not exactly the same
console.log("0 == '':",0 == '')            // true, equivalent
console.log("0 == ' ':",0 == ' ')           // true, equivalent
console.log("0 === '':",0 === '')           // false, not exactly the same
console.log('1 == true:',1 == true)          // true, equivalent
console.log('1 === true:',1 === true)         // false, not exactly the same
console.log('undefined == null:',undefined == null)  // true
console.log('undefined === null:',undefined === null) // false
console.log('NaN == NaN :',NaN == NaN)         // false, not equal
console.log('NaN === NaN :',NaN === NaN)        // false
console.log('typeof NaN :',typeof NaN)         // number

console.log("'mango'.length == 'avocado'.length",'mango'.length == 'avocado'.length)  // false
console.log("'mango'.length != 'avocado'.length",'mango'.length != 'avocado'.length)  // true
console.log("'mango'.length < 'avocado'.length",'mango'.length < 'avocado'.length)   // true
console.log("'milk'.length == 'meat'.length",'milk'.length == 'meat'.length)      // true
console.log("'milk'.length != 'meat'.length",'milk'.length != 'meat'.length)      // false
console.log("'tomato'.length == 'potato'.length",'tomato'.length == 'potato'.length)  // true
console.log("'python'.length > 'dragon'.length",'python'.length > 'dragon'.length)   // false

//Logical operator 
//&& operator
const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false
console.log('check1 : 4 > 3 && 10 > 5',check1)
console.log('check2 : 4 > 3 && 10 < 5',check2)
console.log('check3 : 4 < 3 && 10 < 5',check3)

//|| operator
const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false
console.log('check4 : 4 > 3 || 10 > 5',check4)
console.log('check5 : 4 > 3 || 10 < 5',check5)
console.log('check6 : 4 < 3 || 10 < 5',check6)
 

//Negation ! operator
let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true
console.log('check7 = 4 > 3',check7)
console.log('check8 = !(4 > 3)',check8)
console.log('isLightOn = true',isLightOn)
console.log('isLightOff = !isLightOn',isLightOff)
console.log('isMarried = !false',isMarried)

//increment ++ operator
//pre increment
let val_inc=0
console.log('val without pre increment :',val_inc)
console.log('val with pre increment :',++val_inc)

//post increment
console.log('val without post increment :',val_inc++)
console.log('val with post increment :',val_inc)

//decrement -- operator
//pre increment
let val_dec=0
console.log('val without pre decrement :',val_dec)
console.log('val with pre decrement :',--val_dec)

//post increment
console.log('val without post decrement :',val_dec--)
console.log('val with post decrement :',val_dec)

//ternary operator
let isSingle=true
isSingle
? console.log('Enjoy while you can.')
: console.log('Your beautiful days are over')

let ifSingle=false
ifSingle
? console.log('Enjoy while you can.')
: console.log('Your beautiful days are over')

let uSingle=!true
uSingle
? console.log('Enjoy while you can.')
: console.log('Your beautiful days are over')

let iSingle=!false
iSingle
? console.log('Enjoy while you can.')
: console.log('Your beautiful days are over')

let val=5
val >=5
? console.log(`${val} is greater than or equal to 5`)
: console.log(`${val} is NOT greater than or NOT equal to 5`)

let num=10
num < 10
? console.log(`${num} is less than 10`)
: console.log(`${num} is NOT less than 10`)

