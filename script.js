var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");
var splitEl = document.querySelector("#split");

function calculateTip(total, tipPercentage) {
    var roundedResult = (total * tipPercentage).toFixed(2);
    return roundedResult;
}
  
function addTip(event) {
    event.preventDefault();
    var tipPercentage = tipEl.value * .01;
    console.log(tipPercentage);
    var total = totalEl.value;
    var tipAmount = calculateTip(total, tipPercentage);
    document.querySelector("#tip-amount").textContent = tipAmount;
}

submitEl.addEventListener("click", addTip);
