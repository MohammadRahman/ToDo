import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_ITEM":
      return {
        ...state,
        lists: state.lists.filter(list => list.id !== action.payload)
      };
    case "ADD_ITEM":
      return {
        ...state,
        lists: [action.payload, ...state.lists]
      };
    default: {
      return state;
    }
  }
};

export default class Provider extends Component {
  state = {
    lists: [
      {
        id: 1,
        title: "Meeting",
        messageBody: "Meeting with Lucine at 16:00"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
