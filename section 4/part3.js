// for
for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
}

// while
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

// do while (always evaluated at least once, even if condition is false)
let j = 0;
do {
    if (j % 2 !== 0) console.log(j);
    j++;
} while (j <= 5);