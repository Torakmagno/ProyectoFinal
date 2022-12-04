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
                            Sabías que puedes crear tus liquidos con total seguridad?
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Card className="text-center mt-4">
                <Card.Header class="fst-italic h1 text-warning">Historia del Vapeo</Card.Header>
                <Card.Body>
                    <Card.Title>Lo que tienes que saber...</Card.Title>
                    <Card.Text>
                        El vaporizador es, sin lugar a duda, uno de los productos más revolucionarios del siglo XXI debido a su carácter innovador, tanto en el ámbito científico como en el social.
                        Los orígenes de los vaporizadores se remontan a 1963, cuando el inventor H.Gilbert presentó la primera alternativa al cigarrillo. Se trataba de un dispositivo que no incluía nicotina y servía para dejar de fumar. Sin embargo, era una época en la que el consumo de tabaco estaba muy extendido. Esa fue, precisamente, la razón que provocó que la idea de Gilbert no llegara a materializarse: presentaba su invento como más saludable que el tabaco, cuando el propio tabaco no era considerado entonces malo para la salud.
                        No fue hasta el año 2001 cuando Hon Lik, un farmacéutico que perdió a su padre debido a un cáncer de pulmón, empezó a trabajar en un nuevo dispositivo que permitiría a los fumadores disfrutar de la misma sensación sin la necesidad de inhalar las sustancias químicas ni cancerígenas que desprenden los cigarrillos. Además, incorporó diferentes cantidades de nicotina en los líquidos para que fuera el propio usuario el que pudiera consumirla en varias medidas hasta abandonarla por completo. Este producto tuvo una total aceptación en el mercado chino y poco a poco se fue extendiendo por todo el mundo.
                        El primer dispositivo moderno fue presentado por primera vez en 2004 a través de la compañía farmacéutica china Ruyan. Un año después, la empresa comenzó a exportar vaporizadores fuera de China y los primeros sistemas de vapor electrónicos llegaron a Europa y Estado Unidos.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card className="text-center mt-4">
                <Card.Header class="fst-italic h1 text-warning">La gran duda</Card.Header>
                <Card.Body>
                    <Card.Title>¿Es seguro Vapear?</Card.Title>
                    <Card.Text>
                        Lo que todo ente de salud puede afirmar con seguridad es lo siguiente :
                        Los cigarrillos electrónicos son "un 95% menos dañinos que el tabaco".
                        En un "futuro cercano" los e-cigarrillos podrían ser recetados para ayudar a la gente a dejar de fumar y como alternativa a los parches de nicotina.
                        Los cigarrillos electrónicos son "un 95 % menos dañinos que el tabaco tradicional", según un estudio publicado por la Public Health England (PHE), una agencia del Servicio de Salud británico (NHS).
                        El organismo, que afirma que en un "futuro cercano" el NHS podría recetar los e-cigarrillos para ayudar a la gente a dejar de fumar y que estos podrían ser utilizados como alternativa a los parches de nicotina, considera que "vapear", la acción de aspirar y despedir el vapor de este producto, es "menos malo" que fumar tabaco.
                        La principal autora del informe, Ann McNeill, de la Universidad King 's College de Londres, y sus colaboradores, creen que el uso de estos vaporizadores electrónicos supondrá "una revolución" para la salud pública.
                        "A día de hoy, 80.000 personas mueren en Inglaterra cada año como consecuencia del tabaco. Si todos los fumadores cambiaran a los e-cigarrillos reduciremos a 4.000 el número de muertes. Esa es nuestra estimación actual, pero la cifra podría ser mucho más baja todavía", dijo McNeill.
                        "Yo animaría a la gente interesada en los cigarrillos electrónicos a que lo intentara", señaló la autora, que instó a los profesionales de la salud a recomendar los vaporizadores a las personas que deseen dejar de fumar.
                        Según las estimaciones, alrededor de 2,6 millones de británicos utilizan los cigarrillos electrónicos en el Reino Unido.
                        El informe de la PHE asegura que aunque los médicos de cabecera todavía no pueden recetar los "e-cigs", ya que estos productos no cuentan con licencia para fines médicos, esperan "superar este obstáculo en el futuro".
                        "El PHE ve con mucho optimismo la llegada al mercado de diferentes productos con fines médicos que puedan ser recetados a los fumadores por la NHS", expresaron los autores.
                        "Este estudio aportará seguridad, calidad y eficacia a los consumidores que quieran dejar de fumar activamente", subrayó el informe.
                    </Card.Text>
                </Card.Body>
            </Card>

            <h1 class="mt-4 text-center text-danger text-uppercase fst-italic">
                Los más vendidos
            </h1>

            <CardGroup>
                <Card>
                    <Card.Img variant="top rounded" src="https://upload.vapeo24.com/producto/md/don-juan-reserve-100ml-kings-crest.png" />
                    <Card.Body>
                        <Card.Title>El que nunca cansa!</Card.Title>
                        <Card.Text>
                            Don Juan Reserva by Bombo.{" "}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Ultima actualización : hace 3 minutos.</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top rounded" src="https://www.esmokingspain.es/images/rasputin-daruma-eliquids-aroma-10ml.jpg" />
                    <Card.Body>
                        <Card.Title>Tienes que tenerlo!</Card.Title>
                        <Card.Text>
                            Rasputin by Daruma liquids.{" "}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Ultima actualización : hace 3 minutos.</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top rounded" src="https://justvape.nu/wp-content/uploads/2021/09/Nitro%C2%B4s-Cold-Brew-shake-and-vape-salted-karamell.jpg" />
                    <Card.Body>
                        <Card.Title>No resistirás!</Card.Title>
                        <Card.Text>
                            Salted Carmel by Nitro's Col Brew.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Ultima actualización : hace 3 minutos.</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

            <Card className="bg-dark text-white mt-4 p-3">
                <Card.Title>Suscribete a nuestra newsletter</Card.Title>
                <Card.Text>
                    <Form>
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form>
                </Card.Text>
            </Card>
        </div>
    );
};

export default PPrincipal;
