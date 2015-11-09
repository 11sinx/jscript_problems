var i;
var x = 0;

for (i = 1; i < 1000; i++) {
    if (i % 3 === 0) {
        x += i;
    } else if (i % 5 === 0) {
        x += i;
    }
}
console.log(x);