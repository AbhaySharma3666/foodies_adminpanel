import api from "../config/api";

/**
 * Add a new food item with an image.
 * @param {Object} foodData - The food data (name, description, price, category)
 * @param {File} image - The image file to upload
 */
export const addFood = async (foodData, image) => {
  const formData = new FormData();
  formData.append("food", JSON.stringify(foodData));
  formData.append("file", image);

  try {
    await api.post("/foods", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.error("Error adding food:", error);
    throw error;
  }
};

/**
 * Fetch the complete list of food items.
 * @returns {Promise<Array>} List of food items
 */
export const getFoodList = async () => {
  try {
    const response = await api.get("/foods");
    return response.data;
  } catch (error) {
    console.error("Error fetching food list:", error);
    throw error;
  }
};

/**
 * Delete a food item by ID.
 * @param {string|number} foodId - The food item ID to delete
 * @returns {Promise<boolean>} Whether the deletion was successful
 */
export const deleteFood = async (foodId) => {
  try {
    const response = await api.delete(`/foods/${foodId}`);
    return response.status === 204;
  } catch (error) {
    console.error("Error deleting food:", error);
    throw error;
  }
};