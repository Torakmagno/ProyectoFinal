import React, { Fragment, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Formulario = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        window.location.replace();
    };
    const handleShow = () => setShow(true);

    return (
        <Container className="d-flex justify-content-center">
            <Card
                style={{ width: "500px", height: "770px" }}
                className="mt-5 d-flex align-items-center"
            >
                <h1 class="mt-3 text-center">Formulario de contacto</h1>
                <>
                    <img
                        class="my-3 img-contacto"
                        src="https://images.squarespace-cdn.com/content/53528f90e4b0768cad09d33b/1421840020171-36GV12ST44GI4A5VVNTC/blog_Jose_Email-deliverability.jpg?content-type=image%2Fjpeg"
                    />
                    <div class="d-flex flex-column align-items-center text-center">
                        <form>
                            <div className="">
                                <label for="nombre">Nombre</label>
                                <input type="text" className="form-control" name="nombre" />
                            </div>
                            <div className="">
                                <label class="" for="apellido">
                                    Apellidos
                                </label>
                                <input type="text" className="form-control" name="apellido" />
                            </div>
                            <div className="">
                                <label class="" for="mail">
                                    Email
                                </label>
                                <input type="text" className="form-control" name="email" />
                            </div>
                            <div className="">
                                <label class="" for="coment">
                                    Comentario
                                </label>
                                <textarea className="form-control" name="comentario" />
                            </div>
                            <Button variant="primary" className="mt-4" onClick={handleShow}>
                                Enviar
                            </Button>
                        </form>
                    </div>
                </>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contacto</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tu solicitud fue enviada correctamente!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Formulario;
