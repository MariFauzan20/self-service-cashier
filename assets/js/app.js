async function getDataKategori() {
  const url = "https://61702f2323781c00172898fa.mockapi.io/kategori";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderKategori() {
  let respond = await getDataKategori();
  console.log(respond);
  let html = "";
  respond.forEach(function (kategori) {
    let htmlSegment = `
    <div class="card shadow-sm">
            <img
              src="${kategori.image}"
              class="card-img-top"
              alt="..."
              style="width: 10rem; height: 7rem;"
            />
            <div class="card-body text-center">
              <input id="idKategori" value="${kategori.id}" style="display: none;">
              <button type="button" onclick="renderMenu()" class="card-text btn bt">${kategori.kategori}</button>
            </div>
          </div>`;

    html += htmlSegment;
  });

  let kategori = document.querySelector(".kategori");
  kategori.innerHTML = html;
}
renderKategori();

async function getDatamenu() {
  let idKategori = document.getElementById("idKategori").value;
  const urlMenu =
    "https://61702f2323781c00172898fa.mockapi.io/kategori/" +
    idKategori +
    "/menu";
  try {
    let menu = await fetch(urlMenu);
    return await menu.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderMenu() {
  let menu = await getDatamenu();
  console.log(menu);
  let menuhtml = "";
  menu.forEach(function (menuid) {
    let menuId = `
    <div class="card">
            <img
              src="${menuid.image}"
              class="card-img-top"
              alt="${menuid.namamenu}"
              style="width: 10rem"
            />
            <div class="card-body">
              <p class="card-text text-center">${menuid.namamenu}</p>
              <p class="card-text text-center">${menuid.harga}</p>
            </div>
          </div>`;

    menuhtml += menuId;
  });
  let menuid = document.getElementById("menu");
  menuid.innerHTML = menuhtml;
}
renderMenu();
