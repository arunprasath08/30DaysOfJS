//alert method - default pop up box with 'OK' button
alert('Welcome to Coding with ARUN')

/*
prompt method - prompt box that displays a message 
and accepts an input and stores in variable
*/
let num=prompt('Enter Number','number is')
console.log('The number you entered is:',num)

/*
confirm method - decision box with "OK" and "Cancel" buttons
takes string as input and stores in variable. OK- true, Cancel-false
*/
let decision=confirm('Wish to continue?')
console.log('decision you chose to continue is:',decision)
