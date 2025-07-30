document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Button clicked!");

  //get the phone numenr
  const phoneNumber = document.getElementById("phone").value;
  console.log(phoneNumber);
});
