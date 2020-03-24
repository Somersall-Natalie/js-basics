// print a row of stars from 1 to limit

showStars(5);

function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let star = '';
        for (let stars = 0; stars < i; stars++)
            star += '*';
        console.log(star)
    }
}