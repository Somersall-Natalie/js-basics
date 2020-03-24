const array = [0, 1, 2, 3, null, NaN, undefined];

console.log(countTruthy(array));

function countTruthy(array) {
    let i = 0;
    for (let value of array)
        if (value)
            i++;
    return i;
}