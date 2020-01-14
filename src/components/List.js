import React, { Component } from "react";
import { Consumer } from "../context";

class List extends Component {
  state = {
    showInfo: false
  };

  deleteItem = (id, dispatch) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };
  render() {
    const { id, title, messageBody } = this.props.list;
    const { showInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3 container">
              <h2>
                {title}
                <i
                  className="fas fa-sort-down text-info"
                  onClick={() =>
                    this.setState({ showInfo: !this.state.showInfo })
                  }
                ></i>
                <i
                  className="fas fa-times text-danger float-right"
                  onClick={this.deleteItem.bind(this, id, dispatch)}
                ></i>
              </h2>
              {showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    <h5>{messageBody}</h5>
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default List;
