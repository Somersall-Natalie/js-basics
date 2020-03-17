checkSpeed(78);

function checkSpeed(speed) {
    const limit = 70;
    const kmPerPoint = 5;
    // if speed <= limit, we're okay
    if (speed <= 70) console.log('okay');

    // for every 5 over the limit, add 1 point
    else {
        let points = Math.floor((speed - limit) / kmPerPoint);
        if (points >= 12) console.log('suspended');
        else {
            console.log(points)
        }
    }
}