function validateForm() {
    var username = document.getElementById("form2Example11").value;
    var password = document.getElementById("form2Example22").value;
  
    if (username === "" || password === "") {
      alert("Both fields are required.");
      return false;
    }
  
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return false;
    }
  
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(username)) {
      alert("Please enter a valid email address as the username.");
      return false;
    }
  
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!passwordPattern.test(password)) {
      alert("Password must include at least one lowercase letter, one uppercase letter, one digit, and one special character.");
      return false;
    }
  
    // Additional custom rules can be added here.
  
    return true;
  }
  