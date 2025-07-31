document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();

  //get the phone numenr
  const phoneNumber = document.getElementById("phone-id").value;

  //get the pin
  const pinNumber = document.getElementById("pin-id").value;

  //print
  console.log(phoneNumber, pinNumber);

  //this is temporary way

  if (phoneNumber === "Ahnaf" && pinNumber === "12345") {
    console.log("You are logged in");
    window.location.href = "/home.html";
  } else {
    alert("Wrong phone number or pin");
  }
});
