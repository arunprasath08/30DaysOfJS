// Array creation
//1 using constructor
//const arry=Array ()         //const is the common way to declare array
//let arry=Array()            //let can also be used to declare array
//console.log(arry)

//2 using square brackets
//const aray=[]
let aray=[]
console.log(aray)

//creating array with values

const number_array=[1,89,54.3,23,222,0,-1,-45,0.2]
const names_array=['John','kim','nick']
const lang_array=['tamil','kannada','english','german']
const bool_array=[true,false]
const null_array=[null,null]

console.log('number_array :'+number_array+'\n names_array :'+names_array+'\n lang_array :'+lang_array+'\n bool_array :'+bool_array+'\n null_array :'+null_array)

//length of arrays

console.log('number_array :'+number_array+' length of array is:'+number_array.length+
'\n names_array :'+names_array+' length of array is:'+names_array.length+
'\n lang_array :'+lang_array+' length of array is:'+lang_array.length+
'\n bool_array :'+bool_array+' length of array is:'+bool_array.length+
'\n null_array :'+null_array+' length of array is:'+null_array.length)

//Array can have different elements with different data types

const arr_coll=[23,'array_string',true,null,
{datatype:'arrayy',Element:'dictionary'},['array','inside','array',23,0,true]]

console.log(arr_coll)
console.log(typeof(arr_coll[5]))
console.log(arr_coll[5])

//creating array using split
let array_word='ARRAY'
const split_array=array_word.split('')

console.log(array_word,split_array)

let array_country='India,Spain,Germany,Portugal,Russia,Italy'
const array_country_split=array_country.split(',')

console.log(array_country,array_country_split,array_country_split[5])

let sentence='Explore more work hard party hard,Enjoy life while you can.'
const sentence_split=sentence.split(/\W/)   //making array with only words
console.log(sentence,'\n',sentence_split)
const sentence_split2=sentence.split('')    //making array with letters
console.log(sentence,'\n',sentence_split2)  
const sentence_split3=sentence.split(' ')    //making array with individual words along with spec char
console.log(sentence,'\n',sentence_split3)  

//Accessing array elements using index
const array_index=['Japan',true,0,null,234]
console.log(array_index[0])                 //first index
console.log(array_index[1])
console.log(array_index[2])
console.log(array_index[3])
console.log(array_index[4])                 //last index

let array_index_last=array_index.length -1
console.log(array_index_last, array_index[array_index_last])

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] // List of web technologies
  
  console.log(webTechs)        // all the array items
  console.log(webTechs.length) // => to know the size of the array, which is 7
  console.log(webTechs[0])     //  -> HTML
  console.log(webTechs[6])     //  -> MongoDB
  
  let lastIndex = webTechs.length - 1
  console.log(webTechs[lastIndex]) // -> MongoDB

//Array is mutable - modifiable after declaration
const numb=[0,2,3,6,5]
console.log(numb)
numb[1]=1
numb[2]=2
numb[3]=5
numb[4]=6
console.log(numb)

const countries=['zambia','yamen','west germany','venezuela','ukraine']
let countries_len=countries.length
console.log(countries)
console.log(countries_len)
countries[2]='west indies'
console.log(countries)
countries[countries_len-1]='uganda'
console.log(countries)

//Array manipulation
//Array constructor
const newArray=Array()
console.log(newArray)

//array with 8 empty indeces allocated
const eight_array=Array(8)
console.log(eight_array)

//array created with static values
const staticVal_array=Array(8).fill(90)
console.log(staticVal_array)
console.log(eight_array.fill('hello'))
console.log(eight_array.fill(null))
console.log(eight_array.fill(0))

//concatenating array
const arr1=[1,2,3,4,5]
const arr2=[6,7,8,9,0]
console.log(arr1)
console.log(arr2)
console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))

const vegs=['radish','bean','pea','potato']
const fruits=['apple','tomato','orange','melon']
const fruitveg=vegs.concat(fruits)
console.log(vegs)
console.log(fruits)
console.log(fruitveg)

//length of array
console.log('length of fruitveg array',fruitveg.length)

//index of element found- returns index, not found- returns -1
console.log('index of pea in vegs array',vegs.indexOf('pea'))
console.log('index of melon in vegs array',vegs.indexOf('melon'))

console.log('index of pea in fruits array',fruits.indexOf('pea'))
console.log('index of melon in fruits array',fruits.indexOf('melon'))

//check if banana in fruits array

if (fruits.indexOf('banana')==-1){
    console.log('Banana is not available in fruits array ')
}else {
    console.log('Banana is available in fruits array at index',fruits.indexOf('banana'))
}
//check if tomato in fruits array
if (fruits.indexOf('tomato')==-1){
    console.log('tomato is not available in fruits array ')
}else {
    console.log('tomato is available in fruits array at index',fruits.indexOf('tomato'))
}

vegs.indexOf('radish')==-1
?console.log('Radish not available')
:console.log('Radish available')


//Last index of a repeating element
const inte=[0,4,2,1,9,0,1,2,0,34,9,4,33]
console.log('last index of 34 in array inte is:',inte.lastIndexOf(34))
console.log('last index of 0 in array inte is:',inte.lastIndexOf(0))
console.log('last index of 4 in array inte is:',inte.lastIndexOf(4))
console.log('last index of 9 in array inte is:',inte.lastIndexOf(9))

//includes - to find given element - returns true/false
const check=[80,34.2,22,true,'check',null]
let null_chk=check.includes(null)

