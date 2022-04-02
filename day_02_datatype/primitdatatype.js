//Primitive(immutable) datatypes and comparison
//string comparison
/*
array variable is assigned to values
assignment done based on values(actual data values) assigned to variable name
comparison happens based on values(actual data values)
*/
let day1='data'
let day2='datatype'

console.log('day1 -data vs day 2 -datatype',day1==day2)

//numeric comparison
let num1=34
let num2=34
console.log('num1 34 vs num2 34',num1==num2)

//boolean comparison
let light1= true
let light2=false

console.log('light1 -true vs light2 -false',light1==light2)

//Non-Primitive(mutable) datatypes and comparison
//string comparison
let ar1=[1,2,3]
let ar2=[1,2,3]

console.log('ar1 vs ar2',ar1==ar2)

//array mutation-changes in variable after creation
ar1[0]=-32

console.log(ar1)

/*
array variable is assigned to another variable
assignment done based on reference(address location of variable)
comparison happens based on index(address location of variable)
*/
let ar3=[-45,0,45]
let ar4=ar3

console.log('ar3 vs ar4',ar3==ar4)
console.log('ar4 vs ar3',ar4==ar3)

let usr1={
    name:'arun',
    age:'28',
    job:'IT pro'
    }

    let usr2={
        name:'arun',
        age:'28',
        job:'IT pro'
        }
console.log('JSON- usr1 vs usr2',usr1==usr2)

let usr3={
    name:'arun',
    age:'28',
    job:'IT pro'
    }

    let usr4=usr3
    console.log('JSON- usr1 vs usr2',usr1==usr2)

console.log('JSON- usr3 vs usr4',usr3==usr4,'\nJSON- usr4 vs usr3',usr4==usr3)

//Declaring Number types

let age=28           //age in years
const pi=3.14        //pi is geometry constant
const gravity=9.8    //value of gravity m/s2
let mass=75          //mass in kgs
const boil_point=100 //boiling point of H2O in oC

console.log(age,pi,gravity,mass,boil_point)

//Math objects
//Math object
let PI=Math.PI
console.log('value of Mathematical constant PI is:',PI)

//Math.round()
let round_PI=Math.round(PI)
console.log('Round of value of PI is:',round_PI)

let round_gravity=Math.round(gravity)
console.log('Round of value of gravity is:',round_gravity)

let random_num=Math.random()
console.log('Random number generated b/w 0-0.999999 is',random_num)

let rand_0_10=Math.random() * 11
let rand_0_10_round=Math.round(rand_0_10)
let rand_0_10_floor=Math.floor(rand_0_10)
console.log('Random number generated b/w 0-10 is',rand_0_10,'Its rounded value is:',rand_0_10_round,'\nIts floor value is:',rand_0_10_floor)

//Math.floor()
let floor_PI =Math.floor(Math.PI)
console.log('Floor value of PI is:',floor_PI)

//Math.ceil()
let ceil_PI=Math.ceil(Math.PI)
console.log('Ceil value of PI is:',ceil_PI)

//Math.min()
let min_num=Math.min(0, -4, 45, 32, 4)
console.log('Minimum value of number series:',min_num)

//Math.max()
let max_num=Math.max(0, -4, 45, 32, 4)
console.log('Maximum value of number series:',max_num)

//Math.absolute()
let abs=Math.abs(-52.2)
console.log('Absolute value of -52.2:',abs)

//Math.square root
let sqr_rt=Math.sqrt(36)
console.log('Square root of 27 is:',sqr_rt)

//Math.power
let power=Math.pow(25,2)
console.log('25 raised to power 2 is:',power)

//Math.exp()
let exp=Math.E
console.log('Value of E is:',exp)
console.log('Value of E^x, x is a number 2:',Math.exp(2))

//logrithm
let log2=Math.log(2)
let log10=Math.log(10)
console.log('log value of 2 is:',log2)
console.log('log value of 10 is:',log10)

//Natural Logrithm
let NLlog2=Math.LN2
let NLlog10=Math.LN10
console.log('Natural log value of 2 is:',NLlog2)
console.log('Natural log value of 10 is:',NLlog10)

//Trignometry
console.log('Sin 0 degree is:',Math.sin(0))
console.log('Cos 60 degree is:',Math.cos(60))

//strings
let space=' '
let firstname='Arunprasath'
let lastname='Suresh'
let country='India'
let city='Coimbatore'
let language='JavaScript'
let job='IT Pro'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

