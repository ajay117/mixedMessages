/*
You will + find your true love + .
You will + advance in your career + .
You will + going to excel wherever you go + .
You will + marry multiple times + .
You will + become a billionaire + .
*/

let messages = ['find your true love', 'advance in your career',
'going to excel wherever you go', 'marry multiple times', 'become a billionaire', 'earn a lot of money'];
let randomNumber = Math.floor(Math.random() * 5);
let randomMessages = 'You will ' + messages[randomNumber] + '.';
console.log(randomMessages);