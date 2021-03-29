import React, { Component } from "react";
import { Form, Container, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Begin class component
export default class ChangeReturn extends Component {
  // Renders for the class component
  render() {
    // Passes/Declares props to drop "this.props" within the html
    let { change, handleReturnChange } = this.props;

    // Returns the html for the Change Form
    return (
      <Container id="changeContainer">
        <Form>
          <div>
            <h2>Change</h2>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={2}
                type="text"
                readOnly
                id="changeInputBox"
                value={change}
              />
            </Form.Group>
            <Form.Group>
              <Row>
                <Button
                  type="button"
                  id="returnChangeButton"
                  className="btn btn-info"
                  onClick={handleReturnChange}>
                  Change Return
                </Button>
              </Row>
            </Form.Group>
          </div>
        </Form>
      </Container>
    );
  }
}
