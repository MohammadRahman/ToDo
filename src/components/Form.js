import React, { Component } from "react";
import uuid from "uuid";
import { Consumer } from "../context";

class Form extends Component {
  state = {
    title: "",
    messageBody: "",
    errors: {}
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { title, messageBody, errors } = this.state;

    const newTodo = {
      id: uuid(),
      title,
      messageBody
    };
    if (title === "") {
      this.setState({ errors: { title: "Title is Required" } });
      return;
    }
    if (messageBody === "") {
      this.setState({
        errors: { messageBody: "Message Body can not be empty" }
      });
      return;
    }

    dispatch({ type: "ADD_ITEM", payload: newTodo });
  };
  render() {
    const { title, messageBody, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card container mt-3">
              <div className="card-header">
                <h3 className="text-center lead">Add New</h3>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      className="form-control"
                      type="text"
                      name="title"
                      value={title}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="messageBody">Message Body</label>
                    <textarea
                      className="form-control"
                      name="messageBody"
                      placeholder="Type your message"
                      value={messageBody}
                      onChange={this.onChange}
                    >
                      Message Body
                    </textarea>
                  </div>
                  <div className="form-group">
                    <input
                      className="btn btn-success btn-block"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Form;
