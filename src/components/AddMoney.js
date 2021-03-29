import React, { Component } from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";

// Begin class component
export default class AddMoney extends Component {
  // const [money, setMoney] = useState(0)

  // function addDollar() {
  //     setMoney(prevMoney => roundToTwo(prevMoney + 1))
  //   }

  //   function addQuarter() {
  //     setMoney(prevMoney => roundToTwo(prevMoney + .25))
  //   }

  //   function addDime() {
  //     setMoney(prevMoney => roundToTwo(prevMoney + .10))
  //   }

  //   function addNickel() {
  //     setMoney(prevMoney => roundToTwo(prevMoney + .05))
  //   }

  //   function roundToTwo(num) {
  //     return +(Math.round(num + "e+2")  + "e-2");
  // }

  // Render for class component
  render() {
    // Pass/Declare props to drop "this.props" within the html
    let { money, handleAddMoney, roundToTwo } = this.props;

    // Return the html for the AddMoney form
    return (
      <Container id="totalContainer">
        <Form>
          <div>
            <h2>Total $ In</h2>
            <Form.Group>
              <Form.Control
                text-center="true"
                type="text"
                placeholder=""
                name="currentMoney"
                value={roundToTwo(money).toFixed(2)}
                readOnly
                id="currMoney"
              />
            </Form.Group>
          </div>
          <Row text-center="true">
            <Col sm={6}>
              <Button
                value={1.0}
                className="btn btn-info"
                type="button"
                id="addDollarButton"
                onClick={handleAddMoney}
              >
                Add Dollar
              </Button>
            </Col>
            <Col sm={6}>
              <Button
                value={0.25}
                className="btn btn-info"
                type="button"
                id="addQuarterButton"
                onClick={handleAddMoney}
              >
                Add Quarter
              </Button>
            </Col>
          </Row>
          <br />
          <Row text-center="true">
            <Col sm={6}>
              <Button
                value={0.1}
                className="btn btn-info"
                type="button"
                id="addDimeButton"
                onClick={handleAddMoney}
              >
                Add Dime
              </Button>
            </Col>
            <Col sm={6}>
              <Button
                value={0.05}
                className="btn btn-info"
                type="button"
                id="addNickelButton"
                onClick={handleAddMoney}
              >
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
