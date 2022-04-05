//1 accessing 2 separate .js files in one main.js file
import {countries} from "./countries.js";
import {webTechs} from "./web_techs.js";

console.log('countries.js file contents',countries)
console.log('web_techs.js file contains',webTechs)

//2 remove spec char,change to array and get word count
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//const words=text.split(/\W+/g)             //to split words and make an array- didnt work for last dot(.)
const words=text.replace(/[.,]/g,'').split(/\W+/g)
console.log('text split after removing words from spec char:',words)
// console.log(words)
console.log('No. of words in text after removing words from spec char:',words.length)

//3 shopping card add, remove, edit items
//3a add 'Meat' in beginning of cart if not added already

const shoppingCart_Meat = ['Milk', 'Coffee', 'Tea', 'Honey']

if (shoppingCart_Meat.includes('Meat')){
    console.log("'Meat' is part of shoppingCart.")
}
else {
    shoppingCart_Meat.unshift('Meat')
    console.log('shoppingCart after adding "Meat":',shoppingCart_Meat)
}

//3b add 'Sugar' in end of cart if not added already

const shoppingCart_Sugar = ['Milk', 'Coffee', 'Tea', 'Honey']

if (shoppingCart_Sugar.includes('Sugar')){
    console.log("'Sugar' is part of shoppingCart.")
}
else {
    shoppingCart_Sugar.push('Sugar')
    console.log('shoppingCart after adding "Sugar":',shoppingCart_Sugar)
}

//3c remove 'Honey' if you are allergic to honey

const shoppingCart_Honey = ['Milk', 'Coffee', 'Tea', 'Honey']
let honey_allergic=prompt('Are you allergic to Honey? Y/N')

if (honey_allergic==='Y') {
    console.log('Index of honey:',shoppingCart_Honey.indexOf('Honey'))
    const set1=shoppingCart_Honey.slice(0,shoppingCart_Honey.indexOf('Honey'))
    console.log('Set 1:',set1)
    const set2=shoppingCart_Honey.slice(shoppingCart_Honey.indexOf('Honey')+1,shoppingCart_Honey.length)
    console.log('Set 2:',set2)
    const finalresult=set1.concat(set2)
    console.log('shoppingCart array if you are allergic to Honey:',finalresult)
} else {
    console.log('shoppingCart array if you are NOT allergic to Honey:',shoppingCart_Honey)
}

//3d modify Tea to Green Tea

const shoppingCart_Tea = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log("Array Before modifying 'Tea' as 'Green tea':",shoppingCart_Tea)

let TeaIdx=shoppingCart_Tea.indexOf('Tea')
console.log('Index of the element to be altered:',TeaIdx)
//console.log(shoppingCart_Tea[shoppingCart_Tea.indexOf('Tea')])  --- to check element in array using the index of 'Tea'
shoppingCart_Tea[TeaIdx]='Green Tea'
console.log("Array after modifying 'Tea' as 'Green tea':",shoppingCart_Tea)

//4 Ethiopia in countries.js array check and print/add
console.log('Ethiopia check using includes():',countries.indexOf('Ethiopia'))

if (countries.indexOf('Ethiopia')==-1) {
    countries.unshift('Ethiopia')    
} else {
    let result=countries[countries.indexOf('Ethiopia')].toUpperCase()
    console.log(`${result} exists in the Countries.js array.`)
}

//5 Sass in webTechs.js array check and print/add
console.log('Sass check using includes():',webTechs.indexOf('Sass'))

if (webTechs.indexOf('Sass')==-1) {
    webTechs.unshift('Sass') 
    console.log('webTechs.js array after adding "Sass" to the array',webTechs)   
} else {
    let result=webTechs[webTechs.indexOf('Sass')]
    console.log(`${result} is a CSS preprocess.`)
}

//6 Concatenate two array variables and store in new variable
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullstack=frontEnd.concat(backEnd)

console.log('Concatenated array consisting of frontend and backend elements:',fullstack)

