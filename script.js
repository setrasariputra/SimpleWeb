const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");

// Function to validate input fields
function validateFields() {
    let gender = document.getElementById("gender").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let address = document.getElementById("address").value;
    let suburb = document.getElementById("suburb").value;
    let state = document.getElementById("state").value;
    let postcode = document.getElementById("postcode").value;

    // Check for empty fields
    if (!gender || !fname || !lname || !username || !email || !address || !suburb || !state || !postcode) {
        alert("Please fill in the empty fields!");
        return false;
    }

    // Check password and confirm password
    if (!password || !cpassword) {
        alert("Please enter the password and confirm password!");
        return false;
    }

    if (password !== cpassword) {
        alert("Password & confirm password do not match!");
        return false;
    }

    if (password.length !== 8) {
        alert("Password length must be 8 characters!");
        return false;
    }

    // If all validations pass
    alert(
        "Gender: " + gender + "\n" +
        "Firstname: " + fname + "\n" +
        "Lastname: " + lname + "\n" +
        "Username: " + username + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Address: " + address + "\n" +
        "Suburb: " + suburb + "\n" +
        "State: " + state + "\n" +
        "Postcode: " + postcode
    );

    return true;
}

// submit button click 
submitButton.addEventListener("click", function () {
    validateFields();
});

// reset button click
resetButton.addEventListener("click", function () {
    document.getElementById("gender").value = '';
    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("username").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("password").value = '';
    document.getElementById("cpassword").value = '';
    document.getElementById("address").value = '';
    document.getElementById("suburb").value = '';
    document.getElementById("state").value = '';
    document.getElementById("postcode").value = '';
});
