import { getFoods } from "./helper.js";

const elFood = document.querySelector("#food");

const renderPosts = async () => {
  // EDIT HERE
  let foods = await getFoods();

  foods.map((food) => {
    elFood.insertAdjacentHTML(
      "beforeend",
      `<div id="${food.id}" class=" col-4 mt-5">
        <div class="card rounded-3 border-0">
            <img src="${food.image}" class="card-img-top" alt="..." />
            <div class="card-body text-center">
                <h5 class="card-title">${food.name}</h5>
                <p class="card-text">${food.price}</p>
            </div>
        </div>
    </div>
    `
    );
  });
};

renderPosts();
