import React from "react";
import { Form, Container, Button, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChangeReturn() {
    
    return (
        <Container id="changeContainer">
            <Form>
                <div>
                    <h2>Change</h2>
                    <Form.Group>
                        <Form.Control as="textarea" rows={2} type="text" 
                        readOnly id="changeInputBox"/>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Button type="button"
                            id="returnChangeButton"
                            className="btn btn-info">
                            Change Return
                            </Button>
                        </Row>
                    </Form.Group>
                </div> 
            </Form>
        </Container>
    );
}