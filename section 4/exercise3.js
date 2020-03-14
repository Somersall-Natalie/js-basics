// fizzbuzz

console.log(fizzbuzz(8));

function fizzbuzz(number) {
    // make sure it's a number
    if (typeof number !== 'number') return 'not a number';

    // fizzbuzz
    if ((number % 3 == 0) && (number % 5 == 0)) return 'fizzbuzz';

    // fizz
    if (number % 3 == 0) return 'fizz';

    // buzz
    if (number % 5 == 0) return 'buzz';

    // no matches
    return number;
}