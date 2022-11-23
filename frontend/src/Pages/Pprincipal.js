import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';
import Badge from 'react-bootstrap/Badge';

const PPrincipal = () => {
  return (
    <div class="container">
      <Carousel className="mt-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.submarinevape.com/blog/wp-content/uploads/2018/10/2018-10-15-08.18.39-2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Pod, Mod o Desechable</h2>
            <h3 class="text-danger">Hay diferentes tipos de vapers según el gusto de cada uno.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0205/5553/0304/articles/vapear-con-o-sin-nicotina.jpg?v=1626954077"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2>Grandes nubes de vapor</h2>
            <h3 class="text-warning">Si eres ex fumador seguramente quieras probar a generar grandes nubes de vapor.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://elixirconcentrados.cl/wp-content/uploads/2022/06/WhatsApp-Image-2018-10-01-at-12.27.51-1.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>Crea tu propio sabor!</h2>
            <h3 class="text-muted">
              Sabías que puedes crear tus liquidos en total seguridad?
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card className="text-center mt-4">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>

      <h2 class="mt-4 text-center">
        Los mas vendidos
      </h2>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <Card className="bg-dark text-white mt-4 p-3">
          <Card.Title>Suscribete a nuestro newsletter</Card.Title>
          <Card.Text>
            <Form>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
            </Form>
          </Card.Text>
      </Card>
    </div>
  );
};

export default PPrincipal;
