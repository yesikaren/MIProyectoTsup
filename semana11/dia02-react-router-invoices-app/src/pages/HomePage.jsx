import React, { useEffect, useState } from "react";
const getProductos = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data;
};

const HomePage = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((res) => {
      console.log(res.products)
      setProductos(res.products)});
  }, []);
  return (
    <>
      <h1 className="font-bold">productos</h1>
      <div>
        {productos.map((producto) => (
          <h3 key={producto.id}>{producto.title}</h3>
        ))}
      </div>
    </>
  );
};

export default HomePage;
