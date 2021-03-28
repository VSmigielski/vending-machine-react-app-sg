import AddMoney from './components/AddMoney'
import ChangeReturn from './components/ChangeReturn'
import PurchaseCenter from './components/PurchaseCenter'
import Card from './components/Card'
import './App.css';
import { Row, Col, Container } from 'react-bootstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SERVICE_URL = "https://tsg-vending.herokuapp.com";
const POST_URL = "https://tsg-vending.herokuapp.com/money/' + amount + '/item/' + id";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleClick = this.handleClick.bind(this);
  }



  state = {
    loading: false,
    itemData: [
      {
        "id": 1, 
        "name": "Snickers", 
        "price": 1.5, 
        "quantity": 10 
      }],
      value: [{
        "id": ''
      }]
  }

  handleClick = (event) => {
    console.log(event.currentTarget.items.value);
    this.setState({ value: event.target.value });
  }

  // purchaseItem = (event) => {
  //   let id = event.target.value;
  //   let total = parseFloat(this.state.money);
  //   fetch(POST_URL+{total}+'/item/'+id, {
  //     method: 'POST'
  //   })
  //   .then(data => {
  //     if (data.ok) {
  //       data.json().then(data => {
  //         this.setState({ money: parseFloat(parseFloat(data.quarters)*0.25 + parseFloat(data.dimes)*0.1 + parseFloat(data.nickels*0.05 + parseFloat(data.pennies)*0.01).toFixed(2))});
  //       })
  //       }
  //       else {
  //         Promise.resolve(data.json()).then((value) => {
  //           this.setState({ message: value.message});
  //         });
  //     }
  //   })
  // }

  // selectItem = (event) => {
  //   console.log(event.target.value);
  //   // let id = event.target.value;
  //   // this.setState({ messageId: event.target.value, message: "" })
  // }


  loadItemData() {
    this.setState({ loading: true })
    console.log("Loading item data")
    fetch(SERVICE_URL + "/items")
      .then(data => data.json())
      .then(data => this.setState(
        { itemData: data, loading: false }
      ))
  }

  componentDidMount() {
    console.log("App is now mounted.")
    this.loadItemData();
  }

  render() {

  return (
    <div className="App">
      <Container>
        <br />
        <h1 className="text-center">Vending Machine Application</h1>
        <hr />
      <Row>
        <Col sm={12}>
            <ul className="list-group" id="errorMessages"></ul>
        </Col>
        <Col sm={9}>
        <Card items={this.state.itemData} value={this.state.value} 
        handleClick={this.handleClick}/>
        </Col>
        <Col sm={3}>
          <AddMoney />
          <PurchaseCenter value={this.state.value} />
          <ChangeReturn />
        </Col>
      </Row>
    </Container>
    </div>
  );
  }
}

export default App;