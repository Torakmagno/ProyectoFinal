import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
	
	const { id } = useParams();
	const [productInfo, setProductInfo] = useState(null);
	
	
	useState(() => {
		axios.get("http://localhost:8080/api/liquido/" + id)
			.then(response => {
				setProductInfo(response.data);
			});
	}, []);
	
	if(productInfo != null) {
	
	return (
        <div className="bg-container mt-3 p-3 rounded align-content-center">
            <img src={productInfo.imagenId}></img>
            <div className="row">
                <div className="col-sm-12">
                    <h1>{productInfo.nombre}</h1>
                    <hr />
                </div>
            </div>
            <div class="mt-2 pr-3 content">
                <h4>{productInfo.marca}</h4>
            </div>
            <div class="mt-2 pr-3 content">
                <p>{productInfo.descripcion}</p>
            </div>
            <div class="mt-2 pr-3 content">
                <p>{productInfo.cantidad}</p>
            </div>
            <h4>Precio: {productInfo.precio}€</h4>
            <div class="buttons d-flex flex-row mt-5 gap-3">
                <button class="btn btn-danger">Add</button>
            </div>
        </div>

    );
	} else {
		return <h1>Cargando...</h1>
	}
}

export default ProductInfo;