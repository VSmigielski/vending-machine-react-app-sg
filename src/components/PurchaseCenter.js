import React from "react";
import { Form, Container, Button, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PurchaseCenter() {
    
    return (
        <Container id="purchaseContainer">
            <Form>
                <div>
                    <h2>Messages</h2>
                    <Form.Group>
                        <Form.Control as="textarea" rows={2} readOnly />
                    </Form.Group>
                    <Form.Group id="itemDiv">
                        <Form.Label>
                            Item:&nbsp;&nbsp;
                        </Form.Label>
                        <Form.Control as="input" readOnly />
                    </Form.Group>
                    <br />
                    <Form.Group className="row">
                        <Button className="btn btn-info" type="button" id="purchaseButton">
                            Make Purchase
                        </Button>
                    </Form.Group>
                    </div>
            </Form>
            <hr />
        </Container>
    );
}