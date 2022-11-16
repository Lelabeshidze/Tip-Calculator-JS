const amount = document.getElementById("amount");
const guests = document.getElementById("guest");
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tip-amount");
const tipTotal = document.getElementById("tip-total");
calculate = () => {
  const tip = ((amount.value * quality.value) / guests.value).toFixed(2);

  if (tip === "NaN") {
    tipAmount.innerHTML = "Tip $0 each";
    showTipAmount();
  } else {
    tipAmount.innerHTML = "Tip $ " + tip + "each";
    showTipAmount();
  }
  console.log(tip);
};

showTipAmount = () => {
  let x = tipAmount;
  x.className = "show";

};
calculateTotal = () => {
  const tipTotalAmount = amount.value * quality.value;

  if (tipTotalAmount === "NaN") {
    tipTotal.innerHTML = "Tip $0";
    showTipTotalAmount();
  } else {
    tipTotal.innerHTML = " Total Tip is $ " + tipTotalAmount;
    showTipTotalAmount();
  }
  console.log(tipTotalAmount);
};

showTipTotalAmount = () => {
  let x = tipTotal;
  x.className = "show";

};
