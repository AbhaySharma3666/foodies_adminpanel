import React, { use } from "react";
import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";

const Orders = () => {
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/orders/all");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const UpdateStatus = async (event, orderId) => {
    const response = await axios.patch(`http://localhost:8080/api/orders/status/${orderId}?status=${event.target.value}`);
      if (response.status === 200) {
        fetchOrders();
      }
  };

  return (
    <div className="container">
      <div className="py-5 row justify-content-center">
        <div className="col-11 car">
          <table className="table table-responsive">
            <tbody>
              {data.map((order, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={assets.parcel}
                        alt=""
                        height={48}
                        width={48}
                      />
                    </td>
                    <td>
                      <div>
                        {order.foodItems.map((item, index) => {
                        if (index === order.foodItems.length - 1) {
                          return item.name + " x " + item.quantity;
                        } else {
                          return item.name + " x " + item.quantity + ", ";
                        }
                      })}
                      </div>
                      <div>
                        {order.userAddress}
                      </div>
                    </td>
                    <td>&#x20B9;{order.amount.toFixed(2)}</td>
                    <td>Items: {order.orderedItems.length}</td>
                    
                    <td>
                      <select className="form-control" onChange={(event) => UpdateStatus(event, order.id) } value={order.orderStatus}>
                        <option value="Food Preparing">Food Preparing</option>
                        <option value="On the way">On the way</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
