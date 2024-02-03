const Cart = ({ elec, food, skin, onDelete }) => {
    return (
      <div className="p-10 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
  
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Electronics Items:</h2>


          
          {(elec || []).map((x, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-300 py-2">
              <div>{x.productName} {x.price} {x.category}</div>
              <button
                onClick={() => onDelete(x)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
  
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Food Items:</h2>
          {(food || []).map((eat, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-300 py-2">
              <div>{eat.productName} {eat.price} {eat.category}</div>
              <button
                onClick={() => onDelete(eat)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
  
        <div>
          <h2 className="text-2xl font-bold mb-4">Skin Items:</h2>
          {(skin || []).map((care, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-300 py-2">
              <div>{care.productName} {care.price} {care.category}</div>
              <button
                onClick={() => onDelete(care)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Cart;
  