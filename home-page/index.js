const input = document.querySelector("input");
const result = document.querySelector(".result");
const oldCurrency = document.querySelector(".old-currency");
const newCurrency = document.querySelector(".new-currency");
const button = document.querySelector(".convert-btn");

//This function allows only numerical input

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

//This function does the conversion and displays the result

let newValue;
function convertFunc(a, b) {
  if (a.value === "naira" && b.value === "dollar") {
    newValue = input.value / 500;
  } else if (a.value === "dollar" && b.value === "naira") {
    newValue = input.value * 500;
  } else {
    newValue = input.value;
  }
  function currSign(param) {
    if (param === "dollar") return "$";
    return "&#8358;";
  }
  let formatter = new Intl.NumberFormat("en-us");
  result.innerHTML = `The value of ${currSign(a.value)}${formatter.format(
    input.value
  )} in ${b.value} is ${currSign(b.value)}${formatter.format(newValue)}`;
}
button.addEventListener("click", () => {
  convertFunc(oldCurrency, newCurrency);
});

document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    convertFunc(oldCurrency, newCurrency);
  }
});
