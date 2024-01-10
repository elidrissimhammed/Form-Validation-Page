
let form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let isValid = true;
  if (firstName.value === "") {
    isValid = false;
  }
  

  
  if (isValid) {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("address", address);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Form submitted successfully!");
  }
});
