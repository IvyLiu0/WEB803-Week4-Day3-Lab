import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CartItems } from "./products";
import { NavBar } from "./Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: "normal",
      items: CartItems,
    };
  }

  handleIncrease = (item) => {
    const updateValue = item.value++;
    this.setState({ updateValue });
  };

  handleDecrease = (item) => {
    if (item.value > 0) {
      const updateValue = item.value--;
      this.setState({ updateValue });
    }
  };

  sortprice = (items, sortType) => {
    items.sort((a, b) => {
      switch (sortType) {
        case "normal":
          return a.id - b.id;
        case "lowest":
          return a.price - b.price;
        case "highest":
          return b.price - a.price;
        default:
          return a.id - b.id;
      }
    });
    this.setState({ sortType });
  };

  render() {
    return (
      <div>
        <NavBar
          itemList={this.state.items}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          sortprice={this.sortprice}
        />
      </div>
    );
  }
}

export default App;
