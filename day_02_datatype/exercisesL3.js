//1
let phrase='Love is the best thing in this world. Some found their love and some are still looking for their love.'

//let split_phrase=phrase.split(' ')
//console.log('Splitting phrase as : ',split_phrase.includes(/love/gi))

let lov_cnt=phrase.match(/love/gi)
console.log('Search result of \'love\' is:',lov_cnt)
console.log('Count of word \'love\' in \'phrase\' :'+phrase+'is :',lov_cnt.length)

//2
let phrase2='You cannot end a sentence with because because because is a conjunction'

let bcoz_cnt=phrase2.match(/because/gi)
console.log('Search result of \'because\' is:',bcoz_cnt)
console.log('Count of word \'because\' in \'phrase\' :'+phrase2+'is :',bcoz_cnt.length)

//3
 let phrase3='%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.'
 
 let clean_phrase3=phrase3.replace(/[^a-z\s\.]/gi,'')
 console.log(clean_phrase3) // remaining task finding frequent word in phrase

//4
let phrase4='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let income=phrase4.match(/\d+/g)
console.log('Raw Income details from phrase:'+phrase4+' is:',income)
let parsed_sal=parseInt(income[0])
let parsed_bonus=parseInt(income[1])
let parsed_OL_course=parseInt(income[2])
console.log('Parsed Income details from phrase:',parsed_sal,parsed_bonus,parsed_OL_course)
let salary_PA=(parsed_sal*12)+parsed_bonus+(parsed_OL_course*12)
console.log('Annual income :',salary_PA)