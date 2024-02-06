function validatePassword(genId) {
    // Get the password value for the specific GEN
    var passwordInput = document.getElementById(genId);
    var password = passwordInput.value;
  
    // Define unique passwords for each GEN
    var genPasswords = {
      gen4: '249213',
      gen5: 'password5',
      gen6: 'password6',
      gen7: 'password7',
      gen8: 'password8'
    };
  
    // Check if the entered password is correct for the specific GEN
    if (password === genPasswords[genId]) {
      document.getElementById('validationMessage').innerText = 'Password is correct!';
      passwordInput.style.backgroundColor = 'green'; // Set background color to green
    } else {
      document.getElementById('validationMessage').innerText = 'Password is incorrect. Please try again.';
      passwordInput.style.backgroundColor = 'red'; // Set background color to red
    }
  }
  