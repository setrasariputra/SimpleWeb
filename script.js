const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", function() {
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
    
    if(password != cpassword) {
        alert("password & confirm password not match!")
    }else
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