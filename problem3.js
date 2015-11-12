/* function determines whether the number inputed is prime */
var primeFactor = function(num) {
    for(var i = 2; i < num; i++) {
        if(num % i === 0){
            return false;
        } 
    } 
    return true;
};

var myNumber = 600851475143;
var output;

/* for loop goes through all numbers between 1 and myNumber
updating output as it finds prime numbers, eventually getting
the highest prime value*/
for(var i = 2; i < myNumber; i++) {
    if(myNumber % i === 0 && primeFactor(i)) {
        output = i;
    }
}
console.log(output);