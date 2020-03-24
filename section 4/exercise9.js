
const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    // calculate the average marks
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let average = sum / marks.length;
    // sort the average against a rubric (standard 10 point)
    if (average >= 90)
        grade = 'A';
    else if (average >= 80 && average < 90)
        grade = 'B';
    else if (average >= 70 && average < 80)
        grade = 'C';
    else if (average >= 60 && average < 70)
        grade = 'D';
    else 
        grade = 'F';
    return grade
}