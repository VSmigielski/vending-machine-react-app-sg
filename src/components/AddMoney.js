import React, { Component } from 'react'
import { Form, Col, Row, Button, Container } from 'react-bootstrap'

class AddMoney extends Component {

    render() {
        return (
            <Container id="totalContainer">
                <Form>
                    <div>
                    <h2>Total $ In</h2>
                    <Form.Group>
                        <Form.Control type="text" placeholder="" name="currentMoney" readOnly />
                    </Form.Group>
                    </div>
                    <Row text-center>
                        <Col sm={6}>
                            <Button btn btn-info type="button" id="addDollarButton">
                                Add Dollar
                            </Button>
                        </Col>
                        <Col sm={6}>
                            <Button btn btn-info type="button" id="addQuarterButton">
                                Add Quarter
                            </Button>
                        </Col>
                    </Row>
                    <br />
                    <Row text-center>
                        <Col sm={6}>
                            <Button btn btn-info type="button" id="addDimeButton">
                                Add Dime
                            </Button>
                        </Col>
                        <Col sm={6}>
                            <Button btn btn-info type="button" id="addNickelButton">
                                Add Nickel
                            </Button>
                        </Col>
                    </Row>
                    <br />
                </Form>
            <hr />
        </Container>
        );
    }
}

export default AddMoney;