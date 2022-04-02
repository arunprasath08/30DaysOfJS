//1
let firstName='ARUNPRASATH'
let lastName='SURESH'
let country='India'
let city='Coimbatore'
let age=28
let isMarried=false
let year=2022
console.log('typeof firstName',typeof firstName)
console.log('typeof lastName',typeof lastName)
console.log('typeof country',typeof country)
console.log('typeof city',typeof city)
console.log('typeof age',typeof age)
console.log('typeof isMarried',typeof isMarried )
console.log('typeof year',typeof year)

//2
let ten='10'
console.log("type of '10' vs 10 comparison",typeof '10'===typeof 10)

//3
let parseInt_9Point8=parseInt('9.8')
console.log("parseInt('9.8')",parseInt_9Point8)
console.log("parseInt('9.8') vs 10 comparison",parseInt_9Point8===10)

//4
console.log(4===4,-5===-5)
console.log('time'==='time')
console.log(true===true)

console.log(4!==4,-5!==-5,undefined!==undefined,null==='')
console.log('tim'==='')
console.log(NaN===NaN)

//5
console.log('4 > 3',4 > 3)        //true
console.log('4 >= 3',4 >= 3)      //true
console.log('4 < 3',4 < 3)        //false
console.log('4 <= 3',4 <= 3)      //false
console.log('4 == 4',4 == 4)      //true
console.log('4 === 4',4 === 4)    //true
console.log('4 != 4',4 != 4)      //false
console.log('4 !== 4',4 !== 4)    //false
console.log("4 != '4'",4 != '4')  //false
console.log("4 == '4'",4 == '4')  //true
console.log("4==='4'",4 === '4')  //false
console.log("'python'.length vs 'jargon'.length falsy comparison ('python'.length !== 'jargon'.length) :",'python'.length !== 'jargon'.length) //false

//6
console.log('4 > 3 && 10 < 12',4 > 3 && 10 < 12)        //true
console.log('4 > 3 && 10 > 12',4 > 3 && 10 > 12)        //false
console.log('4 > 3 || 10 < 12',4 > 3 || 10 < 12)        //true
console.log('4 > 3 || 10 > 12',4 > 3 || 10 > 12)        //true
console.log('!(4 > 3)',!(4 > 3))                        //false
console.log('!(4 < 3)',!(4 < 3))                        //true
console.log('!(false)',!(false))                        //true
console.log('!(4 > 3 && 10 < 12)',!(4 > 3 && 10 < 12))  //false
console.log("!(4 > 3 && 10 > 12)",!(4 > 3 && 10 > 12))  //true
console.log("!(4 === '4')",!(4 === '4'))                //true
console.log("There is no 'on' in both dragon and python:",!('dragon'.includes('on') && 'python'.includes('on'))) //false

//7
let now=new Date()

console.log('What is the year today?',now.getFullYear())
console.log('What is the month today as a number?',now.getMonth()+1)
console.log('What is the date today?',now.getDate())
console.log('What is the day today as a number?',now.getDay())
console.log('What is the hours now?',now.getHours())
console.log('What is the minutes now?',now.getMinutes())


// second=1000*60
// minute=second*60
// 1 second=1000 ms *60
// No of second in Date.now()=date.now()/1000*60

console.log('Number of seconds elapsed from January 1, 1970 to now.using now.getTime()',Math.round(now.getTime()/(1000*60)))
console.log('Number of seconds elapsed from January 1, 1970 to now.using Date.now()',Math.round(Date.now()/(1000*60)))