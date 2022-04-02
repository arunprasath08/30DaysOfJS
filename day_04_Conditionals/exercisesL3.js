//1 No of days in Month Non Leap year
// let input_month=prompt('Enter the month:')
// let month=input_month.toLowerCase()
// switch (true) {
//     case month=='january'||month=='march'||month=='may'||month=='july'||month=='august'||month=='october'||month=='december':
//         console.log(`${(month[0].toUpperCase())+month.slice(1)} has 31 days.`)
//         break;
//     case month=='april'||month=='june'||month=='september'||month=='november':
//         console.log(`${(month[0].toUpperCase())+month.slice(1)} has 30 days.`)
//         break;
//     default:
//         console.log(`${(month[0].toUpperCase())+month.slice(1)} has 28 days.`)
//         break;
// }

//2 No of days in Month Leap year

let input_month=prompt('Enter the month:')
let month=input_month.toLowerCase()
switch (true) {
    case month=='january'||month=='march'||month=='may'||month=='july'||month=='august'||month=='october'||month=='december':
        console.log(`${(month[0].toUpperCase())+month.slice(1)} has 31 days.`)
        break;
    case month=='april'||month=='june'||month=='september'||month=='november':
        console.log(`${(month[0].toUpperCase())+month.slice(1)} has 30 days.`)
        break;
    default:
        console.log(`${(month[0].toUpperCase())+month.slice(1)} has 29 days.`)
        break;
}