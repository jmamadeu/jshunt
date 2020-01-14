import React, { Component } from "react";

import "./styles.css";

export default class ListUsers extends Component {
  handleChange = e => {
    this.setState({
      user: e.target.value
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      user: "",
      users: []
    };

    console.log("Const", this.props.data);
  }

  componentDidMount() {
    this.setState({
      users: this.props.data
    });

    console.log("CDM", this.props.data);
  }

  render() {
    console.log("Render", this.props.data);

    return (
      <div id="container">
        <div className="product-list">
          <input
            value={this.state.user}
            type="search"
            placeholder="Search your username"
            onChange={this.handleChange}
          />
          {this.state.users.map(user => (
            <article key={user.id}>
              <strong> {user.name} </strong>
              <p>Age: {user.age} </p>
            </article>
          ))}
        </div>
      </div>
    );
  }
}
