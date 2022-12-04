import React from "react";
import Card from "react-bootstrap/Card";


const Faqs = () => {
    return (
        <><div class="container">
            <Card className="text-center mt-4">
                <Card.Header class="fst-italic h1 text-warning">¿Qué es vapear?</Card.Header>
                <Card.Body>

                    <Card.Text>
                        Utilizar el cigarrillo electrónico se conoce actualmente como vapear y proviene del término inglés vaping, que lo definen como “el proceso por el cual se inhala vapor de un vaporizador personal o e-cig”.

                        Los usuarios del cigarrillo electrónico denominamos los cigarrillos normales como cigarrillos análogos y los electrónicos como cigarrillos digitales o cigarrillos electrónicos.
                    </Card.Text>
                </Card.Body>
            </Card><br></br><Card className="text-center mt-4">
                <Card.Header class="fst-italic h1 text-warning">¿Qué es un cigarrillo electrónico, ECIG O VAPE?</Card.Header>
                <Card.Body>

                    <Card.Text>
                        El cigarrillo electrónico, también llamado vaporizador, vapeador o vape, es un sistema electrónico inhalador diseñado en su origen para simular y sustituir el consumo de nicotina tradicional (cigarrillo de tabaco), pero también es usado por personas que no fuman o no tienen una ingesta de nicotina.

                        Estos dispositivos utilizan una resistencia y batería para calentar y vaporizar una solución líquida. La solución líquida, llamada líquido de vapeo, eLiquid o eJuice, puede o no contener nicotina, esto a elección del usuario.

                        Los beneficios sobre el uso de los cigarrillos electrónicos es que son una alternativa al cigarrillo tradicional con un impacto 95% menor a la salud, o como terapia de reemplazo de nicotina para dejar de fumar.

                    </Card.Text>
                </Card.Body>
            </Card><br></br><Card className="text-center mt-4">
                <Card.Header class="fst-italic h1 text-warning">¿Qué contiene el líquido del vape o cigarrillo electrónico? - Ejuice o eliquid</Card.Header>
                <Card.Body>

                    <Card.Text>

                        Los E-liquids o líquidos para vaporizador, están compuestos de glicerina vegetal, aroma alimenticio, propilenglicol y nicotina (opcional).

                        Se encuentran habitualmente con una gran variedad de formulaciones, con distintos tipos de sabores (frutales, mentas, cremas o postres, tabacos) y diferentes concentraciones de nicotina.

                        Es de destacar que la nicotina es solo una de las aproximadamente 4000 sustancias presentes en el cigarrillo tradicional, la que se considera responsable en mayor medida de la adicción al tabaco y se utiliza del mismo modo que se proporciona en otras terapias de deshabituación, aunque mediante un sistema que imita de una manera más natural el inhalar y exhalar vapor simulando el acto de fumar.

                        Al poder escoger la concentración de nicotina en los líquidos, el cigarrillo electrónico permite disminuir paulatinamente el consumo de esta, reduciendo el síndrome de abstinencia.

                    </Card.Text>
                </Card.Body></Card><br></br><Card className="text-center mt-4">
                <Card.Header class="fst-italic h1 text-warning">¿Vapear es más barato que fumar?</Card.Header>
                <Card.Body>

                    <Card.Text>

                        Sin duda alguna, una persona que fuma un paquete de tabaco al día, gasta aproximadamente unos 150€ mensuales, en el vapeo, una vez compras tu kit de inicio (entre 20€ y 50€) el gasto en líquido y resistencias (consumibles) es de unos 40€ al mes, por lo que sin duda es mucho más rentable.

                    </Card.Text>
                </Card.Body></Card>
        </div></>
    )
};
export default Faqs;