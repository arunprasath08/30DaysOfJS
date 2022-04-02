 //1 empty array
const empty_array=[]
console.log('empty_array is:',empty_array)

//2 Array with equal to or more than 5 elements
const array5Elements=['a','r','u','n','s']
console.log('array5Elements is:',array5Elements)
const arr5Ele=Array(6).fill('>than5Elemnts')
console.log('arr5Ele is:',arr5Ele)

//3 length of array
let len_empty_array=empty_array.length
let len_array5Elements=array5Elements.length
let len_arr5Ele=arr5Ele.length
console.log('length of empty array:',len_empty_array)
console.log('length of array5Elements array:',len_array5Elements)
console.log('length of arr5Ele array:',len_arr5Ele)

//4 access 1st item, middle item, last item
const array_access=['1st','2nd',3,4,5,'6th','seven']
let firstItem=array_access[0]
let midItemIdx=Math.floor(array_access.length/2)
let midItem=array_access[Math.floor(array_access.length/2)]
let lastItem=array_access[array_access.length-1]

console.log('Mid item\'s index found as:',midItemIdx)
/*
['1st','2nd', 3 , 4 , 5 , '6th']
   0    1     2   3   4    5
length 6
mid item 6/2 = 3
*/

console.log('First item:',firstItem)
console.log('Middle item:',midItem)
console.log('last item:',lastItem)

//5 mixed data types array declaration and finding length
const mixedDataTypes=[1,2.1,true,null,'mixedDataTypes',[1,2,4],[false,null,3]]
let len_mixedDataTypes=mixedDataTypes.length
console.log('length of mixed data types:',len_mixedDataTypes)

//6 itCompanies array
const itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']

//7 print array using console.log()
console.log('Array itCompanies is:',itCompanies)

//8 print number of companies in array
console.log('Number of companies in Array itCompanies is:',itCompanies.length)

//9 print first middle last company
let firstCompany=itCompanies[0]
let midCompIdx= Math.floor(itCompanies.length / 2)

console.log('Mid index of array itCompanies:',midCompIdx)

let middleCompany=itCompanies[midCompIdx]
let lastCompany=itCompanies[itCompanies.length-1]

console.log('First Company:',firstCompany)
console.log('Middle Company:',middleCompany)
console.log('last Company:',lastCompany)

//10 Print each company

let each_company=itCompanies.values()
let comp1=each_company.next().value
console.log('company 1:', comp1 ,' type of company 1 element:',typeof(comp1))
let comp2=each_company.next().value
console.log('company 2:', comp2 ,' type of company 2 element:',typeof(comp2))
let comp3=each_company.next().value
console.log('company 3:', comp3 ,' type of company 2 element:',typeof(comp3))
let comp4=each_company.next().value
console.log('company 4:', comp4 ,' type of company 2 element:',typeof(comp4))
let comp5=each_company.next().value
console.log('company 5:', comp5 ,' type of company 2 element:',typeof(comp5))
let comp6=each_company.next().value
console.log('company 6:', comp6 ,' type of company 2 element:',typeof(comp6))
let comp7=each_company.next().value
console.log('company 7:', comp7 ,' type of company 2 element:',typeof(comp7))

// console.log(typeof(each_company))

//11 Print each company in uppercase
itCompanies.forEach(upper_case)
function upper_case(item) {
        let upcase=item
        console.log('Printing company using forEach:',upcase)
}

itCompanies.map(
    Element=>{
        console.log(Element.toUpperCase())
    }
)

console.log('UpperCase of comapany',itCompanies[0].toUpperCase())
console.log('UpperCase of comapany',itCompanies[1].toUpperCase())
console.log('UpperCase of comapany',itCompanies[2].toUpperCase())
console.log('UpperCase of comapany',itCompanies[3].toUpperCase())
console.log('UpperCase of comapany',itCompanies[4].toUpperCase())
console.log('UpperCase of comapany',itCompanies[5].toUpperCase())
console.log('UpperCase of comapany',itCompanies[6].toUpperCase())

//12 Print array as sentence
console.log(itCompanies.slice(0,itCompanies.length-1).join(),' and ',itCompanies.slice(6).toString(),' are big IT companies.')
console.log(itCompanies.join(),'are big IT companies.')

//13 check for company if exists in itCompanies array
let CompanyName=prompt('Enter company to be looked up in Arrau itCompanies','Enter company name here')
if (itCompanies.includes(CompanyName)) {
    console.log(`IT Company,\'${CompanyName}\' exists in array itCompanies.`)
} else {
    console.log(`IT Company,\'${CompanyName}\' is NOT found in array itCompanies.`)
}

//14 filter companies with more than one 'o' without filter method
let val=itCompanies.values().next().value
//let len=val.length()
console.log(val, typeof(val))

let o_len=itCompanies.forEach(check_o)

// console.log(o_len)
// if (o_len.length>1) {
//     console.log('IT Companies having more than one \'o\' in their name:',company)
// }

function check_o(company) {

    let O_occurrence=company.match(/o/gi)
    if (O_occurrence!=null) {
        if (O_occurrence.length>1) {
            console.log('IT Companies having more than one \'o\' in their name:',company)
        }
    } else {
        console.log('IT Companies NOT having \'o\' in their name:',company)
    }
    
    // console.log('Company Name:',company,' \'o\' occurrences: ',O_occurrence,' Type of variable holding \'o\' occurrences: ', typeof(O_occurrence))
    // if (O_occurrence.length>1) {
    //     console.log('IT Companies having more than one \'o\' in their name:',company)
    // }
    return O_occurrence
}

//15 sorting the array

console.log('itCompanies array sorted as:',itCompanies.sort())

//16 Reverse the array

