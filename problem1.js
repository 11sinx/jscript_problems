var i;
var x = 0;

/* loops until i is no longer less than 100 */
for (i = 1; i < 1000; i++) {
    /* takes any number divisible by 3 and adds it to x */
    if (i % 3 === 0) {
        x += i;
    /* takes any number divisible by 5 and adds it to x */
    } else if (i % 5 === 0) {
        x += i;
    }
}
console.log(x);