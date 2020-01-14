import React, { Component } from "react";
import List from "./List";
import { Consumer } from "../context";
import Header from "./Header";

class Lists extends Component {
  render() {
    return (
      // <Header></Header>
      <Consumer>
        {value => {
          const { lists } = value;
          return (
            <div>
              {lists.map(list => (
                <List key={list.id} list={list}></List>
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Lists;
