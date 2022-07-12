//Create a program that accepts a number (1-12)
//as input and logs to the console that number and its corresponding month.
//For example: if the user enters the number 3, then it should return the month “March.”
//Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).
//Months in array///


let months = [
    "Janury",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agust",
    "september",
    "october",
    "november",
    "December",
  ];
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Enter your month 1-12: `, sentence => {
    if (sentence <= 11 || sentence <= 0) {
        console.log(months[sentence-1]);
      } else {
        alert("Error, enter only numbers that are 1-12");
      }
    readline.close();
  });
