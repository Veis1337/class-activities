//WRITE YOUR CODE BELOW
let customerOrder = {
    drinkName: "",
    sugarAmt: 0,
    ready: 1,
}

function orderUp() {
    if (customerOrder.ready) {
        console.log("Ready for pick-up");
    } else {
        console.log("Still in order queue");
    }
}

orderUp()
