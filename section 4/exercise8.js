// sum all multiples of 3 and 5 from 0 to a given limit

console.log(sum(10));

function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    }
    return sum;
}
