function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  document.querySelector("#key").innerHTML = event.key;
}

function keyupAction(event) {
  document.querySelector("#status").innerHTML = "KEYUP Event";
  document.querySelector("#code").innerHTML = event.keyCode;
  console.log(event);

}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);
// TODO: Add Event Listener for "keydown" event

