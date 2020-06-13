const switchElement = document.querySelector("#switch_button");
switchElement.addEventListener("click", ChangePrice);

const priceBasic = document.querySelector("#basic");
const pricePro = document.querySelector("#pro");
const priceMast = document.querySelector("#mast");

function ChangePrice() {
  if (priceBasic.innerHTML === "$19.99") {
    priceBasic.innerHTML = "$199.99";
  } else {
    priceBasic.innerHTML = "$19.99";
  }

  if (pricePro.innerHTML === "$24.99") {
    pricePro.innerHTML = "$249.99";
  } else {
    pricePro.innerHTML = "$24.99";
  }

  if (priceMast.innerHTML === "$39.99") {
    priceMast.innerHTML = "$399.99";
  } else {
    priceMast.innerHTML = "$39.99";
  }
}
