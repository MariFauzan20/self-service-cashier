export const getFoods = async () => {
  try {
    const food = await fetch(
      "https://616981a909e030001712c409.mockapi.io/foods"
    );
    return food.json();
  } catch (error) {
    console.log("getFoods", error);
    throw error;
  }
};

export const getFoodById = async (user_id) => {
  try {
    const food = await fetch(
      `https://616981a909e030001712c409.mockapi.io/foods/${user_id}`
    );
    return food.json();
  } catch (error) {
    console.log("getFoodById", error);
    throw error;
  }
};
