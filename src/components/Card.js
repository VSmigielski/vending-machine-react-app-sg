import React, { Component } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

// Create a constant to accept props directly
// Deconstructed props
const ItemCardRow = ({ items, sel }) => {
  // Declare variable to allow use of ToFixed(2)
  // Use a button for the click to retrieve value of items.id
  let num = items.price;
  return (
    <Col sm={4}>
      <Card bordered="true" responsive="true" id="item-cards">
        <Card.Body>
          <Button
            style={{
              color: "black",
              backgroundColor: "white",
              border: "none",
              width: "100%",
            }}
            value={items.id}
            onClick={sel}
          >
            <p
              className="font-weight-bold text-left"
              style={{ pointerEvents: "none" }}
            >
              {items.id}
            </p>
            <p
              text-center="true"
              className="font-weight-bold"
              style={{ pointerEvents: "none" }}
            >
              {items.name}
            </p>
            <p
              text-center="true"
              className="font-weight-bold"
              style={{ pointerEvents: "none" }}
            >
              {num.toFixed(2)}
            </p>
            <p
              text-center="true"
              className="font-weight-bold"
              style={{ pointerEvents: "none" }}
            >
              Quantity: {items.quantity}
            </p>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

// Begin class of CardItem
export default class CardItem extends Component {
  // Default/fake data
  static defaultProps = {
    items: [
      {
        id: 1,
        name: "Snickers",
        price: 1.5,
        quantity: 10,
      },
      {
        id: 42,
        name: "M&M's",
        price: 1.25,
        quantity: 8,
      },
      {
        id: 33,
        name: "Almond Joy",
        price: 1.25,
        quantity: 11,
      },
      {
        id: 74,
        name: "Milky Way",
        price: 1.65,
        quantity: 3,
      },
      {
        id: 5,
        name: "Payday",
        price: 1.75,
        quantity: 2,
      },
      {
        id: 16,
        name: "Reese's",
        price: 1.5,
        quantity: 5,
      },
      {
        id: 87,
        name: "Pringles",
        price: 2.35,
        quantity: 4,
      },
      {
        id: 82,
        name: "Cheez-Its",
        price: 2,
        quantity: 6,
      },
      {
        id: 9,
        name: "Doritos",
        price: 1.95,
        quantity: 7,
      },
    ],
  };

  // Render for class component
  render() {
    console.log("Rendering Cards: ");
    console.log(this.props.items);

    // Return the html for the map of items using props to send function and items
    return (
      <div>
        <Row>
          {this.props.items.map((items, i) => {
            return (
              <ItemCardRow items={items} key={i} sel={this.props.handleClick} />
            );
          })}
        </Row>
      </div>
    );
  }
}
