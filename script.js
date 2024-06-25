//get the form elements.
let name = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phoneNumber");
let phoneRegEx = new RegExp(/[0-9]g/);
let password = document.getElementById("password");
let passwordRegEx = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
);
console.log(name.value)
console.log("name", name);
name.addEventListener("change", function () {
  if (name.value.length < 5) {
    alert("the name must be at least 5 characters");
    name.setAttribute("class", "form-control is-invalid");
    name.focus();
    }
  else {
      name.setAttribute("class", "form-control is-valid")
   
    }
});
email.addEventListener("change", function () {
    if (!email.value.includes("@")) {
        alert("this field should be a valid email");
        email.setAttribute("class", "form-control is-invalid");
        email.focus();
    }
    else {
        email.setAttribute("class", "form-control is-valid")
     
      }
    });
    password.addEventListener("change", function () {
        if (!passwordRegEx.test(password.value)) {
            alert("password should contain digits letter and at least 6 characters");
            password.setAttribute("class", "form-control is-invalid");
            password.focus();
        }
        else {
            password.setAttribute("class", "form-control is-valid")
          
          }
        });
        phoneNumber.addEventListener("change", function () {
            if (phoneNumber.value.length < 8) {
                alert("the phone number should contain 8 digits");
                phoneNumber.setAttribute("class", "form-control is-invalid");
                phoneNumber.focus();
            }
           
              if (!phoneRegEx.test(phoneNumber.value)) {
                  alert("the phone number should contain only number");
                  phoneNumber.setAttribute("class", "form-control is-invalid");
                  phoneNumber.focus();
                }
                else {
                    phoneNumber.setAttribute("class", "form-control is-valid")
                  
                  }
            
});
