const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");

  // submit button click 
  submitButton.addEventListener("click", function() {
    // init var
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
    
    // start validation data
    if(password != '' && cpassword != '') {
      if(password != cpassword) {
          alert("password & confirm password not match!")
      }else
      if(password.length != 8) {
        alert("password length must be 8 char!")
      }
    }
    if(gender == '' || 
    fname == '' || 
    lname == '' || 
    username == '' ||
    email == '' ||
    address == '' ||
    suburb == '' ||
    state == '' ||
    postcode == '') {
        alert("Please fill empty field!")
    }else{
      // success valid data
        alert(
        "Gender: "+gender+"\n"+
        "Firstname: "+fname+"\n"+
        "Lastname: "+lname+"\n"+
        "Username: "+username+"\n"+
        "Email: "+email+"\n"+
        "Phone: "+phone+"\n"+
        "Address: "+address+"\n"+
        "Suburb: "+suburb+"\n"+
        "State: "+state+"\n"+
        "Postcode: "+postcode
        );
    }
  });

  // reset button click
  resetButton.addEventListener("click", function() {
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