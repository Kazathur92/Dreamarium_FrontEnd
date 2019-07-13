import React, { Component } from 'react';



export default class Login extends Component {

  state = {

  }

  componentDidMount () {

  }

  render() {
    return(
      <div className="appItself">
        <nav>
          <p>User Name: </p> <input type="text"></input>
          <p>Password: </p> <input type="text"></input>
        </nav>
      </div>
    )
  }

}