function updatePrice() {
  let price = 0.0;
  const selectOp = parseInt(document.querySelector("#select").value);
  const checkboxes = document.querySelectorAll(".item");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      price += parseInt(checkboxes[i].value);
    }
  }
  document.querySelector("#summary-div").innerText =
    "Total price : " + (price + selectOp) + "€";
}
