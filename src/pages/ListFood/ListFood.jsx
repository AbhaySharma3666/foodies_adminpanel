import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteFood, getFoodList } from "../../services/foodService";

const ListFood = () => {
  const [list, setList] = useState([]);

  const fetchList = useCallback(async () => {
    try {
      const data = await getFoodList();
      setList(data);
    } catch (error) {
      toast.error("Error fetching food list");
    }
  }, []);

  const removeFood = useCallback(
    async (foodId) => {
      try {
        const success = await deleteFood(foodId);
        if (success) {
          toast.success("Food deleted successfully");
          fetchList();
        } else {
          toast.error("Failed to delete food");
        }
      } catch (error) {
        toast.error("Failed to delete food");
      }
    },
    [fetchList]
  );

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <div className="py-5 row justify-content-center">
      <div className="col-11 card">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    height={48}
                    width={48}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>&#8377;{item.price}.00</td>
                <td className="text-danger">
                  <i
                    className="bi bi-x-circle-fill"
                    role="button"
                    onClick={() => removeFood(item.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListFood;