import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Begin class component
export default class PurchaseCenter extends Component {
  render() {
    // Pass these props so we can drop the "this.props" inside the html
    let { itemId, handlePurchase, message } = this.props;

    // Return the html for the purchase form
    return (
      <Container id="purchaseContainer">
        <Form onSubmit={handlePurchase}>
          <div>
            <h2>Messages</h2>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={2}
                readOnly
                value={message}
                id="vendingMessage"
              />
            </Form.Group>
            <Form.Group id="itemDiv">
              <Form.Label>Item:&nbsp;&nbsp;</Form.Label>
              <Form.Control
                as="input"
                id="vendingItem"
                readOnly
                value={itemId}
              />
            </Form.Group>
            <br />
            <Form.Group className="row">
              <Button
                className="btn btn-info"
                type="submit"
                id="purchaseButton"
              >
                Make Purchase
              </Button>
            </Form.Group>
          </div>
        </Form>
        <hr />
      </Container>
    );
  }
}
