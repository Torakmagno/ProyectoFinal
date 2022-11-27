import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { UserProvider, UserConsumer } from "../Context/CarritoContext";


const Producto = ({ id, nombre, marca, descripcion, cantidad, precio, imagenId }) => {

	const carrito = useContext(UserConsumer);
    
    return(
        <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" style={{ height: '275px' }} src={imagenId} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>c
                <Card.Subtitle className="mb-2 text-muted">Precio: {precio} ‎€</Card.Subtitle>
                <Card.Text> {descripcion} </Card.Text>
                <Card.Text> {cantidad} </Card.Text>
                <Button variant="danger" className="pull-left" href={"/producto/" + id}> Ver más </Button>
                <Button variant="primary" className="pull-right" onClick={() => carrito.addProduct({ id, nombre, marca, descripcion, cantidad, precio })}><i className="fa fa-shopping-cart" /> Add </Button>
            </Card.Body>
        </Card>
        )
};
export default Producto;