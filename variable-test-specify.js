//initialize rl
const readline = require('readline');

//set rl
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//program

//set var count
var count = 0;


//ask for how many increments
rl.question('how many increments?: ', (times) => {
    //increment
    increment(parseInt(times));
    
    //separate
    console.log('------------------------');

    //wait 2 seconds
    console.log("please wait...");

    setTimeout(() => {
        //show count
        console.log(count);
    }, 2000);

    //end
    rl.close();
});



//increment function
function increment(times){
    //repeat the number of times
    for (let i = 0; i < times; i++) {
        count++;
    }

    //set new incremented value 
    return count;
}