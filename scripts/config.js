function openPlayerConfig() {
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
}

function savePlayerConfig(event) {
  event.preventDefault(); // prevent the default browser behavior of send a request to the server
  const formData = new FormData(event.target); // FormData(): extract values entered on input forms
  const enteredPlayername = formData.get('playername').trim(); // get('input-form-name') ==> trim() '  Mat  ' = 'Mat'

  // empty string is consider false
  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return; // stop the function
  }
}
