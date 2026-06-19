import api from "../config/api";

/**
 * Fetch all orders from the backend.
 * @returns {Promise<Array>} List of orders
 */
export const getAllOrders = async () => {
  try {
    const response = await api.get("/orders/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

/**
 * Update the status of an order.
 * @param {string|number} orderId - The order ID
 * @param {string} status - The new status value
 * @returns {Promise<boolean>} Whether the update was successful
 */
export const updateOrderStatus = async (orderId, status) => {
  try {
    const response = await api.patch(
      `/orders/status/${orderId}`,
      null,
      { params: { status } }
    );
    return response.status === 200;
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
};
