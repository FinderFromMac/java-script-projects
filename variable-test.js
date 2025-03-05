//set var
var count = 0;

//program
increment(150);
console.log(count);


//increment
function increment(times){
    //repeat the number of times
    for (let i = 0; i < times; i++) {
        count++;
    }

    //set new incremented value 
    return count;
}