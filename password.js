const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});




reader.question("Welcome to the password validator tool!", function(input) {
    const str =(input);

    if (str.length >= 10 ){
       console.log("Success! Your password meets the requirements.");
    }else {
        console.log("Failed! Your password does not meet the requirements.");
     }

    console.log(`${str} ${str.length}`);

reader.close
});