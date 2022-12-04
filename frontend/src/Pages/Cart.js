import React from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

const Cart = () => {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    const createOrder = (data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        description: "VapeoVZ",
                        amount: {
                            currency_code: "USD",
                            value: cartTotal,
                        },
                    },
                ],
                // not needed if a shipping address is actually needed
                application_context: {
                    shipping_preference: "NO_SHIPPING",
                },
            })
            .then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };
    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    return (
        <PayPalScriptProvider
            options={{
                "client-id": "test",
            }}
        >
            <Container className="py-4 mt-5">
                <h1 className={`my-5 text-center`}>
                    {isEmpty ? "El carrito esta vacio" : "Carrito"}
                </h1>
                <Row className="justify-content-center">
                    <Table
                        responsive="sm"
                        striped
                        bordered
                        hover
                        variant={"light"}
                        className="mb-5"
                    >
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <div
                                                style={{
                                                    background: "white",
                                                    height: "8rem",
                                                    overflow: "hidden",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <div style={{ padding: ".5rem" }}>
                                                    <img
                                                        src={item.image}
                                                        style={{ width: "4rem" }}
                                                        alt={item.title}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6
                                                style={{
                                                    whiteSpace: "nowrap",
                                                    width: "14rem",
                                                    overflow: "hidden",
                                                    textOverFlow: "ellipsis",
                                                }}
                                            >
                                                {item.title}
                                            </h6>
                                        </td>
                                        <td>Precio por unidad : {item.price} ‎€</td>
                                        <td>Cantidad: {item.quantity}</td>
                                        <td>
                                            <Button
                                                onClick={() =>
                                                    updateItemQuantity(item.id, item.quantity - 1)
                                                }
                                                className="ms-2"
                                            >
                                                -
                                            </Button>
                                            <Button
                                                onClick={() =>
                                                    updateItemQuantity(item.id, item.quantity + 1)
                                                }
                                                className="ms-2"
                                            >
                                                +
                                            </Button>
                                            <Button
                                                variant="danger"
                                                onClick={() => removeItem(item.id)}
                                                className="ms-2"
                                            >
                                                Eliminar elemento
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    {!isEmpty && (
                        <Row
                            style={{ position: "fixed", bottom: 0 }}
                            className={`justify-content-center w-100`}
                        >
                            <Col className="py-2">
                                <h4>
                                    Precio total:{" "}
                                    <span class="fst-italic h2 text-success">{cartTotal}‎€</span>
                                </h4>
                            </Col>
                            <Col className="p-0" md={4}>
                                <Button
                                    variant="danger"
                                    className="m-2"
                                    onClick={() => emptyCart()}
                                >
                                    <BsCartX size="1.7rem" />
                                    Limpiar carrito
                                </Button>
                                <PayPalButtons
                                    style={{ layout: "horizontal" }}
                                    createOrder={createOrder}
                                    onApprove={onApprove}
                                />
                            </Col>
                        </Row>
                    )}
                </Row>
            </Container>
        </PayPalScriptProvider>
    );
};

export default Cart;
