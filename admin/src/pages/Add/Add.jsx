/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import upload_area from "../../assets/upload_area.png";
import "./Add.css";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url = "http://localhost:4000" }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "crypto",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      console.log("FormData to be sent:");
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
      const response = await axios.post(`${url}/api/blog/add`, formData);
      if (response.data.success) {
        setData({
          title: "",
          description: "",
          category: "crypto",
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error while adding the blog.", error);
    }
  };

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  return (
    <div className="add">
      <form className="flex flex-col gap-[10px]" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex flex-col gap-[10px]">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="add-product-name flex flex-col gap-[10px]">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.title}
            type="text"
            name="title"
            placeholder="Type here"
            required
          />
        </div>

        <div className="add-product-description flex flex-col gap-[10px]">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex flex-col gap-[10px]">
            <p>Product Category</p>
            <select
              name="category"
              value={data.category}
              onChange={onChangeHandler}
            >
              <option value="crypto">crypto</option>
              <option value="bitcoin">bitcoin</option>
            </select>
          </div>
        </div>
        <button className="add-btn" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
