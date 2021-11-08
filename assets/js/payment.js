let getTotal = sessionStorage.getItem("shoppingCart");
let totalPrice = document.querySelector(".total-price");
let finalTotalPrice = document.querySelector(".final-total-price");

totalPrice.innerText = getTotal.slice(35, 40);
finalTotalPrice.innerText = getTotal.slice(35, 40);
