import {countries} from "./countries.js";
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//1a sort the ages array to find min and max
console.log("Org array - 'ages' before sort",ages)
const ages_sorted=ages.sort()
console.log("Org array - 'ages' after sort",ages)
console.log("New array - 'ages_sorted' after sort",ages_sorted)

console.log('Min age in array',ages_sorted[0])
console.log('Max age in array',ages_sorted[ages_sorted.length-1])

//1b median age - 1 middle or 2 middle items divided by 2
const ages_median = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let startidx=Math.floor(ages_median.length/2)
console.log('middle items/items:',startidx)
if (ages_median.length%2==0) {
    let median=(ages_median[startidx-1]+ages_median[startidx])/2
    console.log(`Median of two middle items ${ages_median[startidx-1]} and ${ages_median[startidx]} is:`,median)
    
} else {
    let median=ages_median[startidx]/2
    console.log(`Median of middle item ${ages_median[startidx]} is:`,median)
}

//1c Average age - sum of sall items divided by number of items
let val = 0
const agesCpybck=[]
const agesCpyFrnt=[]
ages.forEach(sumAges)
console.log('Total of ages',val)
console.log('PUSH method:',agesCpybck)
console.log('UNSHIFT method:',agesCpyFrnt)
let avgAge=val/ages.length
console.log('Average of ages in \'ages\' array:',avgAge)


function sumAges(age,index) {
    val+=age;
    agesCpybck.push(age)
    agesCpyFrnt.unshift(age)
}

//1d Range of ages (Max minus Min)

let min_age=ages_sorted[0]
let max_age=ages_sorted[ages_sorted.length-1]
let range_age=max_age-min_age
console.log('Range of ages, Max minus Min :',range_age)

//1e Comparison of value (min - average) and (max - average)

let minMinAvg=Math.abs(min_age-avgAge)
let maxMinAvg=Math.abs(max_age-avgAge)
console.log(`(min - average)=${minMinAvg} and (max - average)=${maxMinAvg}`,)

//1f slice first 10 countries from countries.js array

const first10countries=countries.slice(0,10)

console.log('First 10 countries from countries.js array is:',first10countries,'length of new array is:',first10countries.length)

//2 middle country/countries in countries.js array

let midIdx=Math.floor(countries.length/2)
console.log('length of countries.js array is:',countries.length)
console.log('Middle index of countries.js array is:',midIdx)

if (countries.length%2==0) {
    const midCountry=countries.slice(midIdx-1,midIdx+1)
    console.log('Middle countries in countries.js array is:',midCountry)
} else {
    const midCountry=countries.slice(midIdx-1,midIdx)
    console.log('Middle country in countries.js array is:',midCountry)
}

//3 Divide countries into 2 equal arrays

if (countries.length%2==0) {
    const country1stHalf=countries.slice(0,midIdx)
    const country2ndHalf=countries.slice(midIdx,countries.length)
    console.log('First half of countries in countries.js array is:',country1stHalf)
    console.log('Second half of countries in countries.js array is:',country2ndHalf)
} else {
    countries.unshift('ChinIndAsia')
    console.log('First half of countries.js after new country insert is:',countries.slice(0,midIdx+1))
}
