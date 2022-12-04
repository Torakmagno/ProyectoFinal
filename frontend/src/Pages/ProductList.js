import Producto from "../Components/Producto";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductListPage = () => {
  const [liquidos, setLiquidos] = useState([]);
  const [search, setSearch] = useState("");

  const url = "http://127.0.0.1:8080/api/liquidos";

  const showLiquidos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setLiquidos(data);
  };

  const searchLiquidos = (e) => {
    setSearch(e.target.value);
  }

  let result = []
  if (!search) {
    result = liquidos
  } else {
    result = liquidos.filter(liquido => liquido.nombre && liquido.descripcion.toLowerCase().includes(search.toLowerCase()))
  }

  useEffect(() => {
    showLiquidos();
  }, []);

  if (!liquidos) return null;

  return (
    <div className="container">
      <div className="bg-container mt-3 p-3 rounded">
        <div className="row">
          <div className="col-sm-8">
            <h2 className="float-left">Catálogo de Productos</h2>
          </div>
          <div className="col-sm-4">
            <span>¿Qué estas buscando?</span>
            <form className="form">
              <input
                className="form-control"
                type="search"
                placeholder="Buscar"
                value={search}
                onChange={searchLiquidos}
              />
            </form>
          </div>
        </div>
        <hr />
        <div className="row">
          {result.map((producto, i) => {
            return (
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <Producto data={producto} key={i} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;