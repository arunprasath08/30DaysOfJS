//1.driver age using if else
// let driver_age=prompt("Enter driver age:")
// if (driver_age>18) {
//     console.log('You are old enough to drive.')
// } else {
//     let driver_age_diff=18-driver_age
//     console.log(`Wait for the ${driver_age_diff} years before you can drive.`)
// }

//2.age comparison using if else
// let my_age=prompt("Enter your age:")
// let your_age=50
// let user_age_diff=your_age-my_age
// if (your_age>my_age) {
//     console.log(`You are ${user_age_diff} years older than me.`)
// } else {
//     console.log(`You are ${Math.abs(user_age_diff)} years younger than me.`)
// }

//3. a and b who's greater who's lesser using if else
// let a=prompt('Enter value of a for compare')
// let b=prompt('Enter value of b for compare')

// if (a>b) {
//     console.log('a is greater than b')
// } else {
//     console.log('a is less than b')
// }

//3. a and b who's greater who's lesser using ternary
// let x=prompt('Enter value of a for compare')
// let y=prompt('Enter value of b for compare')
// x>y
// ?console.log('a is greater than b')
// :console.log('a is less than b')

//4. Even number or not
let even_check=prompt('Enter number to check even/odd')
if ((even_check%2)==0) {
    console.log(`${even_check} is even number`)
} else {
    console.log(`${even_check} is odd number`)
}