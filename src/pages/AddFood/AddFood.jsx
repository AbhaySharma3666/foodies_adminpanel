import { assets } from "../../assets/assets";
import { useCallback, useState } from "react";
import { addFood } from "../../services/foodService";
import { toast } from "react-toastify";

const INITIAL_FORM_STATE = {
  name: "",
  description: "",
  price: "",
  category: "",
};

const CATEGORIES = [
  "Biryani",
  "Cake",
  "Burger",
  "Pizza",
  "Rolls",
  "Salad",
  "Dessert",
  "Ice Cream",
  "Drinks",
];

const AddFood = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState(INITIAL_FORM_STATE);

  const onChangeHandler = useCallback((event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const onSubmitHandler = useCallback(
    async (event) => {
      event.preventDefault();
      if (!image) {
        toast.error("Please select an image");
        return;
      }

      try {
        await addFood(data, image);
        toast.success("Food added successfully");
        setData(INITIAL_FORM_STATE);
        setImage(null);
      } catch (error) {
        toast.error("Failed to add food");
      }
    },
    [data, image]
  );

  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col-md-4">
          <div className="cardbody">
            <h2 className="mb-4">Add Food</h2>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img
                    src={image ? URL.createObjectURL(image) : assets.upload}
                    alt="Upload preview"
                    width={98}
                  />
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  required
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Chicken Biryani"
                  className="form-control"
                  id="name"
                  required
                  name="name"
                  onChange={onChangeHandler}
                  value={data.name}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="5"
                  placeholder="Write about it..."
                  required
                  name="description"
                  onChange={onChangeHandler}
                  value={data.description}
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-control"
                  onChange={onChangeHandler}
                  value={data.category}
                >
                  <option value="">Select a category</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="&#8377;200"
                  className="form-control"
                  id="price"
                  required
                  name="price"
                  onChange={onChangeHandler}
                  value={data.price}
                />
              </div>
              <button type="submit" className="btn btn-primary mb-3">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
