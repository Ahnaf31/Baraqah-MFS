document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const addMoneyInput = document.getElementById("input-addmoney").value;
    const addMoneyAmount = parseFloat(addMoneyInput);
    console.log(addMoneyInput);

    const inputPinNumber = document.getElementById("input-pin-number").value;
    console.log(inputPinNumber);
  });
