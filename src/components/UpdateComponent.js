import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompnay] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.warn(params);
    let result = await fetch(
      `https://dashboard-up9o.onrender.com/product/${params.id}`,
      {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompnay(result.company);
  };

  const updateProduct = async () => {
    console.warn(name, price, category, company);
    let result = await fetch(
      `https://dashboard-up9o.onrender.com/product/${params.id}`,
      {
        method: "Put",
        body: JSON.stringify({ name, price, category, company }),
        headers: {
          "Content-Type": "Application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    result = await result.json();
    if (result) {
      navigate("/");
    }
  };

  return (
    <div class="product">
      <h1 class="product__title">Update Product</h1>

      <div class="product__form">
        <label class="product__label" for="productName">
          Product Name
        </label>
        <input
          id="productName"
          type="text"
          placeholder="Enter product name"
          class="product__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label class="product__label" for="productPrice">
          Price
        </label>
        <input
          id="productPrice"
          type="text"
          placeholder="Enter product price"
          class="product__input"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label class="product__label" for="productCategory">
          Category
        </label>
        <input
          id="productCategory"
          type="text"
          placeholder="Enter product category"
          class="product__input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label class="product__label" for="productCompany">
          Company
        </label>
        <input
          id="productCompany"
          type="text"
          placeholder="Enter product company"
          class="product__input"
          value={company}
          onChange={(e) => setCompnay(e.target.value)}
        />
      </div>

      <button class="product__button" onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
