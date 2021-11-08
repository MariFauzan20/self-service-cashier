// function store() {
//   //stores items in the localStorage
//   let image = document.getElementById("image-order").src;
//   let name = document.getElementById("name-menu").textContent;
//   let price = document.getElementById("harga").textContent;
//   let key = document.getElementById("id").textContent;

//   const car = {
//     image: image,
//     name: name,
//     price: price,
//   };

//   window.localStorage.setItem(key, JSON.stringify(car));
//   //converting object to string
// }
function getLSContent() {
  // get contents from local storage.
  // if nothing is there, create an empty array
  let lsContent = JSON.parse(localStorage.getItem("order")) || [];
  return lsContent;
}

function setLSContent(lsContent) {
  // save content inside local storage
  window.localStorage.setItem("order", JSON.stringify(lsContent));
}

function getLSTotal() {
  // get contents from local storage.
  // if nothing is there, create an empty array
  let lsTotal = JSON.parse(localStorage.getItem("total")) || [];
  return lsTotal;
}

function setLSTotal(lsContent) {
  // save content inside local storage
  window.localStorage.setItem("total", JSON.stringify(lsContent));
}

function displayProducts() {
  // display all products in the cart

  // get contents from local storage
  const lsContent = getLSContent();
  let productMarkup = "";
  // if local storage is not empty, build the
  // cart items markup and the appropriate details
  if (lsContent !== null) {
    for (let product of lsContent) {
      productMarkup += `
          <tr>
          <td><img style="width: 5rem" src="${product.image}" alt="${product.name}" width="50"></td>
          <td class="text-left">
            ${product.name}
          </td>
          <td>${product.total} <p style="display: none" id="idOrder">${product.id}</p></td>
          <td><button onclick="removeProduct()" class="remove">X</button></td>
          </tr>
        `;
    }
  }
  // add markup to DOM
  document.querySelector("tbody").innerHTML = productMarkup;
}

function saveProduct() {
  // save selected product in local storage and display it in the cart together

  // lets
  let image = document.getElementById("image-order").src;
  let name = document.getElementById("name-menu").textContent;
  let price = document.getElementById("harga").textContent;
  let key = document.getElementById("id").textContent;
  let count = document.querySelector(".count").value;

  let isProductInCart = false;

  // get local storage array
  const lsContent = getLSContent();
  if (!isProductInCart) {
    lsContent.push({
      id: key,
      image: image,
      name: name,
      count: count,
      price: price,
      total: count * price,
    });

    // add product into into local storage
    setLSContent(lsContent);
    // update the display of courses in the shopping cart
    displayProducts();
  }

  totalCash();
}

function removeProduct() {
  // remove product from cart (and from local storage)

  // retrieve list of products from LS
  const lsContent = getLSContent();

  // get the index of the product item to remove
  // inside the local storage content array
  let productId = document.getElementById("idOrder").textContent;
  let productIndex;
  lsContent.forEach(function (product, i) {
    if (product.id === productId) {
      productIndex = i;
    }
  });

  // modify the items in local storage array
  // to remove the selected product item

  lsContent.splice(productIndex, 1);
  // update local storage content
  setLSContent(lsContent);

  totalCash();

  displayProducts();
}

function totalCash() {
  const cartContent = document.querySelector("#cart-content");
  let nums = cartContent.querySelectorAll("tr td:nth-child(3)");
  let totalPriceContainer = document.querySelector("#total-price");
  let pajak = document.querySelector("#pph");
  let totalBayar = document.querySelector("#totalBayar");
  let prices = [];
  if (nums.length > 0) {
    for (let cell = 0; cell < nums.length; cell++) {
      let num = nums[cell].innerText;
      num = num.replace(/[^\d]/g, "");
      num = parseFloat(num);
      prices.push(num);
      total = prices.reduce(function (prev, next) {
        return prev + next;
      }, 0);
      pajakPPh = total * 0.15;
      bayar = total + pajakPPh;
    }
    // return the prices array
  } else {
    return;
  }

  let lsTotal = getLSTotal();
  const lsContent = getLSContent();
  // if local storage is not empty, build the
  // cart items markup and the appropriate details
  if (lsContent == null || lsContent.length == 0) {
    lsTotal = {
      total: (total = 0),
      pajakPPh: (pajakPPh = 0),
      bayar: (bayar = 0),
    };
    setLSTotal(lsTotal);
    totalPriceContainer.innerHTML = `
     <h5 style="text-align: center" class="p-5">Silahkan Order</h5>
     <div class="d-flex flex-row align-items-center">
            <p>Sub Total</p>
            <p class="ms-auto px-1">Rp. ${(total = 0)}</p>`;
    pajak.innerHTML = `<div class="d-flex flex-row align-items-center">
            <p>PPN (15%)</p>
            <p class="ms-auto px-1">Rp. ${(pajakPPh = 0)}</p>`;
    totalBayar.innerHTML = `<button
            class="btn-sm mx-5 mt-2 bg-button-cart text-white"
            id="totalBayar" onclick="window.location.href='payment-page.html'"
          >
            Charge Rp. ${(bayar = 0)}
          </button>`;
  } else {
    lsTotal = {
      total: total,
      pajakPPh: pajakPPh,
      bayar: bayar,
    };
    setLSTotal(lsTotal);
    totalPriceContainer.innerHTML = `<div class="d-flex flex-row align-items-center">
            <p>Sub Total</p>
            <p class="ms-auto px-1">Rp. ${total}</p>`;
    pajak.innerHTML = `<div class="d-flex flex-row align-items-center">
            <p>PPN (15%)</p>
            <p class="ms-auto px-1">Rp. ${pajakPPh}</p>`;
    totalBayar.innerHTML = `<button
            class="btn-sm mx-5 mt-2 bg-button-cart text-white"
            id="totalBayar" onclick="window.location.href='payment-page.html'"
          >
            Charge Rp. ${bayar}
          </button>`;
  }
}

function clearCart() {
  // clear all products from cart (and local storage)

  // retrieve list of products from LS
  const lsContent = getLSContent();
  // empty array in local storage
  lsContent.splice(0, lsContent.length);
  // update local storage
  setLSContent(lsContent);

  totalCash();
  // display cart content again
  displayProducts();
}