//string concatenation
let fullname=firstname+space+lastname
console.log(fullname)

let personInfoOne=fullname+'.I am '+age+'.I live in '+country+','+city+'.'
console.log(personInfoOne)

//long literal strings
const paragraph = "My name is "+fullname+". I live in "+country+","+city+".I am a "+job+" and I love teaching.\
 I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)

//escape sequences in strings

console.log('I am enjoying the 30 Days Of JavaScript challenge.\n for real !') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

//template literals

let x=23
let y=43
console.log(`Sum of ${x} and ${y} is ${x+y}`)

//ES6 - String interpolation method
let personInfoTwo = `I am ${fullname}. I am ${age}. I live in ${country}.` 
let personInfoThree = `I am ${fullname}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

console.log(`${y} is greater than ${x} : ${y>x}`)

//string methods
//length
console.log(`length of ${day1}:`,day1.length)
console.log(`length of ${firstname}:`,firstname.length)

//accessing characters in string
let char1=firstname[0]
let lastchar=firstname[firstname.length-1]

console.log('first char of '+firstname+' is:', char1)
console.log('last char of '+firstname+' is:', lastchar)

//toUpperCase, toLowerCase
console.log('uppercase of '+firstname+' is:',firstname.toUpperCase())
console.log('lowercase of '+firstname+' is:',firstname.toLowerCase())

/*
substr - 1st argument is starting index, 
2nd argument is number of char to be sliced from starting index
*/
let substr_city=city.substr(3,5)
console.log(city.substr(0,6))
console.log('substr of '+city+' sliced untill 5 chars from 3rd char is',substr_city)

/*
substring - 1st argument is starting index,
2nd argument is stopping index
*/
let substring_city=city.substring(3,5)
console.log(city.substring(0,6))
console.log('substring of '+city+' sliced from 3rd char to 5th char is:',substring_city)

//split
let split_country=country.split()
let split_country_i=country.split('I')
let split_personInfoOne= personInfoOne.split()

console.log('Default Split of ',country,' is:',split_country)
console.log('Split of ',country,' based on char i is ',split_country_i)
console.log('Split of ',country,'letter by letter is: ',country.split(''))
console.log('split of personInfoOne is ',split_personInfoOne)
console.log('split of personInfoOne based on space is :',personInfoOne.split(' '))
console.log('split of personInfoOne based on . is :',personInfoOne.split('.'))

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//trim - trim spaces in beginning and ending of string
let string='  30 days of JS  '
let string2=' 30 days of Java Script '
console.log('trimmed off version of \'',string,'\' is :'+string.trim())
console.log('trimmed off version of \'',string2,'\' is :'+string2.trim(' '))

/*
includes- searches keyword in string 
and returns boolean value
its case-sensitive
*/

console.log('is \'day\' in \''+string+'\'?',string.includes('day'))
console.log('is \'Days\' in \''+string+'\'?',string.includes('Days'))
console.log('is \'Java\' in \''+language+'\'?',language.includes('Java'))
console.log('is \'script\' in \''+language+'\'?',language.includes('script'))

/*
replace- searches first argument in string 
and if found replaces with second argument
its case sensitive
*/
console.log('replaced \'JS\' with \'PY\' in '+string+' as:',string.replace('JS','PY'))
console.log('replaced \'JAVA SCRIPT\' with \'PYTHON\' in '+string2+' as:',string2.replace('JAVA SCRIPT','PYTHON')) //did not work due to case sensitivity
console.log('replaced \'Java Script\' with \'PYTHON\' in '+string2+' as:',string2.replace('Java Script','PYTHON'))
console.log('replaced \'Pro\' with \'Professional\' in '+job+' as:',job.replace('Pro','Professional'))

//charAt
console.log('Character at index 0 of '+city+' is:',city.charAt(0))
console.log('Character at index n-1(last char) of '+city+' is:',city.charAt(city.length-1))

//charCodeAt
console.log('Character code(ASCII) at index 0 of '+city+' is:',city.charCodeAt(0))
console.log('Character code(ASCII) at index n-1(last char) of '+city+' is:',city.charCodeAt(city.length-1))

//indexOf - case sensitive - returns first index of char
console.log('First Index of Character 3 in '+string+' is:',string.indexOf('3'))
console.log('First Index of Character o in '+string+' is:',string.indexOf('o'))
console.log('First Index of Characters \'Days\' in '+string+' is:',string.indexOf('Days'))

//lastIndexOf - case sensitive - returns last index of char
let string3 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log('Last Index of Character Java in \''+string3+'\' is:',string3.lastIndexOf('Java'))
console.log('Last Index of Character love in \''+string3+'\' is:',string3.lastIndexOf('love'))
console.log('Last Index of Characters \'Days\' in '+string3+' is:',string3.lastIndexOf('I'))

//concat
let days='28'
console.log(days.concat("days","of","learning"))
let land = 'In'
console.log(land.concat("dia"))

//startsWith - takes argument and checks start of string
let string4 = 'Love is the best to in this world'
console.log(string4+'. starts with \'lov\'?',string4.startsWith('lov'))
console.log(string4+'. starts with \'love\'?',string4.startsWith('love'))
console.log(string4+'. starts with \'Love\'?',string4.startsWith('Love'))

console.log(country+'. starts with \'In\'?',country.startsWith('In'))
console.log(country+'. starts with \'Ind\'?',country.startsWith('Ind'))
console.log(country+'. starts with \'ind\'?',country.startsWith('ind'))

//endsWith - takes argument and checks start of string
console.log(string4+'. ends with \'wor\'?',string4.endsWith('wor'))
console.log(string4+'. ends with \'World\'?',string4.endsWith('World'))
console.log(string4+'. ends with \'world\'?',string4.endsWith('world'))

console.log(country+'. ends with \'Ia\'?',country.endsWith('Ia'))
console.log(country+'. ends with \'Dia\'?',country.endsWith('Dia'))
console.log(country+'. ends with \'dia\'?',country.endsWith('dia'))

//search - searches a string or regex pattern and returns index of first match

console.log('search of \'love\' in \''+string4+'\' is:',string4.search('love'))
console.log('search of \'Love\' in \''+string4+'\' is:',string4.search('Love'))
console.log('search of \'javascript\' in \''+string4+'\' is:',string4.search(/javascript/gi))
console.log('search of \'BEST\' in \''+string4+'\' is:',string4.search(/BEST/gi))

//match - searches a string or regex pattern and returns array if match found if no match returns null
//regular expression pattern starts with / sign and ends with / sign.
let word = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive

let string5 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log('match in \''+string5+'\' for \'love\' is:',string5.match('love'))

console.log('match in \''+string5+'\' for \''+patternTwo+'\' is:',string5.match(patternTwo))

let cnt=string5.match(patternTwo)
console.log(cnt.length)

//extracting numbers from text
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log('match in \''+txt+'\' for \''+regEx+'\' is:',txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log('match in \''+txt+'\' for \''+regEx+'\' is:',txt.match(/\d+/g)) // ["2019", "30", "2020"]

//repeat - takes number as argument and repeats the string a number of times

console.log('repeat of \''+word+'\' number of times is:',word.repeat(20))

//checking data types

console.log('\'arunprasath\'',typeof 'arunprasath')  // string
console.log('firstname ',firstname,typeof firstname)      // string
console.log('10 ',typeof 10)             // number
console.log('3.14 ',typeof 3.14)           // number
console.log('true ',typeof true)           // boolean
console.log('false ',typeof false)          // boolean
console.log('NaN ',typeof NaN)            // number
console.log('job ',job,typeof job)            // undefined
console.log('undefined ',typeof undefined)      // undefined
console.log('null ',typeof null)           // object

//changing data type-Casting
//string to int
//parseInt
let num='23'
let num_parseInt=parseInt(num)
console.log('number string \''+num+'\' converted to Integer using parseInt() as :',num_parseInt)
//Number
let num_Number=Number(num)
console.log('number string \''+num+'\' converted to Integer using Number() as :',num_Number)
//+sign
let num_plusSign=+num
console.log('number string \''+num+'\' converted to Integer using + sign as :',num_plusSign)

//string to Float
//parseFloat
let float_num='3.14'
let float_num_parseFloat=parseFloat(float_num)
console.log('float number string \''+float_num+'\' converted to float using parseFloat() as :',float_num_parseFloat)
//Number
let float_num_Number=Number(float_num)
console.log('float number string \''+float_num+'\' converted to float using Number() as :',float_num_Number)
//+sign
let float_num_plusSign=+float_num
console.log('float number string \''+float_num+'\' converted to float using + sign as :',float_num_plusSign)

//float to Int
//parseInt
let float_numb=9.81
let float_numb_parseInt=parseInt(float_numb)
console.log('float number '+float_numb+' converted to Integer using parseInt() as :',float_numb_parseInt)