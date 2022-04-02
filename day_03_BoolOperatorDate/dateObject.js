//creating time object
const now = new Date()
console.log('Date now is :',now)

//getting full year
console.log('Getting full year as Number:',now.getFullYear())

//getting month - starts from 0-Jan,1-Feb,..11-dec
console.log('Getting month as Number:',now.getMonth())

//getting date - values 1-31
console.log('Getting date as Number:',now.getDate())

//getting day - starts from 0-Sun,1-Mon,..6-Sat
console.log('Getting day as Number:',now.getDay())

//getting hours - 0-23
console.log('Getting hours as Number:',now.getHours())

//getting minutes - 0-59
console.log('Getting minutes as Number:',now.getMinutes())

//getting seconds - 0-59
console.log('Getting seconds as Number:',now.getSeconds())

//getting time - give time in milliseconds starting from January 1, 1970. It is also know as Unix time. 
console.log('Getting time as Number using now.getTime():',now.getTime())

let inSeconds=Date.now()
let timeinSeconds=new Date().getTime()
console.log('Getting time as Number using Date.now():',inSeconds)
console.log('Getting time as Number using Date.getTime():',timeinSeconds)
console.log('Comparison of two methods: inSeconds==timeinSeconds :',inSeconds==timeinSeconds)

//readable date format
console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`)