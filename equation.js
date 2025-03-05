//initialize rl
import { createInterface } from 'readline';

//set rl
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});


//program

//variables to save a (one) and b (two) value
var one;
var two;

//ask a value
rl.question('a value?: ', (a) => {
    //save a value
    one = a;

    //ask b value
    rl.question('b value?: ', (b) => {
        //save b value
        two = b;

        //separate
        console.log('------------------------');

        //results show after 2 seconds
        setTimeout(() => {
            //send results

            //use parseInt() to avoid joining strings (a + b = 1254 while a is 12 and b is 54)
            console.log(`a + b: ${parseInt(one) + parseInt(two)}`);

            console.log(`a = ${one}`);
            console.log(`b = ${two}`);
        }, 2000);

        //end
        rl.close();
    });
});