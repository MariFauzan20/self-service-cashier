// async function getDataKategori() {
//   const url = "https://61702f2323781c00172898fa.mockapi.io/kategori";
//   try {
//     let res = await fetch(url);
//     return await res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function renderKategori() {
//   let respond = await getDataKategori();
//   console.log(respond);
//   let html = "";
//   respond.forEach(function (kategori) {
//     let htmlSegment = `
//     <div class="card shadow-sm">
//             <img
//               src="${kategori.image}"
//               class="card-img-top"
//               alt="..."
//               style="width: 10rem; height: 7rem;"
//             />
//             <div class="card-body text-center">
//               <input id="idKategori" value="${kategori.id}" style="display: none;">
//               <button type="button" onclick="renderMenu()" class="card-text btn bt">${kategori.kategori}</button>
//             </div>
//           </div>`;

//     html += htmlSegment;
//   });

//   let kategori = document.querySelector(".kategori");
//   kategori.innerHTML = html;
// }
// renderKategori();

async function getDataFood() {
  const urlMenu = "https://61702f2323781c00172898fa.mockapi.io/kategori/1/menu";
  try {
    let menu = await fetch(urlMenu);
    return await menu.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderMenuFood() {
  let menu = await getDataFood();
  console.log(menu);
  let menuhtml = "";
  menu.forEach(function (menuFood) {
    let menuFoodId = `
          <div class="card bg-card shadow-sm" data-id="${menuFood.id}">
            <div class="flex justify-content-center">
              <img
                id="image-order"
                src="${menuFood.image}"
                class="card-img-top"
                alt="${menuFood.namamenu}"
                style="
                  width: 10rem;
                  height: 7rem;
                  padding: 8px;
                  border-radius: 10px;
                "
              />
            </div>
            <div class="card-body text-center d-flex flex-column">
              <input type="number" class="count" value="1" style="display: none"/>
              <button type="button" onclick="saveProduct()" class="card-text btn bt">
                <p id="id" style="display:none;">${menuFood.id}</p>
                <p class="card-text text-center" id="name-menu">${menuFood.namamenu}</p>
                <p class="card-text text-center" id="harga">${menuFood.harga}</p>
              </button>
            </div>
          </div>`;

    menuhtml += menuFoodId;
  });
  let menuid = document.getElementById("menu");
  menuid.innerHTML = menuhtml;
}
renderMenuFood();

async function getDataDrink() {
  const urlMenuDrink =
    "https://61702f2323781c00172898fa.mockapi.io/kategori/2/menu";
  try {
    let menuDrink = await fetch(urlMenuDrink);
    return await menuDrink.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderMenuDrink() {
  let menuDrink = await getDataDrink();
  console.log(menuDrink);
  let menuDrinkHtml = "";
  menuDrink.forEach(function (menudrink) {
    let menuDrink = `
          <div class="card bg-card shadow-sm" >
            <div class="flex justify-content-center">
              <img
                id="image-order"
                src="${menudrink.image}"
                class="card-img-top"
                alt="${menudrink.namamenu}"
                style="
                  width: 10rem;
                  height: 7rem;
                  padding: 8px;
                  border-radius: 10px;
                "
              />
            </div>
            <div class="card-body text-center d-flex flex-column">
              <input type="number" class="count" value="1" style="display: none"/>
              <button onclick="saveProduct()" type="button" class="card-text btn bt">
                <p id="id" style="display:none;">${menudrink.id}</p>
                <p class="card-text text-center" id="name-menu">${menudrink.namamenu}</p>
                <p class="card-text text-center" id="harga">${menudrink.harga}</p>
              </button>
            </div>
          </div>`;

    menuDrinkHtml += menuDrink;
  });
  let menudrink = document.getElementById("menu");
  menudrink.innerHTML = menuDrinkHtml;
}
renderMenuDrink();
