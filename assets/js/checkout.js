let lsTotal = JSON.parse(localStorage.getItem("total"));
let totalPrice = document.getElementById("total-price");
let pajak = document.getElementById("pph");
let totalBayar = document.getElementById("totalBayar");
let shoppe = document.getElementById("bayarShoppe");
let ovo = document.getElementById("bayarOvo");

console.log(lsTotal["total"]);

totalPrice.innerHTML = `<div class="col text-right">Rp. ${lsTotal.total}</div>`;
pajak.innerHTML = `<div class="col text-right">Rp. ${lsTotal.pajakPPh}</div>`;
totalBayar.innerHTML = `<div class="col text-right">Rp. ${lsTotal.bayar}</div>`;
shoppe.innerText = `Rp. ${lsTotal.bayar}`;
ovo.innerText = `Rp. ${lsTotal.bayar}`;
