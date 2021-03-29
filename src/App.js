import AddMoney from "./components/AddMoney";
import ChangeReturn from "./components/ChangeReturn";
import PurchaseCenter from "./components/PurchaseCenter";
import Card from "./components/Card";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Create constant for API URL
const SERVICE_URL = "https://tsg-vending.herokuapp.com";

// Create class style component
class App extends Component {
  // Set up a constructor to be able to create a "functional" class component
  constructor(props) {
    super(props);

    // Setup the initial states
    this.state = {
      loading: false,
      itemId: "",
      money: this.roundToTwo((0.0).toFixed(2)),
      message: "",
      change: "",
      itemData: [
        {
          id: 1,
          name: "Snickers",
          price: 1.5,
          quantity: 10,
        },
      ],
    };

    // Bind the clicks to properly pass
    this.handleClick = this.handleClick.bind(this);
    this.handleAddMoney = this.handleAddMoney.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.handleReturnChange = this.handleReturnChange.bind(this);
  }

  // The money addition function for all 4 buttons
  handleAddMoney = (event) => {
    let inputValue = Number.parseFloat(event.target.value);
    console.log(inputValue);
    let moneyAmount = Number.parseFloat(this.state.money);
    console.log(`Updating amount: ${inputValue} : ${moneyAmount}`);
    moneyAmount += inputValue;
    this.roundToTwo(moneyAmount);
    this.setState({ money: moneyAmount });
  };

  // This function allows rounding to 2 decimal places
  roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }

  // This is to select the item id from the dynamically loaded cards
  handleClick(event) {
    console.log(event.target.value);
    let id = event.target.value;
    this.setState({ itemId: id });
  }

  // This handles the purchase event, posting and retrieving data from JSON
  handlePurchase = (event) => {
    // This is used to be able to read the states passed
    if (event) event.preventDefault();
    // To make sure there isn't an error for rounding
    let amount = this.roundToTwo(this.state.money);
    let id = this.state.itemId;
    fetch(SERVICE_URL + "/money/" + amount + "/item/" + id, {
      method: "POST",
    }).then((data) => {
      if (data.ok) {
        data.json().then((data) => {
          console.log("Purchase successful", data);
          this.setState({
            itemId: "",
            money: (0.0).toFixed(2),
            message: "Thank you!!",
            change: this.formatChange(
              data.quarters,
              data.dimes,
              data.nickels,
              data.pennies
            ),
          });
        });
        // This re-loads the cards
        this.loadItemData();
        // This gives a response to the user when the error is 422
      } else {
        Promise.resolve(data.json()).then((value) => {
          this.setState({ message: value.message });
        });
      }
    });
  };

  // This handles the return of change when no purchase is made
  handleReturnChange() {
    let amount = Number.parseFloat(this.state.money);
    var quarters = parseInt((100 * amount) / 25).toFixed(0);
    var remainder = ((100 * amount) % 25).toFixed(0);
    var dimes = 0,
      nickels = 0,
      pennies = 0;

    if (remainder !== 0) {
      dimes = parseInt(remainder / 10).toFixed(0);
      remainder = (remainder % 10).toFixed(0);
    }

    if (remainder !== 0) {
      nickels = parseInt(remainder / 5).toFixed(0);
      pennies = (remainder % 5).toFixed(0);
    }

    let returnMessage = this.formatChange(quarters, dimes, nickels, pennies);
    let change = this.state.change;
    change = returnMessage;
    amount = 0.0;
    let id = this.state.itemId;
    id = "";
    let message = this.state.message;
    message = "";
    // Updates the states to reflect changes
    this.setState({
      change: change,
      money: amount,
      itemId: id,
      message: message,
    });
  }

  // This is a function to format the returned change
  formatChange(quarters, dimes, nickels, pennies) {
    let change = "";
    if (quarters >= 1) {
      change += quarters + " quarter";
      if (quarters > 1) {
        change += "s";
      }
      if (pennies > 0 || nickels > 0 || dimes > 0) {
        change += ", ";
      }
    }
    if (dimes >= 1) {
      change += dimes + " dime";
      if (dimes > 1) {
        change += "s";
      }
      if (pennies > 0 || nickels > 0) {
        change += ", ";
      }
    }
    if (nickels >= 1) {
      change += nickels + " nickel";
      if (nickels > 1) {
        change += "s";
      }
      if (pennies > 0) {
        change += ", ";
      }
    }
    if (pennies >= 1) {
      change += pennies + " penn";
      if (pennies > 1) {
        change += "ies";
      } else {
        change += "y";
      }
    }
    return change;
  }

  // loads item data through fetch
  loadItemData() {
    this.setState({ loading: true });
    console.log("Loading item data");
    fetch(SERVICE_URL + "/items")
      .then((data) => data.json())
      .then((data) => this.setState({ itemData: data, loading: false }));
  }

  // Instantiates the network request/uses the above method to load the data into our component
  componentDidMount() {
    console.log("App is now mounted.");
    this.loadItemData();
  }

  // Renders for class component
  render() {
    // This is the returned items within the html using components and passing props throughout the children
    return (
      <div className="App">
        <Container>
          <br />
          <h1 text-center="true">Vending Machine Application</h1>
          <hr />
          <Row>
            <Col sm={12}>
              <ul className="list-group" id="errorMessages"></ul>
            </Col>
            <Col sm={9}>
              <Card
                items={this.state.itemData}
                handleClick={this.handleClick}
              />
            </Col>
            <Col sm={3}>
              <AddMoney
                money={this.state.money}
                roundToTwo={this.roundToTwo}
                handleAddMoney={this.handleAddMoney}
              />
              <PurchaseCenter
                itemId={this.state.itemId}
                handlePurchase={this.handlePurchase}
                message={this.state.message}
              />
              <ChangeReturn
                handleReturnChange={this.handleReturnChange}
                change={this.state.change}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