console.log('includes NULL check in check array:',null_chk)
console.log('includes true check in check array:',check.includes(true))
console.log('includes 34.2 check in check array:',check.includes(34.2))
console.log('includes \'check\' check in check array:',check.includes('check'))  //case sensitive for string
console.log('includes \'Check\' check in check array:',check.includes('Check'))

console.log('includes check for C lang in webTechs array',webTechs.includes('C'))
console.log('includes check for HTML lang in webTechs array',webTechs.includes('HTML'))
console.log('includes check for Javascript lang in webTechs array',webTechs.includes('Javascript')) //case sensitive

//checking if array is Array returns- True if Array False if not Array

let webTechs_arrayCheck=Array.isArray(webTechs)

console.log('Check if webTechs is Array():',webTechs_arrayCheck)                           //declared as Array
console.log('Check if fruitveg is Array():',Array.isArray(fruitveg))                       //derived as Array from 2 arrays
console.log('Check if staticVal_array is Array():',Array.isArray(staticVal_array))         //Static values array
console.log('Check if webTechs_arrayCheck is Array():',Array.isArray(webTechs_arrayCheck)) //is a boolean value

//converting array to string - converts array to string by default with comma

console.log('Converting \'check\' array to string:',check.toString())  //instance of check is used to create new object
console.log('check:',check)                                            //original array is preserved

console.log('Converting \'webTechs\' array to string:',webTechs.toString())

/*joining array elements - converts array to string
by default with comma, but any argument passed in 
join will be used*/

const ar1=[true,false,80,2.1,'array']
console.log('joining ar1 using default:',ar1.join()) //joining using default parameter
console.log('joining ar1 using space:',ar1.join(' ')) //joining using space
console.log('joining ar1 using space:',ar1.join(' # ')) //joining using space

console.log('joining webTechs using ,',webTechs.join(' , '))

//slice a array-starting and ending position-ending position is not included in result
const num_series=[1,2,3,4,5,6,7]
console.log('num_series array sliced without start stop index',num_series.slice())              //copies whole array
console.log('num_series array sliced from 0th index and No stop index',num_series.slice(0))     //copies whole array
console.log('num_series array sliced from 0th index to 5th index',num_series.slice(0,5))        //copies elements from 0 till 4th index
console.log('num_series array sliced from 1st index to 5th index',num_series.slice(1,5))        //copies elements from 1 till 4th index
console.log('num_series array sliced from 0th index to length of array',num_series.slice(0,num_series.length))  //copies elements from 0 till length of array

//splice a array-takes 3 params-start position,number of items to remove,items to be added
const numlist=[0,1,2,3,4,5,6,7,8]

console.log('spliced numlist without any param from 0th index:',numlist.splice())  //removes all elemnts
console.log(numlist)
//console.log('spliced numlist with 0 as start position:',numlist.splice(0))  //copies all elemnts
//console.log('spliced numlist with 0 as start position and 1 as number of items to be removed:',numlist.splice(0,1))  //
console.log('spliced numlist with 0 as start position and 1 as number of items to be removed and 9 as item to be added:',numlist.splice(0,1,9))  //uses 1st param to identify position,2nd param to remove number of elements to be removed 3rd param to replace the elements removed
console.log(numlist)

const numlist2=[0,1,2,3,4,5,6,7,8]
console.log('before splice:',numlist2)
numlist2.splice(2,3,'a','b','c') //splicing the array from index 2, 3 elements are removed and 3 elements are updated in their place
console.log('after splice:',numlist2)

//adding items to array using push - appends the new element to end of array
const push_array=[2,4.1,true,'arun',null]
console.log('Length of push_array :',push_array.length)
console.log('push_array contains :',push_array)
push_array.push('prasath')
console.log('Length of push_array :',push_array.length)
console.log('push_array contains :',push_array)

//removing items from array using pop

push_array.pop()
console.log('after pop is done with default last element removed:',push_array)

push_array.pop('arun')     //given element removal not possible, always last element of array removed
console.log('after pop is done for given element and removed:',push_array)

const fruit_array=['jackfruit','melon','pine','apple']
console.log('fruit_array before push:',fruit_array)
fruit_array.push('raspberry')
console.log('fruit_array after push for raspberry:',fruit_array)
fruit_array.pop()
console.log('fruit_array after pop for last element - raspberry:',fruit_array)

//removing elements from beginning of array - using shift
const shift_array=['a','r','u','n']
console.log('shift_array before shift for first element:',shift_array)
shift_array.shift()
console.log('shift_array after shift for first element:',shift_array)

//adding element from beginning - using unshift
const unshift_array=['r','a','s','a','t','h']
console.log('unshift_array before unshift for first element:',unshift_array)
unshift_array.unshift('p')
console.log('unshift_array after unshift for first element:',unshift_array)

//reversing an array
const rev_array=['h','t','a','s','a','r','p']
console.log('rev_array before reverse:',rev_array)
rev_array.reverse()
console.log('rev_array after reverse:',rev_array)

//sorting an array
const sort_array=['a','r','u','n']
console.log('sort_array before sort:',sort_array)
sort_array.sort()
console.log('sort_array after sort:',sort_array)
console.log('sort_array after reverse:',sort_array.reverse())

//array of array - array can store different data types including array itself

const arrofarr=[[1,2,3],[1.2,1.3,1.4],[true,false],[null,null],['a','ru','n']]
console.log('array of arrays:',arrofarr)
console.log('length of array of arrays arrofarr:',arrofarr.length)
const combo_array=[fruits,vegs]
console.log('Combo of fruits and vegs array:',combo_array)
console.log('Accessing array of array elements using index - index 1:',combo_array[1])
console.log('Accessing array of array elements using index - index 0:',combo_array[0])
