showNumbers(10);

function showNumbers(limit) {
    // log all numbers from 0 to limit to the console, with "odd/even"
    let i = 0;
    while (i <= limit) {
        if (i % 2 === 0) console.log(i + " even")
        else console.log(i + " odd")
        i++;
    }
}