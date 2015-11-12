var x;
var y = 1;
var z = 1;
var sum;

/*  loops until i is no longer less than 4 million  */
for(var i = 0; i < 4000000; i++) {
    /*  adds the inital values of y and z at the start of the loop
        and then adds then subsituted values at the end of each loop    */
    x = y + z;
    
    /*  determines whether the sum of the 2 numbers are 
        even, if it is, it adds it to the total of the sum variable */
        
	if(x % 2 === 0 && x < 4000000) {
		sum +=x;
	}
	/*  switches the values of y with z and z with x so it can be sent
	    to the top of the loop  */
	y = z;
	z = x;
}
console.log(sum);