import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import { useParams } from "react-router-dom";

const ProductInfo = (props) => {
    const [productData, setProductData] = useState([]);
    const { addItem } = useCart();

    const params = useParams();

    useEffect(() => {
        getResponse();
    }, []);

    const getResponse = async () => {
        const res = await fetch('http://localhost:8080/api/liquido/' + params.productId)
            .then((res) => res.json());
        setProductData(res);
    }

    let image = productData.imagenId;
    let price = productData.precio;
    let title = productData.nombre;
    let description = productData.descripcion;
    let brand = productData.marca;
    let id = productData.id;

    let producto = { image, price, title, id, description, brand };

    return (
        <Container className="py-5">
            <Row className="justify-content-center mt-5">
                <Col xs={10} md={7} lg={5} className="p-0">
                    <img src={image} alt="product" className="img-fluid" />
                </Col>
                <Col xs={10} md={7} lg={7} className={`text-black product-details`}>
                    <h1>{title}</h1>
                    <br />
                    <b className={'text-light-primary h4 mt-3 d-block'}>
                        {price}€
                    </b>
                    <br />
                    <p className="h5" style={{ opacity: '0.8', fontWeight: '400' }}>
                        {description}
                    </p>
                    <Button
                        onClick={() => addItem(producto)}
                        className={'mt-2 text-light bg-light-primary'}
                        style={{ borderRadius: '0', border: 0 }}
                    >
                        <BsCartPlus size="1.8rem" />
                        Add to cart
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductInfo;