//Exercises-Level 1
const challenge='30 Days Of JavaScript'

console.log('const variable "challenge" holds:',challenge,'length of text in variable name "challenge" is:',challenge.length)

console.log('String in variable "challenge ":'+challenge+' is changed to uppercase as:',challenge.toUpperCase())

console.log('String in variable "challenge ":'+challenge+' is changed to lowercase as:',challenge.toLowerCase())

console.log('first word of "challenge ":'+challenge+' using substr() is:',challenge.substr(0,2))

console.log('first word of "challenge ":'+challenge+' using substring() is:',challenge.substring(0,2))

console.log('sliced out phrase "challenge ":'+challenge+' using substring() is:',challenge.substring(3,challenge.length))

console.log('sliced out phrase "challenge ":'+challenge+' using substr() is:',challenge.substr(3,challenge.length))

console.log('Check to find \'Script\' in "challenge":'+challenge+' using includes() is:',challenge.includes('Script'))

console.log('Splitting string into array of individual letters - "challenge":'+challenge+' using split() is:',challenge.split(''))

console.log('Splitting string into array of individual words - "challenge":'+challenge+' using split() is:',challenge.split(' '))

const companies='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log('Splitting string\'s words into array of individual words - "companies":'+companies+' using split() is:',companies.split(', '))

console.log('replaced phrase with Python instead of JavaScript in "challenge ":'+challenge+' using replace() is:',challenge.replace('JavaScript','Python'))

console.log('character at index 15 in "challenge ":'+challenge+' is found using charAt() as :',challenge.charAt(15))

console.log('character code of J in "challenge ":'+challenge+' is found using charCodeAt() as :',challenge.charCodeAt('J'))

console.log('position of the first occurrence of \'a\' in "challenge ":'+challenge+' is found using indexOf() as :',challenge.indexOf('a'))

console.log('position of the last occurrence of \'a\' in "challenge ":'+challenge+' is found using lastIndexOf() as :',challenge.lastIndexOf('a'))

sentence='You cannot end a sentence with because because because is a conjunction'

console.log('position of the first occurrence of the word \'because\' in \''+sentence+'\' is found using indexOf() as:',sentence.indexOf('because'))

console.log('position of the last occurrence of the word \'because\' in \''+sentence+'\' is found using lastIndexOf() as:',sentence.lastIndexOf('because'))

console.log('position of the first occurrence of the word \'because\' in \''+sentence+'\' is found using search() as:',sentence.search(/because/gi))

const challenge_space=' 30 Days Of JavaScript  '

console.log('trimmed off spaces in \''+challenge_space+'\' is using trim() as:'+challenge_space.trim())

console.log('checking if \''+challenge+'\' starts with \'30\' using startsWith() method as:'+challenge.startsWith(30))

console.log('checking if \''+challenge+'\' ends with \'Script\' using endsWith() method as:'+challenge.endsWith('Script'))

console.log('all \'a\' in \''+challenge+'\' found using match() method as:'+challenge.match(/a/gi))

const word2='30 Days of'

console.log('concatenating \'30 Days of\' and \'JavaScript\'  as:'+word2.concat(' JavaScript'))

console.log('Printing \''+challenge+'\' 2 times using repeat() method as:'+challenge.repeat(2))

