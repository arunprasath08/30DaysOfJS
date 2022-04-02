//1 code which can give grades to students according to theirs scores
let mark=prompt('Enter student mark for grade')

if (mark >= 80 && mark <=100) {

    console.log('Student Grade: A')

} 
else if(mark >= 70 && mark <=79){

    console.log('Student Grade: B')
    
}
else if(mark >= 60 && mark <=69){

    console.log('Student Grade: C')
    
}
else if(mark >= 50 && mark <=59){

    console.log('Student Grade: D')
    
}
else{
    console.log('Student Grade: F')
}

//2 Season of Month Identification
let month=prompt('Enter the month')
let mth=month.toLowerCase()
if (mth=='september'||mth=='october'||mth=='november') {
    console.log('the season is Autumn.')
}
else if (mth=='december'||mth=='january'||mth=='february') {
    console.log('the season is Winter.')
}
else if (mth=='march'||mth=='april'||mth=='may') {
    console.log('the season is Spring.')
}
else {
    console.log('the season is Summer.')
}

//3 Weekend/Weekday identification
let input_day=prompt('What is the day today?')
let day=input_day.toLowerCase()
switch (true) {
    case day=='monday'||day=='tuesday'||day=='wednesday'||day=='thursday'||day=='friday':
        console.log(`${(day[0].toUpperCase())+day.slice(1)} is a working day.`)
        break;
    default:
        console.log(`${(day[0].toUpperCase())+day.slice(1)} is a weekend.`)
        break;
}