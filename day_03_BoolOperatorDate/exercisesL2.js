// console.log(typeof(2))
//1 Area of triangle
// let base=prompt('Enter base')
// let height=prompt('Enter height')

// let area=(base*height)/2
// console.log('base value entered for triangle:',base,'data type of base value entered:',typeof(base))
// console.log('height value entered for triangle:',height,'data type of height value entered:',typeof(height))
// console.log('Area of triangle:',area,'data type of area found is:',typeof(area))

// //2 perimeter of triangle
// let side_a=parseInt(prompt('Enter side a'))
// let side_b=parseInt(prompt('Enter side b'))
// let side_c=parseInt(prompt('Enter side c'))

// let perimeter=side_a+side_b+side_c
// console.log('side a entered for triangle:',side_a,'data type of side a value entered:',typeof(side_a))
// console.log('side b entered for triangle:',side_b,'data type of side b value entered:',typeof(side_b))
// console.log('side c entered for triangle:',side_c,'data type of side c value entered:',typeof(side_c))
// console.log('perimeter of triangle:',perimeter,'data type of perimeter value found is:',typeof(side_c))

// //3 Area/Perimeter of rectangle 
// let length=prompt('Enter length')
// let width=prompt('Enter width')

// let area_rectangle=(length*width)
// let perimeter_rectangle=(parseInt(length)+parseInt(width))*parseInt(2)
// console.log('length value entered for rectangle:',length,'data type of length value entered:',typeof(length))
// console.log('width value entered for rectangle:',width,'data type of width value entered:',typeof(width))
// console.log('Area of rectangle:',area_rectangle,'data type of area found is:',typeof(area_rectangle))
// console.log('Perimeter of rectangle:',perimeter_rectangle,'data type of area found is:',typeof(perimeter_rectangle))

//4 area/circumference of a circle
// let radius=prompt('Enter radius')

// let area_circle=Math.PI*(radius**2)
// let circumference_circle=Math.PI*(radius)*parseInt(2)
// console.log('Radius value entered for circle:',radius,'data type of radius value entered:',typeof(radius))
// console.log('Area of circle:',area_circle,'data type of area found is:',typeof(area_circle))
// console.log('circumference of circle:',circumference_circle,'data type of circumference found is:',typeof(circumference_circle))


// //5 x-intercept and y-intercept of y = 2x -2
// let x=prompt('Enter value of x')
// //let y=(parseInt(2)*parseInt(x))-2
// let y_intercept=(2*x)-2
// console.log('y-intercept of x equation y = 2x -2(',x,',',y_intercept,')')

// let y=prompt('Enter value of y')
// //let y=(parseInt(2)*parseInt(x))-2
// let LHS= parseInt(y)+(2)
// let x_intercept=LHS/2
// console.log(LHS)
// console.log('x-intercept of y equation y = 2x -2(',x_intercept,',',y,')')
// let slope_m_equ1=(y-y_intercept)/(x_intercept-x)
// console.log('slope of equ1:',slope_m_equ1)


// //6 m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let x1=2
// let y1=2
// let x2=6
// let y2=10
// let slope_m_equ2=(10-2)/(6-2)
// console.log('Value of m for equation m = (y2-y1)/(x2-x1)',slope_m_equ2)

// //7 Comparison of slope m between y = 2x -2 and m = (y2-y1)/(x2-x1)
// console.log('Comparison of slope m between y = 2x -2 and m = (y2-y1)/(x2-x1)',slope_m_equ1===slope_m_equ2)

//8 what x value y is 0 for equation y = x2 + 6x + 9
// let x_equ3=prompt('x value for equation y = x2 + 6x + 9')

// let y=(x_equ3**2)+(6*x_equ3)+9
// console.log(y,typeof(y))
// console.log(`Value of y for equation y = x2 + 6x + 9 when value of x :${x_equ3} is ${y}`)

// y===0
// ? console.log(`Value of y is ${y} when x is ${x_equ3}`)
// : console.log(`Value of y is NOT Zero and is ${y} when x is ${x_equ3}`)

// let numOne = 4
// let numTwo = 3
// let sum = numOne + 3
// console.log(numOne,typeof(numOne), numTwo,typeof(numTwo), sum,typeof(sum))

//9 pay of the person
// let hrs_worked=prompt('Enter number of hours worked')
// let pay_per_hr=prompt('Enter pay per hour')

// console.log(`Total pay for given number of hours - ${hrs_worked} :`,hrs_worked*pay_per_hr)
// let hrs_in_week=24*7
// console.log('No of hours in week',hrs_in_week)
// console.log('Weekly earning is',hrs_in_week*pay_per_hr)

//10 Name length check
// let full_name=prompt('Enter your name','FULL NAME')

// let name_len=full_name.length

// name_len>7
// ?console.log(`Your Name :${full_name}  is long`)
// :console.log(`Your Name :${full_name} is short`)

//11 first name vs family name length compare
// let first_name='Arunprasath'
// let last_name='suresh'
// first_name.length>last_name.length
// ?console.log(`Your first name, ${first_name} is longer than your family name, ${last_name}`)
// :console.log(`Your first name, ${first_name} is Shorter than your family name, ${last_name}`)

//12 Age difference 
// let my_age=250
// let your_age=25

// let age_dif=my_age-your_age
// age_dif>0
// ?console.log(`I am ${age_dif} years older than you.`)
// :console.log(`I am ${Math.abs(age_dif)} years younger than you.`)

//13 Driving legal age
// let usr_age=prompt('Enter your age')
 let now=new Date()
// let usr_age_dif=now.getFullYear()-usr_age
// let wait_time=18-usr_age_dif

// usr_age_dif>18
// ?console.log(`You are ${usr_age_dif}.You are old enough to drive.`)
// :console.log(`You are ${usr_age_dif}.You will be allowed to drive after ${wait_time} years.`)

//14
let year=prompt('Enter number of years')

let sec_year=60*60*24*365

console.log('Seconds in year',sec_year)
console.log(`Seconds in ${year} years:`,sec_year*year)

//15 human readable time format

console.log(`${now.getFullYear()}-${('0'+(now.getMonth()+1)).slice(-2)}-${('0'+now.getDate()).slice(-2)} ${('0'+now.getHours()).slice(-2)}:${('0'+now.getMinutes()).slice(-2)}`)
console.log(`${('0'+now.getDate()).slice(-2)}-${('0'+(now.getMonth()+1)).slice(-2)}-${now.getFullYear()} ${('0'+now.getHours()).slice(-2)}:${('0'+now.getMinutes()).slice(-2)}`)
console.log(`${('0'+now.getDate()).slice(-2)}/${('0'+(now.getMonth()+1)).slice(-2)}/${now.getFullYear()} ${('0'+now.getHours()).slice(-2)}:${('0'+now.getMinutes()).slice(-2)}`)