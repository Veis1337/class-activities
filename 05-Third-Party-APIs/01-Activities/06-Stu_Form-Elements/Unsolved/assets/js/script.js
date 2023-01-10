var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');


// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
    // Prevent the default behavior
    event.preventDefault(event);
  
    let addList = $("#shopping-input");
    let listValue = addList.val();
    if (!addList) {
        return;
    }
    shoppingListEl.append("<li>" + listValue + "</li>");
    console.log(addList);
    addList.val("");

    
  }
  

  // Submit event on the form
shoppingFormEl.on("submit", handleFormSubmit);
  
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
