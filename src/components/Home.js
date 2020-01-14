import React, { Component } from "react";
import Header from "./Header";
import Lists from "./Lists";

class Home extends Component {
  render() {
    return (
      <div className="container mt-4">
        <Header headerTitle="Daily Activities"></Header>
        <Lists></Lists>
      </div>
    );
  }
}
export default Home;
