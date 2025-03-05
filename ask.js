//initialize rl
const readline = require('readline');

//set rl
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//program
rl.question('question?: ', (question) => {
    //put another rl.question inside of the first rl.question to ask another question
    rl.question('answer?: ', (answer) => {
        //line separation
        console.log("----------------------")

        //code executes after 2 seconds
        setTimeout(() => {
            //send results
            console.log(`q: ${question}`);
            console.log(`a: ${answer}`);
        }, 2000);

        //end
        rl.close();   
    });
});

