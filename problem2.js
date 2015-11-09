var x;
var y = 1;
var z = 1;
var sum;

for(var i = 0; i < 4000000; i++) {
    x = y + z;
	if(x % 2 === 0 && x < 4000000) {
		sum +=x;
	}
	y = z;
	z = x;
}
console.log(sum);