import { useCallback, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { getAllOrders, updateOrderStatus } from "../../services/orderService";
import { toast } from "react-toastify";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = useCallback(async () => {
    try {
      const data = await getAllOrders();
      setOrders(data);
    } catch (error) {
      toast.error("Error fetching orders");
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleStatusChange = useCallback(
    async (event, orderId) => {
      try {
        const success = await updateOrderStatus(orderId, event.target.value);
        if (success) {
          toast.success("Order status updated");
          fetchOrders();
        } else {
          toast.error("Failed to update order status");
        }
      } catch (error) {
        toast.error("Failed to update order status");
      }
    },
    [fetchOrders]
  );

  return (
    <div className="container">
      <div className="py-5 row justify-content-center">
        <div className="col-11 card">
          <table className="table table-responsive">
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <img
                      src={assets.parcel}
                      alt="Order parcel"
                      height={48}
                      width={48}
                    />
                  </td>
                  <td>
                    <div>
                      {order.foodItems
                        .map((item) => `${item.name} x ${item.quantity}`)
                        .join(", ")}
                    </div>
                    <div>{order.userAddress}</div>
                  </td>
                  <td>&#x20B9;{order.amount.toFixed(2)}</td>
                  <td>Items: {order.orderedItems.length}</td>
                  <td>
                    <select
                      className="form-control"
                      onChange={(event) => handleStatusChange(event, order.id)}
                      value={order.orderStatus}
                    >
                      <option value="Food Preparing">Food Preparing</option>
                      <option value="On the way">On the way</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
