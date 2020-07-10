function onSubmit() {
  const input = document.querySelector("input");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const form = document.querySelector("form");
  const data = document.getElementById("data");
  let valid = true;

  name.addEventListener("invalid", function () {
    valid = false;
  });

  email.addEventListener("invalid", function () {
    valid = false;
  });
  form.addEventListener("submit", function () {
    if (valid === true) {
      alert("Form Submitted");
      document.getElementById("data").innerHTML = "Inputted Data is";
      document.getElementById("inputName").innerHTML = "Name: " + name.value;
      document.getElementById("inputEmail").innerHTML = "Email: " + email.value;
    }
  });
}
