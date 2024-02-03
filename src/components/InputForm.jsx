import React, { useEffect } from "react";
import Cart from "./cart"; 
import { useState } from "react";

function InputForm() {
  // Defining state variables using useState hook
  const [electronics, setElectronics] = useState([]);
  const [food, setFood] = useState([]); 
  const [skin, setSkin] = useState([]); 
  const [productId, setProductId] = useState(""); 
  const [productName, setProductName] = useState(""); 
  const [price, setPrice] = useState(""); 
  const [category, setCategory] = useState("skincare"); 

  // Function to handle form submission
  const handleValue = (event) => {
    event.preventDefault(); // to prevent default action

    // a form value object
    let formValue = {
      productId: productId,
      productName: productName,
      price: price,
      category: category,
    };

    // Retrieve existing values for the selected category from local storage or initialize an empty array
    let existingValues = JSON.parse(localStorage.getItem(category)) || [];

    // Pushing new form value to the existing 
    existingValues.push(formValue);

    // Updating local storage with the new values for the selected category
    localStorage.setItem(category, JSON.stringify(existingValues));

    // Updating states
    setElectronics(JSON.parse(localStorage.getItem("electronics")) || []);
    setFood(JSON.parse(localStorage.getItem("Food")) || []);
    setSkin(JSON.parse(localStorage.getItem("skincare")) || []);

    // Clearing input fields after submission to reset it
    setProductId("");
    setProductName("");
    setPrice("");
  };

  // Effect hook to initialize state variables with data from local storage when the component mounts
  useEffect(() => {
    setElectronics(JSON.parse(localStorage.getItem("electronics")) || []);
    setFood(JSON.parse(localStorage.getItem("Food")) || []);
    setSkin(JSON.parse(localStorage.getItem("skincare")) || []);
  }, []);

  //  deletion of product items
  const handleDelete = (value) => {
    //console.log("Delete wali value :", value);
    let newValue;
    switch (value.category) {
      case "electronics":
        newValue = electronics.filter((row) => row.productId !== value.productId);
        localStorage.setItem(value.category, JSON.stringify(newValue));
        setElectronics(newValue);
        break;
      case "Food":
        newValue = food.filter((row) => row.productId !== value.productId);
        localStorage.setItem(value.category, JSON.stringify(newValue));
        setFood(newValue);
        break;
      case "skincare":
        newValue = skin.filter((row) => row.productId !== value.productId);
        localStorage.setItem(value.category, JSON.stringify(newValue));
        setSkin(newValue);
        break;
      default:
        break;
    }
  };

  // JSX code for the input form and product listing
  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <div className="text-xl font-bold mb-4">Product Listing-App</div>

      {/* Form for adding products */}
      <form className="form flex flex-col gap-2" onSubmit={handleValue}>
        <div className="flex flex-col">
          <label htmlFor="productId" className="mb-1">Product ID:</label>
          <input
            type="text"
            id="productId"
            value={productId}
            onChange={(event) => setProductId(event.target.value)}
            className="input-sm border border-gray-400 rounded-md py-1 px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="productName" className="mb-1">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
            className="input-sm border border-gray-400 rounded-md py-1 px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="mb-1">Selling Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            className="input-sm border border-gray-400 rounded-md py-1 px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="mb-1">Choose a Category:</label>
          <select
            name="options"
            id="options"
            onChange={(event) => setCategory(event.target.value)}
            value={category}
            className="input-sm border border-gray-400 rounded-md py-1 px-2"
          >
            <option value="skincare">Skin care</option>
            <option value="electronics">Electronics</option>
            <option value="Food">Food</option>
          </select>
        </div>

        {/* Button to submit the form */}
        <button
          type="submit"
          className="button-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md"
        >
          Add
        </button>
      </form>

      {/* Cart component to display product listings */}
      <Cart elec={electronics} food={food} skin={skin} onDelete={handleDelete} />
    </div>
  );
}

export default InputForm;
