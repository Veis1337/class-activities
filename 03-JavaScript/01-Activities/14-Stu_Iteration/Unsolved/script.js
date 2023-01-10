//WRITE YOUR CODE BELOW
// For-loops are often used to iterate over arrays
var students = ["Bears", "Giraffes", "Penguins", "Meerkats", "Puumba"];

console.log(students.length);
//To determine how many times the loop should execute, we use the array's length
for (var i = 0; i < students.length; i++) { 
    console.log("Great to see you, " + students[i] + ".");
}