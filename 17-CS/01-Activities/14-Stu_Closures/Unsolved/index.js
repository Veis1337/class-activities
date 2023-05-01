// TODO: Complete the 'counter' function below.
function counter() {
    let count = 0;
    return { 
        increment: function () {
            // ++count; works also
           count++;
           return count;
        }
    }
}

counter();

module.exports = counter;
