// for in
const person = {
    name: 'Natalie',
    age: 21
};

for (let key in person)
    console.log(person[key]);

// for of
const colors = ['red', 'green', 'blue'];

for (let color of colors)
    console.log(color);

// break, continue
let i = 0;
while (i <= 10) {
    // if (i === 5) break;
    if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}