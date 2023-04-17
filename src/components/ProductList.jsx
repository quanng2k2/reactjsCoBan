import React, { useState } from "react";

function ProductList() {
  let [product, setProduct] = useState([
    { id: 123, name: "Xoài", price: 30 },
    { id: 123, name: "Ổi", price: 30 },
    { id: 123, name: "Chuối", price: 30 },
    { id: 123, name: "Bưởi", price: 30 },
    { id: 123, name: "Cam", price: 30 },
    { id: 123, name: "Chanh", price: 30 },
  ]);
  return (
    <div>
      <ul>
          {product.map((product) => (
            <li key={product.id}>{product.name} {product.price} $</li> 
          ))}
      </ul>
    </div>
  );
}

export default ProductList;
