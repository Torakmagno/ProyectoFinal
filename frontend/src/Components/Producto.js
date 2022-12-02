import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { UserProvider, UserConsumer } from "../Context/CarritoContext";


const Producto = ({ id, nombre, marca, descripcion, cantidad, precio, imagenId }) => {

	const carrito = useContext(UserConsumer);
    
    return(        
        <Card style={{ width: '17rem' , height: '690px'}}>
            <Card.Img variant="top" style={{ height: '275px' }} src={imagenId} />
            <Card.Body>
                <Card.Title class="h2 text-center">{nombre}</Card.Title>
                <br></br>
                <Card.Subtitle className="mb-2 text-muted text-center">Precio: {precio} ‎€</Card.Subtitle>
                <Card.Text class="text-center h5" >{descripcion}</Card.Text>
                <Card.Text class="text-center fst-italic"> Bote de :  {cantidad} </Card.Text>
                <Button variant="danger" className="pull-left align-bottom" href={"/producto/" + id}> Ver más </Button>
                <Button variant="primary" className="pull-right align-bottom" onClick={() => carrito.addProduct({ id, nombre, marca, descripcion, cantidad, precio })}><i className="fa fa-shopping-cart" /> Add </Button>
            </Card.Body>
        </Card>
        )
};



export default Producto;