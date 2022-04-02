//1
console.log('Printing the quote : ','The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

//2
console.log('Printing the quote : ','\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

//3
let str_num='10'
let int_num=10
console.log('typeof str_num: ',str_num,' ',typeof str_num)
console.log('typeof int_num: ',int_num,' ',typeof int_num)

console.log('Comparison b/w typeof str_num and typeof int_num before casting:',typeof str_num == typeof int_num)
 
let cast_str_num=parseInt(str_num)
console.log('typeof str_num after cast: ',cast_str_num,' ',typeof cast_str_num)

console.log('Comparison b/w typeof str_num and typeof int_num after casting:',typeof cast_str_num == typeof int_num)

//4
let str_flt=parseFloat('9.8')
let int_numb=10
console.log('str_flt: ',str_flt)
console.log('int_numb: ',int_numb)

console.log('Comparison b/w str_flt and int_numb before:', str_flt == int_numb)
 
let exact_str_flt=Math.ceil(str_flt)
console.log('str_flt after : ',exact_str_flt)

console.log('Comparison b/w str_flt and int_numb after:', exact_str_flt == int_numb)

//5
console.log('Checking if \'on\' present in \'python\' and \'jargon\' : python: ','python'.includes('on'),'jargon: ','jargon'.includes('on'))

//6
let phrase='I hope this course is not full of jargon.'

console.log('Checking if \'jargon\' present in \'phrase\' : \''+phrase+'\' as : ', phrase.includes('jargon'))

//7 random number b\w 0-100
let rndNum=Math.random()*101
let parseRndNum=parseInt(rndNum)

console.log('random number:',rndNum,'\n parsed random number:',parseRndNum)

//8 random number b\w 50-100
let RndNum_50_100=(Math.random()*(101-50)+50)
let parseRndNum_50_100=parseInt(RndNum_50_100)

console.log('random number b/w 50 - 100:',parseRndNum_50_100)

//9 random number b\w 0-255
let RndNum_0_255=Math.random()*256
let parseRndNum_0_255=parseInt(RndNum_0_255)

console.log('random number b/w 0 - 255:',parseRndNum_0_255)

//10- accessing chars in 'JavaScript'
const string='JavaScript'
let idx=parseInt(Math.random()*(string.length+1))
console.log('random value for index : ',idx)
console.log('Random char in \''+string+'\' is:',string[idx])

//11-Print pattern

console.log('1\t1\t1\t1\t1\t\n2\t1\t2\t4\t8\t\n3\t1\t3\t9\t27\t\n4\t1\t4\t16\t64\t\n5\t1\t5\t25\t125')

//console.log(1,'\t',1**0,'\t',1**1,'\t',1**2,'\t',1**3,'\t\n',2,'\t',2**0,'\t',2**1,'\t',2**2,'\t',2**3,'\t\n',3,'\t',3**0,'\t',3**1,'\t',3**2,'\t',3**3,'\t\n',4,'\t',4**0,'\t',4**1,'\t',4**2,'\t',4**3,'\t\n',5,'\t',5**0,'\t',5**1,'\t',5**2,'\t',5**3) // did not work

console.log(1+'\t'+1**0+'\t'+1**1+'\t'+1**2+'\t'+1**3+'\t\n'+2+'\t'+2**0+'\t'+2**1+'\t'+2**2+'\t'+2**3+'\t\n'+3+'\t'+3**0+'\t'+3**1+'\t'+3**2+'\t'+3**3+'\t\n'+4+'\t'+4**0+'\t'+4**1+'\t'+4**2+'\t'+4**3+'\t\n'+5+'\t'+5**0+'\t'+5**1+'\t'+5**2+'\t'+5**3)

//12-substr to slice out 'because' words

let phrase2='You cannot end a sentence with because because because is a conjunction'

let fidx=phrase2.indexOf('because')
let lidx=phrase2.lastIndexOf('because')

console.log(fidx,lidx)
let sliced_phrase=phrase2.substr(fidx,phrase2.length-lidx)
console.log('sliced out \'because\' from phrase2 : '+phrase2+' as :',sliced_phrase)

