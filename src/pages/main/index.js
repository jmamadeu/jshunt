import React, { Component } from "react";

import data from "../../data";
import "./styles.css";

export default class Main extends Component {
  //Working at state
  state = {
    users: [],
    user: ""
  };

  handleChange = e => {
    this.setState({ user: e.target.value });

    const filter = data.filter(user =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    this.setState({ users: filter });
  };

  //First Render of page
  componentDidMount() {
    const data = this.loadUsers();

    this.setState({
      users: data
    });
  }

  //Functon for load Users
  loadUsers = () => {
    return data;
  };

  render() {
    const { users } = this.state;

    return (
      <div id="container">
        <div className="product-list">
          <input
            value={this.state.user}
            type="search"
            placeholder="Search your username"
            onChange={this.handleChange}
          />
          {users.map(user => (
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
