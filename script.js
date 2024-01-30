const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

password.addEventListener('input', (event) => {
  validatePasswords();
});

confirmPassword.addEventListener('input', (event) => {
  validatePasswords();
});

function validatePasswords() {
  console.log(password.value);
  console.log(confirmPassword.value);
  // If passwords match, remove error class else add error class
  if (password.value === confirmPassword.value) {
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
  }
  else {
    password.classList.add('error');
    confirmPassword.classList.add('error');
  }
}

