import React, { useState } from 'react'
import { Form, Col, Row, Button, Container } from 'react-bootstrap'

export default function AddMoney() {
    const [money, setMoney] = useState(0)

    function addDollar() {
        setMoney(prevMoney => roundToTwo(prevMoney + 1))
      }

      function addQuarter() {
        setMoney(prevMoney => roundToTwo(prevMoney + .25))
      }

      function addDime() {
        setMoney(prevMoney => roundToTwo(prevMoney + .10))
      }

      function addNickel() {
        setMoney(prevMoney => roundToTwo(prevMoney + .05))
      }

      function roundToTwo(num) {    
        return +(Math.round(num + "e+2")  + "e-2");
    }

        return (
            <Container id="totalContainer">
                <Form>
                    <div>
                    <h2>Total $ In</h2>
                    <Form.Group>
                        <Form.Control className="text-center" type="text" placeholder="" name="currentMoney" value={money.toFixed(2)} readOnly />
                    </Form.Group>
                    </div>
                    <Row text-center>
                        <Col sm={6}>
                            <Button className="btn btn-info" type="button" id="addDollarButton" 
                                onClick={addDollar}>
                                Add Dollar
                            </Button>
                        </Col>
                        <Col sm={6}>
                            <Button className="btn btn-info" type="button" id="addQuarterButton"
                                onClick={addQuarter}>
                                Add Quarter
                            </Button>
                        </Col>
                    </Row>
                    <br />
                    <Row text-center>
                        <Col sm={6}>
                            <Button className="btn btn-info" type="button" id="addDimeButton"
                                onClick={addDime}>
                                Add Dime
                            </Button>
                        </Col>
                        <Col sm={6}>
                            <Button className="btn btn-info" type="button" id="addNickelButton"
                                onClick={addNickel}>
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