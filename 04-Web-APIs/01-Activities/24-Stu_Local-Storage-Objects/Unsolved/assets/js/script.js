var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var card = document.querySelector(".card");

function renderMessage() {
  var lastForm = JSON.parse(localStorage.getItem("submissionForm"));
  if (!lastForm) {
    return;
  }
    var userData = JSON.parse(lastForm);

    card.append(`
    <span>First: ${userData.firstName}</span>
    <span>Last: ${userData.lastName}</span>
    <span>Email: ${userData.email}</span>
    <span>Password: ${userData.password}</span>
        `);
  
}
renderMessage();

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  let submissionForm = {
    firstName: firstNameInput.value,
    lastName:  lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }

  localStorage.setItem("submissionForm", JSON.stringify(submissionForm));
  renderMessage();

  // TODO: Create user object from submission

  // TODO: Set new submission to local storage 
});


//Parse the data


