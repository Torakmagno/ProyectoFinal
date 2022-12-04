import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { Link } from "@reach/router";

const Producto = (props) => {

    let image = props.data.imagenId;
    let price = props.data.precio;
    let title = props.data.nombre;
    let description = props.data.descripcion;
    let brand = props.data.marca;
    let id = props.data.id;
    let quantity = props.data.cantidad;

    props = { image, price, title, id, description, brand };

    const { addItem } = useCart();

    const addToCart = () => {
        addItem(props);

    }

    return (
        <Card style={{ width: '17rem', height: '690px' }}>
            <Card.Img variant="top" style={{ height: '275px' }} src={image} />
            <Card.Body>
                <Card.Title class="h2 text-center">{title}</Card.Title>
                <br></br>
                <Card.Subtitle className="mb-2 text-muted text-center">Precio: {price} ‎€</Card.Subtitle>
                <Card.Text class="text-center h5" >{description}</Card.Text>
                <Card.Text class="text-center fst-italic"> Bote de :  {quantity} </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="danger" className="pull-left" href={"/producto/" + id}> Ver más </Button>
                <Button variant="primary" className="pull-right" onClick={() => addToCart()}><i className="fa fa-shopping-cart" /> Add </Button>
            </Card.Footer>
        </Card>
    )
};
export default Producto;